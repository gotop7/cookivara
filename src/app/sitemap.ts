import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { getAllRecipes } from "@/data/recipes";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/recipes",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date("2026-10-28"),
    changeFrequency: path === "" || path === "/recipes" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/recipes" ? 0.9 : 0.5,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${base}/categories/${category.slug}`,
    lastModified: new Date("2026-10-28"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const recipeRoutes: MetadataRoute.Sitemap = getAllRecipes().map((recipe) => ({
    url: `${base}/recipes/${recipe.slug}`,
    lastModified: new Date(recipe.updatedAt ?? recipe.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...recipeRoutes];
}
