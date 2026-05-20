# Vijai Bhava Law Firm — Freelance Project (Client Delivery)

> A concise project handover and deployment guide for the freelance website delivered to the client, Vijai Bhava Law Firm.

## Project Overview

- **Backend:** Node.js + Express API serving contact and job application routes, MongoDB for persistence, email support via Gmail, and file uploads served from `/uploads`.
- **Frontend:** React + Vite single-page site (Tailwind CSS) that consumes the backend API. The frontend includes pages for careers, contact, services, and more.

## Repository layout

- `backend/` — Express API, configuration, routers, models, and upload assets.
- `frontend/` — React + Vite app, Tailwind config, and production build config (includes `vercel.json`).

## Tech stack

- Backend: Node.js, Express, Mongoose, Nodemailer
- Frontend: React, Vite, Tailwind CSS
- Database: MongoDB

## Client & Project Scope

- **Client:** Vijai Bhava Law Firm
- **Project type:** Freelance delivery — website + backend API
- **Scope / Deliverables:**
	- Fully functional React frontend (client-facing website)
	- Express backend API for contact and job application handling
	- Email notifications via Gmail (Nodemailer)
	- File upload handling and static serving from `/uploads`
	- Documentation and deployment notes (this README)

## Handover & Support

- This repository is the final deliverable for the client. Provide the client with the following to complete production rollout:
	- Production `MONGODB_URI` and SMTP credentials configured in the host environment
	- Deployed backend URL (update frontend API base if needed)
	- DNS records and SSL for the chosen domain (e.g., `vijaibhavalawfirm.com`)
- Recommend a short support period after handoff for bug fixes and small adjustments; specify SLA and billing in your client contract.

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- A MongoDB instance (Atlas or self-hosted)
- A Gmail account (for sending emails) or SMTP credentials

## Environment variables

Create a `.env` file in `backend/` with the following variables:

- `MONGODB_URI` — MongoDB connection string
- `GMAIL_ID` — Gmail address used to send emails
- `GMAIL_PASSKEY` — App password / SMTP password for the Gmail account
- `PORT` — (optional) Backend port; defaults to `5000`

Example `backend/.env`:

```
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
GMAIL_ID=youremail@gmail.com
GMAIL_PASSKEY=your_app_password
PORT=5000
```

Note: If you use Gmail, create an App Password and use that for `GMAIL_PASSKEY` (recommended). Do not commit `.env` to source control.

## Backend — Run locally

1. Install dependencies

```bash
cd backend
npm install
```

2. Add your `.env` as described above.

3. Run in development mode (auto-restarts with changes):

```bash
npm run dev
```

The server listens on `process.env.PORT || 5000`. Key routes:

- `GET /` — basic health route
- `POST /contact` — contact form route (see `src/routers/contactRouter.js`)
- `POST /applications` — job application route (see `src/routers/jobRouter.js`)
- `/uploads/*` — static file serving for uploaded files

## Frontend — Run locally

1. Install dependencies

```bash
cd frontend
npm install
```

2. Run the dev server

```bash
npm run dev
```

The Vite dev server defaults to port `5173`. The backend CORS configuration allows `http://localhost:5173`.

3. Build for production

```bash
npm run build
```

## Deployment notes

- Frontend: The repo includes `frontend/vercel.json` — the frontend is ready to deploy to Vercel. Point Vercel to the `frontend/` directory as the project root or configure a monorepo setup and set the build command to `npm run build` and the output directory to `dist`.

- Backend: Deploy the `backend/` folder to your hosting provider of choice (Render, Heroku, Railway, DigitalOcean App Platform, etc.). Ensure the environment variables from the **Environment variables** section are configured in the provider dashboard.

- When deploying together, configure the frontend to call the deployed backend base URL (replace any hardcoded `http://localhost:5173` origin checks or set the CORS origin accordingly).

## Useful tips & notes

- Uploads: The backend ensures an `uploads` directory exists under `backend/src/uploads` and serves it at `/uploads`.
- Email: The backend uses Nodemailer with Gmail. Using App Passwords (not account password) is recommended.
- Tests: There are no automated tests defined in `package.json`.

## Contact / Authors

Authors: Rakhi Rani & Nitish Kumar

If you want me to add CI/CD examples, Dockerfiles, or a deployment-ready Procfile for a specific host (Heroku/Render), tell me which provider and I will add them.
