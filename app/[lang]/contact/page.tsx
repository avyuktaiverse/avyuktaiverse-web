import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/ui/contact-form";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";
import { Mail, ExternalLink, Clock, Shield, Phone, MapPin } from "lucide-react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { resolveLang, type LangParams } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  const lang = await resolveLang(props);
  return pageMetadata(lang, "/contact", getDictionary(lang).contact.meta);
}

const heroGrad = "var(--gradient-hero)";
const darkGrad = "var(--gradient-dark)";

export default async function ContactPage(props: LangParams) {
  const lang = await resolveLang(props);
  const t = getDictionary(lang);
  const c = t.contact;

  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-22" style={{ background: heroGrad }}>
        <div className="hero-shape w-[380px] h-[380px]"
          style={{ background: "#1B3A4B", opacity: 0.1, top: "-80px", right: "-60px", animation: "float 7s ease-in-out infinite" }} />
        <div className="hero-shape w-[220px] h-[220px]"
          style={{ background: "#34d399", opacity: 0.05, bottom: "-50px", left: "30%", animation: "float-slow 8s ease-in-out infinite" }} />

        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Badge variant="pulse" className="mb-6">{c.badge}</Badge>
            <h1 className="font-serif font-bold text-white mb-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}>
              {c.titleStart}<span className="gradient-text italic">{c.titleAccent}</span>{c.titleEnd}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">{c.lead}</p>
          </div>
        </Container>
      </section>

      <section className="relative py-20 lg:py-28" style={{ background: darkGrad }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 reveal">
              <h2 className="text-2xl font-serif font-bold text-white mb-8">{c.formHeading}</h2>
              <ContactForm lang={lang} copy={c.form} />
            </div>

            <div className="lg:pt-10 flex flex-col gap-5 reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={15} style={{ color: "#CCFF00" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#CCFF00" }}>{c.directEmail}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={`mailto:${COMPANY.email}`} className="text-white/60 hover:text-white transition-colors text-sm break-all">{COMPANY.email}</a>
                  <a href={`mailto:${COMPANY.supportEmail}`} className="text-white/60 hover:text-white transition-colors text-sm break-all">{COMPANY.supportEmail} <span className="text-white/40">({c.support})</span></a>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={15} style={{ color: "#CCFF00" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#CCFF00" }}>{c.phone}</p>
                </div>
                <a href={`tel:${COMPANY.phone.replace(/[-+ \s]/g, '')}`} className="text-white/60 hover:text-white transition-colors text-sm">{COMPANY.phone}</a>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={15} style={{ color: "#CCFF00" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#CCFF00" }}>{c.location}</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  <strong className="block text-white/80 font-medium mb-1 font-sans">{COMPANY.legalName}</strong>
                  {COMPANY.address}
                </p>
              </div>

              {COMPANY.linkedin && (
                <div className="glass-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ExternalLink size={15} style={{ color: "#CCFF00" }} />
                    <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#CCFF00" }}>{c.linkedin}</p>
                  </div>
                  <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">{COMPANY.name}</a>
                </div>
              )}

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={15} style={{ color: "#CCFF00" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#CCFF00" }}>{c.responseTime}</p>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{c.responseBody}</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={15} style={{ color: "#CCFF00" }} />
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest" style={{ color: "#CCFF00" }}>{c.honest}</p>
                </div>
                <p className="text-sm text-white/45 leading-relaxed">{c.honestBody}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
