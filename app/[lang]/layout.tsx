import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { COMPANY } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/seo";
import { defaultLocale, hasLocale, localeTags, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { alternatesFor, withLocale } from "@/lib/i18n/paths";

// Lumen type stack: editorial serif + geometric sans + tech mono
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Japanese companions. `preload: false` so the (large) glyph slices are only
// fetched when the CSS actually uses them, i.e. on /ja pages.
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: false,
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

function resolveLocale(lang: string): Locale {
  return hasLocale(lang) ? lang : defaultLocale;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = resolveLocale((await params).lang);
  const t = getDictionary(lang);
  const siteUrl = `https://${COMPANY.domain}`;

  return {
    title: {
      default: t.meta.siteTitle,
      template: `%s — ${COMPANY.name}`,
    },
    description: t.meta.siteDescription,
    metadataBase: new URL(siteUrl),
    applicationName: COMPANY.name,
    authors: [{ name: COMPANY.legalName, url: siteUrl }],
    creator: COMPANY.legalName,
    publisher: COMPANY.legalName,
    keywords: t.meta.keywords,
    alternates: {
      canonical: withLocale(lang, "/"),
      languages: alternatesFor("/"),
    },
    openGraph: {
      siteName: COMPANY.name,
      type: "website",
      locale: localeTags[lang].og,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeTags[l].og),
      url: withLocale(lang, "/"),
      title: t.meta.siteTitle,
      description: t.meta.siteDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.siteTitle,
      description: t.meta.siteDescription,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#030610",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const lang = resolveLocale((await params).lang);
  const t = getDictionary(lang);

  const fontVars = [
    fraunces.variable,
    geist.variable,
    geistMono.variable,
    // JP variables are attached only on Japanese pages so English visitors
    // never trigger the Noto font-face slices.
    lang === "ja" ? notoSansJP.variable : "",
    lang === "ja" ? notoSerifJP.variable : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <html
      lang={localeTags[lang].html}
      data-scroll-behavior="smooth"
      data-theme="dark"
      className={fontVars}
    >
      <body className="flex min-h-screen flex-col bg-[var(--surface-0)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[var(--lime-400)] focus:px-4 focus:py-2 focus:text-[var(--surface-0)] focus:shadow-lg"
        >
          {t.common.skipToContent}
        </a>
        <script
          type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(lang)) }}
        />
        <ScrollReveal />
        <ScrollProgress />
        <GrainOverlay />
        <Header lang={lang} t={t} />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
