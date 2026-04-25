/**
 * ValiSearch v2 — 7-Framework Intelligence Engine Types
 */

// ═══ Framework 1: Market Intelligence ═══
export interface MarketSizing {
  value: string;
  assumption: string;
}

export interface DemandTrend {
  headline: string;
  explanation: string;
}

export interface UnderservedOpportunity {
  gap: string;
  why_underserved: string;
}

export interface CapitalFlow {
  area: string;
  signal: string;
}

export interface MarketBreakdown {
  tam: MarketSizing;
  sam: MarketSizing;
  som: MarketSizing;
  demand_trends: DemandTrend[];
  underserved_opportunities: UnderservedOpportunity[];
  follow_the_money: CapitalFlow[];
}

// ═══ Framework 2: Problem Prioritization ═══
export type GrowthTrajectory = "rising fast" | "stable" | "declining";

export interface RankedProblem {
  rank: number;
  problem: string;
  urgency: number;
  willingness_to_pay: number;
  combined_score: number;
  growth_trajectory: GrowthTrajectory;
  complaint_signal: boolean;
  why_it_ranks_here: string;
}

export interface ProblemPrioritization {
  problems: RankedProblem[];
  top_insight: string;
}

// ═══ Framework 3: Offer Creation ═══
export interface ICP {
  who: string;
  situation: string;
  pain_level: string;
}

export interface OfferComponent {
  component: string;
  format: string;
  value: string;
}

export interface PricingTierV2 {
  name: string;
  price: string;
  who_its_for: string;
  key_difference: string;
}

export interface OfferCreation {
  headline: string;
  icp: ICP;
  value_proposition: string;
  offer_components: OfferComponent[];
  pricing_tiers: PricingTierV2[];
  guarantee: string;
  competitive_edge: string[];
}

// ═══ Framework 4: Distribution Plan ═══
export interface AcquisitionChannel {
  rank: number;
  channel: string;
  why_this_audience: string;
  cost_efficiency: string;
  time_to_first_result: string;
}

export interface ContentFormat {
  channel: string;
  format: string;
  example_title: string;
  why_it_works: string;
}

export interface WeeklyCalendar {
  week_1: string;
  week_2: string;
  week_3: string;
  week_4: string;
}

export interface BudgetSplit {
  organic_percentage: number;
  paid_percentage: number;
  rationale: string;
}

export interface LeveragePlay {
  tactic: string;
  why_it_multiplies: string;
  how_to_execute: string;
}

export interface DistributionPlan {
  acquisition_channels: AcquisitionChannel[];
  content_formats: ContentFormat[];
  weekly_calendar: WeeklyCalendar;
  budget_split: BudgetSplit;
  leverage_plays: LeveragePlay[];
}

// ═══ Framework 5: Viral Content ═══
export type EmotionalTrigger =
  | "fear_of_missing_out"
  | "social_status"
  | "curiosity"
  | "controversy";

export interface Hook {
  hook: string;
  emotional_trigger: EmotionalTrigger;
  why_it_works: string;
}

export interface ViralContentFormat {
  format: string;
  platform: string;
  ideal_length: string;
  why_it_spreads: string;
  example_title: string;
}

export interface ShareabilityItem {
  format: string;
  what_makes_people_share: string;
}

export interface DayRotation {
  day: string;
  format: string;
  purpose: string;
}

export interface WeeklySystem {
  posts_per_week: number;
  rotation: DayRotation[];
  burnout_prevention: string;
}

export interface ViralContent {
  hooks: Hook[];
  content_formats: ViralContentFormat[];
  shareability_audit: ShareabilityItem[];
  weekly_system: WeeklySystem;
}

// ═══ Framework 6: Competitor Weakness ═══
export interface CompetitorV2 {
  name: string;
  description: string;
  defensible_strength: string;
  critical_weakness: string;
  ignored_audience: string;
  pricing_signal: string;
}

export interface GapAnalysis {
  white_space: string;
  evidence: string;
  difficulty_to_enter: string;
}

export interface FastestGTMPath {
  ignored_audience: string;
  best_channel: string;
  why_combination_works: string;
}

export interface CompetitorWeakness {
  competitors: CompetitorV2[];
  gap_analysis: GapAnalysis[];
  positioning_recommendation: string;
  fastest_gtm_path: FastestGTMPath;
}

// ═══ Framework 7: Scale System ═══
export interface PhaseAction {
  action: string;
  why: string;
  tool: string;
}

export interface AutomationItem {
  process: string;
  tool: string;
  time_saved_weekly: string;
}

export interface HireItem {
  role: string;
  hire_when: string;
  monthly_cost: string;
  what_they_own: string;
}

export interface Phase1 {
  name: string;
  months: string;
  goal: string;
  actions: PhaseAction[];
  milestone: string;
}

export interface Phase2 {
  name: string;
  months: string;
  goal: string;
  automations: AutomationItem[];
  milestone: string;
}

export interface Phase3 {
  name: string;
  months: string;
  goal: string;
  hires: HireItem[];
  milestone: string;
}

export interface Phase4 {
  name: string;
  months: string;
  goal: string;
  growth_lever: string;
  growth_lever_rationale: string;
  revenue_projection: string;
  milestone: string;
}

export interface ScalePhases {
  phase_1: Phase1;
  phase_2: Phase2;
  phase_3: Phase3;
  phase_4: Phase4;
}

export interface ScaleSystem {
  target_revenue: string;
  timeframe: string;
  phases: ScalePhases;
  biggest_risk: string;
  unfair_advantage: string;
}

// ═══ Master V2 Type ═══
export type FrameworkId =
  | "market_breakdown"
  | "problem_prioritization"
  | "offer_creation"
  | "distribution_plan"
  | "viral_content"
  | "competitor_weakness"
  | "scale_system";

export type AnalysisType = "quick" | "full";

export interface ValiSearchAnalysisV2 {
  market_breakdown: MarketBreakdown;
  problem_prioritization: ProblemPrioritization;
  offer_creation: OfferCreation;
  distribution_plan: DistributionPlan;
  viral_content: ViralContent;
  competitor_weakness: CompetitorWeakness;
  scale_system: ScaleSystem;
  overall_score: number;
  data_sources: Record<FrameworkId, "ai" | "fallback">;
}

/** Quick analysis only includes 3 core frameworks */
export const QUICK_FRAMEWORKS: FrameworkId[] = [
  "market_breakdown",
  "problem_prioritization",
  "competitor_weakness",
];

export const ALL_FRAMEWORKS: FrameworkId[] = [
  "market_breakdown",
  "problem_prioritization",
  "offer_creation",
  "distribution_plan",
  "viral_content",
  "competitor_weakness",
  "scale_system",
];
