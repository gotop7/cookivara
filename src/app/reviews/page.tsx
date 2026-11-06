import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategory } from "@/data/categories";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Cordnook smartphone, laptop, and gadget reviews with buying-focused trade-offs.",
};

export default function ReviewsPage() {
  const category = getCategory("reviews")!;
  return <CategoryPage category={category} />;
}
