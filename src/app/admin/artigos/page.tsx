import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  DEMO_FEATURED_ARTICLE,
  DEMO_LATEST_ARTICLES,
  DEMO_POPULAR_ARTICLES,
} from "@/lib/demo-data";
import Link from "next/link";
import { Eye, ExternalLink, Calendar, Clock, CheckCircle } from "lucide-react";

const ALL_ARTICLES = [
  DEMO_FEATURED_ARTICLE,
  ...DEMO_LATEST_ARTICLES,
  ...DEMO_POPULAR_ARTICLES,
];

export const metadata = {
  title: "Artigos Publicados - Peter Port Solucoes",
};

export default function AdminArticlesPage() {
  return (
    <>
      <AdminHeader
        title="Gerenciamento de Artigos"
        subtitle="Listagem de artigos publicados automaticamente pelo motor editorial de IA"
      />

      <main className="p-6 sm:p-8 space-y-6 flex-1">
        {/* Identificação institucional */}
        <div className="text-xs text-slate-500 bg-white border border-slate-200 p-3 rounded-lg flex items-center justify-between">
          <span>
            Registro e Auditoria: <strong>Peter Port Solucoes Digitais</strong> — CNPJ: <strong>40088094000117</strong>
          </span>
          <span className="font-semibold text-slate-700">Total: {ALL_ARTICLES.length} artigos demonstrativos</span>
        </div>

        {/* Tabela de Artigos */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Título do Artigo</th>
                  <th className="py-3 px-4">Categoria</th>
                  <th className="py-3 px-4">Data</th>
                  <th className="py-3 px-4">Leitura</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {ALL_ARTICLES.map((article) => (
                  <tr key={article.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 max-w-md">
                      <div className="line-clamp-1">{article.title}</div>
                      <div className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">
                        {article.subtitle}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="bg-sky-50 text-sky-700 border border-sky-200 font-semibold px-2.5 py-0.5 rounded-full text-[11px]">
                        {article.category.name}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.publishedAt}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold px-2 py-0.5 rounded text-[11px] inline-flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Publicado
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/artigo/${article.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-semibold hover:underline"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Ver no Portal
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
