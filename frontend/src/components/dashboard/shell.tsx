import Link from "next/link";
import { Bell, Search } from "lucide-react";
import type { Role } from "@/lib/types";

const navByRole: Record<Role, string[]> = {
  ROLE_CLIENT: [
    "Inicio",
    "Buscar vestidos",
    "Eventos",
    "Favoritos",
    "Mis rentas",
    "Mis compras",
    "Perfil",
  ],
  ROLE_OWNER: [
    "Inicio",
    "Mis vestidos",
    "Ingresos",
    "Rentas activas",
    "Solicitudes",
    "Calendario",
    "Cuenta bancaria",
  ],
  ROLE_ADMIN: [
    "Ejecutivo",
    "Usuarios",
    "Órdenes",
    "Limpieza",
    "Logística",
    "Pagos",
    "Reportes",
    "Configuración",
  ],
};

export function DashboardShell({
  role,
  title,
  children,
}: {
  role: Role;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-line bg-white/78 px-5 py-6 backdrop-blur-xl lg:block">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Encore
        </Link>
        <nav className="mt-10 space-y-1">
          {navByRole[role].map((item, index) => (
            <a
              key={item}
              className={`flex h-10 items-center rounded-full px-4 text-sm transition ${
                index === 0
                  ? "bg-ink text-white"
                  : "text-muted hover:bg-black/[0.04] hover:text-ink"
              }`}
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-line bg-background/82 px-6 backdrop-blur-xl">
          <h1 className="text-lg font-semibold">{title}</h1>
          <div className="flex items-center gap-3">
            <div className="hidden h-10 items-center gap-2 rounded-full border border-line bg-white/75 px-4 text-sm text-muted md:flex">
              <Search size={16} />
              Buscar
            </div>
            <button className="grid size-10 place-items-center rounded-full border border-line bg-white/75">
              <Bell size={16} />
            </button>
          </div>
        </header>
        <main className="px-6 py-8">{children}</main>
      </div>
    </div>
  );
}
