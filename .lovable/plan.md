# ValiSearch – AI Startup Intelligence Platform

## Overview

Build a full-featured SaaS web app using React + Vite + Tailwind CSS with a dark, premium design. The app includes a landing page, a simulated AI analysis loading experience, and a rich results dashboard — all powered by realistic mock data, ready for future AI integration.

## Design System

- **Dark theme**: Deep navy/slate background (#0F172A), glassmorphic cards with subtle borders
- **Primary gradient**: Purple (#7C3AED) → Blue (#3B82F6)
- **Accent colors**: Green for success, Red/orange for risks, Cyan for highlights
- **Typography**: Inter font, clean hierarchy
- **Cards**: Rounded corners (16-24px), glass blur effects, soft shadows
- **Animations**: Fade-ins, hover lifts, animated score counters, smooth page transitions

## Pages & Flow

### 1. Landing Page (`/`)

- **Hero**: Bold headline "Turn your startup idea into validated business in seconds", subtitle, large centered input box with "Validate Idea" CTA button, purple-blue gradient background with subtle animated particles/glow
- **Social proof**: "Trusted by founders worldwide" with mock company logos
- **How It Works**: 3-step horizontal flow (Describe idea → AI analyzes → Get blueprint)
- **Features preview**: 4 cards (Validation Score, Competitor Insights, Feature Roadmap, Monetization Plan)
- **Bottom CTA**: "Start building smarter today"
- **Navbar**: ValiSearch logo, nav links (Product, Pricing, Resources), Get Started button

### 2. Loading/Analysis Page (`/analyze`)

- Animated AI orb/pulse graphic in center
- Cycling text: "Analyzing your idea…" → "Scanning market trends…" → "Identifying competitors…" → "Building strategy…"
- Progress bar with step indicators (4 steps)
- Simulated 6-8 second delay, then auto-redirect to dashboard
- Option to skip directly to dashboard

### 3. Results Dashboard (`/dashboard`)

- **Sidebar**: Icon + label navigation for all 8 sections (Overview, Validation, Market, Competitors, Product, Branding, Monetization, Go-To-Market), collapsible on mobile
- **Overview**: Executive summary card, large animated ValiScore (7.8/10) with circular gauge, verdict badge ("Build" / "Improve" / "Risky"), market demand & feasibility bars, risk tags
- **Validation**: Market demand progress bar, technical feasibility bar, risk tags (color-coded)
- **Market**: TAM/SAM/SOM display with values, growth outlook card, key trends list
- **Competitors**: Cards with name, description, strengths (green tags), weaknesses (red tags), feature gap comparison table
- **Product Strategy**: MVP features checklist, differentiation section, premium features (some locked/blurred with "Upgrade" overlay)
- **Branding**: Name suggestions as chips, tagline, brand voice & positioning
- **Monetization**: Pricing model cards (Starter/Growth/Enterprise), revenue streams list
- **Go-To-Market**: Growth channels with icons, launch strategy steps, growth hack quote

### All sections use realistic mock data for a sample startup (e.g., "EcoSphere AI - Decentralized Carbon Credits Marketplace")

## Component Architecture

- `IdeaInput` – Landing page input with CTA
- `LoadingAnalysis` – Animated loading experience
- `DashboardLayout` – Sidebar + main content shell
- `DashboardSidebar` – Navigation with active state
- `SectionCard` – Glassmorphic card wrapper
- `ScoreDisplay` – Circular animated score gauge
- `CompetitorCard` – Competitor analysis card
- `FeatureChecklist` – MVP/premium feature lists
- `ProgressBar` – Animated progress bars
- `RiskTags` – Color-coded tag badges
- Add env files for variable management like APIs and other external tools integrations 

## Responsive Design

- Mobile-first, sidebar collapses to hamburger menu
- Dashboard sections stack vertically on small screens
- Input box and CTA adapt to mobile widths

## Premium Upsell UI

- Some competitor cards and advanced sections show blurred/locked content
- "Upgrade to Unlock Premium Insights" overlay with CTA

## No Lovable Branding

- Hide the Lovable badge via CSS (`#lovable-badge { display: none }`)
- Clean all branding references
  &nbsp;