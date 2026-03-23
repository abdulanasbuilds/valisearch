/**
 * Market signals enrichment — adds trend data from search APIs.
 * Designed for edge function usage.
 */

import { fetchMarketTrendsSignals } from "@/lib/api-clients";

export async function enrichMarketSignals(
  topic: string,
  env: Record<string, string | undefined>
): Promise<{ extra_signals: string[] }> {
  const signals = await fetchMarketTrendsSignals(topic, env);
  return { extra_signals: signals };
}
