import { supabase } from "@/lib/supabase/client";
import { Article } from "@/types/content";
import {
  DEMO_FEATURED_ARTICLE,
  DEMO_LATEST_ARTICLES,
  DEMO_POPULAR_ARTICLES,
} from "./demo-data";

export async function getAllArticles(): Promise<Article[]> {
  try {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      const dbArticles: Article[] = data.map((item: any) => ({
        id: item.id,
        slug: item.slug,
        title: item.title,
        subtitle: item.subtitle,
        content: item.content,
        category: {
          id: item.category_id || "cat",
          name: item.category_name,
          slug: item.category_slug,
          description: "",
        },
        coverImage: item.cover_image,
        imageAlt: item.image_alt,
        author: item.author || "Redação Portal Info BR",
        publishedAt: new Date(item.published_at || item.created_at).toLocaleDateString("pt-BR"),
        readTime: item.read_time || "5 min de leitura",
        tags: item.tags || [],
      }));

      // Combina com os artigos padrão para garantir acervo rico
      const existingSlugs = new Set(dbArticles.map((a) => a.slug));
      const fallbackList = [
        DEMO_FEATURED_ARTICLE,
        ...DEMO_LATEST_ARTICLES,
        ...DEMO_POPULAR_ARTICLES,
      ].filter((a) => !existingSlugs.has(a.slug));

      return [...dbArticles, ...fallbackList];
    }
  } catch (err) {
    console.error("Falha ao buscar artigos do Supabase, utilizando fallback local:", err);
  }

  return [
    DEMO_FEATURED_ARTICLE,
    ...DEMO_LATEST_ARTICLES,
    ...DEMO_POPULAR_ARTICLES,
  ];
}
