import { DashboardShell } from "@/components/dashboard/shell";
import { GarmentTimeline } from "@/features/dashboard/garment-timeline";
import { MetricCard } from "@/features/dashboard/metric-card";

export default function ClientDashboard() {
  return (
    <DashboardShell role="ROLE_CLIENT" title="Panel de clienta">
      <div className="grid gap-5 md:grid-cols-3">
        <MetricCard label="Favoritos" value="18" detail="Piezas guardadas para eventos" />
        <MetricCard label="Rentas activas" value="2" detail="Una entrega programada mañana" />
        <MetricCard label="IA" value="94%" detail="Afinidad con vestidos de gala" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <GarmentTimeline />
        <div className="rounded-2xl border border-line bg-ink p-6 text-white premium-ring">
          <p className="text-sm text-white/55">Recomendacion IA</p>
          <h2 className="mt-2 text-3xl font-semibold">Seda champagne para boda de noche.</h2>
          <p className="mt-4 leading-7 text-white/65">
            Basado en favoritos, fecha del evento, clima y disponibilidad.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
