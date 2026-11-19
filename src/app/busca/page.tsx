import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { ArticleCard } from "@/components/ui/ArticleCard";
import {
  DEMO_FEATURED_ARTICLE,
  DEMO_LATEST_ARTICLES,
  DEMO_POPULAR_ARTICLES,
} from "@/lib/demo-data";
import { Search, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

const ALL_ARTICLES = [
  DEMO_FEATURED_ARTICLE,
  ...DEMO_LATEST_ARTICLES,
  ...DEMO_POPULAR_ARTICLES,
];

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  const term = q ? `Busca por "${q}"` : "Busca no Portal";

  return {
    title: `${term} - Peter Port Solucoes`,
    description: `Resultados da busca no Portal Info BR. Peter Port Solucoes Digitais 40088094000117.`,
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = (q || "").trim().toLowerCase();

  const results = query
    ? ALL_ARTICLES.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.subtitle.toLowerCase().includes(query) ||
          article.category.name.toLowerCase().includes(query) ||
          article.tags.some((t) => t.toLowerCase().includes(query))
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600 transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Pesquisa de Conteúdo</span>
        </nav>

        {/* Search Header */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 mb-10">
          <h1 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 mb-2">
            Pesquisa no Acervo Editorial
          </h1>
          <p className="text-slate-600 text-sm mb-6">
            Busque em todo o arquivo do <strong>Portal Info BR</strong> mantido por <strong>Peter Port Solucoes Digitais</strong> (Código: <strong>40088094000117</strong>).
          </p>

          <form method="GET" action="/busca" className="relative max-w-2xl">
            <input
              type="text"
              name="q"
              defaultValue={q || ""}
              placeholder="Digite termos de pesquisa (ex: inteligência artificial, finanças, saúde)..."
              className="w-full bg-white border border-slate-300 rounded-xl pl-12 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 shadow-xs"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Resultados */}
        {query ? (
          <section>
            <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-slate-900">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                Resultados para: <span className="text-sky-700 italic">"{q}"</span> ({results.length})
              </h2>
            </div>

            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((art) => (
                  <ArticleCard key={art.id} article={art} variant="horizontal" />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center border border-slate-200 rounded-xl bg-slate-50">
                <p className="text-slate-700 font-semibold text-base">
                  Nenhum resultado encontrado para "{q}".
                </p>
                <p className="text-slate-500 text-xs mt-2">
                  Tente utilizar palavras-chave mais genéricas ou navegue pelas nossas editorias temáticas.
                </p>
              </div>
            )}
          </section>
        ) : (
          <div className="p-8 text-center border border-slate-200 rounded-xl bg-slate-50 text-slate-500 text-sm">
            Digite um termo de pesquisa acima para filtrar os artigos publicados.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
