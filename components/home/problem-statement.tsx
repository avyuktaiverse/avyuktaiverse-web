import { Container } from "@/components/layout/container";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export function ProblemStatement({ t }: { t: Dictionary }) {
  const p = t.home.problem;
  return (
    <section className="relative py-20 lg:py-28" style={{ background: "var(--gradient-dark)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container narrow>
        <p className="text-xs font-sans font-semibold uppercase tracking-widest mb-8 reveal" style={{ color: "#CCFF00" }}>
          {p.eyebrow}
        </p>

        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          <blockquote className="relative pl-8 mb-8" style={{ borderLeft: "2px solid rgba(204,255,0,0.50)" }}>
            <div className="absolute -left-3 -top-2 text-5xl font-serif opacity-10" style={{ color: "#CCFF00" }}>&ldquo;</div>
            <p className="font-serif text-2xl lg:text-3xl text-white/90 leading-snug font-bold">
              {p.quote}
            </p>
          </blockquote>
        </div>

        <div className="pl-8 space-y-4 reveal" style={{ transitionDelay: "0.2s", borderLeft: "2px solid rgba(255,255,255,0.06)" }}>
          <p className="text-lg text-white/50 leading-relaxed">{p.p1}</p>
          <p className="text-lg text-white/50 leading-relaxed">{p.p2}</p>
          <p className="text-xl font-semibold mt-6 gradient-text">{p.closing}</p>
        </div>
      </Container>
    </section>
  );
}
