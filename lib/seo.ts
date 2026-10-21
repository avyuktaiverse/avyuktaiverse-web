import type { Metadata } from "next";
import { ADVISOR, COMPANY, FOUNDER } from "@/lib/constants";
import { localeTags, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { alternatesFor, withLocale } from "@/lib/i18n/paths";

/**
 * Organization JSON-LD — rendered in the root layout so crawlers
 * (Google, LLMs) can pick up structured company info.
 */
export function organizationJsonLd(lang: Locale) {
  const t = getDictionary(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `https://${COMPANY.domain}#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: `https://${COMPANY.domain}`,
    logo: `https://${COMPANY.domain}/favicon.ico`,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    description: t.company.description,
    slogan: t.company.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: FOUNDER.name,
      jobTitle: t.founder.role,
      description: t.founder.bio,
    },
    member: [
      {
        "@type": "Person",
        name: ADVISOR.name,
        jobTitle: t.advisor.role,
        description: t.advisor.bio,
      },
    ],
    sameAs: COMPANY.linkedin ? [COMPANY.linkedin] : [],
  } as const;
}

function personSchema(person: { name: string; role: string; bio: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    description: person.bio,
    worksFor: {
      "@type": "Organization",
      "@id": `https://${COMPANY.domain}#organization`,
      name: COMPANY.name,
    },
  } as const;
}

/**
 * Person JSON-LD for the founder — used on /about.
 */
export function personJsonLd(lang: Locale) {
  const t = getDictionary(lang);
  return personSchema({ name: FOUNDER.name, role: t.founder.role, bio: t.founder.bio });
}

/**
 * Person JSON-LD for the Chief Corporate Advisor — used on /about.
 */
export function advisorJsonLd(lang: Locale) {
  const t = getDictionary(lang);
  return personSchema({ name: ADVISOR.name, role: t.advisor.role, bio: t.advisor.bio });
}

/**
 * Compose a canonical absolute URL for a given path.
 */
export function canonical(path: string = "/"): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${COMPANY.domain}`;
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base.replace(/\/$/, "")}${suffix}`;
}

/**
 * Per-page metadata with canonical + hreflang alternates for both locales.
 * `path` is the unprefixed route ("/about").
 */
export function pageMetadata(
  lang: Locale,
  path: string,
  meta: { title: string; description: string }
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: withLocale(lang, path),
      languages: alternatesFor(path),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: withLocale(lang, path),
      locale: localeTags[lang].og,
    },
  };
}
