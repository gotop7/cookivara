"use client";

import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";

const nav = [
  { href: "/reviews", key: "navReviews" as const },
  { href: "/comparisons", key: "navComparisons" as const },
  { href: "/how-to", key: "navHowTo" as const },
  { href: "/apps", key: "navApps" as const },
  { href: "/news", key: "navNews" as const },
];

export function SiteHeader() {
  const { t } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)]/80 bg-[rgba(15,20,25,0.88)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <BrandMark size="md" showWordmark className="min-w-0" />
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
            >
              {t[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageToggle />
        </div>
      </div>
      <div className="border-t border-[var(--line)]/60 lg:hidden">
        <nav
          aria-label="Categories"
          className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-6"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
            >
              {t[item.key]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
