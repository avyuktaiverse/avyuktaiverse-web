import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";
import { fill, getDictionary } from "@/lib/i18n/get-dictionary";
import { resolveLang, type LangParams } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  const lang = await resolveLang(props);
  const m = getDictionary(lang).privacy.meta;
  return pageMetadata(lang, "/privacy", {
    title: m.title,
    description: fill(m.description, { legalName: COMPANY.legalName }),
  });
}

const heroGrad = "var(--gradient-hero)";
const darkGrad = "var(--gradient-dark)";

const h2Class = "text-2xl font-serif font-bold text-white";
const pClass = "text-white/50 leading-relaxed";
const ulClass = "list-disc pl-5 space-y-2 text-white/50 leading-relaxed marker:text-accent";

function TermList({ items }: { items: ReadonlyArray<{ term: string; text: string }> }) {
  return (
    <ul className={ulClass}>
      {items.map((item) => (
        <li key={item.term}><strong>{item.term}</strong>{item.text}</li>
      ))}
    </ul>
  );
}

export default async function PrivacyPage(props: LangParams) {
  const lang = await resolveLang(props);
  const p = getDictionary(lang).privacy;

  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-24" style={{ background: heroGrad }}>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="muted" className="mb-6">{p.badge}</Badge>
            <h1 className="font-serif font-bold text-white mb-5 text-4xl lg:text-5xl">{p.title}</h1>
            <p className="text-white/50 text-lg">{p.lastUpdated}</p>
          </div>
        </Container>
      </section>

      <section className="relative py-16 lg:py-24" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-3xl space-y-12">

            <div className="space-y-4">
              <h2 className={h2Class}>{p.intro.heading}</h2>
              <p className={pClass}>
                {p.intro.welcomeBefore}<strong>{COMPANY.legalName}</strong>{p.intro.welcomeAfter}
              </p>
              <p className={pClass}>{fill(p.intro.scope, { domain: COMPANY.domain })}</p>
            </div>

            <div className="space-y-4">
              <h2 className={h2Class}>{p.collect.heading}</h2>
              <p className={pClass}>
                {p.collect.p1Before}<strong>{p.collect.p1Strong}</strong>{p.collect.p1After}
              </p>
              <p className={pClass}>{p.collect.p2}</p>
              <TermList items={p.collect.items} />
              <p className={`${pClass} italic mt-4`}>{p.collect.note}</p>
            </div>

            <div className="space-y-4">
              <h2 className={h2Class}>{p.use.heading}</h2>
              <p className={pClass}>{p.use.p1}</p>
              <TermList items={p.use.items} />
              <p className={`${pClass} font-semibold mt-4`}>{p.use.note}</p>
            </div>

            <div className="space-y-4">
              <h2 className={h2Class}>{p.share.heading}</h2>
              <p className={pClass}>{p.share.p1}</p>
              <TermList items={p.share.items} />
            </div>

            <div className="space-y-4">
              <h2 className={h2Class}>{p.security.heading}</h2>
              <p className={pClass}>{p.security.p1}</p>
            </div>

            <div className="space-y-4">
              <h2 className={h2Class}>{p.rights.heading}</h2>
              <p className={pClass}>{p.rights.p1}</p>
            </div>

            <div className="space-y-4">
              <h2 className={h2Class}>{p.contactUs.heading}</h2>
              <p className={pClass}>{p.contactUs.p1}</p>
              <div className="glass-card p-6 mt-6 inline-block">
                <p className="text-white font-semibold mb-1">{COMPANY.legalName}</p>
                <p className="text-white/50 text-sm mb-4 leading-relaxed max-w-sm">{COMPANY.address}</p>
                <p className="text-white/50 text-sm"><strong>{p.contactUs.email}</strong> <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">{COMPANY.email}</a></p>
                <p className="text-white/50 text-sm"><strong>{p.contactUs.phone}</strong> {COMPANY.phone}</p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
