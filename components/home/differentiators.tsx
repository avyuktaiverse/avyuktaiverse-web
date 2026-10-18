import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Scale, Rocket, TrendingUp, Cpu } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

// Icon + colour per point; copy comes from the dictionary in the same order.
const pointMeta = [
  { Icon: Scale, color: "#CCFF00", bg: "rgba(204,255,0,0.08)", borderColor: "rgba(204,255,0,0.28)" },
  { Icon: Rocket, color: "#f59e0b", bg: "rgba(245,158,11,0.10)", borderColor: "rgba(245,158,11,0.15)" },
  { Icon: TrendingUp, color: "#34d399", bg: "rgba(52,211,153,0.10)", borderColor: "rgba(52,211,153,0.15)" },
  { Icon: Cpu, color: "#7EA5FF", bg: "rgba(126,165,255,0.08)", borderColor: "rgba(126,165,255,0.24)" },
];

export function Differentiators({ t }: { t: Dictionary }) {
  const d = t.home.differentiators;
  return (
    <section className="relative py-20 lg:py-28" style={{ background: "var(--gradient-dark)" }}>
      <div className="section-divider absolute top-0 left-0 right-0" />

      <Container>
        <SectionHeading eyebrow={d.eyebrow} title={d.title} dark />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {d.points.map((point, i) => {
            const meta = pointMeta[i] ?? pointMeta[0];
            return (
              <div key={point.title} className="glass-card p-7 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="icon-container w-12 h-12 mb-5"
                  style={{ background: meta.bg, border: `1px solid ${meta.borderColor}` }}>
                  <meta.Icon size={22} style={{ color: meta.color }} />
                </div>
                <h3 className="font-sans font-semibold text-white mb-2.5">{point.title}</h3>
                <p className="text-white/50 leading-relaxed text-[15px]">{point.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
