# ValiSearch — AI Startup Intelligence Platform

A premium SaaS app that transforms startup ideas into comprehensive 15-section analysis reports using AI. Covers market research, competitor analysis, product strategy, monetization, branding, GTM, tech stack, sprint planning, user flow, and build mode.

## Architecture

**Pure frontend** — React 18 + Vite + TypeScript. No backend server. AI calls made directly from the browser.

- **Framework**: React + Vite (port 5000, host 0.0.0.0)
- **Routing**: React Router v6
- **State**: Zustand (`src/store/useAnalysisStore.ts`)
- **UI**: shadcn/ui + Tailwind CSS + Radix UI
- **Data fetching**: TanStack Query
- **Fonts**: Inter + DM Serif Display (Google Fonts)

## Key Directories

- `src/pages/` — Index, Analyze, Dashboard, NotFound
- `src/components/landing/` — Landing page sections (Navbar, Hero, Features, HowItWorks, CTA, Footer, SocialProof)
- `src/components/dashboard/` — Dashboard shell, sidebar, section cards, ApiSettings
- `src/components/dashboard/sections/` — All 13 analysis sections
- `src/services/api.ts` — AI provider chain (OpenRouter → Groq → Gemini), credits system, key management
- `src/lib/ai/` — Provider functions, JSON parser, prompts
- `src/types/analysis.ts` — Shared TypeScript types for full analysis schema
- `src/utils/exportPdf.ts` — Text, JSON, Markdown, and PDF export utilities

## Dashboard Sections

### Analysis (10 sections)
1. **Overview** — Score display, 6 pillar bars, quick navigation
2. **Validation** — Market demand, feasibility, risks
3. **Market Feasibility** — Demand gauge, trend radar, 12-month demand/risk chart
4. **Market Research** — TAM/SAM/SOM, trends, growth outlook
5. **Competitors** — Competitor cards with strengths/weaknesses
6. **Product** — MVP/diff/premium features, architecture
7. **Branding** — Name suggestions, taglines, positioning
8. **Revenue Intelligence** — MRR projections, pricing tiers, revenue mix pie, competitor pricing
9. **Monetization** — Pricing model and strategy
10. **Go-To-Market** — Channels, launch plan, growth strategies

### Build (7 sections)
11. **Idea Evolution** — AI-refined idea, key changes, positioning
12. **Flow Editor** — Interactive drag-and-drop flow diagram with live requirement derivation
13. **User Flow** — Visual journey diagram, page structure
14. **Sprint Planner** — Interactive Kanban with backlog/in-progress/done columns
15. **Tech Stack** — MVP vs Scalable stack side-by-side with tech badges
16. **Build Mode** — Folder structure, AI builder prompts (Lovable, Cursor, v0)
17. **IDE Bridge** — Export .cursorrules, tasks.json, settings.json, Lovable/Bolt prompts
18. **API Settings** — Connect OpenRouter/Groq/Gemini keys (stored in localStorage)

## AI Integration

Provider chain in `src/services/api.ts`:
1. **OpenRouter** (primary) — 100+ models, free tier available
2. **Groq** (fallback) — Fast Llama inference, free tier
3. **Gemini** (fallback) — Google's Gemini 1.5 Flash

Key resolution order: `localStorage` → `VITE_*` env vars → mock data

Credits system: 3 free analyses (localStorage-tracked), unlimited with own API key.

## Environment Variables (all optional)

```
VITE_OPENROUTER_API_KEY    # OpenRouter API key
VITE_OPENROUTER_MODEL      # Model override (default: google/gemma-2-9b-it:free)
VITE_GROQ_API_KEY          # Groq API key
VITE_GROQ_MODEL            # Model override (default: llama-3.1-8b-instant)
VITE_GEMINI_API_KEY        # Gemini API key
VITE_GEMINI_MODEL          # Model override (default: gemini-1.5-flash)
```

Users can also enter API keys directly in the dashboard under API Settings — stored in browser localStorage.

## Export Formats

- **Text (.txt)** — Full human-readable report
- **JSON (.json)** — Complete structured data
- **Markdown (.md)** — Formatted document
- **PDF** — Full HTML report opened in new tab, print to PDF via browser dialog

## Input Validation & Security

- Idea input: 10–500 character limit enforced both in the UI (textarea) and in the service layer
- Character counter appears at 85% of limit and turns red at the limit
- Credits are only deducted when an AI provider call actually succeeds (not on fallback to mock)
- API keys stored in localStorage are never sent anywhere except to the respective AI provider
- `.gitignore` covers `.env`, `.env.local`, `node_modules`, `dist`, and all `*.local` files
- All env vars use `VITE_` prefix — documented in `.env.example`

## Design System

- Background: `#0A0A0A` (near-black)
- Grid: 72px lines at 2.5% opacity
- Typography: Inter (body) + DM Serif Display italic (accents)
- Accent color: Indigo (used sparingly)
- Animations: clip-path text reveals, cursor glow, score bar, step-line draw, stat fade-up

## Development

```bash
npm run dev    # Start dev server on port 5000
npm run build  # Build for production
npm run test   # Run unit tests
```
