"use client";

import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Cpu, Save, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function AdminAISettingsPage() {
  const [model, setModel] = useState("gemini-1.5-pro");
  const [minWords, setMinWords] = useState(1200);
  const [maxWords, setMaxWords] = useState(1800);
  const [editorialTone, setEditorialTone] = useState("analitico_jornalistico");
  const [enableWebSearch, setEnableWebSearch] = useState(true);
  const [enableImageGen, setEnableImageGen] = useState(true);
  const [dailyLimit, setDailyLimit] = useState(1);
  const [scheduledHour, setScheduledHour] = useState(9);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <>
      <AdminHeader
        title="Motor de Inteligência Artificial"
        subtitle="Configurações do provedor, modelo Gemini, parâmetros de escrita e automação"
      />

      <main className="p-6 sm:p-8 space-y-6 flex-1 max-w-4xl">
        {/* Identificação institucional */}
        <div className="text-xs text-slate-500 bg-white border border-slate-200 p-3 rounded-lg flex items-center justify-between">
          <span>
            Supervisão: <strong>Peter Port Solucoes Digitais</strong> — CNPJ: <strong>40088094000117</strong>
          </span>
          <span className="font-semibold text-sky-700">Automação Contínua Ativa</span>
        </div>

        {savedSuccess && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-3 rounded-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Configurações do motor editorial salvas com sucesso!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
            <Cpu className="w-5 h-5 text-sky-600" />
            <h2 className="font-bold text-slate-900 text-base">
              Parâmetros de Geração Editorial
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                Modelo Google Gemini
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
              >
                <option value="gemini-1.5-pro">Google Gemini 1.5 Pro (Recomendado)</option>
                <option value="gemini-1.5-flash">Google Gemini 1.5 Flash (Rápido)</option>
                <option value="gemini-2.0-flash">Google Gemini 2.0 Flash</option>
              </select>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Permite alternar o modelo sem alterar código.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                Tom Editorial
              </label>
              <select
                value={editorialTone}
                onChange={(e) => setEditorialTone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
              >
                <option value="analitico_jornalistico">Analítico & Jornalístico (Padrão)</option>
                <option value="educativo_aprofundado">Educativo & Aprofundado</option>
                <option value="executivo_direto">Executivo & Direto</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                Tamanho do Artigo (Mínimo de palavras)
              </label>
              <input
                type="number"
                value={minWords}
                onChange={(e) => setMinWords(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                Tamanho do Artigo (Máximo de palavras)
              </label>
              <input
                type="number"
                value={maxWords}
                onChange={(e) => setMaxWords(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                Artigos por Dia
              </label>
              <input
                type="number"
                min="1"
                max="5"
                value={dailyLimit}
                onChange={(e) => setDailyLimit(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">Configuração inicial: 1 por dia.</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1.5">
                Horário da Publicação Automática (Fuso de Brasília)
              </label>
              <select
                value={scheduledHour}
                onChange={(e) => setScheduledHour(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
              >
                <option value="6">06:00 BRT</option>
                <option value="9">09:00 BRT (Padrão)</option>
                <option value="12">12:00 BRT</option>
                <option value="18">18:00 BRT</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Recursos de Apoio Automatizados
            </h3>

            <label className="flex items-center gap-3 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={enableWebSearch}
                onChange={(e) => setEnableWebSearch(e.target.checked)}
                className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
              />
              <span><strong>Pesquisa externa de fontes na internet</strong> para checagem factual</span>
            </label>

            <label className="flex items-center gap-3 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={enableImageGen}
                onChange={(e) => setEnableImageGen(e.target.checked)}
                className="rounded text-sky-600 focus:ring-sky-500 w-4 h-4"
              />
              <span><strong>Geração e otimização de imagem de capa</strong> para cada artigo publicado</span>
            </label>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Parâmetros da IA</span>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
