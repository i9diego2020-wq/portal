import Link from "next/link";
import { Logo } from "./Logo";
import { DEMO_CATEGORIES } from "@/lib/demo-data";
import { ShieldCheck, Mail, MapPin, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-20">
      {/* Top Banner / Mission */}
      <div className="border-b border-slate-850 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Logo variant="footer" />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              O <strong className="text-slate-200">Portal Info BR</strong> é uma publicação digital dedicada a entregar análises aprofundadas, tendências globais e conhecimento qualificado sobre tecnologia, economia, sociedade e estilo de vida. Conteúdo estruturado para leitores exigentes.
            </p>
            <div className="flex items-center gap-2 text-xs text-sky-400 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Compromisso com rigor editorial, checagem e transparência</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Editorias
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {DEMO_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/categoria/${cat.slug}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Institucional
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/sobre" className="hover:text-sky-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-sky-400 transition-colors">
                  Redação & Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-sky-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-sky-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 mt-3">
                  <span>Acesso Editorial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 sm:px-6 bg-slate-950 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p>© 2026 Portal Info BR (portalinfobr.cc). Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <span>Brasil</span>
            <span>•</span>
            <span>Edição PT-BR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
