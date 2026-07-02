import Link from "next/link";
import { Button } from "@/components/button";

export default function ForgotPasswordPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-16">
      <div className="mx-auto w-full max-w-md rounded-[1.75rem] border border-line bg-white/78 p-8 premium-ring">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Encore
        </Link>
        <div className="mt-10">
          <p className="text-sm text-muted">Recuperación de acceso</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            Te enviaremos un enlace seguro.
          </h1>
        </div>
        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm text-muted">Email</span>
            <input
              type="email"
              className="mt-2 h-12 w-full rounded-2xl border border-line bg-background px-4 outline-none transition focus:border-gold"
            />
          </label>
          <Button className="w-full">Enviar enlace</Button>
        </form>
        <Link
          href="/login"
          className="mt-6 inline-flex text-sm text-muted transition hover:text-ink"
        >
          Volver a login
        </Link>
      </div>
    </main>
  );
}
