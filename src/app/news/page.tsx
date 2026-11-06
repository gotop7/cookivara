import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategory } from "@/data/categories";

export const metadata: Metadata = {
  title: "News",
  description:
    "NookVolt tech news briefings on platforms, standards, and buying-relevant shifts.",
};

export default function NewsPage() {
  const category = getCategory("news")!;
  return <CategoryPage category={category} />;
}
