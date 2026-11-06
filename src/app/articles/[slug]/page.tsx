import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticle } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { ArticlePageClient } from "./ArticlePageClient";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not found" };
  return {
    title: article.title.en,
    description: article.excerpt.en,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: `${article.title.en} · ${siteConfig.name}`,
      description: article.excerpt.en,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticlePageClient article={article} />;
}
