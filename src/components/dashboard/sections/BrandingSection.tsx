import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "../SectionCard";

export function BrandingSection() {
  const { branding } = mockAnalysisResult;

  return (
    <div className="space-y-4 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Branding</h2>
        <p className="text-[13px] text-muted-foreground mt-1">Name suggestions, tagline, and brand positioning</p>
      </div>

      <SectionCard title="Name Suggestions">
        <div className="flex flex-wrap gap-2">
          {branding.namesSuggestions.map((n) => (
            <span key={n} className="rounded-lg border border-border/60 bg-accent px-3 py-1.5 text-[13px] font-medium">
              {n}
            </span>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Tagline">
        <p className="text-[15px] font-medium italic text-foreground/80">"{branding.tagline}"</p>
      </SectionCard>

      <SectionCard title="Brand Positioning">
        <p className="text-[13px] leading-relaxed text-muted-foreground">{branding.positioning}</p>
      </SectionCard>

      <SectionCard title="Brand Voice">
        <p className="text-[13px] leading-relaxed text-muted-foreground">{branding.brandVoice}</p>
      </SectionCard>
    </div>
  );
}
