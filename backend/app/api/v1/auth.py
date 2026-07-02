from fastapi import APIRouter

from app.schemas.auth import LoginRequest, RegisterRequest, TokenResponse
from app.services.security import create_access_token

router = APIRouter()


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest) -> TokenResponse:
    token = create_access_token(subject=payload.email, role="ROLE_CLIENT")
    return TokenResponse(access_token=token)


@router.post("/register", response_model=TokenResponse)
def register(payload: RegisterRequest) -> TokenResponse:
    token = create_access_token(subject=payload.email, role=payload.role)
    return TokenResponse(access_token=token)
