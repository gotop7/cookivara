import type { MetadataRoute } from "next";
import { getAllArticles } from "@/data/articles";
import { categories } from "@/data/categories";
import { reviewCategories } from "@/data/review-categories";
import { getAllProductReviews } from "@/data/product-reviews";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date("2026-11-06"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.5,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${base}/${category.slug}`,
    lastModified: new Date("2026-11-06"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const reviewCategoryRoutes: MetadataRoute.Sitemap = reviewCategories.map(
    (category) => ({
      url: `${base}/reviews/${category.slug}`,
      lastModified: new Date("2026-11-06"),
      changeFrequency: "weekly",
      priority: 0.85,
    }),
  );

  const productReviewRoutes: MetadataRoute.Sitemap = getAllProductReviews().map(
    (review) => ({
      url: `${base}/reviews/${review.category}/${review.slug}`,
      lastModified: new Date(review.publishedAt),
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map(
    (article) => ({
      url: `${base}/articles/${article.slug}`,
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...reviewCategoryRoutes,
    ...productReviewRoutes,
    ...articleRoutes,
  ];
}
