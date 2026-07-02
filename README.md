# Encore

Encore is a premium circular fashion infrastructure platform for Latin America. It connects clients, garment owners, and internal operations in one role-aware SaaS application.

This repository starts as a production-minded monorepo:

- `apps/web`: Next.js 15, React 19, TypeScript, TailwindCSS 4, shadcn-ready UI primitives, Framer Motion, React Query, React Hook Form, Zod.
- `apps/api`: FastAPI, PostgreSQL, SQLAlchemy, Alembic, JWT-ready auth, Redis/Celery-ready background jobs.
- `packages/types`: shared product and role contracts.
- `packages/config`: shared TypeScript configuration.
- `infra/docker`: local development containers.

## Product Direction

Encore is not an e-commerce template and not a traditional dress rental shop. It is the operating layer for buying, selling, consigning, and renting premium fashion.

The app supports three primary experiences:

- Client: discovery, rentals, purchases, favorites, wishlist, recommendations, profile, payments, notifications.
- Owner: garments, revenue, active rentals, sales, requests, garment lifecycle, calendar, banking, commissions.
- Admin: executive KPIs, users, owners, orders, logistics, laundry, payments, permissions, CMS, reporting.

## Local Setup

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
pnpm install
```

3. Start infrastructure:

```bash
docker compose -f infra/docker/docker-compose.yml up -d
```

4. Run the apps:

```bash
pnpm dev
```

## Quality

```bash
pnpm lint
pnpm typecheck
pnpm test
```

Python checks:

```bash
cd apps/api
ruff check .
pytest
```

## Architecture Principles

- Feature-based UI organization.
- Strong role boundaries.
- Domain status modeled explicitly for the garment lifecycle.
- Backend modules separated by API, core configuration, database, models, schemas, and services.
- Docker and GitHub Actions included from day one.

## Status

Initial platform foundation: landing, auth screens, role-aware dashboards, API health/auth/catalog scaffolding, garment domain model, Docker, CI, and repository hygiene.
