"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/[lang]/contact/action";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type ContactFormCopy = Dictionary["contact"]["form"];

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all duration-200";

const labelClass = "block text-xs font-sans font-semibold uppercase tracking-widest text-white/40 mb-2";

export function ContactForm({ lang, copy }: { lang: Locale; copy: ContactFormCopy }) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="glass-card p-10 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
          <CheckCircle2 size={24} style={{ color: "#34d399" }} />
        </div>
        <p className="font-sans font-semibold text-white mb-2">{copy.successTitle}</p>
        <p className="text-white/40 text-sm">{copy.successBody}</p>
      </div>
    );
  }

  const fieldError = (field: keyof NonNullable<ContactFormState["fieldErrors"]>) =>
    state.status === "error" ? state.fieldErrors?.[field] : undefined;

  return (
    <form action={formAction} className="space-y-5">
      {/* Locale for localized validation messages */}
      <input type="hidden" name="lang" value={lang} />
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            {copy.name} <span className="text-accent normal-case tracking-normal">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder={copy.namePlaceholder}
            aria-invalid={fieldError("name") ? true : undefined}
          />
          {fieldError("name") && <p className="mt-1.5 text-xs text-red-400">{fieldError("name")}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {copy.email} <span className="text-accent normal-case tracking-normal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder={copy.emailPlaceholder}
            aria-invalid={fieldError("email") ? true : undefined}
          />
          {fieldError("email") && <p className="mt-1.5 text-xs text-red-400">{fieldError("email")}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          {copy.company} <span className="text-white/20 normal-case tracking-normal font-normal">{copy.optional}</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={inputClass}
          placeholder={copy.companyPlaceholder}
          aria-invalid={fieldError("company") ? true : undefined}
        />
        {fieldError("company") && <p className="mt-1.5 text-xs text-red-400">{fieldError("company")}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {copy.message} <span className="text-accent normal-case tracking-normal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder={copy.messagePlaceholder}
          aria-invalid={fieldError("message") ? true : undefined}
        />
        {fieldError("message") && <p className="mt-1.5 text-xs text-red-400">{fieldError("message")}</p>}
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}

      <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
        <span className="relative z-10">{pending ? copy.sending : copy.send}</span>
      </Button>
    </form>
  );
}
