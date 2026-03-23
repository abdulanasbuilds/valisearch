/**
 * ValiSearch — unified structured output from the analysis API.
 * Dashboard maps to idea_analysis … build_mode; API returns one JSON document.
 */

export type VerdictLevel = "Strong" | "Moderate" | "Weak";

export type PillarKey =
  | "uniqueness"
  | "market_demand"
  | "stickiness"
  | "monetization_potential"
  | "scalability"
  | "execution_complexity";

export type PillarScore = {
  score: number;
  explanation: string;
};

export type ScoringEngine = {
  pillars: Record<PillarKey, PillarScore>;
  weighted_final_score: number;
  verdict: VerdictLevel;
  verdict_rationale: string;
};

export type IdeaAnalysisSummary = {
  summary: string;
  one_liner: string;
};

export type ValidationSection = {
  market_demand: string;
  feasibility: string;
  risks: string[];
};

export type MarketResearchSection = {
  tam_sam_som: { tam: string; sam: string; som: string };
  trends: string[];
  growth_outlook: string;
};

export type CompetitorCardData = {
  name: string;
  strengths: string[];
  weaknesses: string[];
};

export type CompetitorAnalysisSection = {
  summary: string;
  competitors: CompetitorCardData[];
  gap_opportunities: string[];
  differentiation_strategy: string;
};

export type ProductStrategySection = {
  mvp_features: string[];
  differentiation_features: string[];
  premium_features: string[];
  user_flow_steps: string[];
  system_architecture_overview: string;
};

export type BrandingSection = {
  name_suggestions: string[];
  taglines: string[];
  brand_positioning: string;
};

export type PricingTier = {
  name: string;
  price_hint: string;
  reasoning: string;
};

export type MonetizationSection = {
  pricing_model: string;
  pricing_tiers: PricingTier[];
  revenue_streams: string[];
  strategy: string;
};

export type GoToMarketSection = {
  channels: string[];
  launch_plan: string[];
  growth_strategies: string[];
};

export type FinalVerdict = {
  score: number;
  verdict: VerdictLevel;
  quick_summary: string;
};

export type IdeaEvolutionEngine = {
  improved_idea: string;
  key_changes: string[];
  why_it_matters: string;
  refined_audience: string;
  positioning_angles: string[];
};

export type StackBlock = {
  frontend: string;
  backend: string;
  database: string;
  apis: string;
};

export type TechStack = {
  mvp: StackBlock;
  scalable: StackBlock;
  cost_level: "low" | "medium" | "high";
};

export type UserFlowMap = {
  journey_steps: string[];
  page_structure: {
    landing: string;
    dashboard: string;
    core_flows: string[];
  };
};

export type KanbanPriority = "high" | "medium" | "low";

export type KanbanTask = {
  id: string;
  title: string;
  description: string;
  priority: KanbanPriority;
  estimated_effort: string;
};

export type KanbanBoard = {
  backlog: KanbanTask[];
  in_progress: KanbanTask[];
  completed: KanbanTask[];
};

export type BuildMode = {
  project_structure: string;
  modules: string[];
  suggested_folder_structure: string;
  notes_for_ai_coding_tools: string;
};

/** Full API + dashboard payload */
export type ValiSearchAnalysis = {
  idea_analysis: IdeaAnalysisSummary;
  validation: ValidationSection;
  market_research: MarketResearchSection;
  competitor_analysis: CompetitorAnalysisSection;
  product_strategy: ProductStrategySection;
  branding: BrandingSection;
  monetization: MonetizationSection;
  go_to_market: GoToMarketSection;
  final_verdict: FinalVerdict;
  scoring: ScoringEngine;
  idea_evolution: IdeaEvolutionEngine;
  tech_stack: TechStack;
  user_flow: UserFlowMap;
  kanban: KanbanBoard;
  build_mode: BuildMode;
};

/** Alias for hooks / routes */
export type AnalysisResult = ValiSearchAnalysis;
