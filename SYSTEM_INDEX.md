# ValiSearch — System Index & Architectural Map

**Last Updated:** May 8, 2026

## 🏗️ PROJECT STRUCTURE OVERVIEW

ValiSearch is a full-stack AI-powered startup intelligence platform built with a modern React frontend and a Supabase backend.

### 📁 Directory Map

```text
/
├── .github/                # GitHub Actions and workflows
├── public/                 # Static assets (favicons, manifest, etc.)
├── src/                    # Frontend source code
│   ├── assets/             # Images and global styles
│   ├── components/         # React components (shadcn/ui + custom)
│   │   ├── auth/           # Authentication UI components
│   │   ├── dashboard/      # Dashboard-specific layout and widgets
│   │   ├── landing/        # Landing page sections
│   │   ├── ui/             # Reusable UI primitives (shadcn)
│   │   └── workspace/      # Workspace-specific components
│   ├── config/             # Environment and global configuration
│   ├── content/            # Blog posts and static content
│   ├── data/               # Mock data and fallback constants
│   ├── database/           # SQL schema definitions
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries, AI prompts, and API clients
│   ├── pages/              # Route pages (Index, Dashboard, Analyze, etc.)
│   ├── services/           # Frontend API and database service layers
│   ├── store/              # State management (Zustand)
│   ├── types/              # TypeScript interfaces and definitions
│   └── utils/              # Helper functions (PDF export, etc.)
├── supabase/               # Backend logic (Edge Functions)
│   └── functions/          # Deno-based edge functions
├── playwright.config.ts    # E2E testing configuration
├── tailwind.config.ts      # Tailwind CSS styling configuration
├── vite.config.ts          # Vite build and dev configuration
└── package.json            # Dependencies and scripts
```

---

## 💻 FRONTEND ARCHITECTURE

### Core Technologies
- **Framework:** React 18 (Vite + TypeScript)
- **Styling:** Tailwind CSS + Framer Motion
- **UI Components:** Radix UI (via shadcn/ui)
- **Routing:** React Router v6
- **State Management:** Zustand
- **Data Fetching:** TanStack Query (React Query)
- **Visualization:** Recharts, React Flow (@xyflow/react), Mermaid.js

### Key Services (`src/services/`)
- `api.ts`: Orchestrates calls between Supabase Edge Functions and local mock fallbacks.
- `database.service.ts`: Handles direct PostgreSQL interactions via Supabase client.
- `analysis.service.ts`: Legacy analysis logic and mock generators.
- `market.service.ts` & `competitor.service.ts`: Domain-specific data fetching.

---

## ☁️ BACKEND ARCHITECTURE (Supabase)

### Edge Functions (`supabase/functions/`)
- `analyze`: Primary AI analysis engine (OpenRouter, Groq, Gemini).
- `analyze-v2`: Enhanced multi-framework analysis.
- `competitors`: Web search for competitor discovery (Brave Search/SerpAPI).
- `market`: Market trend analysis and signals.
- `export-pdf`: Server-side PDF generation.
- `create-checkout` & `stripe-webhook`: Stripe payment integration.
- `get-analysis`: Historical data retrieval.
- `ls-webhook`: LemonSqueezy payment webhooks.
- `keep-alive`: Maintenance function to prevent edge function cold starts.

### Database Schema (`src/database/schema.sql`)
- `profiles`: User profile data (extends Auth).
- `credits`: Credit-based usage tracking.
- `ideas`: User-submitted startup concepts.
- `analysis`: AI-generated reports (JSONB storage).
- `subscriptions`: Stripe/LemonSqueezy subscription status.
- `user_roles`: RBAC (Admin, Moderator, User).

---

## 🔑 AUTHENTICATION & SECURITY
- **Provider:** Supabase Auth (JWT-based).
- **Security Model:** Row Level Security (RLS) on all PostgreSQL tables.
- **API Safety:** All third-party API keys (AI, Search, Payments) are stored in Supabase Secrets and never exposed to the client.

---

## 🚀 BUILD & DEPLOYMENT
- **Environment Management:** `.env` for local dev, Supabase Secrets for backend.
- **Production Build:** Optimized Vite build with extensive code-splitting (70+ chunks).
- **Target Platforms:** Vercel, Cloudflare Pages, or any static hosting.
