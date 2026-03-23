/**
 * Sliding-window rate limit for API routes (per key, e.g. client IP).
 * Designed for edge function usage.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 40;
const buckets = new Map<string, number[]>();

export function rateLimitAllow(key: string, isDev = false): boolean {
  if (isDev) return true;

  const now = Date.now();
  const prev = buckets.get(key) ?? [];
  const recent = prev.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return false;
  recent.push(now);
  buckets.set(key, recent);
  return true;
}

export function clientIpFromRequest(request: Request): string {
  const xf = request.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}
