"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageToggle } from "@/components/LanguageToggle";
import { categories } from "@/data/categories";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, t } = useLocale();
  const activeCategory = categories.find((category) =>
    pathname?.startsWith(`/categories/${category.slug}`),
  )?.slug;

  return (
    <header className="max-w-[100%] overflow-x-clip border-b border-[var(--line)] bg-[var(--cream)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80 sm:gap-3"
        >
          <BrandLogo size="nav" priority />
          <span className="font-brand truncate text-xl tracking-tight text-[var(--ink)] sm:text-2xl">
            Cookivara
          </span>
        </Link>
        <div className="flex min-w-0 items-center gap-3 sm:gap-6">
          <nav className="flex items-center gap-3 text-sm text-[var(--ink-soft)] sm:gap-6">
            <Link
              href="/recipes"
              className="transition-colors hover:text-[var(--ink)]"
            >
              {t.navRecipes}
            </Link>
            <Link
              href="/#shelves"
              className="transition-colors hover:text-[var(--ink)]"
            >
              {t.navBrowse}
            </Link>
          </nav>
          <LanguageToggle />
        </div>
      </div>
      <nav aria-label={t.categoriesAria} className="border-t border-[var(--line)]">
        <ul className="mx-auto flex max-w-6xl gap-4 overflow-x-auto overscroll-x-contain px-5 py-3 text-[11px] font-medium tracking-[0.08em] text-[var(--ink-muted)] [scrollbar-width:thin] sm:gap-6 sm:px-8 sm:uppercase sm:tracking-[0.14em]">
          {categories.map((category) => {
            const isActive = activeCategory === category.slug;
            return (
              <li key={category.slug} className="shrink-0">
                <Link
                  href={`/categories/${category.slug}`}
                  className={`transition-colors hover:text-[var(--ink)] ${
                    isActive ? "text-[var(--leaf)]" : ""
                  }`}
                >
                  {pick(locale, category.name)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
