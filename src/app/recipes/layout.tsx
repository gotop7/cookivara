import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "All recipes",
  description:
    "Browse every Cookivara recipe by kitchen — Korean, Chinese, European, American, World, Smoothie, Vegetarian. Korean and English.",
  alternates: { canonical: `${siteConfig.url}/recipes` },
  robots: { index: true, follow: true },
};

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
