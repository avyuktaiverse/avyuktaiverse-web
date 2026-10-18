import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArrowRight, Sparkles } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { withLocale } from "@/lib/i18n/paths";

interface CtaBannerProps {
  lang: Locale;
  t: Dictionary;
  /** Override the default home-page copy (e.g. per-page CTA). */
  title?: string;
  subtitle?: string;
  label?: string;
  href?: string;
}

export function CtaBanner({ lang, t, title, subtitle, label, href = ROUTES.contact }: CtaBannerProps) {
  const c = t.home.cta;
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(204,255,0,0.08) 0%, transparent 70%)" }} />

      <div className="hero-shape w-[500px] h-[500px]"
        style={{ background: "#1B3A4B", opacity: 0.55, bottom: "-200px", right: "-150px", animation: "float-slow 10s ease-in-out infinite" }} />
      <div className="hero-shape w-[280px] h-[280px]"
        style={{ background: "#7EA5FF", opacity: 0.12, top: "-80px", left: "30%", animation: "float 8s ease-in-out infinite" }} />

      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

      <Container className="relative z-10">
        <div className="max-w-2xl reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(204,255,0,0.06)", border: "1px solid rgba(204,255,0,0.30)" }}>
            <Sparkles size={14} style={{ color: "#CCFF00" }} />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: "#CCFF00" }}>{c.ready}</span>
          </div>

          <h2 className="font-serif font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
            {title ?? c.title}
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">{subtitle ?? c.subtitle}</p>
          <Link href={withLocale(lang, href)}
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sans font-semibold">
            <span className="relative z-10 inline-flex items-center gap-2">
              {label ?? c.label} <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
