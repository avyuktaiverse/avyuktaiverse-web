import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroClient } from "@/components/home/hero-client";
import { ROUTES } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { withLocale } from "@/lib/i18n/paths";

export function Hero({ lang, t }: { lang: Locale; t: Dictionary }) {
  const h = t.home.hero;
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
        paddingTop: "clamp(6rem, 12vh, 10rem)",
        paddingBottom: "clamp(5rem, 10vh, 8rem)",
      }}
    >
      {/* Floating atmospheric blobs — deep teal / steel / lime trace */}
      <div className="hero-shape w-[600px] h-[600px]"
        style={{ background: "#1B3A4B", opacity: 0.65, top: "-200px", right: "-150px", animation: "float 7s ease-in-out infinite" }} />
      <div className="hero-shape w-[400px] h-[400px]"
        style={{ background: "#7EA5FF", opacity: 0.22, bottom: "-100px", left: "-100px", animation: "float-slow 9s ease-in-out infinite" }} />
      <div className="hero-shape w-[340px] h-[340px]"
        style={{ background: "#CCFF00", opacity: 0.12, top: "45%", left: "60%", animation: "float-reverse 6s ease-in-out infinite" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

      {/* Particle field (client component) */}
      <HeroClient />

      <Container className="relative z-10">
        <div className="max-w-4xl">
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "60ms" }}>
              <Badge variant="pulse">
                <Sparkles size={12} className="mr-1.5" />
                {h.badge}
              </Badge>
            </div>

            <h1
              className="font-serif font-bold text-white mb-6 leading-[1.05] animate-fade-in-up"
              style={{
                fontSize: "var(--hero-h1-size, clamp(2.8rem, 8vw, 6rem))",
                animationDelay: "140ms",
              }}
            >
              {h.titleStart}
              <span className="gradient-text italic">{h.titleAccent}</span>
            </h1>

            <p
              className="text-lg lg:text-xl text-white/55 leading-relaxed max-w-2xl mb-10 animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              {h.lead}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-in-up"
              style={{ animationDelay: "340ms" }}
            >
              <Link
                href={withLocale(lang, ROUTES.capabilities)}
                className="btn-gradient inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-sans font-semibold"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {h.primaryCta}{" "}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href={withLocale(lang, ROUTES.contact)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.04] text-white border border-white/15 rounded-xl font-sans font-medium hover:bg-white/[0.08] hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.common.getInTouch}
              </Link>
            </div>

            {/* Stat strip — animated */}
            <div
              className="flex flex-col sm:flex-row gap-6 sm:gap-0 animate-fade-in-up"
              style={{ animationDelay: "460ms" }}
            >
              {h.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={i > 0 ? "sm:pl-8 sm:ml-8 sm:border-l sm:border-white/10" : ""}
                >
                  <p className="font-serif text-2xl font-bold text-white stat-glow">{stat.value}</p>
                  <p className="text-xs text-white/35 font-sans uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
        </div>
      </Container>
    </section>
  );
}
