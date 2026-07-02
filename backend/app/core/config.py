from pydantic import AnyHttpUrl, Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    environment: str = "development"
    database_url: str = Field(default="postgresql+psycopg://encore:encore_dev_password@localhost:5432/encore")
    redis_url: str = "redis://localhost:6379/0"
    jwt_secret: str = "change-me-before-production"
    jwt_issuer: str = "encore"
    jwt_audience: str = "encore-web"
    access_token_expire_minutes: int = 30
    cors_origins: list[AnyHttpUrl | str] = ["http://localhost:3000"]
    storage_provider: str = "supabase"
    supabase_url: str | None = None
    supabase_service_role_key: str | None = None
    supabase_storage_bucket: str = "wardrobe"


settings = Settings()
