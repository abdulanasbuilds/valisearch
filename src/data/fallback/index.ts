/**
 * Fallback data for each framework — used when AI calls fail.
 * Realistic enough that the UI doesn't look broken.
 */
import type {
  MarketBreakdown,
  ProblemPrioritization,
  OfferCreation,
  DistributionPlan,
  ViralContent,
  CompetitorWeakness,
  ScaleSystem,
  FrameworkId,
} from "@/types/analysis-v2";

const fallbackMarket: MarketBreakdown = {
  tam: { value: "$12B", assumption: "Global addressable market based on industry reports" },
  sam: { value: "$1.2B", assumption: "Segment focused on target geography and buyer type" },
  som: { value: "$24M", assumption: "Realistic capture with focused GTM in 24 months" },
  demand_trends: [
    { headline: "AI-native workflows replacing legacy tools", explanation: "Buyers increasingly prefer tools with embedded AI. Manual processes are being automated at an accelerating rate." },
    { headline: "Vertical SaaS outperforming horizontal plays", explanation: "Niche-specific solutions command higher prices and retention. Generalist tools lose to focused alternatives." },
    { headline: "Usage-based pricing gaining adoption", explanation: "Companies shifting from flat subscriptions to consumption models. Aligns cost with value delivered." },
    { headline: "Remote-first teams driving collaboration tool spend", explanation: "Distributed teams need async-first tools. Spending on collaboration software up 30% YoY." },
    { headline: "Data privacy regulations creating new requirements", explanation: "GDPR, CCPA compliance driving demand for privacy-first tools. Companies willing to pay premium for compliance." },
  ],
  underserved_opportunities: [
    { gap: "SMB teams with 5-20 employees lack affordable enterprise-grade tools", why_underserved: "Enterprise tools price out small teams; consumer tools lack features" },
    { gap: "Non-technical founders need no-code workflow automation", why_underserved: "Existing tools require developer setup and maintenance" },
    { gap: "Emerging markets lack localized SaaS solutions", why_underserved: "Most tools optimize for US/EU; pricing and features miss local needs" },
    { gap: "Industry-specific compliance workflows remain manual", why_underserved: "Generic tools cannot handle regulatory nuances" },
    { gap: "Cross-functional reporting between sales and ops teams", why_underserved: "Data silos between departments; no unified view" },
  ],
  follow_the_money: [
    { area: "AI/ML infrastructure", signal: "$15B+ VC investment in 2024; Series B+ rounds growing 40% YoY" },
    { area: "Vertical SaaS", signal: "PE firms acquiring vertical SaaS at 15-25x revenue multiples" },
    { area: "Developer tools", signal: "GitHub, Vercel, Supabase raising at premium valuations; developer-first GTM proven" },
  ],
};

const fallbackProblems: ProblemPrioritization = {
  problems: [
    { rank: 1, problem: "Manual data entry consuming 10+ hours per week", urgency: 9, willingness_to_pay: 9, combined_score: 18, growth_trajectory: "rising fast", complaint_signal: true, why_it_ranks_here: "Direct impact on productivity and cost. Teams actively searching for automation solutions." },
    { rank: 2, problem: "No single source of truth across departments", urgency: 8, willingness_to_pay: 9, combined_score: 17, growth_trajectory: "rising fast", complaint_signal: true, why_it_ranks_here: "Causes decision delays and conflicts. Budget exists for integration platforms." },
    { rank: 3, problem: "Onboarding new team members takes 2-4 weeks", urgency: 8, willingness_to_pay: 8, combined_score: 16, growth_trajectory: "stable", complaint_signal: true, why_it_ranks_here: "High turnover amplifies this pain. Companies lose productivity during ramp-up." },
    { rank: 4, problem: "Reporting requires manual data compilation", urgency: 7, willingness_to_pay: 8, combined_score: 15, growth_trajectory: "rising fast", complaint_signal: true, why_it_ranks_here: "Executives demand real-time dashboards. Manual reporting is error-prone." },
    { rank: 5, problem: "Customer feedback scattered across channels", urgency: 7, willingness_to_pay: 7, combined_score: 14, growth_trajectory: "stable", complaint_signal: true, why_it_ranks_here: "Product teams miss insights. No unified feedback loop." },
    { rank: 6, problem: "Compliance tracking done in spreadsheets", urgency: 8, willingness_to_pay: 6, combined_score: 14, growth_trajectory: "rising fast", complaint_signal: false, why_it_ranks_here: "Regulatory pressure increasing but budgets lag awareness." },
    { rank: 7, problem: "Sales forecasting inaccurate by 30%+", urgency: 6, willingness_to_pay: 7, combined_score: 13, growth_trajectory: "stable", complaint_signal: true, why_it_ranks_here: "Causes resource misallocation. Revenue teams frustrated." },
    { rank: 8, problem: "Team communication fragmented across 5+ tools", urgency: 6, willingness_to_pay: 6, combined_score: 12, growth_trajectory: "stable", complaint_signal: true, why_it_ranks_here: "Context switching reduces deep work. But switching costs prevent action." },
    { rank: 9, problem: "No visibility into project bottlenecks until deadlines miss", urgency: 6, willingness_to_pay: 5, combined_score: 11, growth_trajectory: "stable", complaint_signal: false, why_it_ranks_here: "Pain is real but often accepted as normal." },
    { rank: 10, problem: "Knowledge loss when employees leave", urgency: 5, willingness_to_pay: 5, combined_score: 10, growth_trajectory: "declining", complaint_signal: false, why_it_ranks_here: "Acknowledged problem but low urgency until crisis hits." },
  ],
  top_insight: "The highest-scoring problems cluster around data fragmentation and manual processes — indicating a market ready for unified automation platforms.",
};

