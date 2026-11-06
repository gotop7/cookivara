"use client";

import { ArticleCard } from "@/components/ArticleCard";
import type { Category } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";
import Link from "next/link";

export function CategoryPage({ category }: { category: Category }) {
  const { locale, t } = useLocale();
  const articles = getArticlesByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
        {t.categories}
      </p>
      <h1 className="font-display mt-2 text-3xl text-[var(--ink)] sm:text-4xl">
        {pick(locale, category.name)}
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
        {pick(locale, category.description)}
      </p>

      {articles.length === 0 ? (
        <p className="mt-10 text-[var(--ink-muted)]">
          {t.emptyCategory}{" "}
          <Link href="/" className="text-[var(--accent)] hover:underline">
            {t.backHome}
          </Link>
        </p>
      ) : (
        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
