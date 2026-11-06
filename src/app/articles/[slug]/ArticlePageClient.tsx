"use client";

import Link from "next/link";
import type { Article } from "@/data/articles";
import { getArticlesByCategory } from "@/data/articles";
import { getCategory } from "@/data/categories";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { pick } from "@/i18n/types";

export function ArticlePageClient({ article }: { article: Article }) {
  const { locale, t } = useLocale();
  const category = getCategory(article.category);
  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wide text-[var(--accent)] uppercase">
        {category ? (
          <Link href={`/${category.slug}`} className="hover:underline">
            {pick(locale, category.name)}
          </Link>
        ) : null}
        <span className="text-[var(--ink-muted)] normal-case">
          {t.published} {article.publishedAt} · {article.readingMinutes}{" "}
          {t.minutes}
        </span>
      </div>
      <h1 className="font-display animate-rise text-3xl leading-tight text-[var(--ink)] sm:text-4xl lg:text-[2.75rem]">
        {pick(locale, article.title)}
      </h1>
      <p className="animate-rise mt-4 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg" style={{ animationDelay: "60ms" }}>
        {pick(locale, article.excerpt)}
      </p>
      <p className="mt-4 text-sm text-[var(--ink-muted)]">
        {pick(locale, siteConfig.author.byline)}
        {article.sources?.length ? ` · ${t.editorialNote}` : ""}
      </p>

      <div className="mt-10 space-y-9">
        {article.sections.map((section, i) => (
          <section
            key={`${i}-${pick(locale, section.heading)}`}
            className="animate-rise"
            style={{ animationDelay: `${100 + i * 40}ms` }}
          >
            <h2 className="font-display text-xl text-[var(--ink)] sm:text-2xl">
              {pick(locale, section.heading)}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)] sm:text-base">
              {pick(locale, section.body)}
            </p>
          </section>
        ))}
      </div>

      {article.sources && article.sources.length > 0 ? (
        <section className="mt-12 border border-[var(--line)] bg-[var(--bg-elevated)] p-5">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            {t.sourcesHeading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
            {t.sourcesLead}
          </p>
          <ul className="mt-4 space-y-2">
            {article.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ink-soft)] underline decoration-[var(--line)] underline-offset-2 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                >
                  {source.videoTitle
                    ? `${source.name} — ${source.videoTitle}`
                    : source.name}
                  <span className="ml-2 text-xs text-[var(--ink-muted)] no-underline">
                    ({source.kind === "youtube" ? "YouTube" : t.sourceArticle})
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {article.verdict ? (
        <aside className="mt-12 border border-[var(--accent)]/35 bg-[var(--bg-elevated)] p-5">
          <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            {t.verdict}
          </p>
          <p className="mt-2 text-base leading-relaxed text-[var(--ink)]">
            {pick(locale, article.verdict)}
          </p>
        </aside>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-14 border-t border-[var(--line)] pt-8">
          <h2 className="font-display text-xl text-[var(--ink)]">{t.related}</h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/articles/${item.slug}`}
                  className="text-[var(--ink-soft)] hover:text-[var(--accent)]"
                >
                  {pick(locale, item.title)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
