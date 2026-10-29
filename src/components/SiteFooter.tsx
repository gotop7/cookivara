"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";

export function SiteFooter() {
  const { locale, t } = useLocale();

  const links = [
    { href: "/about", label: t.footerAbout },
    { href: "/contact", label: t.footerContact },
    { href: "/privacy", label: t.footerPrivacy },
    { href: "/terms", label: t.footerTerms },
    { href: "/recipes", label: t.footerAllRecipes },
  ];

  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--cream)]">
      {/* cache-bust: adsense readiness flagships 2026-10-29 */}
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[var(--ink-soft)] sm:px-8">
        <p>
          <span className="font-brand font-semibold text-[var(--ink)]">
            Cookivara
          </span>
          <span> — {t.footerTagline}</span>
          <span className="ml-2 text-[10px] tracking-wide text-[var(--ink-muted)]">
            v2026.10.29d
          </span>
        </p>
        <p className="text-xs text-[var(--ink-muted)]">
          {locale === "ko" ? "브랜드 " : "Brand "}
          <span className="font-brand">Cookivara</span>
          {locale === "ko" ? " · 사이트 " : " · site "}
          {siteConfig.displayDomain}
        </p>
        <nav
          aria-label={t.footerNavAria}
          className="flex flex-wrap gap-x-5 gap-y-2"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-11 inline-flex items-center transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
