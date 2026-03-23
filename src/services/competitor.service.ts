/**
 * Competitor discovery — enriches analysis with search API data.
 * Designed for edge function usage.
 */

import { searchCompetitorsQuery, type SearchHit } from "@/lib/api-clients";

export async function enrichCompetitorDiscovery(
  topic: string,
  env: Record<string, string | undefined>
): Promise<{ raw_results: SearchHit[] }> {
  const results = await searchCompetitorsQuery(topic, env);
  return { raw_results: results };
}
