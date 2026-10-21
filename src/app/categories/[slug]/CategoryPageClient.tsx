"use client";

import Image from "next/image";
import Link from "next/link";
import { categories, type Category } from "@/data/categories";
import type { Recipe } from "@/data/recipes";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

type Props = {
  category: Category;
  items: Recipe[];
};

export function CategoryPageClient({ category, items }: Props) {
  const { locale, t } = useLocale();
  const name = pick(locale, category.name);
  const otherShelves = categories.filter((item) => item.slug !== category.slug);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
        {t.categoryLabel}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
        {name}
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--ink-soft)]">
        {pick(locale, category.description)}
      </p>

      {items.length === 0 ? (
        <div className="mt-12 rounded-lg border border-dashed border-[var(--line)] px-6 py-16 text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
            {t.emptyTitle(name)}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--ink-muted)]">
            {t.emptyBody(name)}
          </p>
          <Link
            href="/recipes/gochujang-tofu-bibimbap"
            className="mt-6 inline-block text-sm text-[var(--leaf)] underline-offset-4 transition hover:underline"
          >
            {t.tryBibimbap}
          </Link>
        </div>
      ) : (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((recipe) => (
            <li key={recipe.slug}>
              <Link
                href={`/recipes/${recipe.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--line)] bg-white/50 transition hover:border-[var(--leaf)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--cream-deep)]">
                  <Image
                    src={recipe.image}
                    alt={pick(locale, recipe.title)}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h2 className="font-[family-name:var(--font-display)] text-xl transition-colors group-hover:text-[var(--leaf)]">
                    {pick(locale, recipe.title)}
                  </h2>
                  <p className="line-clamp-2 text-sm text-[var(--ink-soft)]">
                    {pick(locale, recipe.description)}
                  </p>
                  <p className="mt-auto pt-2 text-xs text-[var(--ink-muted)]">
                    {t.prepCookMeta(recipe.prepMinutes, recipe.cookMinutes)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <section className="mt-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          {t.otherShelves}
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {otherShelves.map((shelf) => (
            <Link
              key={shelf.slug}
              href={`/categories/${shelf.slug}`}
              className="rounded-md border border-[var(--line)] bg-white/60 px-4 py-2 text-sm text-[var(--ink-soft)] transition hover:border-[var(--leaf)] hover:text-[var(--ink)]"
            >
              {pick(locale, shelf.name)}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
