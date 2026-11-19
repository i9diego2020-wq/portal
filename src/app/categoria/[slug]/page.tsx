import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { ArticleCard } from "@/components/ui/ArticleCard";
import {
  DEMO_CATEGORIES,
  DEMO_FEATURED_ARTICLE,
  DEMO_LATEST_ARTICLES,
  DEMO_POPULAR_ARTICLES,
} from "@/lib/demo-data";
import { ChevronRight, Folder } from "lucide-react";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const ALL_ARTICLES = [
  DEMO_FEATURED_ARTICLE,
  ...DEMO_LATEST_ARTICLES,
  ...DEMO_POPULAR_ARTICLES,
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = DEMO_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Categoria não encontrada",
    };
  }

  return {
    title: `${category.name} - Peter Port Solucoes`,
    description: `Artigos e análises em ${category.name}. Portal Info BR e Peter Port Solucoes Digitais 40088094000117.`,
    openGraph: {
      title: `${category.name} - Peter Port Solucoes`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = DEMO_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const articles = ALL_ARTICLES.filter((a) => a.category.slug === category.slug);

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
          <span className="text-slate-400">Editorias</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">{category.name}</span>
        </nav>

        {/* Cabeçalho da Categoria */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 mb-10">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Folder className="w-4 h-4" />
            <span>Editoria Especializada</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl tracking-tight mb-3">
            {category.name}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            {category.description}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
            Curadoria sob a supervisão editorial de <strong>Peter Port Solucoes Digitais</strong> (Identificador: <strong>40088094000117</strong>).
          </div>
        </div>

        {/* Listagem de Artigos */}
        <section>
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-slate-900">
            <h2 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
              Artigos Publicados ({articles.length})
            </h2>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((art) => (
                <ArticleCard key={art.id} article={art} variant="standard" />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center border border-slate-200 rounded-xl bg-slate-50">
              <p className="text-slate-600 font-medium">
                Nenhum artigo publicado recentemente nesta editoria.
              </p>
              <p className="text-xs text-slate-400 mt-2">
                O motor automatizado de IA programará novas publicações em breve.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
