import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  FileText,
  Clock,
  Layers,
  Sparkles,
  TrendingUp,
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  DollarSign,
  Activity,
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <>
      <AdminHeader
        title="Visão Geral do Portal"
        subtitle="Métricas de publicação diária e status do motor editorial autônomo"
      />

      <main className="p-6 sm:p-8 space-y-8 flex-1">
        {/* Aviso Institucional Obrigatório */}
        <div className="bg-sky-50 border border-sky-200/80 rounded-xl p-4 flex items-center justify-between text-xs text-sky-950">
          <div>
            <span>Sistema operacional sob gestão da </span>
            <strong className="font-semibold">Peter Port Solucoes Digitais</strong>
            <span> — CNPJ / Registro Técnico: </span>
            <strong className="font-mono font-semibold">40088094000117</strong>.
          </div>
          <span className="bg-white border border-sky-300 text-sky-800 px-2 py-0.5 rounded font-mono text-[11px]">
            Vercel Cron: Diário às 09:00 BRT
          </span>
        </div>

        {/* 1. CARDS DE MÉTRICAS PRINCIPAIS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Total Artigos */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-3 text-xs font-semibold uppercase tracking-wider">
              <span>Total de Artigos</span>
              <FileText className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-3xl font-black text-slate-900">42</div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium mt-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+1 publicado hoje</span>
            </div>
          </div>

          {/* Artigos no Mês */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-3 text-xs font-semibold uppercase tracking-wider">
              <span>Publicações no Mês</span>
              <Clock className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-black text-slate-900">19</div>
            <p className="text-xs text-slate-500 mt-2">
              Frequência de 1 artigo / dia
            </p>
          </div>

          {/* Temas Ativos */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-3 text-xs font-semibold uppercase tracking-wider">
              <span>Temas Ativos na IA</span>
              <Layers className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-3xl font-black text-slate-900">8</div>
            <Link
              href="/admin/temas"
              className="text-xs text-sky-600 font-medium mt-2 block hover:underline"
            >
              Gerenciar temas cadastrados →
            </Link>
          </div>

          {/* Consumo da API */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-3 text-xs font-semibold uppercase tracking-wider">
              <span>Custo Estimado API</span>
              <DollarSign className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-3xl font-black text-slate-900">$0.18</div>
            <p className="text-xs text-slate-500 mt-2">
              Google Gemini 1.5 Pro
            </p>
          </div>
        </div>

        {/* 2. STATUS DO MOTOR EDITORIAL E PRÓXIMA EXECUÇÃO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card Próxima Execução */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                  <Activity className="w-4 h-4" />
                  Status da Automação
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  Em Operação
                </span>
              </div>
              <h3 className="font-bold text-xl mb-2">Próxima Publicação Automatizada</h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                O motor editorial selecionará aleatoriamente um dos temas ativos e gerará o próximo artigo inédito, com checagem factual, imagens e SEO.
              </p>

              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-xs block">Horário Programado:</span>
                  <span className="text-white font-bold text-base">Amanhã às 09:00 (BRT)</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 text-xs block">Provedor IA:</span>
                  <span className="text-sky-400 font-semibold text-xs">Gemini 1.5 Pro</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Sem necessidade de aprovação humana</span>
              <Link
                href="/admin/ia"
                className="text-sky-400 hover:text-white transition-colors"
              >
                Ajustar parâmetros de IA →
              </Link>
            </div>
          </div>

          {/* Último Artigo Publicado */}
          <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Última Publicação
                </span>
                <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Publicado
                </span>
              </div>

              <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block mb-1">
                Tecnologia e IA
              </span>
              <h3 className="font-bold text-slate-900 text-base leading-snug mb-2">
                Como os Modelos Autônomos de Inteligência Artificial Estão Redefinindo o Jornalismo e a Produção Editorial
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                Da curadoria em tempo real à verificação automatizada de fatos, compreenda os bastidores da transformação tecnológica...
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">Publicado hoje às 09:00</span>
              <Link
                href="/artigo/como-modelos-autonomos-de-ia-estao-revolucionando-as-redacoes-modernas"
                target="_blank"
                className="text-sky-600 hover:text-sky-800 font-semibold flex items-center gap-1"
              >
                Visualizar Artigo
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. HISTÓRICO DAS ÚLTIMAS EXECUÇÕES */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-base">
              Últimas Execuções do Motor Editorial
            </h3>
            <Link
              href="/admin/historico"
              className="text-xs font-semibold text-sky-600 hover:text-sky-800"
            >
              Ver histórico completo →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase font-bold">
                <tr>
                  <th className="py-2.5 px-3">Data/Hora</th>
                  <th className="py-2.5 px-3">Tema</th>
                  <th className="py-2.5 px-3">Pauta Escolhida</th>
                  <th className="py-2.5 px-3">Modelo</th>
                  <th className="py-2.5 px-3">Tempo</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-3 font-medium">19/11/2026 09:00</td>
                  <td className="py-3 px-3">Tecnologia e IA</td>
                  <td className="py-3 px-3 max-w-xs truncate">Modelos autônomos no jornalismo</td>
                  <td className="py-3 px-3 font-mono">gemini-1.5-pro</td>
                  <td className="py-3 px-3">4.2s</td>
                  <td className="py-3 px-3">
                    <span className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded text-[11px]">
                      Concluído
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-3 font-medium">18/11/2026 09:00</td>
                  <td className="py-3 px-3">Finanças e Economia</td>
                  <td className="py-3 px-3 max-w-xs truncate">Planejamento financeiro inteligente</td>
                  <td className="py-3 px-3 font-mono">gemini-1.5-pro</td>
                  <td className="py-3 px-3">3.8s</td>
                  <td className="py-3 px-3">
                    <span className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded text-[11px]">
                      Concluído
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/60">
                  <td className="py-3 px-3 font-medium">17/11/2026 09:00</td>
                  <td className="py-3 px-3">Saúde e Bem-estar</td>
                  <td className="py-3 px-3 max-w-xs truncate">Medicina preventiva e longevidade</td>
                  <td className="py-3 px-3 font-mono">gemini-1.5-pro</td>
                  <td className="py-3 px-3">4.5s</td>
                  <td className="py-3 px-3">
                    <span className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded text-[11px]">
                      Concluído
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
