/**
 * AvyuktAIverse® — locale configuration.
 *
 * The site is served under a locale prefix: `/en/...` and `/ja/...`.
 * `proxy.ts` redirects unprefixed paths to the visitor's preferred locale.
 */
export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie that remembers an explicit language choice (set by the switcher). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
};

/** BCP 47 tags for <html lang>, hreflang and OpenGraph. */
export const localeTags: Record<Locale, { html: string; og: string }> = {
  en: { html: "en", og: "en_IN" },
  ja: { html: "ja", og: "ja_JP" },
};

export function hasLocale(value: string | undefined | null): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}
