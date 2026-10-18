import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { TechTicker } from "@/components/ui/tech-ticker";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { withLocale } from "@/lib/i18n/paths";

// Visual + link config per offering; copy comes from the dictionary in the same order.
const offeringMeta = [
  { number: "01", badgeVariant: "default" as const, href: "/capabilities#talent-extension", accent: "#CCFF00" },
  { number: "02", badgeVariant: "amber" as const, href: "/capabilities#coaching", accent: "#f59e0b" },
];

export function WhatWeDo({ lang, t }: { lang: Locale; t: Dictionary }) {
  const w = t.home.whatWeDo;
  return (
    <section className="relative py-20 lg:py-28" style={{ background: "var(--gradient-hero)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <SectionHeading
          eyebrow={w.eyebrow}
          title={w.title}
          subtitle={w.subtitle}
          dark gradient
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {w.offerings.map((item, i) => {
            const meta = offeringMeta[i] ?? offeringMeta[0];
            return (
              <div key={item.title} className="gradient-border-card reveal"
                style={{
                  transitionDelay: `${i * 0.12}s`,
                  "--glow-color": `${meta.accent}40`,
                } as React.CSSProperties}>
                <div className="gradient-border-card-inner p-8 flex flex-col gap-5">
                  <div className="flex items-start justify-between">
                    <Badge variant={meta.badgeVariant}>{item.badge}</Badge>
                    <span className="font-serif text-5xl font-bold text-white/[0.05] leading-none select-none">{meta.number}</span>
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-white leading-snug">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed flex-1 text-[15px]">{item.description}</p>
                  <Link href={withLocale(lang, meta.href)}
                    className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-accent hover:text-white transition-colors group">
                    {t.common.learnMore} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech stack ticker */}
        <div className="mt-16 reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-white/20 mb-4 text-center">{w.techLandscape}</p>
          <TechTicker />
        </div>
      </Container>
    </section>
  );
}
