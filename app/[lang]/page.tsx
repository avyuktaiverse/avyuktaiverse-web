import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ProblemStatement } from "@/components/home/problem-statement";
import { WhatWeDo } from "@/components/home/what-we-do";
import { Differentiators } from "@/components/home/differentiators";
import { CtaBanner } from "@/components/home/cta-banner";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { resolveLang, type LangParams } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  const lang = await resolveLang(props);
  const t = getDictionary(lang);
  return {
    ...pageMetadata(lang, "/", { title: t.meta.siteTitle, description: t.meta.siteDescription }),
    title: { absolute: t.meta.siteTitle },
  };
}

export default async function HomePage(props: LangParams) {
  const lang = await resolveLang(props);
  const t = getDictionary(lang);
  return (
    <>
      <Hero lang={lang} t={t} />
      <ProblemStatement t={t} />
      <WhatWeDo lang={lang} t={t} />
      <Differentiators t={t} />
      <CtaBanner lang={lang} t={t} />
    </>
  );
}
