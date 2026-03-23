/**
 * Frontend API service — handles communication with backend.
 * Currently uses mock data; when edge functions are deployed,
 * this will call the real API endpoints.
 */

import type { ValiSearchAnalysis } from "@/types/analysis";
import { getMockAnalysis } from "@/services/analysis.service";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Analyze a startup idea.
 * Tries the backend API first; falls back to mock data if unavailable.
 */
export async function analyzeIdea(idea: string): Promise<{
  result: ValiSearchAnalysis;
  source: "ai" | "mock";
}> {
  // Try real API if configured
  if (API_BASE_URL) {
    try {
      const res = await fetch(`${API_BASE_URL}/functions/v1/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
            ? { Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}` }
            : {}),
        },
        body: JSON.stringify({ idea }),
      });

      if (res.ok) {
        const data = await res.json();
        const source = (res.headers.get("X-ValiSearch-Source") as "ai" | "mock") || "ai";
        return { result: data, source };
      }

      if (res.status === 429) {
        throw new Error("Too many requests. Please wait a moment and try again.");
      }

      console.warn("[api] Backend returned", res.status, "— using mock data");
    } catch (e) {
      if (e instanceof Error && e.message.includes("Too many")) throw e;
      console.warn("[api] Backend unavailable — using mock data:", e);
    }
  }

  // Simulate analysis delay for mock data
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { result: getMockAnalysis(idea), source: "mock" };
}

/**
 * Fetch competitor enrichment data.
 */
export async function fetchCompetitorData(topic: string) {
  if (API_BASE_URL) {
    try {
      const res = await fetch(`${API_BASE_URL}/functions/v1/competitors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      if (res.ok) return res.json();
    } catch {
      console.warn("[api] Competitor API unavailable");
    }
  }
  return { topic, raw_results: [] };
}

/**
 * Fetch market signals.
 */
export async function fetchMarketData(topic: string) {
  if (API_BASE_URL) {
    try {
      const res = await fetch(`${API_BASE_URL}/functions/v1/market`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      if (res.ok) return res.json();
    } catch {
      console.warn("[api] Market API unavailable");
    }
  }
  return { topic, extra_signals: [] };
}
