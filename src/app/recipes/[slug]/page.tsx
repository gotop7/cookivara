import { notFound } from "next/navigation";
import { getAllRecipes, getRecipe } from "@/data/recipes";
import { RecipePageClient } from "./RecipePageClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  return {
    title: recipe.title.ko,
    description: recipe.description.ko,
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  return <RecipePageClient recipe={recipe} />;
}
