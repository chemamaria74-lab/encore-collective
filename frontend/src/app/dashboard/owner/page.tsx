import { DashboardShell } from "@/components/dashboard/shell";
import { GarmentTimeline } from "@/features/dashboard/garment-timeline";
import { MetricCard } from "@/features/dashboard/metric-card";

export default function OwnerDashboard() {
  return (
    <DashboardShell role="ROLE_OWNER" title="Panel de propietaria">
      <div className="grid gap-5 md:grid-cols-4">
        <MetricCard label="Ingresos" value="$86k" detail="Acumulado del mes" />
        <MetricCard label="Vestidos" value="24" detail="19 activos, 5 en revisión" />
        <MetricCard label="Rentas" value="7" detail="Activas esta semana" />
        <MetricCard label="ROI" value="3.6x" detail="Promedio por prenda" />
      </div>
      <div className="mt-6">
        <GarmentTimeline />
      </div>
    </DashboardShell>
  );
}
