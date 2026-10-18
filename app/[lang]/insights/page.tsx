import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Activity, Terminal, Sparkles, Network } from "lucide-react";
import { ParticleField } from "@/components/ui/particle-field";
import { TypingText } from "@/components/ui/typing-text";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { resolveLang, type LangParams } from "@/lib/i18n/params";
import { withLocale } from "@/lib/i18n/paths";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  const lang = await resolveLang(props);
  return pageMetadata(lang, "/insights", getDictionary(lang).insights.meta);
}

export default async function InsightsPage(props: LangParams) {
  const lang = await resolveLang(props);
  const t = getDictionary(lang);
  const s = t.insights;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-12"
      style={{ background: "var(--gradient-hero)" }}>

      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(204,255,0,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(126,165,255,0.12) 0%, transparent 70%)" }} />

      <div className="absolute inset-0 opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
        }} />

      <Container className="relative z-10 flex flex-col items-center justify-center w-full">

        <div className="text-center mb-10 reveal">
          <Badge variant="pulse" className="mb-6 mx-auto">
            <Sparkles size={12} className="mr-1.5" />
            {s.badge}
          </Badge>
          <h1 className="font-serif font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            <span className="gradient-text italic">{s.title}</span>
          </h1>
          <p className="text-lg text-white/40 max-w-xl mx-auto">{s.lead}</p>
        </div>

        {/* The Interactive Terminal UI Card */}
        <div className="w-full max-w-3xl reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="glass-card overflow-hidden shadow-2xl relative group"
               style={{
                 boxShadow: "0 25px 50px -12px rgba(204, 255, 0, 0.18)",
                 border: "1px solid rgba(204, 255, 0, 0.25)",
                 transform: "translateY(0) scale(1)",
                 transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
               }}>

            {/* Terminal Header */}
            <div className="bg-black/40 backdrop-blur-md px-4 py-3 flex items-center border-b border-white/5 relative z-20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-white/30 text-xs font-mono tracking-widest uppercase">
                <Terminal size={12} /> root@avyukt-aiverse:~/insights
              </div>
            </div>

            {/* Glowing Accent Line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#CCFF00]/50 to-transparent absolute z-10 top-[45px] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Terminal Body */}
            <div className="p-8 md:p-12 relative z-10 bg-[#070513]/60 backdrop-blur-lg">
              <div className="font-mono text-sm md:text-base leading-relaxed mb-8">
                <div className="text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="text-emerald-400/50">❯</span> ./generate_insights.sh --mode=deep-analysis
                </div>
                <div className="text-[#CCFF00]/80 mb-6 flex items-center gap-2 h-6">
                  <Activity size={14} className="animate-pulse" />
                  <TypingText
                    phrases={s.typing}
                    typingSpeed={40}
                    deletingSpeed={20}
                    pauseDuration={2500}
                  />
                </div>
              </div>

              {/* Core Content */}
              <div className="space-y-5 text-white/50 border-l-2 border-[#CCFF00]/30 pl-5 mb-10 relative">
                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#CCFF00]/10 border border-[#CCFF00]/50 rounded flex items-center justify-center">
                  <Network size={10} className="text-[#CCFF00]" />
                </div>
                <p className="font-sans text-lg text-white/80 pt-1">{s.intro}</p>
                <p className="font-sans text-sm md:text-base leading-relaxed">{s.body}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/5">
                <Link href={withLocale(lang, ROUTES.contact)} className="btn-gradient px-8 py-3.5 rounded-xl font-sans font-semibold text-sm inline-flex items-center justify-center gap-2 hover:scale-[1.02] shadow-[0_0_20px_rgba(204,255,0,0.35)] transition-all duration-200">
                  {s.notify}
                </Link>
                <Link href={withLocale(lang, ROUTES.capabilities)} className="px-8 py-3.5 rounded-xl font-sans font-semibold text-sm inline-flex items-center justify-center text-white/50 border border-white/10 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-200">
                  {s.viewCapabilities}
                </Link>
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
