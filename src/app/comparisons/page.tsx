import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategory } from "@/data/categories";

export const metadata: Metadata = {
  title: "Comparisons",
  description:
    "NookVolt side-by-side product and app comparisons with clear who-it-fits guidance.",
};

export default function ComparisonsPage() {
  const category = getCategory("comparisons")!;
  return <CategoryPage category={category} />;
}
