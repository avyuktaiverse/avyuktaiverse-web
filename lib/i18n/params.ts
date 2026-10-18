import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/lib/i18n/config";

export type LangParams = { params: Promise<{ lang: string }> };

/** Resolve and validate the `[lang]` segment; 404 for unsupported values. */
export async function resolveLang({ params }: LangParams): Promise<Locale> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return lang;
}
