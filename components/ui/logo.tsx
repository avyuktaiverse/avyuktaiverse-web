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
  /** "md": compact single-line wordmark on phones, full lock-up from sm up. "always": full lock-up everywhere. */
  wordmark?: "md" | "always";
}) {
  // "md" keeps the full two-line lock-up from sm up and a compact single-line
  // wordmark on phones; "always" shows the full lock-up everywhere.
  const compactOnPhone = wordmark !== "always";

  return (
    <Link
      href={withLocale(lang, "/")}
      className={`inline-flex items-center group transition-opacity duration-300 hover:opacity-90 ${className ?? ""}`}
      aria-label={ariaLabel}
      title={`APL — ${COMPANY.legalName}`}
    >
      <AplMark className="h-8 sm:h-7 w-auto transition-transform duration-300 group-hover:scale-[1.03]" />
      <span className={`flex flex-col leading-none border-l border-white/[0.14] ${compactOnPhone ? "ml-2 pl-2 sm:ml-2.5 sm:pl-2.5" : "ml-2.5 pl-2.5"}`}>
        <span className={`font-serif font-semibold text-white tracking-tight whitespace-nowrap ${compactOnPhone ? "text-[12px] sm:text-[14px]" : "text-[14px]"}`}>
          {COMPANY.name}
        </span>
        <span className={`mt-[3px] font-sans text-[8px] font-semibold uppercase tracking-[0.22em] text-white/40 whitespace-nowrap ${compactOnPhone ? "hidden sm:block" : ""}`}>
          {LEGAL_SUFFIX}
        </span>
      </span>
    </Link>
  );
}
