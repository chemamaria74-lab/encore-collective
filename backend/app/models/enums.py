from enum import StrEnum


class Role(StrEnum):
    client = "ROLE_CLIENT"
    owner = "ROLE_OWNER"
    admin = "ROLE_ADMIN"


class GarmentStatus(StrEnum):
    registered = "registered"
    in_review = "in_review"
    approved = "approved"
    photo_session = "photo_session"
    available = "available"
    rented = "rented"
    laundry = "laundry"
    sold = "sold"
    retired = "retired"


class GarmentCondition(StrEnum):
    new = "new"
    excellent = "excellent"
    very_good = "very_good"
    good = "good"
    restoration = "restoration"
