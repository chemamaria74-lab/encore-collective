# Encore

Encore es una plataforma mexicana de moda circular premium.

La idea es simple: una propietaria sube vestidos premium, Encore los revisa, fotografía, almacena y opera. Mientras el vestido se vende, también puede rentarse. Cada renta genera ingresos y, si una clienta decide comprarlo, la prenda se vende.

## Estructura

```text
encore/
  frontend/     App web con Next.js
  backend/      API con FastAPI
  docker/       PostgreSQL, Redis, frontend y backend
  .env.example  Variables de entorno de ejemplo
  package.json  Comandos principales del frontend
```

Eso es lo importante para GitHub.

## Requisitos

- Node.js 22
- pnpm 11
- Python 3.12
- Docker Desktop, si quieres levantar PostgreSQL y Redis localmente

## Instalación

```bash
pnpm install
cp .env.example .env
```

## Correr el frontend

```bash
pnpm dev
```

Abre:

```text
http://localhost:3000
```

## Correr el backend

```bash
cd backend
python -m pip install -e ".[dev]"
fastapi dev app/main.py
```

La API queda en:

```text
http://localhost:8000
```

## Correr servicios con Docker

```bash
docker compose -f docker/docker-compose.yml up -d
```

## Validaciones

Frontend:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Backend:

```bash
python -m ruff check backend
python -m pytest backend
```

## Qué subir a GitHub

Sube la carpeta completa `encore`, pero Git solo debe incluir archivos de código y configuración.

No se suben:

- `.env`
- `node_modules/`
- `.next/`
- `.venv/`
- `__pycache__/`
- cachés o archivos generados

El archivo `.gitignore` ya está preparado para evitar eso.
