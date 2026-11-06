import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparisonDetail } from "@/components/ComparisonDetail";
import { isComparisonCategorySlug } from "@/data/comparison-categories";
import { getAllComparisons, getComparison } from "@/data/comparisons";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllComparisons().map((c) => ({
    category: c.category,
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return { title: "Comparison" };
  return {
    title: comparison.title.en,
    description: comparison.summary.en,
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { category, slug } = await params;
  if (!isComparisonCategorySlug(category)) notFound();
  const comparison = getComparison(slug);
  if (!comparison || comparison.category !== category) notFound();
  return <ComparisonDetail comparison={comparison} />;
}
