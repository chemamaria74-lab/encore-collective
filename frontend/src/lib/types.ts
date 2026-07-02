export const ROLES = ["ROLE_CLIENT", "ROLE_OWNER", "ROLE_ADMIN"] as const;

export type Role = (typeof ROLES)[number];

export const ESTADOS_PRENDA = [
  "registrado",
  "en_revision",
  "aprobado",
  "sesion_fotos",
  "disponible",
  "rentado",
  "limpieza",
  "vendido",
  "retirado",
] as const;

export type EstadoPrenda = (typeof ESTADOS_PRENDA)[number];
