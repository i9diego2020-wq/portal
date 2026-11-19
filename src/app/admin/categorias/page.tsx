import { AdminHeader } from "@/components/admin/AdminHeader";
import { DEMO_CATEGORIES } from "@/lib/demo-data";
import Link from "next/link";
import { FolderTree, ExternalLink, Hash } from "lucide-react";

export const metadata = {
  title: "Categorias - Peter Port Solucoes",
};

export default function AdminCategoriesPage() {
  return (
    <>
      <AdminHeader
        title="Categorias Editoriais"
        subtitle="Editorias estruturadas do portal para catalogação e indexação SEO"
      />

      <main className="p-6 sm:p-8 space-y-6 flex-1">
        <div className="text-xs text-slate-500 bg-white border border-slate-200 p-3 rounded-lg flex items-center justify-between">
          <span>
            Gestão: <strong>Peter Port Solucoes Digitais</strong> — CNPJ: <strong>40088094000117</strong>
          </span>
          <span className="font-semibold text-slate-700">
            {DEMO_CATEGORIES.length} Editorias Ativas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMO_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-lg bg-sky-50 text-sky-700 border border-sky-100">
                    <FolderTree className="w-4 h-4" />
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">/{cat.slug}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{cat.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{cat.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Status: Ativa</span>
                <Link
                  href={`/categoria/${cat.slug}`}
                  target="_blank"
                  className="text-sky-600 hover:text-sky-800 font-semibold flex items-center gap-1"
                >
                  Ver no Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
