/**
 * AI Provider chain — free / cheap providers first; premium only when allowed.
 * Order: OpenRouter → Groq → Gemini → (optional) OpenAI → Claude
 *
 * NOTE: These functions are designed for server-side (edge functions) execution.
 * They should NOT be called directly from the browser as they require API keys.
 * In the frontend, use the API service layer (src/services/api.ts) instead.
 */

import { parseModelJson } from "@/lib/ai/json";
import { buildAnalyzeUserPrompt, SYSTEM_ANALYSIS } from "@/lib/ai/prompts";
import type { ValiSearchAnalysis } from "@/types/analysis";

const MAX_TOKENS = 8192;

function logFallback(provider: string, err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  console.warn(`[valisearch:ai] ${provider} failed → fallback:`, msg);
}

function logSuccess(provider: string) {
  console.info(`[valisearch:ai] structured JSON from ${provider}`);
}

type NamedProvider = {
  name: string;
  fn: () => Promise<ValiSearchAnalysis | null>;
};

async function runChain(
  providers: NamedProvider[]
): Promise<ValiSearchAnalysis | null> {
  for (const { name, fn } of providers) {
    try {
      const result = await fn();
      if (result) {
        logSuccess(name);
        return result;
      }
    } catch (e) {
      logFallback(name, e);
    }
  }
  return null;
}

/**
 * Each provider function takes env vars as params so they work
 * in both Node.js (edge functions) and Deno (Supabase edge functions).
 */

export async function callOpenRouter(
  idea: string,
  apiKey: string,
  model = "google/gemma-2-9b-it:free",
  referer = "https://valisearch.com"
): Promise<ValiSearchAnalysis | null> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": referer,
      "X-Title": "ValiSearch",
    },
    body: JSON.stringify({
      model,
      max_tokens: MAX_TOKENS,
      temperature: 0.35,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_ANALYSIS },
        { role: "user", content: buildAnalyzeUserPrompt(idea) },
      ],
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`OpenRouter ${res.status}: ${t}`);
  }

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content;
  if (!raw) throw new Error("OpenRouter: empty content");
  return parseModelJson<ValiSearchAnalysis>(raw);
}

export async function callGroq(
  idea: string,
  apiKey: string,
  model = "llama-3.1-8b-instant"
): Promise<ValiSearchAnalysis | null> {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_tokens: MAX_TOKENS,
      temperature: 0.35,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_ANALYSIS },
        { role: "user", content: buildAnalyzeUserPrompt(idea) },
      ],
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Groq ${res.status}: ${t}`);
  }

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content;
  if (!raw) throw new Error("Groq: empty content");
  return parseModelJson<ValiSearchAnalysis>(raw);
}

export async function callGemini(
  idea: string,
  apiKey: string,
  model = "gemini-1.5-flash"
): Promise<ValiSearchAnalysis | null> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const prompt = `${SYSTEM_ANALYSIS}\n\n${buildAnalyzeUserPrompt(idea)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: MAX_TOKENS,
        temperature: 0.35,
        responseMimeType: "application/json",
      },
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Gemini ${res.status}: ${t}`);
  }

  const data = await res.json();
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!raw) throw new Error("Gemini: empty content");
  return parseModelJson<ValiSearchAnalysis>(raw);
}

export async function callOpenAI(
  idea: string,
  apiKey: string,
  model = "gpt-4o-mini"
): Promise<ValiSearchAnalysis | null> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_tokens: MAX_TOKENS,
      temperature: 0.35,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYSTEM_ANALYSIS },
        { role: "user", content: buildAnalyzeUserPrompt(idea) },
      ],
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`OpenAI ${res.status}: ${t}`);
  }

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content;
  if (!raw) throw new Error("OpenAI: empty content");
  return parseModelJson<ValiSearchAnalysis>(raw);
}

export async function callClaude(
  idea: string,
  apiKey: string,
  model = "claude-3-5-sonnet-20241022"
): Promise<ValiSearchAnalysis | null> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_ANALYSIS,
      messages: [
        { role: "user", content: buildAnalyzeUserPrompt(idea) },
      ],
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Claude ${res.status}: ${t}`);
  }

  const data = await res.json();
  const block = data.content?.find((c: { type: string }) => c.type === "text");
  const raw = block?.text;
  if (!raw) throw new Error("Claude: empty content");
  return parseModelJson<ValiSearchAnalysis>(raw);
}

/**
 * Run the full AI provider chain with environment variables.
 * Designed for edge function usage — pass env vars as a record.
 */
export async function analyzeWithProviderChain(
  idea: string,
  env: Record<string, string | undefined>
): Promise<ValiSearchAnalysis> {
  const trimmed = idea.trim();
  if (!trimmed) throw new Error("Idea is empty");

  const freeProviders: NamedProvider[] = [];

  if (env.OPENROUTER_API_KEY) {
    freeProviders.push({
      name: "openrouter",
      fn: () =>
        callOpenRouter(
          trimmed,
          env.OPENROUTER_API_KEY!,
          env.OPENROUTER_MODEL,
          env.APP_URL || "https://valisearch.com"
        ),
    });
  }

  if (env.GROQ_API_KEY) {
    freeProviders.push({
      name: "groq",
      fn: () => callGroq(trimmed, env.GROQ_API_KEY!, env.GROQ_MODEL),
    });
  }

  if (env.GEMINI_API_KEY) {
    freeProviders.push({
      name: "gemini",
      fn: () => callGemini(trimmed, env.GEMINI_API_KEY!, env.GEMINI_MODEL),
    });
  }

  let result = await runChain(freeProviders);

  const allowPremium = env.VALISEARCH_ALLOW_PREMIUM_AI === "true";
  if (!result && allowPremium) {
    const premiumProviders: NamedProvider[] = [];

    if (env.OPENAI_API_KEY) {
      premiumProviders.push({
        name: "openai",
        fn: () => callOpenAI(trimmed, env.OPENAI_API_KEY!, env.OPENAI_MODEL),
      });
    }

    if (env.CLAUDE_API_KEY) {
      premiumProviders.push({
        name: "claude",
        fn: () => callClaude(trimmed, env.CLAUDE_API_KEY!, env.CLAUDE_MODEL),
      });
    }

    result = await runChain(premiumProviders);
  }

  if (!result) {
    throw new Error(
      allowPremium
        ? "All configured AI providers failed"
        : "No AI providers configured. Add API keys for OpenRouter, Groq, or Gemini."
    );
  }

  return result;
}
