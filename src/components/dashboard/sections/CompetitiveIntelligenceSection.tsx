import { useAnalysisStore } from "@/store/useAnalysisStore";
import { SectionCard } from "../SectionCard";
import type { CompetitorWeakness } from "@/types/analysis-v2";
import { SectionExportToolbar } from "../SectionExportToolbar";
import { ArrowRight } from "lucide-react";

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const style = difficulty === "low" ? "bg-green-500/15 text-green-400" : difficulty === "medium" ? "bg-amber-500/15 text-amber-400" : "bg-red-500/15 text-red-400";
  return <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${style}`}>{difficulty}</span>;
}

export function CompetitiveIntelligenceSection() {
  const analysis = useAnalysisStore((s) => s.analysis);
  if (!analysis) return null;

  const data = (analysis as Record<string, unknown>).competitor_weakness as CompetitorWeakness | undefined;
  if (!data) return <div className="text-muted-foreground text-sm p-4">Competitive Intelligence data not available for this analysis.</div>;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Competitive Intelligence</h2>
          <p className="text-[13px] text-muted-foreground mt-1">Competitor weaknesses, gaps, and your positioning</p>
        </div>
        <SectionExportToolbar sectionId="competitor_weakness" data={data} />
      </div>

      {/* Competitor Cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.competitors?.map((c, i) => (
          <SectionCard key={i}>
            <h4 className="text-[14px] font-bold text-foreground">{c.name}</h4>
            <p className="text-[11px] text-muted-foreground/60 mt-0.5">{c.description}</p>
            <div className="mt-3 space-y-2">
              <div>
                <span className="text-[10px] font-bold text-green-400/70">STRENGTH</span>
                <p className="text-[11px] text-muted-foreground mt-0.5">{c.defensible_strength}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-red-400/70">WEAKNESS</span>
                <p className="text-[11px] text-muted-foreground mt-0.5">{c.critical_weakness}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400/70">IGNORED AUDIENCE</span>
                <p className="text-[11px] text-muted-foreground mt-0.5">{c.ignored_audience}</p>
              </div>
              <div className="pt-1.5 border-t border-white/[0.04]">
                <span className="text-[10px] font-bold text-muted-foreground/40">PRICING SIGNAL</span>
                <p className="text-[11px] text-muted-foreground/60 mt-0.5 italic">{c.pricing_signal}</p>
              </div>
            </div>
          </SectionCard>
        ))}
      </div>

      {/* Gap Analysis */}
      <SectionCard title="White Space Opportunities">
        <div className="space-y-3">
          {data.gap_analysis?.map((g, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-start justify-between gap-3">
                <p className="text-[14px] font-semibold text-foreground">{g.white_space}</p>
                <DifficultyBadge difficulty={g.difficulty_to_enter} />
              </div>
              <p className="text-[12px] text-muted-foreground mt-1.5">{g.evidence}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Positioning Recommendation */}
      <SectionCard>
        <div className="p-4 rounded-xl bg-primary/[0.05] border border-primary/15">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">Your Positioning</span>
          <p className="text-[15px] font-semibold text-foreground mt-2 leading-relaxed italic">"{data.positioning_recommendation}"</p>
        </div>
      </SectionCard>

      {/* Fastest GTM Path */}
      {data.fastest_gtm_path && (
        <SectionCard title="Fastest Go-To-Market Path">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="flex-1 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">Audience</span>
              <p className="text-[13px] font-medium text-foreground mt-1">{data.fastest_gtm_path.ignored_audience}</p>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-primary/50 rotate-90 sm:rotate-0" />
            </div>
            <div className="flex-1 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">Channel</span>
              <p className="text-[13px] font-medium text-foreground mt-1">{data.fastest_gtm_path.best_channel}</p>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-primary/50 rotate-90 sm:rotate-0" />
            </div>
            <div className="flex-1 p-3 rounded-lg bg-primary/[0.04] border border-primary/15 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">Why it works</span>
              <p className="text-[12px] text-muted-foreground mt-1">{data.fastest_gtm_path.why_combination_works}</p>
            </div>
          </div>
        </SectionCard>
      )}
    </div>
  );
}
