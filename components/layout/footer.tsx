import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { APP_VERSION, COMPANY, ROUTES } from "@/lib/constants";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { withLocale } from "@/lib/i18n/paths";

export function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "linear-gradient(160deg, #030610 0%, #080D1A 100%)" }}>
      <div className="glow-line" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/[0.05]">
          <div className="md:col-span-2 reveal">
            <div className="mb-5"><Logo lang={lang} ariaLabel={t.common.logoAria} /></div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-5">{t.company.description}</p>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">{t.company.tagline}</p>
          </div>

          <div className="reveal">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-white/25 mb-4">{t.footer.navigation}</p>
            <nav className="flex flex-col gap-2.5">
              {t.nav.links.map((link) => (
                <Link key={link.href} href={withLocale(lang, link.href)} className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
              <Link href={withLocale(lang, ROUTES.contact)} className="text-sm text-white/40 hover:text-white transition-colors duration-200">{t.nav.contact}</Link>
            </nav>
          </div>

          <div className="reveal">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-white/25 mb-4">{t.footer.contact}</p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <Mail size={14} style={{ color: "#CCFF00" }} />
                {COMPANY.email}
              </a>
              {COMPANY.linkedin ? (
                <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                  <ExternalLink size={14} style={{ color: "#CCFF00" }} />
                  {t.footer.linkedin}
                </a>
              ) : null}
              <a href={`tel:${COMPANY.phone.replace(/[-+ \s]/g, '')}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <Phone size={14} style={{ color: "#CCFF00" }} />
                {COMPANY.phone}
              </a>
              <span className="flex items-start gap-2 text-sm text-white/30 leading-snug">
                <MapPin size={14} style={{ color: "#CCFF00", opacity: 0.5, marginTop: "2px", flexShrink: 0 }} />
                <span className="flex flex-col">
                  <span className="text-white/50 mb-0.5">{COMPANY.legalName}</span>
                  <span>{COMPANY.address}</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-white/20 flex flex-wrap items-center gap-2">
             <span>&copy; {year} {COMPANY.legalName}. {t.footer.rights}</span>
             <span className="px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] font-mono text-[9px] uppercase tracking-wider text-white/25">{t.footer.build} {APP_VERSION}</span>
          </p>
          <div className="flex gap-4">
            <Link href={withLocale(lang, ROUTES.privacy)} className="text-xs text-white/20 hover:text-white transition-colors">{t.nav.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
