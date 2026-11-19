import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Shield, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade - Peter Port Solucoes",
  description: "Política de Privacidade e Proteção de Dados do Portal Info BR e Peter Port Solucoes Digitais 40088094000117.",
};

export default function PrivacyPage() {
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
          <span className="text-slate-800 font-semibold">Política de Privacidade</span>
        </nav>

        <div className="mb-10 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" />
            <span>Conformidade com a LGPD (Lei nº 13.709/2018)</span>
          </div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-slate-950 mb-3 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-500">
            Última atualização: Novembro de 2026.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-6 text-base">
          <p>
            O <strong>Portal Info BR</strong> (portalinfobr.cc) preza pela segurança, confidencialidade e respeito à privacidade dos seus visitantes e usuários. Esta política estabelece de forma transparente como os dados são coletados, utilizados e protegidos durante a sua navegação.
          </p>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            1. Controlador dos Dados
          </h2>
          <p>
            A controladora responsável pelo tratamento dos dados pessoais nesta plataforma é <strong>Peter Port Solucoes Digitais</strong>, pessoa jurídica identificada pelo CNPJ <strong>40088094000117</strong>. Para quaisquer dúvidas ou requisições referentes a dados pessoais, o contato oficial pode ser efetuado através de <code>privacidade@portalinfobr.cc</code>.
          </p>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            2. Coleta de Informações
          </h2>
          <p>
            Coletamos apenas as informações estritamente necessárias para a prestação dos serviços informativos:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Dados de Navegação:</strong> Endereço IP aproximado, tipo de navegador, páginas visualizadas e tempo de permanência, recolhidos para fins estatísticos e aprimoramento contínuo de usabilidade.</li>
            <li><strong>Dados Fornecidos Voluntariamente:</strong> Nome e endereço de e-mail ao preencher o formulário de contato ou inscrição no radar informativo.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            3. Finalidade do Tratamento
          </h2>
          <p>
            Os dados coletados por <strong>Peter Port Solucoes Digitais</strong> têm as seguintes finalidades exclusivas:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Garantir a estabilidade técnica, segurança contra ataques cibernéticos e prevenção de fraudes;</li>
            <li>Responder solicitações e mensagens enviadas através do canal editorial;</li>
            <li>Cumprir obrigações legais e regulatórias do ordenamento jurídico brasileiro.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            4. Compartilhamento e Armazenamento
          </h2>
          <p>
            Não vendemos nem comercializamos dados de usuários para terceiros. O armazenamento dos dados ocorre em servidores protegidos por criptografia e práticas avançadas de segurança digital. A gestão do sistema realizada por <strong>Peter Port Solucoes Digitais</strong> (registro <strong>40088094000117</strong>) adota padrões alinhados à ISO/IEC 27001.
          </p>

          <h2 className="text-xl font-serif font-bold text-slate-950 mt-6 mb-3">
            5. Direitos do Titular de Dados
          </h2>
          <p>
            Em conformidade com a LGPD, todo titular tem direito a solicitar confirmação de tratamento, acesso aos dados, correção de inconsistências e eliminação de registros desnecessários a qualquer momento.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
