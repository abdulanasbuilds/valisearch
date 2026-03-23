/**
 * Mock analysis generator — returns realistic structured data.
 * Used as fallback when AI providers are not configured.
 */

import type { ValiSearchAnalysis } from "@/types/analysis";

function pillar(score: number, explanation: string) {
  return { score, explanation };
}

export function getMockAnalysis(idea: string): ValiSearchAnalysis {
  const trimmed = idea.trim();
  const short = trimmed.slice(0, 72) + (trimmed.length > 72 ? "…" : "");

  return {
    idea_analysis: {
      summary: `A venture-scale read on "${short || "your concept"}": focused wedge, clear buyer, and repeatable distribution — assuming disciplined execution.`,
      one_liner: short
        ? `${short} — packaged for a defined ICP with measurable outcomes.`
        : "A structured product wedge with measurable outcomes for a defined ICP.",
    },
    validation: {
      market_demand:
        "Demand signals align with workflow pain and budget availability in SMB/mid-market; validation hinges on conversion from pilot to paid.",
      feasibility:
        "Technically feasible with a small team; main risk is scope creep and integration depth vs. time-to-value.",
      risks: [
        "Crowded category — differentiation must be sharp",
        "Long sales cycles if selling enterprise",
        "Dependency on third-party APIs / data quality",
      ],
    },
    market_research: {
      tam_sam_som: {
        tam: "$1.8B–2.4B (indicative)",
        sam: "$140M–220M",
        som: "$3M–9M in 24 months (with focused GTM)",
      },
      trends: [
        "AI copilots embedded in workflows",
        "Vertical SaaS + usage-based pricing",
        "Consolidation of point tools into suites",
      ],
      growth_outlook:
        "Category growing mid-teens YoY; winners capture narrow workflows with strong retention loops.",
    },
    competitor_analysis: {
      summary:
        "Mix of legacy suites and modern PLG tools; room for a faster, opinionated workflow with superior onboarding.",
      competitors: [
        {
          name: "Legacy Suite Co.",
          strengths: ["Brand recognition", "Enterprise distribution"],
          weaknesses: ["Slow innovation", "Heavy UX"],
        },
        {
          name: "Startup Atlas",
          strengths: ["Modern UI", "Self-serve onboarding"],
          weaknesses: ["Thin enterprise features", "Limited integrations"],
        },
        {
          name: "MarketMind AI",
          strengths: ["AI-first approach", "Fast iteration"],
          weaknesses: ["No moat", "Poor data quality"],
        },
      ],
      gap_opportunities: [
        "Guided setup that delivers value in day one",
        "Vertical templates that map to regulated workflows",
      ],
      differentiation_strategy:
        "Outcome-based onboarding + vertical templates + transparent AI outputs — not generic chat.",
    },
    product_strategy: {
      mvp_features: [
        "Core workflow + authentication",
        "Two integrations (Slack + CRM)",
        "Team roles & audit log",
        "Export + basic analytics",
      ],
      differentiation_features: [
        "Vertical playbooks",
        "Explainable AI summaries",
        "Workflow automation recipes",
      ],
      premium_features: [
        "SSO / SCIM",
        "Advanced admin controls",
        "SLA + dedicated support",
        "Custom data connectors",
      ],
      user_flow_steps: [
        "Sign up → connect data source",
        "Pick template → run first job",
        "Invite team → set permissions",
        "Review insights → export / automate",
      ],
      system_architecture_overview:
        "React frontend, API routes or dedicated service layer, Postgres for auth/tenancy, queue for async jobs, vector store optional for semantic search.",
    },
    branding: {
      name_suggestions: ["Nexora", "Stackline", "Flowmint", "Velum"],
      taglines: [
        "Operational clarity, on autopilot.",
        "From idea to execution — without the noise.",
      ],
      brand_positioning:
        "Premium, calm, precise — the operator's co-pilot, not a toy chatbot.",
    },
    monetization: {
      pricing_model: "Hybrid PLG + usage caps; annual plans for SMB.",
      pricing_tiers: [
        {
          name: "Starter",
          price_hint: "$29–49 / seat / mo",
          reasoning: "Solo and small teams; self-serve activation.",
        },
        {
          name: "Pro",
          price_hint: "$99–149 / seat / mo",
          reasoning: "Shared workspaces, automation, priority support.",
        },
        {
          name: "Enterprise",
          price_hint: "Custom",
          reasoning: "SSO, security review, SLA, dedicated CSM.",
        },
      ],
      revenue_streams: [
        "Subscriptions",
        "Usage overages",
        "Implementation services",
        "Marketplace / template revenue share",
      ],
      strategy:
        "Land with PLG; expand seats and automation; add services for complex enterprise.",
    },
    go_to_market: {
      channels: [
        "Founder-led content",
        "Niche communities",
        "Partner marketplaces",
        "Outbound to ICP list",
      ],
      launch_plan: [
        "Design partner cohort (10–15 accounts)",
        "Case study + referral loop",
        "Product Hunt + newsletter tour",
        "Sales-assist for mid-market",
      ],
      growth_strategies: [
        "Referral credits",
        "Template marketplace",
        "Webinars with vertical experts",
      ],
    },
    final_verdict: {
      score: 72,
      verdict: "Moderate",
      quick_summary:
        "Compelling wedge with clear execution risks; prioritize ICP focus and narrow MVP before scaling distribution.",
    },
    scoring: {
      pillars: {
        uniqueness: pillar(7, "Differentiation possible but category is noisy."),
        market_demand: pillar(8, "Pain is real and budget exists in target segments."),
        stickiness: pillar(7, "Workflow embedding can drive retention if core loop lands."),
        monetization_potential: pillar(7, "Multiple expansion levers beyond seats."),
        scalability: pillar(8, "Software margins and delivery scale well with cloud."),
        execution_complexity: pillar(6, "Integrations and compliance can add complexity."),
      },
      weighted_final_score: 72,
      verdict: "Moderate",
      verdict_rationale:
        "Scores cluster in the 7–8 range on demand and scale; complexity is manageable. Success depends on execution focus.",
    },
    idea_evolution: {
      improved_idea: `Tighten the wedge: start with one vertical and one measurable KPI (e.g. time saved per week), then expand. Anchor: ${short || "your idea"}.`,
      key_changes: [
        "Narrow ICP for first 12 months",
        "One killer workflow vs. broad platform",
        "Instrumented proof points for ROI",
      ],
      why_it_matters:
        "Focus reduces burn, increases win rate, and produces clearer positioning vs. generic competitors.",
      refined_audience:
        "Ops-led teams in SMB/mid-market (20–500 employees) with recurring workflows and compliance sensitivity.",
      positioning_angles: [
        "Fastest time-to-first-value",
        "Operator-grade reliability",
        "Transparent AI",
      ],
    },
    tech_stack: {
      mvp: {
        frontend: "React + Tailwind",
        backend: "Serverless functions (Edge)",
        database: "PostgreSQL (Supabase)",
        apis: "Stripe, email provider, one integration platform",
      },
      scalable: {
        frontend: "React + design system",
        backend: "Node or Go services + FastAPI for ML workloads",
        database: "Postgres + Redis + object storage",
        apis: "Search, analytics, event bus",
      },
      cost_level: "medium",
    },
    user_flow: {
      journey_steps: [
        "Discover → evaluate",
        "Sign up → connect",
        "Activate → invite team",
        "Expand → enterprise",
      ],
      page_structure: {
        landing: "Value prop, proof, CTA to analyze or sign up",
        dashboard: "Insights, tasks, settings, billing",
        core_flows: ["Onboarding", "Core workflow run", "Collaboration", "Billing"],
      },
    },
    kanban: {
      backlog: [
        {
          id: "k1",
          title: "Define ICP + success metrics",
          description: "One-page ICP + 3 KPIs for the first release.",
          priority: "high",
          estimated_effort: "2h",
        },
        {
          id: "k2",
          title: "Auth + org model",
          description: "Email/password + org membership.",
          priority: "high",
          estimated_effort: "2d",
        },
      ],
      in_progress: [
        {
          id: "k3",
          title: "Core workflow MVP",
          description: "Single workflow end-to-end with logging.",
          priority: "high",
          estimated_effort: "1w",
        },
      ],
      completed: [
        {
          id: "k4",
          title: "Design system shell",
          description: "Layout, nav, cards, tokens.",
          priority: "medium",
          estimated_effort: "3d",
        },
      ],
    },
    build_mode: {
      project_structure:
        "Monorepo or single app with routes, /components, /lib/services, /types.",
      modules: ["auth", "billing", "core workflow", "integrations", "analytics"],
      suggested_folder_structure:
        "pages/, components/ui, components/dashboard, lib/ai, services/",
      notes_for_ai_coding_tools:
        "Implement types from types/analysis.ts; keep API returning structured JSON only; add tests for analyze route.",
    },
  };
}
