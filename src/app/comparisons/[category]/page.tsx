import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparisonCategoryClient } from "@/components/ComparisonCategoryClient";
import {
  comparisonCategories,
  getComparisonCategory,
  isComparisonCategorySlug,
} from "@/data/comparison-categories";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return comparisonCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getComparisonCategory(slug);
  if (!category) return { title: "Comparisons" };
  return {
    title: category.name.en,
    description: category.description.en,
  };
}

export default async function ComparisonCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  if (!isComparisonCategorySlug(slug)) notFound();
  const category = getComparisonCategory(slug)!;
  return <ComparisonCategoryClient category={category} />;
}
