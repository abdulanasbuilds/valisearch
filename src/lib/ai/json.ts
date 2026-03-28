/**
 * Parse model output into JSON.
 * Strips optional markdown fences, finds the first complete JSON object,
 * and throws a descriptive error if parsing fails.
 */
export function parseModelJson<T>(raw: string): T {
  let s = raw.trim();

  // Strip markdown fences (```json ... ``` or ``` ... ```)
  const fence = /^```(?:json)?\s*([\s\S]*?)```\s*$/m.exec(s);
  if (fence) {
    s = fence[1].trim();
  }

  // Extract first JSON object if response has extra text before/after
  if (!s.startsWith("{") && !s.startsWith("[")) {
    const match = s.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
    if (match) s = match[1];
  }

  try {
    return JSON.parse(s) as T;
  } catch (err) {
    const preview = s.length > 200 ? s.slice(0, 200) + "…" : s;
    throw new Error(`AI returned invalid JSON: ${err instanceof Error ? err.message : String(err)}\n\nPreview: ${preview}`);
  }
}
