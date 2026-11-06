import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductReviewDetail } from "@/components/ProductReviewDetail";
import { isReviewCategorySlug } from "@/data/review-categories";
import {
  getAllProductReviews,
  getProductReview,
} from "@/data/product-reviews";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllProductReviews().map((r) => ({
    category: r.category,
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const review = getProductReview(slug);
  if (!review) return { title: "Review" };
  return {
    title: review.title.en,
    description: review.summary.en,
  };
}

export default async function ProductReviewPage({ params }: Props) {
  const { category, slug } = await params;
  if (!isReviewCategorySlug(category)) notFound();
  const review = getProductReview(slug);
  if (!review || review.category !== category) notFound();
  return <ProductReviewDetail review={review} />;
}
