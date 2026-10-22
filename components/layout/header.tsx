import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { ROUTES } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { withLocale } from "@/lib/i18n/paths";

export function Header({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/[0.04]"
      style={{ background: "rgba(12, 10, 29, 0.8)" }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo lang={lang} ariaLabel={t.common.logoAria} />

          <nav className="hidden lg:flex items-center gap-7" aria-label={t.nav.mainAria}>
            {t.nav.links.map((link) => (
              <Link
                key={link.href}
                href={withLocale(lang, link.href)}
                className="font-sans text-[14px] font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher current={lang} ariaLabel={t.common.languageSwitcherAria} />
            <Link
              href={withLocale(lang, ROUTES.contact)}
              className="btn-gradient inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-sans font-semibold"
            >
              <span className="relative z-10">{t.common.getInTouch}</span>
            </Link>
          </div>

          <MobileMenu
            lang={lang}
            links={t.nav.links.map((l) => ({ label: l.label, href: withLocale(lang, l.href) }))}
            contactHref={withLocale(lang, ROUTES.contact)}
            labels={{
              open: t.nav.openMenu,
              close: t.nav.closeMenu,
              getInTouch: t.common.getInTouch,
              logoAria: t.common.logoAria,
              language: t.common.languageSwitcherAria,
            }}
          />
        </div>
      </div>
    </header>
  );
}
