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
    <header className="max-w-[100%] border-b border-[var(--line)] bg-[var(--cream)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3.5 sm:gap-3 sm:px-8 sm:py-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-80 sm:gap-3.5"
        >
          <BrandLogo size="nav" priority />
          <span className="brand-wordmark font-brand text-xl font-semibold text-[var(--ink)] sm:text-3xl">
            Cookivara
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-1 sm:gap-7">
          <nav className="flex flex-nowrap items-center gap-0 text-sm font-semibold text-[var(--ink-soft)] sm:gap-2 sm:text-lg">
            <Link
              href="/recipes"
              className="whitespace-nowrap rounded-md px-1.5 py-2 transition-colors hover:text-[var(--ink)] sm:px-3"
            >
              {t.navRecipes}
            </Link>
            <Link
              href="/#shelves"
              className="hidden whitespace-nowrap rounded-md px-1.5 py-2 transition-colors hover:text-[var(--ink)] sm:inline-flex sm:px-3"
            >
              {t.navBrowse}
            </Link>
          </nav>
          <LanguageToggle />
        </div>
      </div>
      <nav aria-label={t.categoriesAria} className="max-w-[100%] overflow-x-clip border-t border-[var(--line)]">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto overscroll-x-contain px-4 py-2.5 text-sm font-semibold tracking-[0.04em] text-[var(--ink-muted)] [scrollbar-width:thin] sm:gap-2 sm:px-8 sm:py-3 sm:text-base sm:tracking-[0.08em]">
          {categories.map((category) => {
            const isActive = activeCategory === category.slug;
            return (
              <li key={category.slug} className="shrink-0">
                <Link
                  href={`/categories/${category.slug}`}
                  className={`inline-flex min-h-11 items-center rounded-md px-3 py-2 transition-colors hover:text-[var(--ink)] sm:min-h-12 sm:px-3.5 ${
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
