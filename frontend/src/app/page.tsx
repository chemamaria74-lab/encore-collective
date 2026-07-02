import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CreditCard,
  PackageCheck,
  Sparkles,
  Truck,
  WandSparkles,
} from "lucide-react";
import { Button } from "@/components/button";
import { MarketingNav } from "@/components/nav";
import { Reveal } from "@/components/reveal";

const pasos = [
  {
    titulo: "Lo subes",
    texto: "Tu vestido entra a revisión, fotografía y catálogo.",
  },
  {
    titulo: "Se renta mientras se vende",
    texto: "Cada renta genera ingresos para ti.",
  },
  {
    titulo: "Se vende cuando alguien lo quiere comprar",
    texto: "Si una clienta se enamora del vestido, puede comprarlo.",
  },
];

const operacion = [
  { nombre: "Fotografía profesional", icono: Camera },
  { nombre: "Limpieza", icono: WandSparkles },
  { nombre: "Almacenamiento", icono: PackageCheck },
  { nombre: "Control de daños", icono: BadgeCheck },
  { nombre: "Pagos", icono: CreditCard },
  { nombre: "Comisiones", icono: Sparkles },
  { nombre: "Logística", icono: Truck },
];

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <MarketingNav />

      <section className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal>
          <p className="mb-6 inline-flex rounded-full border border-line bg-white/75 px-4 py-2 text-sm text-muted premium-ring">
            Moda circular premium operada desde México
          </p>
          <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-tight text-ink md:text-8xl">
            El vestido no termina cuando termina el evento.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">
            Compra, renta y vende vestidos premium desde una sola plataforma.
            Encore convierte prendas de ocasión en activos que pueden generar
            ingresos una y otra vez.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 px-6">
              <Link href="/dashboard/client">
                Explorar vestidos <ArrowRight size={17} />
              </Link>
            </Button>
            <Button asChild variant="secondary" className="h-12 px-6">
              <Link href="/dashboard/owner">Subir mi vestido</Link>
            </Button>
          </div>
        </Reveal>

        <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-line bg-white premium-ring">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#fff_0%,#f7f1e8_46%,#e3d0ad_100%)]" />
          <div className="absolute left-7 top-7 rounded-full border border-white/75 bg-white/75 px-4 py-2 text-sm backdrop-blur">
            En renta mientras se vende
          </div>
          <div className="absolute right-7 top-24 h-72 w-44 rounded-t-full bg-ink/90 shadow-2xl" />
          <div className="absolute right-16 top-36 h-64 w-40 rounded-t-full bg-champagne shadow-2xl" />
          <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/75 bg-white/76 p-6 backdrop-blur-xl">
            <p className="text-sm text-muted">Vestido de gala en consignación</p>
            <div className="mt-3 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Generó ingresos antes de venderse.
                </h2>
                <p className="mt-3 max-w-md leading-7 text-muted">
                  Encore gestiona catálogo, entregas, limpieza, pagos y
                  seguimiento de cada prenda.
                </p>
              </div>
              <span className="hidden rounded-full bg-ink px-4 py-2 text-sm text-white sm:inline-flex">
                Activo circular
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="border-y border-line bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm text-muted">Cómo funciona</p>
            <h2 className="mt-3 text-5xl font-semibold tracking-tight">
              Del clóset al ingreso recurrente.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pasos.map((paso, index) => (
              <div
                key={paso.titulo}
                className="rounded-2xl border border-line bg-background p-7 premium-ring"
              >
                <p className="text-sm text-muted">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold">{paso.titulo}</h3>
                <p className="mt-4 leading-7 text-muted">{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-24 lg:grid-cols-3">
        <AudienceCard
          titulo="Para clientas"
          texto="Encuentra vestidos premium para bodas, graduaciones, galas y eventos sin comprar algo que usarás una sola vez."
        />
        <AudienceCard
          titulo="Para propietarias"
          texto="Monetiza vestidos guardados en tu clóset sin contestar mensajes, coordinar entregas ni preocuparte por limpieza."
        />
        <AudienceCard
          titulo="Para boutiques y diseñadores"
          texto="Convierte inventario detenido en flujo de efectivo mediante renta, venta y consignación."
        />
      </section>

      <section className="border-y border-line bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm text-white/55">Operación Encore</p>
            <h2 className="mt-3 text-5xl font-semibold tracking-tight">
              La plataforma se encarga de lo difícil.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Encore opera la experiencia completa para que una prenda premium
              pueda rentarse, venderse y conservar trazabilidad sin fricción.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {operacion.map(({ nombre, icono: Icono }) => (
              <div
                key={nombre}
                className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.06] p-5"
              >
                <span className="grid size-10 place-items-center rounded-full bg-white/10">
                  <Icono size={18} />
                </span>
                <span className="font-medium">{nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="text-sm text-muted">Encore</p>
        <h2 className="mt-3 text-5xl font-semibold tracking-tight md:text-7xl">
          Tu clóset puede generar ingresos.
        </h2>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild className="h-12 px-6">
            <Link href="/dashboard/owner">Quiero subir un vestido</Link>
          </Button>
          <Button asChild variant="secondary" className="h-12 px-6">
            <Link href="/dashboard/client">Quiero explorar</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-10 text-sm text-muted">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>Encore</p>
          <p>Moda circular premium para México y Latinoamérica.</p>
        </div>
      </footer>
    </main>
  );
}

function AudienceCard({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white/72 p-7 premium-ring">
      <h3 className="text-3xl font-semibold tracking-tight">{titulo}</h3>
      <p className="mt-5 leading-7 text-muted">{texto}</p>
    </div>
  );
}
