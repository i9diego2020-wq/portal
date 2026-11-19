import Link from "next/link";
import { Article } from "@/types/content";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";

interface FeaturedHeroProps {
  article: Article;
}

export const FeaturedHero: React.FC<FeaturedHeroProps> = ({ article }) => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-xl mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Text Area */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Matéria em Destaque
              </span>
              <Link
                href={`/categoria/${article.category.slug}`}
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                {article.category.name}
              </Link>
            </div>

            <h1 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-white mb-4">
              <Link
                href={`/artigo/${article.slug}`}
                className="hover:text-sky-300 transition-colors"
              >
                {article.title}
              </Link>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
              {article.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-200">{article.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <Link
              href={`/artigo/${article.slug}`}
              className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm shadow-md transition-colors"
            >
              Ler Matéria Completa
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Image Area */}
        <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
          <img
            src={article.coverImage}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};
