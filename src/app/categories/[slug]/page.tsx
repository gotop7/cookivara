import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getRecipesByCategory } from "@/data/recipes";
import { CategoryPageClient } from "./CategoryPageClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: category.name.ko };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <CategoryPageClient
      category={category}
      items={getRecipesByCategory(slug)}
    />
  );
}
