"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategory } from "@/data/categories";
import { siteConfig } from "@/data/site";
import type { Recipe } from "@/data/recipes";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

type Props = {
  recipe: Recipe;
};

function formatDate(iso: string, locale: "ko" | "en"): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function RecipePageClient({ recipe }: Props) {
  const { locale, t } = useLocale();
  const title = pick(locale, recipe.title);
  const author =
    recipe.author ??
    pick(locale, siteConfig.author.byline) ??
    siteConfig.author.name;

  const meta = [
    { label: t.servings, value: String(recipe.servings) },
    {
      label: t.prep,
      value: `${recipe.prepMinutes}${locale === "ko" ? t.minutesShort : ` ${t.minutesShort}`}`,
    },
    {
      label: t.cook,
      value: `${recipe.cookMinutes}${locale === "ko" ? t.minutesShort : ` ${t.minutesShort}`}`,
    },
    { label: t.level, value: pick(locale, recipe.level) },
  ];

  return (
    <article className="pb-20">
      <div className="mx-auto max-w-4xl px-5 pt-10 sm:px-8 sm:pt-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm">
          <Image
            src={recipe.image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {recipe.youtubeUrl ? (
          <div className="mt-3">
            <a
              href={recipe.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--leaf)] underline-offset-4 transition hover:underline"
            >
              <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-red-600" />
              {t.watchOnYoutube}
            </a>
          </div>
        ) : null}

        <div className="mt-8">
          <div className="flex flex-wrap gap-3 text-[11px] font-medium tracking-[0.12em] text-[var(--leaf)] sm:uppercase sm:tracking-[0.16em]">
            {recipe.categories.map((categorySlug) => {
              const category = getCategory(categorySlug);
              if (!category) return null;
              return (
                <Link
                  key={categorySlug}
                  href={`/categories/${categorySlug}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {pick(locale, category.name)}
                </Link>
              );
            })}
          </div>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
            {pick(locale, recipe.description)}
          </p>

          <p className="mt-4 text-sm text-[var(--ink-muted)]">
            <span className="text-[var(--ink-soft)]">
              {t.byAuthor} {author}
            </span>
            <span aria-hidden className="mx-2">
              ·
            </span>
            <time dateTime={recipe.publishedAt}>
              {t.publishedOn} {formatDate(recipe.publishedAt, locale)}
            </time>
            {recipe.updatedAt ? (
              <>
                <span aria-hidden className="mx-2">
                  ·
                </span>
                <time dateTime={recipe.updatedAt}>
                  {t.updatedOn} {formatDate(recipe.updatedAt, locale)}
                </time>
              </>
            ) : null}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-[var(--line)] py-5 sm:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  {item.label}
                </dt>
                <dd className="mt-1 font-[family-name:var(--font-display)] text-lg">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {recipe.intro ? (
          <section className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.whyThisDish}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.intro)}
            </p>
          </section>
        ) : null}

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            {t.ingredients}
          </h2>
          <ul className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {recipe.ingredients.map((ingredient) => (
              <li
                key={`${ingredient.amount.en}-${ingredient.name.en}`}
                className="grid grid-cols-[7rem_1fr] gap-4 py-3 text-sm sm:grid-cols-[8.5rem_1fr] sm:text-base"
              >
                <span className="text-[var(--ink-muted)]">
                  {pick(locale, ingredient.amount)}
                </span>
                <span>{pick(locale, ingredient.name)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            {t.steps}
          </h2>
          <ol className="mt-6 space-y-5">
            {recipe.steps.map((step, index) => (
              <li key={step.en} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-sm text-[var(--ink-soft)]">
                  {index + 1}
                </span>
                <p className="pt-1 leading-relaxed text-[var(--ink-soft)]">
                  {pick(locale, step)}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {recipe.ingredientSelect ? (
          <section className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.ingredientSelect}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.ingredientSelect)}
            </p>
          </section>
        ) : null}

        {recipe.tips && recipe.tips.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.tips}
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--ink-soft)]">
              {recipe.tips.map((tip) => (
                <li key={tip.en} className="leading-relaxed">
                  {pick(locale, tip)}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {recipe.doneness ? (
          <section className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.doneness}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.doneness)}
            </p>
          </section>
        ) : null}

        {recipe.commonMistakes && recipe.commonMistakes.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.commonMistakes}
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--ink-soft)]">
              {recipe.commonMistakes.map((item) => (
                <li key={item.en} className="leading-relaxed">
                  {pick(locale, item)}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {recipe.plating ? (
          <section className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.plating}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.plating)}
            </p>
          </section>
        ) : null}

        {recipe.substitutions && recipe.substitutions.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.substitutions}
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--ink-soft)]">
              {recipe.substitutions.map((item) => (
                <li key={item.en} className="leading-relaxed">
                  {pick(locale, item)}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {recipe.storage ? (
          <section className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.storage}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.storage)}
            </p>
          </section>
        ) : null}
      </div>
    </article>
  );
}
