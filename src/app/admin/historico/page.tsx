import { AdminHeader } from "@/components/admin/AdminHeader";
import { History, CheckCircle, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Histórico de Execuções - Peter Port Solucoes",
};

const EXECUTION_LOGS = [
  {
    id: "job-1",
    date: "19/11/2026 09:00:14",
    topic: "Tecnologia e Inteligência Artificial",
    subject: "Como os Modelos Autônomos de IA Estão Redefinindo o Jornalismo",
    model: "gemini-1.5-pro",
    duration: "4.2s",
    tokens: "3.420",
    cost: "$0.0085",
    status: "Concluído",
    url: "/artigo/como-modelos-autonomos-de-ia-estao-revolucionando-as-redacoes-modernas",
  },
  {
    id: "job-2",
    date: "18/11/2026 09:00:11",
    topic: "Finanças e Economia",
    subject: "Planejamento Financeiro Estratégico em Períodos de Transição",
    model: "gemini-1.5-pro",
    duration: "3.8s",
    tokens: "3.180",
    cost: "$0.0079",
    status: "Concluído",
    url: "/artigo/planejamento-financeiro-inteligente-para-o-cenario-economico-atual",
  },
  {
    id: "job-3",
    date: "17/11/2026 09:00:18",
    topic: "Saúde e Bem-estar",
    subject: "Medicina do Futuro: Biomarcadores e Hábitos Diários para Longevidade",
    model: "gemini-1.5-pro",
    duration: "4.5s",
    tokens: "3.650",
    cost: "$0.0091",
    status: "Concluído",
    url: "/artigo/medicina-preventiva-e-os-avancos-em-longevidade-saudavel",
  },
  {
    id: "job-4",
    date: "16/11/2026 09:00:09",
    topic: "Casa, Construção e Decoração",
    subject: "Arquitetura Biofílica: O Retorno dos Elementos Naturais aos Ambientes Urbanos",
    model: "gemini-1.5-pro",
    duration: "3.9s",
    tokens: "3.210",
    cost: "$0.0080",
    status: "Concluído",
    url: "/artigo/biofilia-e-minimalismo-a-nova-era-do-design-residencial",
  },
  {
    id: "job-5",
    date: "15/11/2026 09:00:22",
    topic: "Viagens e Turismo",
    subject: "Ecoturismo de Alto Padrão: 5 Destinos que Preservam Biomas",
    model: "gemini-1.5-pro",
    duration: "4.1s",
    tokens: "3.340",
    cost: "$0.0083",
    status: "Concluído",
    url: "/artigo/destinos-sustentaveis-para-viajantes-conscientes-em-2027",
  },
];

export default function AdminHistoryPage() {
  return (
    <>
      <AdminHeader
        title="Histórico de Execuções da IA"
        subtitle="Registro completo de auditoria, tempos, consumo de tokens e custos estimados por artigo"
      />

      <main className="p-6 sm:p-8 space-y-6 flex-1">
        {/* Identificação institucional */}
        <div className="text-xs text-slate-500 bg-white border border-slate-200 p-3 rounded-lg flex items-center justify-between">
          <span>
            Auditoria Operacional: <strong>Peter Port Solucoes Digitais</strong> — CNPJ: <strong>40088094000117</strong>
          </span>
          <span className="font-semibold text-slate-700">Taxa de Sucesso: 100%</span>
        </div>

        {/* Tabela do Histórico */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Data e Hora</th>
                  <th className="py-3 px-4">Tema Ativo</th>
                  <th className="py-3 px-4">Pauta Gerada</th>
                  <th className="py-3 px-4">Modelo</th>
                  <th className="py-3 px-4">Tempo</th>
                  <th className="py-3 px-4">Tokens</th>
                  <th className="py-3 px-4">Custo</th>
                  <th className="py-3 px-4">Resultado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {EXECUTION_LOGS.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-slate-900">
                      {log.date}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {log.topic}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs truncate">
                      <Link
                        href={log.url}
                        target="_blank"
                        className="text-sky-700 hover:underline flex items-center gap-1 font-medium"
                      >
                        <span className="truncate">{log.subject}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-500">{log.model}</td>
                    <td className="py-3.5 px-4 font-mono">{log.duration}</td>
                    <td className="py-3.5 px-4 font-mono">{log.tokens}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-900 font-semibold">{log.cost}</td>
                    <td className="py-3.5 px-4">
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold px-2 py-0.5 rounded text-[11px] inline-flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {log.status}
                      </span>
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
