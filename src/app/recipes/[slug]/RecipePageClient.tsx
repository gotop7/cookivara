"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategory } from "@/data/categories";
import { siteConfig } from "@/data/site";
import type { Recipe } from "@/data/recipes";
import { useLocale } from "@/i18n/LocaleProvider";
import type { LocalizedString } from "@/i18n/types";
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

/** Inactive-locale copy kept in DOM for crawlers (same pattern as TrustPage). */
function CrawlMirror({
  recipe,
  other,
}: {
  recipe: Recipe;
  other: "ko" | "en";
}) {
  const lines = (items?: LocalizedString[]) =>
    items?.map((item) => <li key={`${other}-${item.en}`}>{pick(other, item)}</li>);

  return (
    <div lang={other} className="sr-only" aria-hidden="true">
      <h1>{pick(other, recipe.title)}</h1>
      <p>{pick(other, recipe.description)}</p>
      {recipe.intro ? <p>{pick(other, recipe.intro)}</p> : null}
      <h2>{other === "en" ? "Ingredients" : "재료"}</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={`${other}-${ingredient.name.en}`}>
            {pick(other, ingredient.amount)} {pick(other, ingredient.name)}
          </li>
        ))}
      </ul>
      <h2>{other === "en" ? "Steps" : "순서"}</h2>
      <ol>{lines(recipe.steps)}</ol>
      {recipe.ingredientSelect ? (
        <>
          <h2>{other === "en" ? "Choosing ingredients" : "재료 고르는 법"}</h2>
          <p>{pick(other, recipe.ingredientSelect)}</p>
        </>
      ) : null}
      {recipe.tips?.length ? (
        <>
          <h2>{other === "en" ? "Tips" : "팁"}</h2>
          <ul>{lines(recipe.tips)}</ul>
        </>
      ) : null}
      {recipe.doneness ? (
        <>
          <h2>{other === "en" ? "Look and taste when done" : "완성 모습·맛"}</h2>
          <p>{pick(other, recipe.doneness)}</p>
        </>
      ) : null}
      {recipe.commonMistakes?.length ? (
        <>
          <h2>{other === "en" ? "Common mistakes" : "흔한 실수"}</h2>
          <ul>{lines(recipe.commonMistakes)}</ul>
        </>
      ) : null}
      {recipe.plating ? <p>{pick(other, recipe.plating)}</p> : null}
      {recipe.substitutions?.length ? (
        <ul>{lines(recipe.substitutions)}</ul>
      ) : null}
      {recipe.storage ? <p>{pick(other, recipe.storage)}</p> : null}
    </div>
  );
}

export function RecipePageClient({ recipe }: Props) {
  const { locale, t } = useLocale();
  const other = locale === "ko" ? "en" : "ko";
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
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--leaf)] underline-offset-4 transition hover:underline"
            >
              <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-red-600" />
              {t.watchOnYoutube}
            </a>
          </div>
        ) : null}

        <div className="mt-8" lang={locale}>
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

          <div className="mt-4 flex flex-col gap-1.5 text-sm text-[var(--ink-muted)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-0 sm:gap-y-1">
            <span className="text-[var(--ink-soft)]">
              {t.byAuthor} {author}
            </span>
            <span className="hidden sm:inline" aria-hidden>
              ·
            </span>
            <time dateTime={recipe.publishedAt} className="sm:ml-2">
              {t.publishedOn} {formatDate(recipe.publishedAt, locale)}
            </time>
            {recipe.updatedAt ? (
              <>
                <span className="hidden sm:inline sm:mx-2" aria-hidden>
                  ·
                </span>
                <time dateTime={recipe.updatedAt}>
                  {t.updatedOn} {formatDate(recipe.updatedAt, locale)}
                </time>
              </>
            ) : null}
          </div>

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
          <section className="mt-14" lang={locale}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.whyThisDish}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.intro)}
            </p>
          </section>
        ) : null}

        <section className="mt-14" lang={locale}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl">
            {t.ingredients}
          </h2>
          <ul className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {recipe.ingredients.map((ingredient) => (
              <li
                key={`${ingredient.amount.en}-${ingredient.name.en}`}
                className="grid grid-cols-1 gap-1 py-3.5 text-base sm:grid-cols-[9rem_1fr] sm:gap-4 sm:text-base"
              >
                <span className="font-medium text-[var(--ink-soft)] sm:font-normal sm:text-[var(--ink-muted)]">
                  {pick(locale, ingredient.amount)}
                </span>
                <span className="leading-snug text-[var(--ink)]">
                  {pick(locale, ingredient.name)}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" lang={locale}>
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
          <section className="mt-14" lang={locale}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.ingredientSelect}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.ingredientSelect)}
            </p>
          </section>
        ) : null}

        {recipe.tips && recipe.tips.length > 0 ? (
          <section className="mt-14" lang={locale}>
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
          <section className="mt-14" lang={locale}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.doneness}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.doneness)}
            </p>
          </section>
        ) : null}

        {recipe.commonMistakes && recipe.commonMistakes.length > 0 ? (
          <section className="mt-14" lang={locale}>
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
          <section className="mt-14" lang={locale}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.plating}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.plating)}
            </p>
          </section>
        ) : null}

        {recipe.substitutions && recipe.substitutions.length > 0 ? (
          <section className="mt-14" lang={locale}>
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
          <section className="mt-14" lang={locale}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {t.storage}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
              {pick(locale, recipe.storage)}
            </p>
          </section>
        ) : null}

        <CrawlMirror recipe={recipe} other={other} />
      </div>
    </article>
  );
}
