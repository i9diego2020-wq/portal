import { MetadataRoute } from "next";
import {
  DEMO_FEATURED_ARTICLE,
  DEMO_LATEST_ARTICLES,
  DEMO_POPULAR_ARTICLES,
  DEMO_CATEGORIES,
} from "@/lib/demo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portalinfobr.cc";

  const staticPages = [
    "",
    "/sobre",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/busca",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.7,
  }));

  const categoryPages = DEMO_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/categoria/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const allArticles = [
    DEMO_FEATURED_ARTICLE,
    ...DEMO_LATEST_ARTICLES,
    ...DEMO_POPULAR_ARTICLES,
  ];

  const articlePages = allArticles.map((art) => ({
    url: `${baseUrl}/artigo/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
