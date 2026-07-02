from pydantic import BaseModel, EmailStr

from app.models.enums import Role


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    role: Role = Role.client


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
