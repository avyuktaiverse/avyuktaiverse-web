import { NotFoundContent, type NotFoundCopy } from "@/components/i18n/not-found-content";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default function NotFound() {
  const copy = Object.fromEntries(
    locales.map((lang) => {
      const t = getDictionary(lang);
      return [lang, { ...t.notFound, back: t.common.backToHome } satisfies NotFoundCopy];
    })
  ) as Record<Locale, NotFoundCopy>;

  return <NotFoundContent copy={copy} />;
}
