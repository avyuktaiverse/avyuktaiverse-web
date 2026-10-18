import { z } from "zod";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

/**
 * Contact form schema, localized.
 * Used by the server action (`app/[lang]/contact/action.ts`) to validate
 * submissions before hitting Resend. Length limits guard against
 * abuse and keep message payloads within Resend's body limits.
 */
export function contactFormSchema(lang: Locale) {
  const v = getDictionary(lang).contact.form.validation;
  return z.object({
    name: z.string().trim().min(2, v.nameMin).max(120, v.nameMax),
    email: z.string().trim().email(v.emailInvalid).max(200, v.emailMax),
    company: z
      .string()
      .trim()
      .max(160, v.companyMax)
      .optional()
      .transform((val) => val || ""),
    message: z.string().trim().min(20, v.messageMin).max(4000, v.messageMax),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof contactFormSchema>>;
