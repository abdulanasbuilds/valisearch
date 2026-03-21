export const mockAnalysisResult = {
  userIdea: "AI-powered platform that helps small-scale farmers in developing countries optimize crop yields using satellite imagery and local weather data",

  idea_analysis: {
    summary: "An agricultural intelligence platform leveraging satellite imagery and hyperlocal weather data to deliver actionable crop optimization insights for smallholder farmers in developing economies. The platform bridges the precision agriculture gap for the 500M+ small-scale farmers who currently lack access to data-driven farming tools.",
    score: 7.8,
    verdict: "Build" as const,
    quickInsights: [
      "Strong social impact angle attracts ESG-focused investors",
      "Government subsidy opportunities in target markets",
      "Offline-first mobile approach critical for adoption",
      "Partnership with local agricultural extensions key to distribution",
    ],
  },

  validation: {
    marketDemand: 82,
    feasibility: 68,
    innovationScore: 74,
    risks: [
      { label: "Connectivity gaps in rural areas", severity: "high" as const },
      { label: "Farmer digital literacy barriers", severity: "high" as const },
      { label: "Satellite data costs at scale", severity: "medium" as const },
      { label: "Local language support needed", severity: "medium" as const },
      { label: "Seasonal revenue fluctuations", severity: "low" as const },
    ],
    strengths: [
      "Massive underserved market (500M+ farmers)",
      "Increasing mobile penetration in target regions",
      "Growing government focus on food security",
      "Climate change driving demand for smart farming",
    ],
  },

  market_research: {
    tam: "$24.8B",
    tamDescription: "Global precision agriculture market",
    sam: "$6.2B",
    samDescription: "Developing economies agricultural tech",
    som: "$310M",
    somDescription: "Achievable in first 5 years with focused go-to-market",
    growthRate: "14.2%",
    growthOutlook: "The precision agriculture market in developing economies is projected to grow at 14.2% CAGR through 2030, driven by climate change adaptation needs, increasing smartphone penetration, and government digitization initiatives.",
    trends: [
      "Satellite imagery costs dropping 40% year-over-year",
      "Mobile money integration enabling micro-subscriptions",
      "AI models achieving 89% accuracy in crop disease detection",
      "Government AgTech subsidies expanding across Sub-Saharan Africa",
      "Climate-smart agriculture mandates from international bodies",
    ],
  },

  competitor_analysis: [
    {
      name: "FarmGuide",
      description: "India-based crop advisory platform serving 2M+ farmers with weather and market price data.",
      strengths: ["Large user base", "Government partnerships", "Multi-language support"],
      weaknesses: ["Limited satellite integration", "India-only focus", "Basic AI capabilities"],
    },
    {
      name: "Apollo Agriculture",
      description: "Kenya-based full-stack farming platform combining financing, inputs, and insurance.",
      strengths: ["Integrated financial services", "Strong field presence", "Investor backing ($40M)"],
      weaknesses: ["High operational costs", "Limited tech differentiation", "Single market"],
    },
    {
      name: "Cropin",
      description: "Enterprise SaaS platform for agribusinesses with satellite monitoring and predictive analytics.",
      strengths: ["Enterprise clients", "Advanced analytics", "Global presence"],
      weaknesses: ["Enterprise-only pricing", "No smallholder focus", "Complex onboarding"],
    },
    {
      name: "PlantVillage",
      description: "Non-profit AI platform for crop disease diagnosis using phone cameras.",
      strengths: ["Free to use", "Strong research backing", "Offline capable"],
      weaknesses: ["Non-profit limitations", "Narrow feature set", "Sustainability concerns"],
    },
  ],

  product_strategy: {
    mvpFeatures: [
      { feature: "Satellite-based crop health monitoring", priority: "must-have" as const },
      { feature: "Hyperlocal weather forecasts (7-day)", priority: "must-have" as const },
      { feature: "Crop disease detection via phone camera", priority: "must-have" as const },
      { feature: "SMS-based alerts for weather events", priority: "must-have" as const },
      { feature: "Local language support (top 5 languages)", priority: "must-have" as const },
      { feature: "Offline mode for low-connectivity areas", priority: "must-have" as const },
    ],
    differentiationFeatures: [
      { feature: "AI-powered planting calendar optimization", priority: "differentiator" as const },
      { feature: "Soil health analysis from satellite data", priority: "differentiator" as const },
      { feature: "Community knowledge sharing network", priority: "differentiator" as const },
      { feature: "Market price predictions and sell timing", priority: "differentiator" as const },
    ],
    premiumFeatures: [
      { feature: "Advanced yield prediction models", priority: "premium" as const },
      { feature: "Insurance integration and risk scoring", priority: "premium" as const },
      { feature: "Supply chain connector to buyers", priority: "premium" as const },
      { feature: "Government compliance reporting", priority: "premium" as const },
    ],
  },

  branding: {
    namesSuggestions: ["CropSight", "TerraPulse", "AgriLens", "FarmOrbit", "HarvestIQ"],
    tagline: "See your farm from space. Grow smarter from the ground.",
    positioning: "The only precision agriculture platform purpose-built for smallholder farmers in developing economies — combining satellite intelligence with mobile-first design to make data-driven farming accessible to everyone.",
    brandVoice: "Empowering, practical, and culturally sensitive. We speak the language of farmers, not technologists. Our tone is warm, supportive, and action-oriented — like a knowledgeable neighbor who happens to have a satellite.",
  },

  monetization: {
    pricingModel: "Freemium with tiered subscriptions",
    tiers: [
      {
        name: "Starter",
        price: "Free",
        features: ["Basic weather alerts", "Crop calendar", "Community forum access", "1 farm plot monitoring"],
      },
      {
        name: "Growth",
        price: "$2.99/mo",
        features: ["Satellite crop monitoring", "Disease detection AI", "Market price alerts", "Up to 5 plots", "SMS alerts"],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: ["Unlimited plots", "API access", "Custom integrations", "Dedicated support", "Compliance reports"],
      },
    ],
    revenueStreams: [
      "Subscription revenue from Growth tier",
      "Enterprise licensing to agribusinesses",
      "Data licensing to agricultural research institutions",
      "Government contract revenue for food security programs",
      "Commission on insurance and financial product referrals",
    ],
  },

  go_to_market: {
    channels: [
      { name: "Agricultural extension workers", icon: "Users", description: "Partner with government extension services for on-ground distribution" },
      { name: "Mobile network operators", icon: "Smartphone", description: "Bundle with mobile data plans in rural areas" },
      { name: "Farmer cooperatives", icon: "Building2", description: "Group onboarding through established cooperative networks" },
      { name: "NGO partnerships", icon: "Heart", description: "Collaborate with agricultural NGOs for initial adoption" },
      { name: "Social media (WhatsApp/Facebook)", icon: "Share2", description: "Leverage messaging apps popular in target demographics" },
    ],
    launchStrategy: [
      "Phase 1: Pilot with 500 farmers in 2 districts in Ghana and Kenya",
      "Phase 2: Expand to 5,000 farmers, integrate mobile money payments",
      "Phase 3: Launch Growth tier, partner with 3 agribusinesses",
      "Phase 4: Expand to 3 additional countries, launch Enterprise tier",
    ],
    growthStrategies: [
      "Referral program: farmers earn free months for inviting neighbors",
      "Harvest success stories shared on local radio and social media",
      "Free workshops at farming cooperatives with live satellite demos",
      "Strategic partnership with mobile money providers for seamless payments",
    ],
  },

  final_verdict: {
    recommendation: "Build",
    confidence: 78,
    summary: "This startup idea addresses a massive underserved market with a technology approach that is becoming increasingly viable. The combination of satellite imagery and mobile-first design for smallholder farmers has strong product-market fit potential. Key challenges around connectivity and digital literacy are solvable with the right go-to-market strategy. We recommend proceeding with an MVP focused on the top 3 use cases in 2 pilot markets.",
  },
};

export type AnalysisResult = typeof mockAnalysisResult;
