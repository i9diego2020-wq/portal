import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata = {
  title: "Painel Administrativo - Peter Port Solucoes",
  description: "Gerenciamento editorial e automação com inteligência artificial.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row text-slate-900 font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  );
}
