import { useState } from "react";
import { Copy, Braces, Check } from "lucide-react";
import { toast } from "sonner";

interface SectionExportToolbarProps {
  sectionId: string;
  data: unknown;
}

function toMarkdown(sectionId: string, data: unknown): string {
  const title = sectionId.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  let md = `# ${title}\n\n`;

  function walk(obj: unknown, depth = 0): string {
    if (obj === null || obj === undefined) return "";
    if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean") return String(obj);
    if (Array.isArray(obj)) {
      return obj.map((item, i) => {
        if (typeof item === "string") return `${i + 1}. ${item}`;
        if (typeof item === "object" && item !== null) {
          const entries = Object.entries(item as Record<string, unknown>);
          const firstVal = entries[0]?.[1];
          const label = typeof firstVal === "string" ? firstVal : `Item ${i + 1}`;
          const rest = entries
            .slice(1)
            .map(([k, v]) => `   - **${k.replace(/_/g, " ")}**: ${walk(v, depth + 1)}`)
            .join("\n");
          return `${i + 1}. **${label}**\n${rest}`;
        }
        return `${i + 1}. ${String(item)}`;
      }).join("\n");
    }
    if (typeof obj === "object") {
      return Object.entries(obj as Record<string, unknown>)
        .map(([key, val]) => {
          const heading = "#".repeat(Math.min(depth + 2, 4));
          const label = key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
            return `- **${label}**: ${val}`;
          }
          return `${heading} ${label}\n${walk(val, depth + 1)}`;
        })
        .join("\n\n");
    }
    return "";
  }

  md += walk(data);
  return md;
}

export function SectionExportToolbar({ sectionId, data }: SectionExportToolbarProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = async (type: "text" | "json") => {
    try {
      const content = type === "json" ? JSON.stringify(data, null, 2) : toMarkdown(sectionId, data);
      await navigator.clipboard.writeText(content);
      setCopiedType(type);
      toast.success(`Copied as ${type === "json" ? "JSON" : "text"}`);
      setTimeout(() => setCopiedType(null), 2000);
    } catch {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleCopy("text")}
        className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium text-muted-foreground/60 hover:text-foreground hover:bg-white/[0.04] transition-colors"
        title="Copy as text"
      >
        {copiedType === "text" ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
        Text
      </button>
      <button
        onClick={() => handleCopy("json")}
        className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium text-muted-foreground/60 hover:text-foreground hover:bg-white/[0.04] transition-colors"
        title="Copy as JSON"
      >
        {copiedType === "json" ? <Check className="w-3 h-3 text-green-400" /> : <Braces className="w-3 h-3" />}
        JSON
      </button>
    </div>
  );
}
