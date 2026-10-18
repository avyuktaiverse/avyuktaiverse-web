"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/lib/i18n/config";
import { localeFromPathname, withLocale } from "@/lib/i18n/paths";

export interface NotFoundCopy {
  code: string;
  title: string;
  body: string;
  back: string;
}

/**
 * not-found.tsx gets no route params and must stay static, so the locale is
 * read from the URL on the client. Both languages' copy is passed in (tiny).
 */
export function NotFoundContent({ copy }: { copy: Record<Locale, NotFoundCopy> }) {
  const lang = localeFromPathname(usePathname() || "/");
  const t = copy[lang];

  return (
    <section className="relative overflow-hidden flex-1 flex items-center py-32"
      style={{ background: "var(--gradient-hero)" }}>
      <div className="hero-shape w-[300px] h-[300px]"
        style={{ background: "#1B3A4B", opacity: 0.18, top: "-80px", right: "-60px", animation: "float 8s ease-in-out infinite" }} />
      <Container narrow className="relative z-10">
        <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-4" style={{ color: "#CCFF00" }}>{t.code}</p>
        <h1 className="text-4xl font-serif font-bold text-white mb-4">{t.title}</h1>
        <p className="text-white/45 leading-relaxed mb-8">{t.body}</p>
        <Link href={withLocale(lang, "/")} className="btn-gradient inline-flex items-center px-6 py-3 rounded-xl font-sans font-semibold text-sm">
          <span className="relative z-10">{t.back}</span>
        </Link>
      </Container>
    </section>
  );
}
