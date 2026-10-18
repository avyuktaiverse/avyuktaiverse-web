import { defaultLocale, hasLocale, locales, type Locale } from "@/lib/i18n/config";

/**
 * Prefix an internal href with the locale: withLocale("ja", "/about") → "/ja/about".
 * External links, anchors and already-prefixed paths pass through unchanged.
 */
export function withLocale(lang: Locale, href: string): string {
  if (!href.startsWith("/")) return href; // mailto:, https:, #anchor
  const [first] = href.split("/").filter(Boolean);
  if (hasLocale(first)) return href;
  if (href === "/") return `/${lang}`;
  return `/${lang}${href}`;
}

/** Strip a leading locale segment: "/ja/about" → "/about", "/en" → "/". */
export function stripLocale(pathname: string): string {
  const parts = pathname.split("/");
  if (hasLocale(parts[1])) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "");
  }
  return pathname || "/";
}

/** Read the locale from a pathname, falling back to the default. */
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return hasLocale(first) ? first : defaultLocale;
}

/** Same page in another locale: switchLocalePath("/en/about", "ja") → "/ja/about". */
export function switchLocalePath(pathname: string, target: Locale): string {
  return withLocale(target, stripLocale(pathname));
}

/** Absolute paths for every locale of a given unprefixed path (for hreflang). */
export function alternatesFor(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of locales) map[l] = withLocale(l, path);
  map["x-default"] = withLocale(defaultLocale, path);
  return map;
}
