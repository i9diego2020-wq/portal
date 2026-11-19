import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Peter Port Solucoes",
    default: "Portal Info BR - Peter Port Solucoes",
  },
  description: "Portal independente com publicação diária de análises e artigos aprofundados sobre tecnologia, economia, saúde, turismo, educação e sociedade. Peter Port Solucoes Digitais 40088094000117.",
  metadataBase: new URL("https://portalinfobr.cc"),
  openGraph: {
    title: "Portal Info BR - Peter Port Solucoes",
    description: "Análises aprofundadas e artigos diários sobre tecnologia, finanças, saúde e bem-estar. Peter Port Solucoes Digitais.",
    url: "https://portalinfobr.cc",
    siteName: "Portal Info BR",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
