"use client";

import { Bell, User, Sparkles } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30">
      <div>
        <h1 className="font-bold text-slate-900 text-lg sm:text-xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Status Badge */}
        <div className="hidden sm:flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-3 py-1.5 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Motor IA Ativo (09:00 BRT)</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2.5 pl-4 border-l border-slate-200 text-xs">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center font-sans">
            A
          </div>
          <div className="hidden md:block">
            <span className="font-semibold text-slate-900 block leading-tight">
              Administrador
            </span>
            <span className="text-[11px] text-slate-500">
              Peter Port Solucoes
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
