import Link from "next/link";
import { Button } from "@/components/button";

type AuthCardProps = {
  mode: "login" | "register";
};

export function AuthCard({ mode }: AuthCardProps) {
  const isLogin = mode === "login";
  return (
    <div className="mx-auto w-full max-w-md rounded-[1.75rem] border border-line bg-white/78 p-8 premium-ring">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Encore
      </Link>
      <div className="mt-10">
        <p className="text-sm text-muted">
          {isLogin ? "Bienvenida de vuelta" : "Crea tu cuenta"}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          {isLogin ? "Entra a tu espacio." : "Empieza con Encore."}
        </h1>
      </div>
      <form className="mt-8 space-y-4">
        {!isLogin && (
          <label className="block">
            <span className="text-sm text-muted">Nombre</span>
            <input className="mt-2 h-12 w-full rounded-2xl border border-line bg-background px-4 outline-none transition focus:border-gold" />
          </label>
        )}
        <label className="block">
          <span className="text-sm text-muted">Email</span>
          <input
            type="email"
            className="mt-2 h-12 w-full rounded-2xl border border-line bg-background px-4 outline-none transition focus:border-gold"
          />
        </label>
        <label className="block">
          <span className="text-sm text-muted">Contraseña</span>
          <input
            type="password"
            className="mt-2 h-12 w-full rounded-2xl border border-line bg-background px-4 outline-none transition focus:border-gold"
          />
        </label>
        <Button className="w-full">{isLogin ? "Entrar" : "Crear cuenta"}</Button>
      </form>
      <Button variant="secondary" className="mt-3 w-full">
        Continuar con Google
      </Button>
      <div className="mt-6 flex justify-between text-sm text-muted">
        <Link href={isLogin ? "/register" : "/login"} className="hover:text-ink">
          {isLogin ? "Crear cuenta" : "Ya tengo cuenta"}
        </Link>
        {isLogin && (
          <Link href="/forgot-password" className="hover:text-ink">
            Olvidé mi contraseña
          </Link>
        )}
      </div>
    </div>
  );
}
