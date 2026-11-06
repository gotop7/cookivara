import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewCategoryClient } from "@/components/ReviewCategoryClient";
import {
  getReviewCategory,
  isReviewCategorySlug,
  reviewCategories,
} from "@/data/review-categories";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return reviewCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getReviewCategory(slug);
  if (!category) return { title: "Reviews" };
  return {
    title: category.name.en,
    description: category.description.en,
  };
}

export default async function ReviewCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  if (!isReviewCategorySlug(slug)) notFound();
  const category = getReviewCategory(slug)!;
  return <ReviewCategoryClient category={category} />;
}
