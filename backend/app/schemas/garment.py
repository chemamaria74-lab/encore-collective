from decimal import Decimal
from uuid import UUID

from pydantic import BaseModel

from app.models.enums import GarmentCondition, GarmentStatus


class GarmentRead(BaseModel):
    id: UUID
    qr_code: str
    brand: str
    model: str
    color: str
    size: str
    sale_price: Decimal
    rental_price: Decimal
    status: GarmentStatus
    condition: GarmentCondition
    owner_id: UUID
    tags: list[str]
    recommended_events: list[str]
    material: str | None
    original_value: Decimal | None
    generated_roi: Decimal
    accumulated_revenue: Decimal
    rental_count: int

    model_config = {"from_attributes": True}
