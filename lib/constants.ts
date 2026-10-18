export const APP_VERSION = "v2.0.0";

/**
 * Locale-independent company facts. Anything a visitor reads in prose
 * (tagline, description, nav labels, founder bio) lives in lib/i18n/dictionaries.
 */
export const COMPANY = {
  name: "AvyuktAIverse®",
  legalName: "AvyuktAIverse® Private Limited",
  email: "contact@avyuktaiverse.com",
  supportEmail: "support@avyuktaiverse.com",
  domain: "avyuktaiverse.com",
  phone: "+91 9880-321-906",
  address: "34, 003, Mantri Residency, Bannerghatta Road, Kalena Agrahara, Bangalore South, Bengaluru, Karnataka – 560076",
  linkedin: "", // add once created
} as const;

/** Unprefixed route paths; prefix with withLocale(lang, href) when linking. */
export const ROUTES = {
  home: "/",
  capabilities: "/capabilities",
  howWeWork: "/how-we-work",
  about: "/about",
  insights: "/insights",
  contact: "/contact",
  privacy: "/privacy",
} as const;

export const FOUNDER = {
  name: "Sreedhara GS",
} as const;
