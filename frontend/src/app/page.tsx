import { DashboardShell } from "@/components/dashboard/shell";
import { GarmentTimeline } from "@/features/dashboard/garment-timeline";
import { MetricCard } from "@/features/dashboard/metric-card";

export default function AdminDashboard() {
  return (
    <DashboardShell role="ROLE_ADMIN" title="Panel administrativo">
      <div className="grid gap-5 md:grid-cols-4">
        <MetricCard label="Ventas del día" value="$128k" detail="Compra y renta" />
        <MetricCard label="Activos" value="1,284" detail="Vestidos disponibles" />
        <MetricCard label="Rentados" value="312" detail="En circulacion" />
        <MetricCard label="Usuarios" value="18.4k" detail="Clientes y propietarias" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-line bg-white/78 p-6 premium-ring">
          <p className="text-sm text-muted">Operacion</p>
          <h2 className="mt-1 text-2xl font-semibold">Logística, limpieza y pagos</h2>
          <div className="mt-6 space-y-3">
            {["Órdenes pendientes", "Limpieza en proceso", "Comisiones por liquidar"].map((item) => (
              <div key={item} className="flex justify-between rounded-2xl bg-background p-4">
                <span>{item}</span>
                <span className="text-muted">Revisar</span>
              </div>
            ))}
          </div>
        </div>
        <GarmentTimeline />
      </div>
    </DashboardShell>
  );
}
