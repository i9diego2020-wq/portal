import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Mail, Phone, MapPin, Send, ChevronRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato e Redação - Peter Port Solucoes",
  description: "Fale com a equipe do Portal Info BR e Peter Port Solucoes Digitais 40088094000117.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600 transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Contato & Redação</span>
        </nav>

        <div className="mb-10 pb-8 border-b border-slate-200">
          <h1 className="font-serif font-black text-3xl sm:text-5xl text-slate-950 mb-4 tracking-tight">
            Canais de Comunicação
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Sugestões de pautas, correções factuais, dúvidas comerciais e contato direto com a administração do <strong>Portal Info BR</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Informações de contato */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-6">
              <h2 className="font-serif text-xl font-bold text-white border-b border-slate-800 pb-3">
                Identificação Institucional
              </h2>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">E-mail Editorial</span>
                    <a href="mailto:redacao@portalinfobr.cc" className="hover:text-sky-400 text-slate-300">
                      redacao@portalinfobr.cc
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Atendimento</span>
                    <span>Segunda a Sexta, das 09h às 18h (Horário de Brasília)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Entidade Mantenedora</span>
                    <span>Peter Port Solucoes Digitais</span>
                    <span className="block text-xs text-sky-400 mt-0.5">CNPJ: 40088094000117</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold block mb-1">
                Aviso sobre sugestões de pauta:
              </strong>
              Nosso motor editorial avalia autonomamente sugestões compatíveis com as diretrizes analíticas do portal sob chancela da <strong>Peter Port Solucoes Digitais</strong> (registro <strong>40088094000117</strong>).
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-white shadow-xs">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-6">
                Envie uma Mensagem
              </h2>

              <form action="/contato" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Seu nome"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Sugestão de pauta, dúvida ou colaboração"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Escreva sua mensagem com detalhes..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