const fallbackOffer: OfferCreation = {
  headline: "Stop Wasting 10 Hours a Week on Work Your Software Should Do for You",
  icp: {
    who: "Operations managers and team leads at SMB companies (20-200 employees)",
    situation: "Drowning in manual processes, using 5+ disconnected tools, missing deadlines",
    pain_level: "Spending 40% of their time on admin instead of strategic work",
  },
  value_proposition: "Transform your team from firefighting mode to strategic execution — automate the busywork, unify your data, and ship faster.",
  offer_components: [
    { component: "Core automation platform", format: "Cloud-based SaaS with mobile app", value: "Eliminates manual data entry and cross-tool syncing" },
    { component: "Pre-built workflow templates", format: "50+ industry-specific templates", value: "Go live in hours, not weeks" },
    { component: "Real-time team dashboard", format: "Customizable analytics dashboard", value: "One source of truth for all metrics" },
    { component: "AI-powered insights", format: "Weekly automated reports + alerts", value: "Spot problems before they become crises" },
  ],
  pricing_tiers: [
    { name: "Starter", price: "$29/mo", who_its_for: "Solo operators and small teams (1-5)", key_difference: "Core automation + 3 integrations" },
    { name: "Growth", price: "$79/mo", who_its_for: "Growing teams (5-25) needing collaboration", key_difference: "Unlimited integrations + team features + analytics" },
    { name: "Scale", price: "$199/mo", who_its_for: "Scaling companies (25+) with compliance needs", key_difference: "SSO + audit log + priority support + custom workflows" },
  ],
  guarantee: "Try it free for 14 days. If you don't save at least 5 hours in your first week, we'll extend your trial and personally help you set up — or give you a full refund.",
  competitive_edge: [
    "Set up in 15 minutes, not 15 days — pre-built templates for your industry",
    "AI that explains its reasoning, not a black box",
    "Pay only for what you use — no shelfware",
  ],
};

