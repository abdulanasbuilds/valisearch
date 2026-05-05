/**
 * Environment configuration and validation.
 * Ensures all required environment variables are present and typed.
 * 
 * ONLY VITE_ prefixed variables are allowed here.
 * Secret keys belong ONLY in Supabase Edge Function secrets.
 */

const getEnvVar = (name: string, fallback: string = ''): string => {
  const value = import.meta.env[name];
  if (value !== undefined && value !== null && value !== '') {
    return value;
  }
  if (fallback !== '') {
    return fallback;
  }
  // Warn in dev, don't crash
  if (import.meta.env.DEV) {
    console.warn(`[env] Missing environment variable: ${name}`);
  }
  return '';
};

// Public Supabase project credentials (safe to ship — RLS-protected anon key)
const DEFAULT_SUPABASE_URL = 'https://pwcfiykbqxkhxelusamx.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3Y2ZpeWticXhraHhlbHVzYW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MzU5MjAsImV4cCI6MjA5MTAxMTkyMH0.LuZfTTpOJFm3-woHJIYIM8URIGrQT2ZDeZloY78h934';

export const ENV = {
  SUPABASE_URL: getEnvVar('VITE_SUPABASE_URL', DEFAULT_SUPABASE_URL),
  SUPABASE_ANON_KEY: getEnvVar('VITE_SUPABASE_ANON_KEY', DEFAULT_SUPABASE_ANON_KEY),
  STRIPE_PUBLISHABLE_KEY: getEnvVar('VITE_STRIPE_PUBLISHABLE_KEY'),
  APP_URL: getEnvVar('VITE_APP_URL', typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5000'),
  APP_NAME: getEnvVar('VITE_APP_NAME', 'ValiSearch'),
} as const;

/**
 * Returns true if Supabase is configured with real credentials.
 */
export const isSupabaseConfigured = (): boolean => {
  return !!ENV.SUPABASE_URL && !!ENV.SUPABASE_ANON_KEY && !ENV.SUPABASE_URL.includes('your-project');
};

// Types for environment configuration
export type EnvConfig = typeof ENV;
