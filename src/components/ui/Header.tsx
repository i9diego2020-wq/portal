"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Globe, TrendingUp } from "lucide-react";
import { Logo } from "./Logo";
import { DEMO_CATEGORIES } from "@/lib/demo-data";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="capitalize text-slate-400 hidden sm:inline">Edição Nacional</span>
            <div className="flex items-center gap-1.5 text-sky-400 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Edição Digital Atualizada</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link>
            <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
            <Link href="/admin" className="text-sky-300 hover:text-white transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>Painel</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <Logo />

        {/* Search bar desktop */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <form action="/busca" method="GET" className="w-full relative">
            <input
              type="text"
              name="q"
              placeholder="Pesquise por tecnologia, economia, saúde..."
              className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </form>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Abrir busca"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile search input */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 pt-1 border-t border-slate-100 bg-slate-50">
          <form action="/busca" method="GET" className="relative">
            <input
              type="text"
              name="q"
              placeholder="Buscar no Portal Info BR..."
              className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600"
              autoFocus
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </form>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="border-t border-slate-100 hidden lg:block bg-white shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="flex items-center gap-1 overflow-x-auto py-2 text-sm font-semibold text-slate-700 scrollbar-none">
            <li>
              <Link
                href="/"
                className="px-3.5 py-1.5 rounded-md hover:bg-slate-100 hover:text-sky-700 transition-colors block text-sky-700 bg-sky-50"
              >
                Início
              </Link>
            </li>
            {DEMO_CATEGORIES.map((cat) => (
              <li key={cat.id} className="shrink-0">
                <Link
                  href={`/categoria/${cat.slug}`}
                  className="px-3.5 py-1.5 rounded-md hover:bg-slate-100 hover:text-sky-700 transition-colors block"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Categorias</div>
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium rounded-lg bg-sky-50 text-sky-700"
              >
                Página Inicial
              </Link>
            </li>
            {DEMO_CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/categoria/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-50 hover:text-sky-600 transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-slate-100 mt-4 pt-4 flex flex-col gap-2 text-sm text-slate-600 px-2">
            <Link href="/sobre" onClick={() => setMobileMenuOpen(false)} className="py-1">Sobre o Portal</Link>
            <Link href="/contato" onClick={() => setMobileMenuOpen(false)} className="py-1">Fale Conosco</Link>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="py-1 font-semibold text-sky-600">Área Administrativa</Link>
          </div>
        </div>
      )}
    </header>
  );
};
