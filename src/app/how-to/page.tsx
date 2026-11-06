import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";
import { getCategory } from "@/data/categories";

export const metadata: Metadata = {
  title: "How-To",
  description:
    "NookVolt practical tech guides — privacy setup, chargers, Wi-Fi upgrades, and more.",
};

export default function HowToPage() {
  const category = getCategory("how-to")!;
  return <CategoryPage category={category} />;
}
