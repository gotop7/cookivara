"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getRecipesByCategory } from "@/data/recipes";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export default function RecipesPage() {
  const { locale, t } = useLocale();

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
        {t.collectionLabel}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
        {t.allRecipesTitle}
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--ink-soft)]">{t.allRecipesIntro}</p>

      <div className="mt-14 space-y-16">
        {categories.map((category) => {
          const items = getRecipesByCategory(category.slug);
          const name = pick(locale, category.name);
          return (
            <section key={category.slug}>
              <div className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-3">
                <h2 className="font-[family-name:var(--font-display)] text-2xl">
                  <Link
                    href={`/categories/${category.slug}`}
                    className="transition-colors hover:text-[var(--leaf)]"
                  >
                    {name}
                  </Link>
                </h2>
                <span className="text-sm text-[var(--ink-muted)]">
                  {items.length === 0
                    ? t.comingSoon
                    : t.recipeCount(items.length)}
                </span>
              </div>
              {items.length === 0 ? (
                <p className="mt-4 text-sm text-[var(--ink-muted)]">
                  {t.noCategoryRecipes(name)}
                </p>
              ) : (
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((recipe) => (
                    <li key={recipe.slug}>
                      <Link
                        href={`/recipes/${recipe.slug}`}
                        className="group flex gap-3 rounded-lg border border-[var(--line)] bg-white/40 p-2 transition hover:border-[var(--leaf)]"
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-[var(--cream-deep)]">
                          <Image
                            src={recipe.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="min-w-0 py-1">
                          <span className="block truncate font-[family-name:var(--font-display)] text-lg transition-colors group-hover:text-[var(--leaf)]">
                            {pick(locale, recipe.title)}
                          </span>
                          <span className="mt-1 block text-xs text-[var(--ink-muted)]">
                            {t.totalTimeMeta(
                              recipe.prepMinutes + recipe.cookMinutes,
                              pick(locale, recipe.level),
                            )}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