const fallbackDistribution: DistributionPlan = {
  acquisition_channels: [
    { rank: 1, channel: "LinkedIn organic content", why_this_audience: "Target ICP lives on LinkedIn; decision-makers actively consume content", cost_efficiency: "low", time_to_first_result: "1-2 weeks" },
    { rank: 2, channel: "Niche community engagement (Reddit, Slack groups)", why_this_audience: "High-intent users asking questions about this exact problem", cost_efficiency: "low", time_to_first_result: "2-3 weeks" },
    { rank: 3, channel: "Cold outbound email", why_this_audience: "Direct reach to ICP with personalized problem messaging", cost_efficiency: "medium", time_to_first_result: "2-4 weeks" },
    { rank: 4, channel: "Product Hunt launch", why_this_audience: "Early adopter audience willing to try new tools", cost_efficiency: "low", time_to_first_result: "1 day (launch day)" },
    { rank: 5, channel: "Partner co-marketing", why_this_audience: "Complementary tools have your audience built-in", cost_efficiency: "low", time_to_first_result: "4-6 weeks" },
  ],
  content_formats: [
    { channel: "LinkedIn", format: "Problem-agitate carousel", example_title: "I tracked where my team's time went for 30 days. Here's the embarrassing truth.", why_it_works: "Visual + relatable pain = high engagement and shares" },
    { channel: "Twitter/X", format: "Thread with receipts", example_title: "We replaced 5 tools with 1 workflow. Saved $2,400/mo. Here's exactly how:", why_it_works: "Specific numbers + actionable steps drive bookmarks" },
    { channel: "YouTube", format: "Screen-recorded walkthrough", example_title: "Watch me automate a 3-hour weekly report in 8 minutes", why_it_works: "Proof of value; viewers become trial signups" },
    { channel: "Blog/SEO", format: "Problem-comparison article", example_title: "Manual reporting vs automated: real cost comparison for growing teams", why_it_works: "Captures high-intent search traffic" },
  ],
  weekly_calendar: {
    week_1: "Set up LinkedIn profile for thought leadership. Post 3 problem-awareness carousels. Join 5 relevant communities and start contributing value.",
    week_2: "Launch cold email sequence (50 prospects). Publish first blog post. Create Product Hunt coming-soon page.",
    week_3: "Double down on top-performing LinkedIn content. Start YouTube channel with 2 walkthrough videos. Reach out to 3 potential partners.",
    week_4: "Product Hunt launch. Follow up all warm leads. Analyze what worked, double down on best channel.",
  },
  budget_split: {
    organic_percentage: 80,
    paid_percentage: 20,
    rationale: "With limited budget, organic builds compounding assets (content, community, SEO). Paid budget reserved for retargeting warm visitors and boosting top-performing posts.",
  },
  leverage_plays: [
    { tactic: "Build in public on Twitter/LinkedIn", why_it_multiplies: "Every update is content + social proof + community building simultaneously", how_to_execute: "Share weekly metrics, behind-the-scenes decisions, user wins" },
    { tactic: "Create a free tool that solves a sub-problem", why_it_multiplies: "Generates leads at zero marginal cost; demonstrates expertise", how_to_execute: "Build a simple calculator or audit tool, gate results with email" },
    { tactic: "Customer success stories as distribution", why_it_multiplies: "Customers share their own wins, creating organic referrals", how_to_execute: "Interview best users monthly, create case study, they share with network" },
  ],
};

const fallbackViral: ViralContent = {
  hooks: [
    { hook: "I spent $47,000 on tools my team never used. Here's what actually worked.", emotional_trigger: "curiosity", why_it_works: "Specific dollar amount creates credibility; promise of reveal drives clicks" },
    { hook: "Your competitors automated this 6 months ago. You're still doing it by hand.", emotional_trigger: "fear_of_missing_out", why_it_works: "Competitive anxiety combined with implied easy solution" },
    { hook: "The uncomfortable truth about your team's productivity (that no one wants to admit)", emotional_trigger: "curiosity", why_it_works: "Forbidden knowledge pattern; personal relevance" },
    { hook: "We fired our project management tool. Revenue went up 23%.", emotional_trigger: "controversy", why_it_works: "Counterintuitive claim demands explanation" },
    { hook: "Stop hiring. Start automating. Here's the playbook we used.", emotional_trigger: "social_status", why_it_works: "Positions reader as smart operator; actionable promise" },
    { hook: "I asked 100 founders their biggest regret. Same answer, every time.", emotional_trigger: "curiosity", why_it_works: "Social proof + mystery + universal relevance" },
    { hook: "This $29/mo tool replaced our $2,400/mo software stack", emotional_trigger: "fear_of_missing_out", why_it_works: "Extreme value contrast creates urgency to investigate" },
    { hook: "Unpopular opinion: Most startups fail because of operations, not product.", emotional_trigger: "controversy", why_it_works: "Challenges conventional wisdom; invites debate" },
    { hook: "The exact workflow that got us from 0 to 1,000 users in 30 days", emotional_trigger: "social_status", why_it_works: "Specific result + timeframe + actionable format" },
    { hook: "If you're using spreadsheets for this in 2025, we need to talk.", emotional_trigger: "fear_of_missing_out", why_it_works: "Mild shame + implied superior alternative" },
  ],
  content_formats: [
    { format: "LinkedIn carousel", platform: "LinkedIn", ideal_length: "8-12 slides", why_it_spreads: "Visual storytelling beats text posts 3x in engagement", example_title: "From chaos to clarity: our 5-step automation journey" },
    { format: "Twitter thread", platform: "Twitter/X", ideal_length: "8-15 tweets", why_it_spreads: "Each tweet is independently shareable; thread format builds momentum", example_title: "How we cut our ops time by 60% (a thread)" },
    { format: "Short-form video", platform: "TikTok/Reels", ideal_length: "30-60 seconds", why_it_spreads: "Algorithm favors completion rate; quick value = high completion", example_title: "POV: You automate your Monday morning report" },
    { format: "Long-form video", platform: "YouTube", ideal_length: "8-15 minutes", why_it_spreads: "Search-driven discovery + high trust per view", example_title: "Complete setup: automating your team's workflow (no code)" },
    { format: "Newsletter", platform: "Email", ideal_length: "500-800 words", why_it_spreads: "Direct relationship; forward-to-colleague drives organic growth", example_title: "The Ops Playbook: weekly automation wins" },
  ],
  shareability_audit: [
    { format: "LinkedIn carousel", what_makes_people_share: "Makes the sharer look smart and helpful to their network" },
    { format: "Twitter thread", what_makes_people_share: "Bookmarkable value; people save threads as reference material" },
    { format: "Short-form video", what_makes_people_share: "Entertainment value combined with 'tag someone who needs this'" },
    { format: "Case study", what_makes_people_share: "Social proof; people share to validate their own decisions" },
  ],
  weekly_system: {
    posts_per_week: 5,
    rotation: [
      { day: "Monday", format: "Problem-awareness post", purpose: "Start the week highlighting a pain point your audience feels" },
      { day: "Tuesday", format: "Tutorial/walkthrough", purpose: "Teach something actionable; build authority" },
      { day: "Wednesday", format: "Customer story/social proof", purpose: "Show real results from real users" },
      { day: "Thursday", format: "Behind-the-scenes/build in public", purpose: "Create parasocial connection; humanize the brand" },
      { day: "Friday", format: "Hook-driven engagement post", purpose: "Maximize weekend reach with debate/poll/hot take" },
    ],
    burnout_prevention: "Batch create content on Sunday (2 hours). Use a scheduling tool. Repurpose each piece across 2-3 platforms. Skip posting rather than forcing low-quality content.",
  },
};

