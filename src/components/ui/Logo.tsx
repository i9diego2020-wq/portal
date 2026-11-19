import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer";
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "header" }) => {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-sky-900 to-sky-600 shadow-md shadow-sky-950/20 text-white font-extrabold text-xl tracking-tighter">
        <span className="relative z-10 font-sans">BR</span>
        <div className="absolute inset-0 rounded-xl bg-sky-400/20 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-col">
        <span className={`font-serif tracking-tight font-extrabold text-xl sm:text-2xl leading-none ${isFooter ? "text-white" : "text-slate-900"}`}>
          Portal Info <span className="text-sky-600">BR</span>
        </span>
        <span className={`text-[10px] tracking-widest uppercase font-semibold mt-0.5 ${isFooter ? "text-slate-400" : "text-slate-500"}`}>
          Jornalismo & Conhecimento
        </span>
      </div>
    </Link>
  );
};
