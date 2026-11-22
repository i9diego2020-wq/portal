import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { FeaturedHero } from "@/components/ui/FeaturedHero";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { getAllArticles } from "@/lib/articles";
import { DEMO_CATEGORIES } from "@/lib/demo-data";
import { Flame, Compass, ArrowRight, Layers, Info } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const articles = await getAllArticles();
  const featured = articles[0];
  const latestArticles = articles.slice(1, 6);
  const popularArticles = articles.slice(2, 6);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* 1. ARTIGO PRINCIPAL EM DESTAQUE */}
        <FeaturedHero article={featured} />

        {/* 2. GRID PRINCIPAL: ÚLTIMAS MATÉRIAS + MAIS LIDAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Coluna Esquerda: Últimos Artigos (8 cols) */}
          <section className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-slate-900">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
                <h2 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
                  Últimas Publicações
                </h2>
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Atualização Contínua
              </span>
            </div>

            <div className="space-y-4">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="horizontal"
                />
              ))}
            </div>
          </section>

          {/* Coluna Direita: Artigos Populares / Ranking (4 cols) */}
          <aside className="lg:col-span-4">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-200">
                <Flame className="w-5 h-5 text-amber-500" />
                <h3 className="font-serif font-black text-lg text-slate-900 uppercase tracking-tight">
                  Mais Lidas
                </h3>
              </div>

              <div className="space-y-4">
                {popularArticles.map((article, idx) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    variant="popular"
                    index={idx}
                  />
                ))}
              </div>

              {/* Newsletter / Assinatura de Notificações */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Radar Editorial Diário
                </h4>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Receba diretamente em seu e-mail o resumo analítico dos temas que moldam o Brasil e o mundo.
                </p>
                <form action="/newsletter" method="POST" className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Inscrever-se gratuitamente
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>

        {/* 3. BLOCOS POR CATEGORIA / EXPLORAÇÃO TEMÁTICA */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-slate-900">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-sky-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900">
                Explorar por Editoria
              </h2>
            </div>
            <Link
              href="/categoria/tecnologia-e-ia"
              className="text-xs font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1"
            >
              Ver todas as categorias
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Cards em Grid 4 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestArticles.slice(0, 4).map((art) => (
              <ArticleCard key={`grid-${art.id}`} article={art} variant="standard" />
            ))}
          </div>
        </section>

        {/* 4. SELETOR RÁPIDO DE TEMAS / PILLS */}
        <section className="bg-slate-900 rounded-2xl p-8 sm:p-10 text-white mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              <span>Painel de Assuntos</span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight mb-3">
              Cobertura editorial multidisciplinar e contínua
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Nossa redação digital acompanha áreas estratégicas do conhecimento para produzir análises precisas, sem redundâncias e com alta profundidade informativa.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {DEMO_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categoria/${cat.slug}`}
                className="bg-slate-800 hover:bg-sky-600 hover:text-white border border-slate-700 text-slate-200 text-xs font-medium px-4 py-2 rounded-full transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>

        <p className="text-xs text-slate-400 mt-4">
          Peter Port Solucoes Digitais 40088094000117
        </p>
      </main>

      <Footer />
    </div>
  );
}
