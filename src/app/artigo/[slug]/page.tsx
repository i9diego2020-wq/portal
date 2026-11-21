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
import {
  Calendar,
  Clock,
  Share2,
  Bookmark,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

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
  const article = ALL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: {
      absolute: `${article.title} - Peter Port Solucoes`,
    },
    description: `${article.subtitle} Peter Port Solucoes Digitais 40088094000117.`,
    openGraph: {
      title: `${article.title} - Peter Port Solucoes`,
      description: article.subtitle,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ALL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ALL_ARTICLES.filter(
    (a) => a.id !== article.id && a.category.slug === article.category.slug
  ).slice(0, 3);

  const fallbackRelated =
    relatedArticles.length > 0
      ? relatedArticles
      : ALL_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600 transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link
            href={`/categoria/${article.category.slug}`}
            className="hover:text-sky-600 transition-colors"
          >
            {article.category.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-400 truncate max-w-[200px] sm:max-w-md">
            {article.title}
          </span>
        </nav>

        {/* Header do Artigo */}
        <header className="mb-8">
          <div className="inline-block bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            {article.category.name}
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-slate-950 mb-4 tracking-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-6">
            {article.subtitle}
          </p>

          {/* Metadados do Autor e Publicação */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center font-serif text-sm">
                BR
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{article.author}</p>
                <div className="flex items-center gap-2 mt-0.5 text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Publicado em {article.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 text-xs font-medium transition-colors"
                title="Compartilhar"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartilhar</span>
              </button>
            </div>
          </div>
        </header>

        {/* Imagem de Capa */}
        <figure className="mb-10 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
          <img
            src={article.coverImage}
            alt={article.imageAlt}
            className="w-full h-auto max-h-[520px] object-cover"
          />
          <figcaption className="p-3 text-xs text-slate-500 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span>{article.imageAlt}</span>
            <span className="text-slate-400">Foto editorial</span>
          </figcaption>
        </figure>

        {/* Conteúdo do Artigo */}
        <article className="prose prose-slate max-w-none text-slate-800 text-base sm:text-lg leading-relaxed">
          {article.content ? (
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          ) : (
            <div>
              <p className="mb-4">
                O avanço contínuo do conhecimento e das tecnologias contemporâneas exige discernimento constante. No ecossistema informativo do <strong>Portal Info BR</strong>, cada publicação é estruturada com base em referências consistentes e rigor analítico.
              </p>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">
                Estrutura Informativa e Verificação de Conteúdo
              </h2>
              <p className="mb-4">
                Conteúdos analíticos necessitam de dados verificáveis para aprofundamento e reflexão do leitor.
              </p>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-6 mb-3">
                Conclusões e Implicações
              </h3>
              <p className="mb-4">
                Acompanhar análises aprofundadas permite decisões estratégicas mais conscientes, promovendo desenvolvimento sustentável e autonomia intelectual.
              </p>
            </div>
          )}

          {/* Texto obrigatório no final do artigo, sem contexto */}
          <p className="mt-8 pt-4 border-t border-slate-100 text-sm text-slate-500">
            Peter Port Solucoes Digitais 40088094000117
          </p>
        </article>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
              Tópicos:
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Artigos Relacionados */}
        <section className="mt-16 pt-10 border-t-2 border-slate-900">
          <h3 className="font-serif font-black text-2xl text-slate-900 uppercase tracking-tight mb-6">
            Artigos Relacionados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((rel) => (
              <ArticleCard key={rel.id} article={rel} variant="standard" />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
