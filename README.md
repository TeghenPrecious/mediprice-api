# MediPrice API

REST API for MediPrice Cameroon: medication, lab test, and care price transparency. Search a drug, lab test, or service and compare prices across pharmacies, laboratories, and hospitals in Bamenda — every price carries a trust badge (SEED-verified / provider-verified / community-reported) and a last-updated date.

> Full project roadmap: see the MediPrice Internship Guide document. The frontend lives in the mediprice-web repo.

## Tech stack
- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT authentication
- Hosting: Render

## Getting started

```bash
git clone <repo-url>
cd mediprice-api
npm install
cp .env.example .env   # then fill in real values (ask a lead)
npm run dev
```

## API documentation

Document every endpoint here as it is built:

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | /api/health | — | Service health check |
| POST | /api/auth/register | — | Create an account |
| POST | /api/auth/login | — | Get a JWT |


## Branch & PR rules

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before your first commit. Short version: never push to `main`, branch per feature, small PRs, one review required.

## Team

| Role | Name | GitHub |
|------|------|--------|
| Team Lead |  |  |
| Frontend |  |  |
| Backend |  |  |
| UI/UX |  |  |
| QA & Docs |  |  |
