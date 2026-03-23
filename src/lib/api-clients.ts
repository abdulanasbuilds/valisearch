/**
 * External API clients — Brave → SerpAPI, Clearbit, Crunchbase, logo.dev, domain registrars.
 * All keys from environment variables only.
 * Designed for edge function (server-side) usage.
 */

export type SearchHit = {
  title: string;
  url: string;
  snippet?: string;
};

/** Brave Web Search API */
export async function searchBraveWeb(
  query: string,
  apiKey: string
): Promise<SearchHit[]> {
  const url = new URL("https://api.search.brave.com/res/v1/web/search");
  url.searchParams.set("q", query);
  url.searchParams.set("count", "10");

  const res = await fetch(url.toString(), {
    headers: { "X-Subscription-Token": apiKey },
  });

  if (!res.ok) {
    console.warn("[api-clients] Brave search failed:", res.status);
    return [];
  }

  const data = await res.json();
  const rows = data.web?.results ?? [];
  return rows.map((r: { title?: string; url?: string; description?: string }) => ({
    title: r.title ?? "Result",
    url: r.url ?? "",
    snippet: r.description,
  }));
}

/** SerpAPI (Google) */
export async function searchSerpApi(
  query: string,
  apiKey: string
): Promise<SearchHit[]> {
  const url = new URL("https://serpapi.com/search.json");
  url.searchParams.set("engine", "google");
  url.searchParams.set("q", query);
  url.searchParams.set("api_key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) {
    console.warn("[api-clients] SerpAPI failed:", res.status);
    return [];
  }

  const data = await res.json();
  const rows = data.organic_results ?? [];
  return rows.map((r: { title?: string; link?: string; snippet?: string }) => ({
    title: r.title ?? "Result",
    url: r.link ?? "",
    snippet: r.snippet,
  }));
}

/**
 * Competitor / market discovery: Brave first, SerpAPI fallback.
 */
export async function searchCompetitorsQuery(
  query: string,
  env: Record<string, string | undefined>
): Promise<SearchHit[]> {
  if (env.BRAVE_API_KEY) {
    const brave = await searchBraveWeb(query, env.BRAVE_API_KEY);
    if (brave.length > 0) return brave;
  }
  if (env.SERPAPI_API_KEY) {
    return searchSerpApi(query, env.SERPAPI_API_KEY);
  }
  return [];
}

export type ClearbitCompany = {
  name?: string;
  domain?: string;
  description?: string;
  metrics?: { employees?: number };
};

/** Clearbit Company API (domain-based) */
export async function clearbitCompanyByDomain(
  domain: string,
  apiKey: string
): Promise<ClearbitCompany | null> {
  const url = new URL("https://company.clearbit.com/v2/companies/find");
  url.searchParams.set("domain", domain);

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  if (!res.ok) return null;
  return (await res.json()) as ClearbitCompany;
}

/** logo.dev image URL for a domain */
export function logoDevUrl(
  domain: string,
  token: string,
  size = 128
): string {
  const d = domain.replace(/^https?:\/\//, "").split("/")[0];
  return `https://img.logo.dev/${encodeURIComponent(d)}?token=${encodeURIComponent(token)}&size=${size}`;
}

export type DomainCheckResult = {
  domain: string;
  available?: boolean;
  source: "namecheap" | "godaddy" | "none";
  message?: string;
};

/** Try Namecheap then GoDaddy for domain availability */
export async function checkDomainAvailability(
  domain: string,
  env: Record<string, string | undefined>
): Promise<DomainCheckResult> {
  // Namecheap
  if (env.NAMECHEAP_API_USER && env.NAMECHEAP_API_KEY && env.NAMECHEAP_CLIENT_IP) {
    const params = new URLSearchParams({
      ApiUser: env.NAMECHEAP_API_USER,
      ApiKey: env.NAMECHEAP_API_KEY,
      UserName: env.NAMECHEAP_API_USER,
      Command: "namecheap.domains.check",
      ClientIp: env.NAMECHEAP_CLIENT_IP,
      DomainList: domain,
    });

    try {
      const res = await fetch(`https://api.namecheap.com/xml.response?${params}`);
      if (res.ok) {
        const text = await res.text();
        const available = /Available="true"/i.test(text);
        return { domain, available, source: "namecheap" };
      }
    } catch {
      console.warn("[api-clients] Namecheap check failed");
    }
  }

  // GoDaddy
  if (env.GODADDY_API_KEY && env.GODADDY_API_SECRET) {
    try {
      const res = await fetch(
        `https://api.ote-godaddy.com/v1/domains/available?domain=${encodeURIComponent(domain)}`,
        {
          headers: {
            Authorization: `sso-key ${env.GODADDY_API_KEY}:${env.GODADDY_API_SECRET}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        return { domain, available: data.available, source: "godaddy" };
      }
    } catch {
      console.warn("[api-clients] GoDaddy check failed");
    }
  }

  return { domain, source: "none", message: "Registrar APIs not configured" };
}

/** Market trends from search results */
export async function fetchMarketTrendsSignals(
  topic: string,
  env: Record<string, string | undefined>
): Promise<string[]> {
  const hits = await searchCompetitorsQuery(`${topic} market trends 2025`, env);
  return hits.slice(0, 5).map((h) => h.title);
}
