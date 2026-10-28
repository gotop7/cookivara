"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export function SiteFooter() {
  const { t } = useLocale();

  const links = [
    { href: "/about", label: t.footerAbout },
    { href: "/contact", label: t.footerContact },
    { href: "/privacy", label: t.footerPrivacy },
    { href: "/terms", label: t.footerTerms },
    { href: "/recipes", label: t.footerAllRecipes },
  ];

  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--cream)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[var(--ink-soft)] sm:px-8">
        <p>{t.footerTagline}</p>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-5 gap-y-2"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