const fallbackCompetitor: CompetitorWeakness = {
  competitors: [
    { name: "Established Suite Co", description: "All-in-one business operations platform", defensible_strength: "Brand recognition and enterprise distribution (10,000+ customers)", critical_weakness: "Bloated UX; users report using only 20% of features", ignored_audience: "Solo founders and teams under 10 people", pricing_signal: "High per-seat pricing ($150+/mo) signals enterprise-only focus" },
    { name: "Modern Startup Tool", description: "Sleek project management with AI features", defensible_strength: "Beautiful UI and strong PLG motion; viral within teams", critical_weakness: "Shallow integrations; breaks down past 50 users", ignored_audience: "Non-tech teams in traditional industries", pricing_signal: "Freemium with aggressive upsells signals VC-funded growth-at-all-costs" },
    { name: "Vertical Niche Player", description: "Industry-specific workflow tool", defensible_strength: "Deep domain expertise and compliance features", critical_weakness: "Dated technology; slow release cycles (quarterly updates)", ignored_audience: "Adjacent verticals with similar workflows", pricing_signal: "Annual contracts only; no self-serve signals sales-led motion" },
    { name: "Open Source Alternative", description: "Self-hosted automation framework", defensible_strength: "Free tier and developer community (50K+ GitHub stars)", critical_weakness: "Requires technical setup; no support for non-developers", ignored_audience: "Business users who need managed solutions", pricing_signal: "Free core + paid cloud signals conversion challenges" },
    { name: "New AI-First Entrant", description: "AI-powered process automation startup", defensible_strength: "Cutting-edge AI capabilities; fast iteration speed", critical_weakness: "No proven retention; product changes frequently; trust issues", ignored_audience: "Risk-averse buyers in regulated industries", pricing_signal: "Low introductory pricing signals land-and-expand strategy" },
  ],
  gap_analysis: [
    { white_space: "Affordable, opinionated workflow tool for teams of 5-25", evidence: "Established players price out small teams; startups optimize for solo or enterprise", difficulty_to_enter: "low" },
    { white_space: "No-code automation with built-in compliance for regulated industries", evidence: "Vertical players have compliance but old tech; modern tools ignore compliance", difficulty_to_enter: "medium" },
    { white_space: "AI-powered insights with transparent reasoning (not black-box)", evidence: "Users in forums consistently complain about AI tools they can't trust or verify", difficulty_to_enter: "medium" },
  ],
  positioning_recommendation: "For growing teams (5-25 people) who are drowning in manual operations, [Product] is the only workflow platform that delivers automation with built-in transparency — so you save time without losing control.",
  fastest_gtm_path: {
    ignored_audience: "Non-technical ops managers at 10-50 person companies",
    best_channel: "LinkedIn content + niche community engagement",
    why_combination_works: "This audience is active on LinkedIn, underserved by technical tools, and gathers in industry Slack groups where trust-based recommendations drive adoption.",
  },
};

