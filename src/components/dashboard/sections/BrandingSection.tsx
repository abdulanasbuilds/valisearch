import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { Quote } from "lucide-react";

export function BrandingSection() {
  const { branding } = mockAnalysisResult;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Branding</h2>
        <p className="mt-1 text-sm text-muted-foreground">Name suggestions, tagline, and brand positioning</p>
      </div>

      <SectionCard title="Name Suggestions">
        <div className="flex flex-wrap gap-2">
          {branding.namesSuggestions.map((name) => (
            <span key={name} className="rounded-xl gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20">
              {name}
            </span>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Tagline">
        <div className="flex items-start gap-3 rounded-xl bg-primary/5 border border-primary/10 p-4">
          <Quote className="h-5 w-5 shrink-0 text-primary mt-0.5" />
          <p className="text-lg font-medium italic leading-relaxed">{branding.tagline}</p>
        </div>
      </SectionCard>

      <div className="grid gap-6 sm:grid-cols-2">
        <SectionCard title="Brand Positioning">
          <p className="text-sm leading-relaxed text-muted-foreground">{branding.positioning}</p>
        </SectionCard>

        <SectionCard title="Brand Voice">
          <p className="text-sm leading-relaxed text-muted-foreground">{branding.brandVoice}</p>
        </SectionCard>
      </div>
    </div>
  );
}
