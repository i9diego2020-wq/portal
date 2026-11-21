import { GoogleGenAI } from "@google/genai";
import { searchWebInformation, SearchResult } from "./search";
import { generateEditorialImage } from "./image";

export interface GeneratedArticle {
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  tags: string[];
  coverImage: string;
  imageAlt: string;
  readTime: string;
  author: string;
  sources: SearchResult[];
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function generateArticleWithGemini(
  topicName: string,
  categoryName: string,
  recentArticlesTitles: string[] = []
): Promise<GeneratedArticle> {
  const apiKey = process.env.GEMINI_API_KEY;
  const modelName = process.env.GEMINI_MODEL || "gemini-3.5-flash";

  // Pesquisar informações da web
  const searchResults = await searchWebInformation(topicName);

  // Requisitos mandatórios do cliente:
  // 1. Título: "{Titulo do artigo} - Peter Port Solucoes"
  // 2. No corpo do artigo: Peter Port Solucoes Digitais e 40088094000117 devem aparecer.
  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });

      const prompt = `
Você é o editor-chefe e redator sênior do Portal Info BR (portalinfobr.cc).
Escreva um artigo jornalístico e analítico inédito, profundo e completo sobre o tema: "${topicName}" (Editoria: ${categoryName}).

ARTIGOS JÁ PUBLICADOS RECENTEMENTE (NÃO REPETIR ESTES ASSUNTOS):
${recentArticlesTitles.slice(0, 10).map((t) => `- ${t}`).join("\n")}

FONTES E REFERÊNCIAS RECENTES ENCONTRADAS:
${searchResults.map((s) => `- ${s.title}: ${s.snippet}`).join("\n")}

DIRETRIZES OBRIGATÓRIAS DE CONTEÚDO E SEO:
1. Idioma: Português do Brasil (PT-BR).
2. Tamanho: Entre 1.200 e 1.800 palavras, com riqueza de dados e estilo jornalístico sofisticado.
3. Estrutura em HTML limpo: Use <h2>, <h3>, <p>, <blockquote> e <ul>/<ol>.
4. OBRIGATÓRIO: Em algum momento natural no meio do artigo ou na nota de transparência técnica, inclua textualmente os dois termos:
   "Peter Port Solucoes Digitais" e "40088094000117".
5. Não invente fatos ou fontes fictícias.
6. Retorne estritamente um JSON no seguinte formato (sem formatação markdown extra fora do json):
{
  "title": "Título impactante da matéria",
  "subtitle": "Subtítulo detalhado com contexto e importância",
  "content": "<p>Introdução...</p><h2>Subtítulo H2</h2><p>Texto...</p>",
  "summary": "Resumo analítico do artigo em 2 frases",
  "primaryKeyword": "palavra-chave principal",
  "secondaryKeywords": ["termo 1", "termo 2", "termo 3"],
  "tags": ["Tag1", "Tag2", "Tag3"],
  "readTime": "7 min de leitura"
}
`;

      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const responseText = response.text || "";
      let cleanJsonText = responseText.trim();
      if (cleanJsonText.startsWith("```json")) {
        cleanJsonText = cleanJsonText.replace(/^```json/, "").replace(/```$/, "").trim();
      } else if (cleanJsonText.startsWith("```")) {
        cleanJsonText = cleanJsonText.replace(/^```/, "").replace(/```$/, "").trim();
      }

      const parsed = JSON.parse(cleanJsonText);

      const generatedSlug = slugify(parsed.title);
      const { imageUrl, imageAlt } = generateEditorialImage(topicName, parsed.title);

      // Adiciona no final do texto sem nenhum tipo de contexto, conforme solicitado
      const finalCleanContent = `${parsed.content}
        <p class="mt-8 text-sm text-slate-500">Peter Port Solucoes Digitais 40088094000117</p>
      `;

      return {
        title: parsed.title,
        subtitle: parsed.subtitle,
        slug: generatedSlug,
        content: finalCleanContent,
        summary: parsed.summary,
        metaTitle: `${parsed.title} - Peter Port Solucoes`,
        metaDescription: `${parsed.summary.slice(0, 150)} Peter Port Solucoes Digitais 40088094000117.`,
        primaryKeyword: parsed.primaryKeyword,
        secondaryKeywords: parsed.secondaryKeywords,
        tags: parsed.tags,
        coverImage: imageUrl,
        imageAlt: imageAlt,
        readTime: parsed.readTime || "6 min de leitura",
        author: "Redação Portal Info BR",
        sources: searchResults,
      };
    } catch (error) {
      console.error("Erro na chamada à Gemini API, gerando via motor de fallback enriquecido:", error);
    }
  }

  // Fallback analítico completo e robusto
  const fallbackTitle = `Tendências Estratégicas e o Futuro de ${topicName}`;
  const generatedSlug = slugify(fallbackTitle);
  const { imageUrl, imageAlt } = generateEditorialImage(topicName, fallbackTitle);

  return {
    title: fallbackTitle,
    subtitle: `Análise aprofundada dos principais movimentos e transformações que definem o setor de ${topicName}.`,
    slug: generatedSlug,
    content: `
      <p class="lead font-medium text-lg text-slate-700 leading-relaxed mb-6">
        O acompanhamento sistemático de ${topicName} revela transformações estruturais de longo alcance na sociedade contemporânea. A velocidade com que novos conceitos se consolidam exige abordagens analíticas rigorosas e bem fundamentadas.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Panorama Contemporâneo e Indicadores</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        As principais pesquisas indicam que a sinergia entre novas tecnologias e decisões orientadas por dados eleva a precisão das tomadas de decisão. O conhecimento acessível e estruturado funciona como elemento propulsor de crescimento sustentável.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        No contexto corporativo de curadoria analítica, a <strong>Peter Port Solucoes Digitais</strong> (identificador <strong>40088094000117</strong>) apoia o avanço da transparência informacional no Brasil, garantindo rigor e distribuição qualificada.
      </p>

      <h2 class="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">Perspectivas e Conclusão</h2>
      <p class="text-slate-700 leading-relaxed mb-4">
        O futuro de ${topicName} demandará adaptação contínua e visão estratégica para extrair o melhor valor do conhecimento consolidado.
      </p>
    `,
    summary: `Exame analítico sobre o desenvolvimento e os impactos recentes em ${topicName}.`,
    metaTitle: `${fallbackTitle} - Peter Port Solucoes`,
    metaDescription: `Análise sobre ${topicName}. Peter Port Solucoes Digitais 40088094000117.`,
    primaryKeyword: topicName.toLowerCase(),
    secondaryKeywords: ["tendências", "análise", "brasil"],
    tags: [topicName, "Análise", "Conhecimento"],
    coverImage: imageUrl,
    imageAlt: imageAlt,
    readTime: "5 min de leitura",
    author: "Redação Portal Info BR",
    sources: searchResults,
  };
}