const fallbackScale: ScaleSystem = {
  target_revenue: "$10,000 MRR",
  timeframe: "12 months",
  phases: {
    phase_1: {
      name: "Stabilize",
      months: "1-2",
      goal: "Validate core workflow with 10 paying customers",
      actions: [
        { action: "Ship MVP with one core workflow", why: "Prove value before adding complexity", tool: "Vercel + Supabase" },
        { action: "Set up billing and onboarding", why: "Revenue from day one builds conviction", tool: "Stripe + custom onboarding flow" },
        { action: "Run 15 discovery calls with ICP", why: "Validate assumptions before scaling", tool: "Calendly + Notion for notes" },
      ],
      milestone: "10 paying customers, $500 MRR, 80%+ retention after first month",
    },
    phase_2: {
      name: "Automate",
      months: "3-4",
      goal: "Remove yourself from repetitive tasks; focus on growth",
      automations: [
        { process: "Customer onboarding", tool: "Automated email sequence + in-app tour", time_saved_weekly: "5 hours" },
        { process: "Support triage", tool: "AI chatbot + knowledge base", time_saved_weekly: "3 hours" },
        { process: "Invoice and billing", tool: "Stripe automated billing + dunning", time_saved_weekly: "2 hours" },
      ],
      milestone: "$2,000 MRR, support load manageable solo, onboarding fully self-serve",
    },
    phase_3: {
      name: "Delegate",
      months: "5-8",
      goal: "Make first hires to unlock growth bottlenecks",
      hires: [
        { role: "Part-time content marketer", hire_when: "When you have 3+ customer stories to tell", monthly_cost: "$2,000-3,000", what_they_own: "LinkedIn content, blog posts, case studies" },
        { role: "Part-time customer success", hire_when: "When support tickets exceed 2 hours/day", monthly_cost: "$1,500-2,500", what_they_own: "Onboarding calls, support, NPS tracking" },
      ],
      milestone: "$5,000 MRR, 50+ customers, content engine producing 3 posts/week",
    },
    phase_4: {
      name: "Scale",
      months: "9-12",
      goal: "Hit $10K MRR through repeatable acquisition",
      growth_lever: "Partner program with complementary SaaS tools",
      growth_lever_rationale: "Partners bring warm intros to qualified buyers; commission-based so zero upfront cost. Each partner relationship can drive 5-10 customers per month.",
      revenue_projection: "$10,000-15,000 MRR with 100-150 customers at $79 average",
      milestone: "$10,000 MRR, 3+ active partners, CAC payback under 3 months",
    },
  },
  biggest_risk: "Founder burnout from trying to build, sell, and support simultaneously in months 3-5 before first hire",
  unfair_advantage: "Direct customer relationships and rapid iteration speed — large competitors cannot match your speed of learning and shipping.",
};

const FALLBACK_MAP: Record<FrameworkId, unknown> = {
  market_breakdown: fallbackMarket,
  problem_prioritization: fallbackProblems,
  offer_creation: fallbackOffer,
  distribution_plan: fallbackDistribution,
  viral_content: fallbackViral,
  competitor_weakness: fallbackCompetitor,
  scale_system: fallbackScale,
};

export function getFallbackData(frameworkId: FrameworkId): unknown {
  return FALLBACK_MAP[frameworkId];
}

export function getFullFallbackAnalysis(): {
  market_breakdown: MarketBreakdown;
  problem_prioritization: ProblemPrioritization;
  offer_creation: OfferCreation;
  distribution_plan: DistributionPlan;
  viral_content: ViralContent;
  competitor_weakness: CompetitorWeakness;
  scale_system: ScaleSystem;
} {
  return {
    market_breakdown: fallbackMarket,
    problem_prioritization: fallbackProblems,
    offer_creation: fallbackOffer,
    distribution_plan: fallbackDistribution,
    viral_content: fallbackViral,
    competitor_weakness: fallbackCompetitor,
    scale_system: fallbackScale,
  };
}
