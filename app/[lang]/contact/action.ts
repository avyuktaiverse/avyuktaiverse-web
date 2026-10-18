"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation/contact";
import { COMPANY } from "@/lib/constants";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";
import { fill, getDictionary } from "@/lib/i18n/get-dictionary";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "contact@avyuktaiverse.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "AvyuktAIverse Website <onboarding@resend.dev>";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "company" | "message", string>>;
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Locale travels with the form so error copy matches the page the visitor is on.
  const rawLang = String(formData.get("lang") ?? "");
  const lang = hasLocale(rawLang) ? rawLang : defaultLocale;
  const t = getDictionary(lang).contact.form;

  // Honeypot: bots fill hidden fields. Return silent success to not reveal the trap.
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { status: "success" };
  }

  const parsed = contactFormSchema(lang).safeParse({
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    message: String(formData.get("message") ?? ""),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key as keyof typeof fieldErrors]) {
        fieldErrors[key as keyof typeof fieldErrors] = issue.message;
      }
    }
    return {
      status: "error",
      message: t.errorFix,
      fieldErrors,
    };
  }

  const { name, email, company, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    // In local dev without a key, log and pretend success so the UI is testable.
    console.warn(
      "[contact] RESEND_API_KEY missing — form submission logged only:",
      { lang, name, email, company, message }
    );
    return { status: "success" };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    // Internal notification stays in English; the visitor's language is noted
    // so the reply can be written in the right one.
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` at ${company}` : ""} — ${COMPANY.name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        `Language: ${lang}`,
        ``,
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return { status: "success" };
  } catch (err) {
    console.error("[contact] Resend send failed:", err);
    return {
      status: "error",
      message: fill(t.errorGeneric, { email: TO_EMAIL }),
    };
  }
}
