import uuid
from datetime import datetime
from decimal import Decimal

from sqlalchemy import DateTime, Enum, ForeignKey, Integer, Numeric, String
from sqlalchemy.dialects.postgresql import ARRAY, JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.session import Base
from app.models.enums import GarmentCondition, GarmentStatus


class Garment(Base):
    __tablename__ = "garments"

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
    qr_code: Mapped[str] = mapped_column(String(80), unique=True, index=True)
    brand: Mapped[str] = mapped_column(String(120), index=True)
    model: Mapped[str] = mapped_column(String(160))
    color: Mapped[str] = mapped_column(String(80), index=True)
    size: Mapped[str] = mapped_column(String(40), index=True)
    sale_price: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    rental_price: Mapped[Decimal] = mapped_column(Numeric(12, 2))
    status: Mapped[GarmentStatus] = mapped_column(Enum(GarmentStatus), index=True)
    condition: Mapped[GarmentCondition] = mapped_column(Enum(GarmentCondition))
    owner_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id"), index=True)
    tags: Mapped[list[str]] = mapped_column(ARRAY(String), default=list)
    recommended_events: Mapped[list[str]] = mapped_column(ARRAY(String), default=list)
    material: Mapped[str | None] = mapped_column(String(120), nullable=True)
    original_value: Mapped[Decimal | None] = mapped_column(Numeric(12, 2), nullable=True)
    generated_roi: Mapped[Decimal] = mapped_column(Numeric(8, 2), default=0)
    accumulated_revenue: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=0)
    rental_count: Mapped[int] = mapped_column(Integer, default=0)
    media: Mapped[dict] = mapped_column(JSONB, default=dict)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )

    owner = relationship("User")
