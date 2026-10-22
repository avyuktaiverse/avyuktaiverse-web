import type { Metadata } from "next";
import Image from "next/image";
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
  return pageMetadata(lang, "/capabilities", getDictionary(lang).capabilities.meta);
}

const heroGrad = "var(--gradient-hero)";
const darkGrad = "var(--gradient-dark)";

const accentColors = ["#CCFF00", "#7EA5FF", "#34d399"];
const principleIconClass = ["text-amber-400", "text-emerald-400", "text-[#CCFF00]"];

export default async function CapabilitiesPage(props: LangParams) {
  const lang = await resolveLang(props);
  const t = getDictionary(lang);
  const c = t.capabilities;

  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-22" style={{ background: heroGrad }}>
        <div className="hero-shape w-[420px] h-[420px]"
          style={{ background: "#1B3A4B", opacity: 0.1, top: "-100px", right: "-80px", animation: "float 7s ease-in-out infinite" }} />
        <div className="hero-shape w-[260px] h-[260px]"
          style={{ background: "#7EA5FF", opacity: 0.06, bottom: "-60px", left: "20%", animation: "float-slow 9s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="pulse" className="mb-6">{c.badge}</Badge>
              <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}>
                {c.titleStart}<span className="gradient-text italic">{c.titleAccent}</span>{c.titleEnd}
              </h1>
              <p className="text-lg text-white/50 leading-relaxed max-w-lg">{c.lead}</p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl"
                  style={{ background: "radial-gradient(circle, rgba(204,255,0,0.10) 0%, transparent 70%)", transform: "scale(1.2)", filter: "blur(25px)" }} />
                <Image src="/section-bg.png" alt="" width={400} height={400} loading="eager" className="relative rounded-2xl" style={{ filter: "brightness(0.85) contrast(1.1)", opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering & Integration Section */}
      <section className="relative py-20 lg:py-28" id="engineering" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="max-w-3xl mb-12">
            <Badge variant="default" className="mb-6">{c.core.badge}</Badge>
            <SectionHeading title={c.core.title} subtitle={c.core.subtitle} dark />
            <div className="space-y-5 text-white/55 leading-relaxed">
              <p>{c.core.p1}</p>
              <p>{c.core.p2}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {c.core.items.map((item, i) => (
              <div key={item.label} className="glass-card p-6 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-8 h-1 rounded-full mb-5" style={{ background: accentColors[i] ?? accentColors[0] }} />
                <h4 className="font-sans font-semibold text-white mb-3 text-sm">{item.label}</h4>
                <p className="text-[14px] text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pillars / Philosophy Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden" id="philosophy" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <Badge variant="amber" className="mb-6">{c.principles.badge}</Badge>
              <h2 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-6 leading-tight">
                {c.principles.titleLine1} <br /><span className="gradient-text italic">{c.principles.titleLine2}</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8 text-lg">{c.principles.lead}</p>

              <div className="space-y-8">
                {c.principles.items.map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1"><CheckCircle2 size={20} className={`${principleIconClass[i] ?? principleIconClass[0]} opacity-80`} /></div>
                    <div>
                      <h4 className="text-white font-sans font-semibold mb-2">{item.title}</h4>
                      <p className="text-white/45 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal hidden lg:block" style={{ transitionDelay: "0.2s" }}>
              <div className="gradient-border-card">
                <div className="gradient-border-card-inner p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center relative shadow-[0_0_40px_rgba(204,255,0,0.22)]" style={{ background: "rgba(204,255,0,0.08)", border: "1px solid rgba(204,255,0,0.25)" }}>
                    <Image src="/ai-art.png" alt="" width={80} height={80} className="rounded-full opacity-80" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{c.principles.cardTitle}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{c.principles.cardBody}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Team / Professionalism Section */}
      <section className="relative py-20 lg:py-28 border-t border-white/[0.05]" id="team" style={{ background: darkGrad }}>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <Badge variant="muted" className="mb-6">{c.team.badge}</Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-6">
              {c.team.titleStart}<span className="gradient-text italic">{c.team.titleAccent}</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">{c.team.lead}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.team.items.map((item, i) => {
              const color = accentColors[i] ?? accentColors[0];
              return (
                <div key={item.label} className="glass-card p-8 reveal flex flex-col text-center items-center" style={{ transitionDelay: `${i * 0.15}s` }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ background: `rgba(255,255,255,0.03)`, border: `1px solid ${color}40` }}>
                    <div className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: color, color }} />
                  </div>
                  <h4 className="font-sans font-semibold text-white mb-3">{item.label}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner lang={lang} t={t} title={c.cta.title} subtitle={c.cta.subtitle} />
    </>
  );
}
