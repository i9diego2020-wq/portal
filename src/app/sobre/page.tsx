import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Shield, Target, BookOpen, Award, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós - Peter Port Solucoes",
  description: "Conheça o Portal Info BR e a equipe editorial da Peter Port Solucoes Digitais 40088094000117.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600 transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Sobre o Portal</span>
        </nav>

        {/* Hero Institucional */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Missão Editorial
          </span>
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-slate-950 mt-4 mb-4 tracking-tight">
            Sobre o Portal Info BR
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Uma plataforma de comunicação e difusão de conhecimento independente, desenhada para fornecer clareza, relevância e sínteses aprofundadas em um ambiente de sobrecarga informacional.
          </p>
        </div>

        {/* Conteúdo Institucional com as palavras obrigatórias */}
        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            O <strong>Portal Info BR</strong> (disponível através do domínio oficial <code>portalinfobr.cc</code>) nasceu com a proposta de elevar o nível do debate público e da informação digital em língua portuguesa. Combinamos tecnologias avançadas de processamento analítico com diretrizes rigorosas de verificação factual.
          </p>

          <p>
            A infraestrutura tecnológica e a gestão das publicações digitais são operadas por <strong>Peter Port Solucoes Digitais</strong>, entidade devidamente cadastrada sob o identificador fiscal <strong>40088094000117</strong>, assegurando conformidade com os mais elevados padrões de governança na web brasileira.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-950 mt-8 mb-4">
            Nossos Pilares Editoriais
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-8">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <Shield className="w-6 h-6 text-sky-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Rigor e Checagem</h3>
              <p className="text-sm text-slate-600">
                Todo conteúdo passa por validações de procedência de dados, evitando a disseminação de informações infundadas ou sensacionalistas.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <Target className="w-6 h-6 text-sky-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Objetividade Analítica</h3>
              <p className="text-sm text-slate-600">
                Textos estruturados para leitura dinâmica, priorizando a síntese precisa sem abrir mão da profundidade conceitual.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <BookOpen className="w-6 h-6 text-sky-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Multidisciplinaridade</h3>
              <p className="text-sm text-slate-600">
                Cobertura ampla de 8 macrotemas essenciais, da inteligência artificial à gastronomia, saúde e finanças.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <Award className="w-6 h-6 text-sky-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Transparência Técnica</h3>
              <p className="text-sm text-slate-600">
                Clareza nas referências de fontes externas, links de aprofundamento e políticas de privacidade alinhadas à LGPD.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-serif font-bold text-slate-950 mt-8 mb-4">
            Governança e Responsabilidade
          </h2>
          <p>
            Em respeito à legislação aplicável e à proteção de dados dos nossos leitores, a equipe de desenvolvimento da <strong>Peter Port Solucoes Digitais</strong> (código <strong>40088094000117</strong>) adota protocolos de segurança em camada, comunicações criptografadas e conformidade técnica permanente.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
