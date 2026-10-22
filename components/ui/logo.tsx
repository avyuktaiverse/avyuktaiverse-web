import Link from "next/link";
import { AplMark } from "@/components/ui/apl-mark";
import { COMPANY } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

/** "Private Limited" — derived from the legal name so the lock-up never drifts from COMPANY. */
const LEGAL_SUFFIX = COMPANY.legalName.replace(COMPANY.name, "").trim();

/**
 * Site logo lock-up: the APL orbit mark plus the spelled-out brand
 * (AvyuktAIverse® / Private Limited) so the abbreviation is never ambiguous.
 * The accessible name stays the registered brand via aria-label on the link.
 *
 * `wordmark` controls when the text shows: "md" (default) hides it below the
 * md breakpoint for tight headers; "always" keeps it visible at every width.
 */
export function Logo({
  lang,
  ariaLabel,
  className,
  wordmark = "md",
}: {
  lang: Locale;
  ariaLabel: string;
  className?: string;
  wordmark?: "md" | "always";
}) {
  const wordmarkDisplay = wordmark === "always" ? "flex" : "hidden md:flex";

  return (
    <Link
      href={withLocale(lang, "/")}
      className={`inline-flex items-center group transition-opacity duration-300 hover:opacity-90 ${className ?? ""}`}
      aria-label={ariaLabel}
      title={`APL — ${COMPANY.legalName}`}
    >
      <AplMark className="h-7 w-auto transition-transform duration-300 group-hover:scale-[1.03]" />
      <span className={`${wordmarkDisplay} flex-col leading-none ml-2.5 pl-2.5 border-l border-white/[0.14]`}>
        <span className="font-serif font-semibold text-white text-[14px] tracking-tight whitespace-nowrap">
          {COMPANY.name}
        </span>
        <span className="mt-[3px] font-sans text-[8px] font-semibold uppercase tracking-[0.22em] text-white/40 whitespace-nowrap">
          {LEGAL_SUFFIX}
        </span>
      </span>
    </Link>
  );
}
