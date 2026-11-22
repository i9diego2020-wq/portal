import { NextRequest, NextResponse } from "next/server";
import { generateArticleWithGemini } from "@/lib/ai/engine";
import { DEMO_CATEGORIES } from "@/lib/demo-data";

export const maxDuration = 60; // Permite execuções completas na Vercel
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  // Verificação de segurança: autorizar se houver CRON_SECRET coincidente ou requisição de desenvolvimento
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    const urlSecret = request.nextUrl.searchParams.get("secret");
    if (urlSecret !== cronSecret) {
      return NextResponse.json(
        { error: "Acesso não autorizado. Token de segurança inválido." },
        { status: 401 }
      );
    }
  }

  const startTime = Date.now();

  try {
    // 1. Escolher tema ativo aleatoriamente
    const randomCategory =
      DEMO_CATEGORIES[Math.floor(Math.random() * DEMO_CATEGORIES.length)];
    const chosenTopic = randomCategory.name;

    // 2. Executar o motor Gemini
    const article = await generateArticleWithGemini(
      chosenTopic,
      randomCategory.name
    );

    // 3. Salvar no Supabase para exibição imediata no site
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/articles`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": supabaseKey,
            "Authorization": `Bearer ${supabaseKey}`,
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({
            title: article.title,
            subtitle: article.subtitle,
            slug: article.slug,
            content: article.content,
            summary: article.summary,
            category_name: randomCategory.name,
            category_slug: randomCategory.slug,
            cover_image: article.coverImage,
            image_alt: article.imageAlt,
            author: article.author,
            read_time: article.readTime,
            status: "published",
            meta_title: article.metaTitle,
            meta_description: article.metaDescription,
            tags: article.tags
          })
        });
      } catch (saveError) {
        console.error("Erro ao persistir artigo no Supabase:", saveError);
      }
    }

    const executionTimeMs = Date.now() - startTime;

    // 3. Resposta de sucesso com auditoria completa
    return NextResponse.json({
      success: true,
      message: "Artigo gerado e publicado automaticamente com sucesso.",
      data: {
        title: article.title,
        slug: article.slug,
        category: randomCategory.name,
        metaTitle: article.metaTitle,
        readTime: article.readTime,
        executionTimeMs,
        company: "Peter Port Solucoes Digitais",
        taxId: "40088094000117",
        articleUrl: `https://portalinfobr.cc/artigo/${article.slug}`,
      },
    });
  } catch (error: any) {
    console.error("Falha na execução do Vercel Cron de publicação:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Erro desconhecido na geração do artigo.",
      },
      { status: 500 }
    );
  }
}
