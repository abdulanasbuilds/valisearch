/**
 * Environment variable configuration and types.
 *
 * Client-side variables (NEXT_PUBLIC_ prefix) are available in the browser.
 * Server-side variables are only available in API routes and server components.
 *
 * To add API keys:
 * 1. Add the key to your Vercel project settings (Settings → Environment Variables)
 * 2. Reference it in server code via process.env.KEY_NAME
 * 3. For client-side keys, add with NEXT_PUBLIC_ prefix
 */

// ─── Client-side environment variables ───────────────────────────────────────

export const ENV = {
  /** Base URL for the API */
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "",

  /** Supabase publishable key for auth */
  SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "",

  /** Public Stripe key for client-side checkout */
  STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "",

  /** App URL */
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || (typeof window !== "undefined" ? window.location.origin : ""),
} as const;

// ─── Server-side env var names (for reference) ─────────────────────────────────

/**
 * These are NOT available in the browser. They are documented here
 * as a reference for which secrets to add in Vercel.
 */
export const SERVER_ENV_KEYS = {
  // AI Providers (free-tier first)
  OPENROUTER_API_KEY: "OPENROUTER_API_KEY",
  OPENROUTER_MODEL: "OPENROUTER_MODEL",
  GROQ_API_KEY: "GROQ_API_KEY",
  GROQ_MODEL: "GROQ_MODEL",
  GEMINI_API_KEY: "GEMINI_API_KEY",
  GEMINI_MODEL: "GEMINI_MODEL",

  // Premium AI (only used when VALISEARCH_ALLOW_PREMIUM_AI=true)
  OPENAI_API_KEY: "OPENAI_API_KEY",
  OPENAI_MODEL: "OPENAI_MODEL",
  CLAUDE_API_KEY: "CLAUDE_API_KEY",
  CLAUDE_MODEL: "CLAUDE_MODEL",
  VALISEARCH_ALLOW_PREMIUM_AI: "VALISEARCH_ALLOW_PREMIUM_AI",

  // Search / Data APIs
  BRAVE_API_KEY: "BRAVE_API_KEY",
  SERPAPI_API_KEY: "SERPAPI_API_KEY",

  // Business Data APIs
  CLEARBIT_API_KEY: "CLEARBIT_API_KEY",
  CRUNCHBASE_API_KEY: "CRUNCHBASE_API_KEY",

  // Branding / Domain APIs
  LOGO_DEV_API_KEY: "LOGO_DEV_API_KEY",
  NAMECHEAP_API_USER: "NAMECHEAP_API_USER",
  NAMECHEAP_API_KEY: "NAMECHEAP_API_KEY",
  NAMECHEAP_CLIENT_IP: "NAMECHEAP_CLIENT_IP",
  GODADDY_API_KEY: "GODADDY_API_KEY",
  GODADDY_API_SECRET: "GODADDY_API_SECRET",

  // Database
  SUPABASE_URL: "SUPABASE_URL",
  SUPABASE_ANON_KEY: "SUPABASE_ANON_KEY",
  SUPABASE_SERVICE_ROLE_KEY: "SUPABASE_SERVICE_ROLE_KEY",

  // Payments
  STRIPE_SECRET_KEY: "STRIPE_SECRET_KEY",
} as const;
