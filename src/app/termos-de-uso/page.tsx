import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { FileText, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso - Peter Port Solucoes",
  description: "Termos e Condições de Uso do Portal Info BR e Peter Port Solucoes Digitais 40088094000117.",
};

export default function TermsPage() {
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
          <span className="text-slate-800 font-semibold">Termos de Uso</span>
        </nav>

        <div className="mb-10 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
            <FileText className="w-4 h-4" />
            <span>Condições Gerais de Acesso</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
            Termos de Uso
          </h1>
          <p className="text-sm text-slate-500">
            Vigência: Atualizado em Novembro de 2026.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-6 text-base">
          <p>
            Bem-vindo ao <strong>Portal Info BR</strong>. Ao acessar e utilizar o site sob o domínio <code>portalinfobr.cc</code>, você expressa concordância integral com estes Termos de Uso.
          </p>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            1. Propriedade e Operação
          </h2>
          <p>
            O portal é gerido tecnicamente e operacionalizado pela empresa <strong>Peter Port Solucoes Digitais</strong>, portadora do CNPJ <strong>40088094000117</strong>, detentora dos direitos de exploração e veiculação das soluções digitais aqui disponibilizadas.
          </p>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            2. Natureza Informativa e Editorial
          </h2>
          <p>
            Todo o material publicado — incluindo matérias, resumos, infográficos e análises — possui caráter puramente jornalístico, educativo e informativo. Artigos de finanças e investimentos não constituem recomendação explícita de compra ou venda de ativos; artigos de saúde e bem-estar não substituem o aconselhamento médico profissional individualizado.
          </p>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            3. Propriedade Intelectual
          </h2>
          <p>
            A marca, identidade visual, código-fonte, layout e compilação de conteúdos pertencem a <strong>Peter Port Solucoes Digitais</strong>. É vedada a reprodução total ou parcial sem expressa menção de fonte e atribuição do link original para o Portal Info BR.
          </p>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            4. Limitação de Responsabilidade
          </h2>
          <p>
            A administração do <strong>Portal Info BR</strong> empenha os melhores esforços na checagem e integridade dos dados veiculados. Contudo, <strong>Peter Port Solucoes Digitais</strong> (código corporativo <strong>40088094000117</strong>) não se responsabiliza por eventuais decisões tomadas por terceiros com base exclusiva nas leituras informativas disponibilizadas gratuitamente.
          </p>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            5. Foro e Legislação Aplicável
          </h2>
          <p>
            Estes termos são regidos pelas leis da República Federativa do Brasil. Quaisquer litígios serão dirimidos preferencialmente de forma amigável ou perante o foro competente da comarca da sede da empresa operadora.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
