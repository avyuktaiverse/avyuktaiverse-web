/**
 * AvyuktAIverse® — Proxy (Next.js 16 file convention).
 *
 * 1. Locale routing: every page lives under `/en/...` or `/ja/...`.
 *    Unprefixed paths are redirected to the visitor's preferred locale
 *    (explicit cookie → Accept-Language → default).
 * 2. Attaches security headers to every response.
 *
 * Kept intentionally narrow — rewrites and redirects for routing belong here,
 * product logic does not. Verified against the local Next.js 16 docs.
 */
import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALE_COOKIE,
  defaultLocale,
  hasLocale,
  type Locale,
} from "@/lib/i18n/config";

const SECURITY_HEADERS: Array<[string, string]> = [
  ["X-Content-Type-Options", "nosniff"],
  ["X-Frame-Options", "DENY"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  [
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  ],
  [
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  ],
];

function applySecurityHeaders(response: NextResponse) {
  for (const [key, value] of SECURITY_HEADERS) response.headers.set(key, value);
  return response;
}

/** Pick a locale from the Accept-Language header (first supported match wins). */
function negotiateLocale(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      const weight = q ? parseFloat(q.split("=")[1]) : 1;
      return { tag: tag.toLowerCase(), weight: Number.isNaN(weight) ? 0 : weight, index };
    })
    .sort((a, b) => b.weight - a.weight || a.index - b.index);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (hasLocale(base)) return base;
  }
  return defaultLocale;
}

function preferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (hasLocale(cookie)) return cookie;
  return negotiateLocale(request.headers.get("accept-language"));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  // Already prefixed: pass through.
  if (hasLocale(first)) {
    return applySecurityHeaders(NextResponse.next());
  }

  // Unprefixed: redirect to the preferred locale, preserving path + query.
  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return applySecurityHeaders(NextResponse.redirect(url, 307));
}

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static assets.
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
