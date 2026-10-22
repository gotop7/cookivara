"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { categories } from "@/data/categories";
import { getRecipesByCategory } from "@/data/recipes";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export default function HomePage() {
  const { locale, t } = useLocale();

  return (
    <>
      <section className="relative isolate min-h-[min(92vh,880px)] w-full max-w-[100%] overflow-hidden">
        <Image
          src="/images/home-hero.webp"
          alt={t.heroImageAlt}
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-scrim)" }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[min(92vh,880px)] w-full max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
          <div className="max-w-xl text-white">
            <div className="animate-rise flex items-end gap-4 sm:gap-5">
              <BrandLogo
                size="hero"
                priority
                className="rounded-2xl bg-[#f4efe4] shadow-sm ring-1 ring-white/20"
              />
              <h1 className="font-brand text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Cookivara
              </h1>
            </div>
            <p
              className="animate-rise mt-4 text-lg text-white/90 sm:text-xl"
              style={{ animationDelay: "120ms" }}
            >
              {t.heroTagline}
            </p>
            <p
              className="animate-rise mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:text-base"
              style={{ animationDelay: "220ms" }}
            >
              {t.heroBody}
            </p>
            <div
              className="animate-rise mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/recipes/gochujang-tofu-bibimbap"
                className="rounded-md bg-[var(--leaf)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--leaf-hover)]"
              >
                {t.ctaCookBibimbap}
              </Link>
              <Link
                href="/recipes"
                className="rounded-md border border-white/70 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.ctaBrowseRecipes}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="shelves"
        className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="animate-fade">
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            {t.shelvesTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--ink-soft)]">{t.shelvesIntro}</p>
        </div>

        <ul className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {categories.map((category, index) => {
            const count = getRecipesByCategory(category.slug).length;
            return (
              <li
                key={category.slug}
                className="animate-shelf"
                style={{ animationDelay: `${80 + index * 60}ms` }}
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="group flex flex-col gap-2 py-6 transition sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)] transition-colors group-hover:text-[var(--leaf)] sm:text-3xl">
                    {pick(locale, category.name)}
                  </span>
                  <span className="max-w-md text-sm leading-relaxed text-[var(--ink-muted)] sm:text-right">
                    {pick(locale, category.description)}{" "}
                    <span className="text-[var(--ink-soft)]">
                      {count === 0 ? t.recipesComingSoon : t.recipeCount(count)}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
