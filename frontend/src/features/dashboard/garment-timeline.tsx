const steps = [
  "Registrar",
  "Revisión",
  "Aprobado",
  "Sesión de fotos",
  "Disponible",
  "Rentado",
  "Limpieza",
  "Vendido",
];

export function GarmentTimeline() {
  return (
    <div className="rounded-2xl border border-line bg-white/78 p-6 premium-ring">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">Historial de prenda</p>
          <h2 className="mt-1 text-2xl font-semibold">CH-024 vestido champagne</h2>
        </div>
        <span className="rounded-full bg-champagne px-4 py-2 text-sm">Disponible</span>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="rounded-2xl bg-background p-4">
            <p className="text-sm text-muted">0{index + 1}</p>
            <p className="mt-2 font-medium">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
