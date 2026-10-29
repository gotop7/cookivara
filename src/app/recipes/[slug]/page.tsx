import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllRecipes, getRecipe } from "@/data/recipes";
import { siteConfig } from "@/data/site";
import { RecipePageClient } from "./RecipePageClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  const title = recipe.title.ko;
  const description = `${recipe.description.ko} ${recipe.description.en}`.trim();
  const url = `${siteConfig.url}/recipes/${recipe.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} · Cookivara`,
      description: recipe.description.en,
      url,
      type: "article",
      images: [{ url: recipe.image }],
    },
  };
}

function recipeJsonLd(slug: string) {
  const recipe = getRecipe(slug);
  if (!recipe) return null;
  const url = `${siteConfig.url}/recipes/${recipe.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title.en,
    alternateName: recipe.title.ko,
    description: recipe.description.en,
    image: [`${siteConfig.url}${recipe.image}`],
    author: {
      "@type": "Organization",
      name: recipe.author ?? siteConfig.author.name,
    },
    datePublished: recipe.publishedAt,
    dateModified: recipe.updatedAt ?? recipe.publishedAt,
    prepTime: `PT${recipe.prepMinutes}M`,
    cookTime: `PT${recipe.cookMinutes}M`,
    totalTime: `PT${recipe.prepMinutes + recipe.cookMinutes}M`,
    recipeYield: String(recipe.servings),
    recipeIngredient: recipe.ingredients.map(
      (item) => `${item.amount.en} ${item.name.en}`,
    ),
    recipeInstructions: recipe.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step.en,
    })),
    url,
    inLanguage: ["ko", "en"],
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const jsonLd = recipeJsonLd(slug);

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <RecipePageClient recipe={recipe} />
    </>
  );
}
