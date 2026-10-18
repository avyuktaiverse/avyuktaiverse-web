import Link from "next/link";
import { AplMark } from "@/components/ui/apl-mark";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/paths";

/**
 * Site logo: the APL orbit mark. The accessible name stays the registered
 * brand (AvyuktAIverse®) via aria-label on the link.
 */
export function Logo({
  lang,
  ariaLabel,
  className,
}: {
  lang: Locale;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <Link
      href={withLocale(lang, "/")}
      className={`inline-flex items-center group transition-opacity duration-300 hover:opacity-90 ${className ?? ""}`}
      aria-label={ariaLabel}
    >
      <AplMark className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03]" />
    </Link>
  );
}
