import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ADVISOR, COMPANY, FOUNDER } from "@/lib/constants";
import { Lightbulb, Rocket, Shield, Clock } from "lucide-react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { resolveLang, type LangParams } from "@/lib/i18n/params";
import { advisorJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  const lang = await resolveLang(props);
  return pageMetadata(lang, "/about", getDictionary(lang).about.meta);
}

const heroGrad = "var(--gradient-hero)";
const darkGrad = "var(--gradient-dark)";

// Icon + colour per value; copy comes from the dictionary in the same order.
const valueMeta = [
  { Icon: Lightbulb, color: "#CCFF00", bg: "rgba(204,255,0,0.08)", borderColor: "rgba(204,255,0,0.2)" },
  { Icon: Rocket, color: "#f59e0b", bg: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.15)" },
  { Icon: Shield, color: "#34d399", bg: "rgba(52,211,153,0.08)", borderColor: "rgba(52,211,153,0.15)" },
  { Icon: Clock, color: "#7EA5FF", bg: "rgba(126,165,255,0.08)", borderColor: "rgba(126,165,255,0.2)" },
];

const highlightDots = ["bg-[#CCFF00]", "bg-emerald-400", "bg-[#7EA5FF]", "bg-amber-400"];

/** Per-person accent so the two leadership cards read as a pair, not a duplicate. */
const personAccent = {
  founder: { color: "#CCFF00", ring: "rgba(204,255,0,0.55)", glow: "0 0 48px rgba(204,255,0,0.22)", photo: "/team/sreedhara-gs.jpg" },
  advisor: { color: "#7EA5FF", ring: "rgba(126,165,255,0.6)", glow: "0 0 48px rgba(126,165,255,0.26)", photo: "/team/kuniaki-kudo.jpg" },
} as const;

export default async function AboutPage(props: LangParams) {
  const lang = await resolveLang(props);
  const t = getDictionary(lang);
  const a = t.about;

  const people = [
    {
      key: "advisor" as const,
      name: ADVISOR.name,
      role: t.advisor.role,
      ...a.leadership.advisor,
    },
    {
      key: "founder" as const,
      name: FOUNDER.name,
      role: t.founder.role,
      heading: a.leadership.heading,
      highlights: a.leadership.highlights,
      paragraphs: a.leadership.paragraphs,
      stats: a.leadership.stats,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(advisorJsonLd(lang)) }}
      />
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: heroGrad }}>
        <div className="hero-shape w-[380px] h-[380px]"
          style={{ background: "#7EA5FF", opacity: 0.08, top: "-80px", right: "-60px", animation: "float-slow 9s ease-in-out infinite" }} />
        <div className="hero-shape w-[260px] h-[260px]"
          style={{ background: "#1B3A4B", opacity: 0.07, bottom: "-60px", left: "30%", animation: "float 7s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Badge variant="pulse" className="mb-6">{a.badge}</Badge>
            <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
              {a.titleStart}<span className="gradient-text italic">{a.titleAccent}</span>{a.titleEnd}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">{a.lead}</p>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container narrow>
          <SectionHeading eyebrow={a.story.eyebrow} title={a.story.title} dark />
          <div className="space-y-5 text-white/55 leading-relaxed text-lg">
            {a.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <SectionHeading eyebrow={a.values.eyebrow} title={a.values.title} subtitle={a.values.subtitle} dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {a.values.items.map((value, i) => {
              const meta = valueMeta[i] ?? valueMeta[0];
              return (
                <div key={value.title} className="glass-card p-7 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="icon-container w-12 h-12 mb-5"
                    style={{ background: meta.bg, border: `1px solid ${meta.borderColor}` }}>
                    <meta.Icon size={22} style={{ color: meta.color }} />
                  </div>
                  <h3 className="font-sans font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/45 leading-relaxed text-[15px]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <SectionHeading eyebrow={a.leadership.eyebrow} title={a.leadership.title} dark />
          <div className="space-y-8">
            {people.map((person, idx) => {
              const accent = personAccent[person.key];
              return (
                <div key={person.key} className="gradient-border-card reveal hover:scale-[1.01] transition-transform duration-500"
                  style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="gradient-border-card-inner p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-10">
                      <div className="lg:w-1/3 flex-shrink-0">
                        <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full mb-6 p-[3px]"
                          style={{ background: `linear-gradient(135deg, ${accent.color}, ${accent.ring} 60%, transparent)`, boxShadow: accent.glow }}>
                          <Image
                            src={accent.photo}
                            alt={`${person.name} — ${person.role}`}
                            width={320}
                            height={320}
                            sizes="(min-width: 1024px) 160px, 144px"
                            className="w-full h-full rounded-full object-cover object-top"
                            style={{ border: "3px solid #0B0B1A" }}
                            priority={idx === 0}
                          />
                        </div>
                        <h3 className="font-serif font-bold text-white text-2xl mb-1">{person.name}</h3>
                        <p className={`text-xs mb-6 font-semibold uppercase tracking-widest ${person.key === "founder" ? "gradient-text" : ""}`}
                          style={person.key === "founder" ? undefined : { color: accent.color }}>
                          {person.role}
                        </p>
                        <div className="flex flex-col gap-3 text-white/50 text-sm">
                          {person.highlights.map((item, i) => (
                            <p key={item} className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full opacity-80 ${highlightDots[i] ?? highlightDots[0]}`}></span>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-white/[0.05] pt-8 lg:pt-0 lg:pl-10">
                        <h4 className="text-white font-sans font-semibold text-lg mb-4">{person.heading}</h4>
                        <div className="space-y-4 text-white/60 leading-relaxed text-[15px]">
                          {person.paragraphs.map((p) => (
                            <p key={p.slice(0, 24)}>{p}</p>
                          ))}
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                          {person.stats.map((s) => (
                            <div key={s.label} className="p-5 rounded-xl glass-card transition-colors duration-300 hover:bg-white/[0.04]">
                              <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-fraunces)" }}>{s.value}</p>
                              <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">{s.label}</p>
                              {s.note ? <p className="text-[11px] text-white/25 mt-1">{s.note}</p> : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative py-16" style={{ background: heroGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container narrow>
          <p className="text-xs font-sans font-semibold uppercase tracking-widest mb-6" style={{ color: "#CCFF00" }}>{a.details.eyebrow}</p>
          <dl className="space-y-3 text-sm">
            {[
              [a.details.legalName, COMPANY.legalName],
              [a.details.country, a.details.countryValue],
              [a.details.website, COMPANY.domain],
              [a.details.contact, COMPANY.email],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <dt className="w-28 text-white/25 flex-shrink-0">{label}</dt>
                <dd className="text-white/70 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
