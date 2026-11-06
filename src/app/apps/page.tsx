import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategory } from "@/data/categories";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Cordnook app tutorials and recommendations for productivity, photos, and utilities.",
};

export default function AppsPage() {
  const category = getCategory("apps")!;
  return <CategoryPage category={category} />;
}
