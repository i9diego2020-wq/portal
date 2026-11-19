import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/content";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  variant?: "standard" | "compact" | "horizontal" | "popular";
  index?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = "standard",
  index,
}) => {
  if (variant === "popular") {
    return (
      <article className="group flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
        <span className="text-2xl font-serif font-black text-slate-300 group-hover:text-sky-600 transition-colors shrink-0 w-6">
          {index !== undefined ? String(index + 1).padStart(2, "0") : "•"}
        </span>
        <div className="flex-1 min-w-0">
          <Link
            href={`/categoria/${article.category.slug}`}
            className="text-xs font-semibold text-sky-700 hover:underline uppercase tracking-wider"
          >
            {article.category.name}
          </Link>
          <h4 className="font-semibold text-slate-900 group-hover:text-sky-700 transition-colors text-sm line-clamp-2 mt-1 leading-snug">
            <Link href={`/artigo/${article.slug}`}>{article.title}</Link>
          </h4>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "horizontal") {
    return (
      <article className="group grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-sm transition-all">
        <div className="relative sm:col-span-5 h-48 sm:h-auto rounded-lg overflow-hidden bg-slate-100">
          <img
            src={article.coverImage}
            alt={article.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <span className="absolute top-2 left-2 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded">
            {article.category.name}
          </span>
        </div>
        <div className="sm:col-span-7 flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            <h3 className="font-bold text-slate-900 group-hover:text-sky-700 transition-colors text-base sm:text-lg leading-snug line-clamp-2">
              <Link href={`/artigo/${article.slug}`}>{article.title}</Link>
            </h3>
            <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
              {article.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedAt}
            </span>
            <span className="text-sky-600 font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Ler artigo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    );
  }

  // Standard Card
  return (
    <article className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={article.coverImage}
          alt={article.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Link
            href={`/categoria/${article.category.slug}`}
            className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-2.5 py-1 rounded shadow-xs transition-colors"
          >
            {article.category.name}
          </Link>
        </div>
      </div>
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
          </div>
          <h3 className="font-bold text-slate-900 group-hover:text-sky-700 transition-colors text-base sm:text-lg leading-snug line-clamp-2">
            <Link href={`/artigo/${article.slug}`}>{article.title}</Link>
          </h3>
          <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
            {article.subtitle}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">{article.author}</span>
          <Link
            href={`/artigo/${article.slug}`}
            className="text-xs font-semibold text-sky-600 group-hover:text-sky-800 inline-flex items-center gap-0.5"
          >
            Acessar <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
