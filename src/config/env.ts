/**
 * Environment variable configuration and types.
 *
 * Client-side variables (VITE_ prefix) are available in the browser.
 * Server-side variables are only available in edge functions.
 *
 * To add API keys:
 * 1. Add the key to your Lovable Cloud secrets (Settings → Secrets)
 * 2. Reference it in edge functions via Deno.env.get("KEY_NAME")
 * 3. For client-side keys, add with VITE_ prefix
 */

// ─── Client-side environment variables ───────────────────────────────────────

export const ENV = {
  /** Base URL for the Supabase project (used as API base) */
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_SUPABASE_URL || "",

  /** Supabase publishable key for auth */
  SUPABASE_PUBLISHABLE_KEY: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "",

  /** Public Stripe key for client-side checkout */
  STRIPE_PUBLIC_KEY: import.meta.env.VITE_STRIPE_PUBLIC_KEY || "",

  /** App URL */
  APP_URL: import.meta.env.VITE_APP_URL || window.location.origin,
} as const;

// ─── Server-side env var names (for edge function reference) ─────────────────

/**
 * These are NOT available in the browser. They are documented here
 * as a reference for which secrets to add in Lovable Cloud.
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
