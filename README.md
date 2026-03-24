# Lioran Software Solutions Website

Official marketing website for Lioran Software Solutions (LSS), built with Next.js 16, React 19, Tailwind CSS 4, and MongoDB.

This project presents LSS as a full-stack software agency under Lioran Group, with:

- a branded landing page for services and positioning
- dark/light theme support with local persistence
- SEO metadata for production use
- a functional contact form backed by MongoDB

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- MongoDB Node driver
- ESLint

## Features

- One-page agency website for `lioransolutions.com`
- Default dark theme with manual toggle
- Theme preference stored in `localStorage` as `lss-theme`
- Structured sections for services, pricing, support plans, roadmap, and contact
- Contact form that submits to `/api/contact`
- MongoDB persistence for lead capture

## Project Structure

```text
app/
  api/contact/route.ts        Contact form API endpoint
  components/contact-form.tsx Contact form UI and submit logic
  components/theme-toggle.tsx Theme toggle with hydration-safe state
  globals.css                 Global styling and theme tokens
  layout.tsx                  Root layout and metadata
  page.tsx                    Main landing page

lib/
  mongodb.ts                  Shared MongoDB connection helper

public/
  ...                         Static assets
```

## Environment Variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

The app expects the connection string to point to the `lss` database, or another database you want to use for storing contact submissions.

## Installation

```bash
npm install
```

## Local Development

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Contact Form Backend

The contact form sends a `POST` request to:

```text
/api/contact
```

Submitted records are stored in the `contact_submissions` collection with fields like:

- `name`
- `email`
- `company`
- `budget`
- `service`
- `recipient`
- `message`
- `createdAt`
- `source`
- `status`

## Notes

- The site defaults to dark mode.
- If a visitor changes the theme, the selection is saved locally and reused on the next visit.
- The API validates required fields and email format before writing to MongoDB.

## Deployment

Before deploying, make sure:

1. `MONGODB_URI` is configured in your hosting environment.
2. The MongoDB cluster allows connections from your deployment environment.
3. `npm run lint` passes.
4. `npm run build` completes successfully in your deployment environment.

## Brand Context

Lioran Software Solutions focuses on:

- custom website development
- backend and frontend engineering
- database architecture
- DevOps and deployment
- hosting and infrastructure management
- maintenance and technical support

Minimum project engagement: `₹10,000`

## Domain and Contact

- Domain: `lioransolutions.com`
- Email: `cto@lioransolutions.com`
- Email: `ceo@lioransolutions.com`
- Email: `contact@lioransolutions.com`
- Email: `info@lioransolutions.com`
