export const ROLES = ["ROLE_CLIENT", "ROLE_OWNER", "ROLE_ADMIN"] as const;

export type Role = (typeof ROLES)[number];

export const GARMENT_STATUSES = [
  "registered",
  "in_review",
  "approved",
  "photo_session",
  "available",
  "rented",
  "laundry",
  "sold",
  "retired",
] as const;

export type GarmentStatus = (typeof GARMENT_STATUSES)[number];

export type Garment = {
  id: string;
  qrCode: string;
  brand: string;
  model: string;
  color: string;
  size: string;
  salePrice: number;
  rentalPrice: number;
  status: GarmentStatus;
  condition: "new" | "excellent" | "very_good" | "good" | "restoration";
  ownerId: string;
  tags: string[];
  recommendedEvents: string[];
  material?: string;
  originalValue?: number;
  generatedRoi: number;
  accumulatedRevenue: number;
  rentalCount: number;
};
