"use client";

import Link from "next/link";
import { getCategory } from "@/data/categories";
import type { Article } from "@/data/articles";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export function ArticleCard({ article }: { article: Article }) {
  const { locale, t } = useLocale();
  const category = getCategory(article.category);

  return (
    <article className="group border-b border-[var(--line)] py-6 first:pt-0 last:border-b-0">
      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">
        {category ? (
          <Link href={`/${category.slug}`} className="hover:underline">
            {pick(locale, category.name)}
          </Link>
        ) : null}
        <span className="text-[var(--ink-muted)] normal-case">
          {article.readingMinutes} {t.minutes}
        </span>
      </div>
      <h3 className="font-display text-xl leading-snug text-[var(--ink)] transition-colors group-hover:text-[var(--accent)] sm:text-2xl">
        <Link href={`/articles/${article.slug}`}>
          {pick(locale, article.title)}
        </Link>
      </h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
        {pick(locale, article.excerpt)}
      </p>
      <Link
        href={`/articles/${article.slug}`}
        className="mt-3 inline-flex text-sm font-semibold text-[var(--amber)] hover:underline"
      >
        {t.readMore} →
      </Link>
    </article>
  );
}
