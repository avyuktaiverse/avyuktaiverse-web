import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import { locales } from "@/lib/i18n/config";
import { alternatesFor, withLocale } from "@/lib/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${COMPANY.domain}`;
  const pages = ["/", "/capabilities", "/how-we-work", "/about", "/contact", "/insights", "/privacy"];
  const lastModified = new Date();

  return pages.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(alternatesFor(path)).map(([tag, href]) => [tag, `${base}${href}`])
    );
    return locales.map((lang) => ({
      url: `${base}${withLocale(lang, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/privacy" ? 0.3 : 0.8,
      alternates: { languages },
    }));
  });
}
