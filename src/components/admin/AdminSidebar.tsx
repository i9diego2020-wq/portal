"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Tags,
  Cpu,
  History,
  Settings,
  LogOut,
  ExternalLink,
  Shield,
} from "lucide-react";

const NAVIGATION_ITEMS = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Artigos", href: "/admin/artigos", icon: FileText },
  { name: "Categorias", href: "/admin/categorias", icon: FolderTree },
  { name: "Temas de IA", href: "/admin/temas", icon: Tags },
  { name: "Configurações de IA", href: "/admin/ia", icon: Cpu },
  { name: "Histórico de Execuções", href: "/admin/historico", icon: History },
  { name: "Configurações Gerais", href: "/admin/configuracoes", icon: Settings },
];

export const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 min-h-screen text-slate-300">
      <div>
        {/* Logo / Header */}
        <div className="p-5 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center text-white font-extrabold text-lg">
              BR
            </div>
            <div>
              <span className="font-bold text-white text-base block leading-tight">
                Painel Info BR
              </span>
              <span className="text-[11px] text-sky-400 font-medium">
                Peter Port Solucoes
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Info & Portal Link */}
      <div className="p-4 border-t border-slate-800 space-y-3">
        <div className="bg-slate-850 p-3 rounded-lg text-[11px] text-slate-400 border border-slate-800">
          <span className="text-slate-300 font-semibold block">CNPJ / Licença:</span>
          <span className="font-mono text-sky-400">40088094000117</span>
        </div>

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            Ver Portal Público
          </span>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
            Live
          </span>
        </Link>
      </div>
    </aside>
  );
};
