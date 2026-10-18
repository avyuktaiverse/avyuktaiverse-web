import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/home/cta-banner";
import { CheckCircle2 } from "lucide-react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { resolveLang, type LangParams } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  const lang = await resolveLang(props);
  return pageMetadata(lang, "/how-we-work", getDictionary(lang).howWeWork.meta);
}

const heroGrad = "var(--gradient-hero)";
const darkGrad = "var(--gradient-dark)";

// Number + colour per step; copy comes from the dictionary in the same order.
const stepMeta = [
  { number: "01", color: "#CCFF00", bg: "rgba(204,255,0,0.10)" },
  { number: "02", color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
  { number: "03", color: "#34d399", bg: "rgba(52,211,153,0.08)" },
  { number: "04", color: "#7EA5FF", bg: "rgba(126,165,255,0.10)" },
];

export default async function HowWeWorkPage(props: LangParams) {
  const lang = await resolveLang(props);
  const t = getDictionary(lang);
  const h = t.howWeWork;

  return (
    <>
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: heroGrad }}>
        <div className="hero-shape w-[400px] h-[400px]"
          style={{ background: "#1B3A4B", opacity: 0.1, top: "-80px", right: "-60px", animation: "float 8s ease-in-out infinite" }} />
        <div className="hero-shape w-[220px] h-[220px]"
          style={{ background: "#34d399", opacity: 0.05, bottom: "-50px", left: "25%", animation: "float-slow 7s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Badge variant="pulse" className="mb-6">{h.badge}</Badge>
            <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
              {h.titleStart}<span className="gradient-text italic">{h.titleAccent}</span>{h.titleEnd}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">{h.lead}</p>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <SectionHeading eyebrow={h.process.eyebrow} title={h.process.title} dark />

          {/* Timeline layout */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, rgba(204,255,0,0.40) 0%, rgba(126,165,255,0.20) 50%, rgba(74,222,128,0.10) 100%)" }} />

            <div className="flex flex-col gap-8">
              {h.process.steps.map((step, i) => {
                const meta = stepMeta[i] ?? stepMeta[0];
                return (
                  <div key={meta.number} className="flex gap-6 lg:gap-8 reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{ background: meta.bg, border: `1px solid ${meta.color}25` }}>
                        <span className="font-serif text-xl font-bold" style={{ color: meta.color }}>{meta.number}</span>
                      </div>
                    </div>
                    <div className="glass-card p-6 lg:p-8 flex-1">
                      <h3 className="font-sans font-semibold text-white text-lg mb-3">{step.title}</h3>
                      <p className="text-white/50 leading-relaxed text-[15px]">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-3xl">
            <SectionHeading eyebrow={h.expectations.eyebrow} title={h.expectations.title} dark />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {h.expectations.items.map((item, i) => (
                <div key={item} className="glass-card p-5 flex items-start gap-3 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#CCFF00", opacity: 0.6 }} />
                  <span className="text-white/55 leading-relaxed text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner lang={lang} t={t} title={h.cta.title} subtitle={h.cta.subtitle} />
    </>
  );
}
