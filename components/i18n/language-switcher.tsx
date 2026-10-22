"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LOCALE_COOKIE, localeNames, locales, type Locale } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/paths";

interface LanguageSwitcherProps {
  current: Locale;
  ariaLabel: string;
  className?: string;
  /** Larger hit targets for the mobile menu. */
  size?: "sm" | "lg";
  onNavigate?: () => void;
}

const SHORT: Record<Locale, string> = { en: "EN", ja: "日本語" };

function rememberLocale(locale: Locale) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    /* cookies disabled — the URL prefix still carries the locale */
  }
}

export function LanguageSwitcher({
  current,
  ariaLabel,
  className,
  size = "sm",
  onNavigate,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 font-sans",
        className
      )}
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? "true" : undefined}
            aria-label={localeNames[locale]}
            onClick={() => {
              rememberLocale(locale);
              onNavigate?.();
            }}
            className={cn(
              "rounded-full font-semibold tracking-wide transition-colors duration-200",
              size === "lg" ? "px-4 py-2 text-sm" : "px-2 sm:px-2.5 py-1 text-[11px]",
              active
                ? "bg-accent/15 text-accent"
                : "text-white/45 hover:text-white"
            )}
          >
            {SHORT[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
