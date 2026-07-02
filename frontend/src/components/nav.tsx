import Link from "next/link";
import { Button } from "@/components/button";

export function MarketingNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/[0.06] bg-background/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Encore
        </Link>
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#como-funciona" className="transition hover:text-ink">
            Cómo funciona
          </a>
          <a href="#beneficios" className="transition hover:text-ink">
            Operación
          </a>
          <a href="#faq" className="transition hover:text-ink">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Subir mi vestido</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
