import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "../SectionCard";
import { ScoreDisplay } from "../ScoreDisplay";

export function OverviewSection() {
  const { idea_analysis, validation, final_verdict } = mockAnalysisResult;

  const verdictColor =
    idea_analysis.verdict === "Build" ? "text-[hsl(var(--success))] bg-[hsl(var(--success))]/10 border-[hsl(var(--success))]/20"
    : idea_analysis.verdict === "Improve" ? "text-[hsl(var(--warning))] bg-[hsl(var(--warning))]/10 border-[hsl(var(--warning))]/20"
    : "text-[hsl(var(--destructive))] bg-[hsl(var(--destructive))]/10 border-[hsl(var(--destructive))]/20";

  return (
    <div className="space-y-4 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Overview</h2>
        <p className="text-[13px] text-muted-foreground mt-1">Executive summary of your startup analysis</p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <SectionCard title="Idea Summary">
          <p className="text-[13px] leading-relaxed text-muted-foreground">{idea_analysis.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {idea_analysis.quickInsights.map((q) => (
              <span key={q} className="inline-block rounded-md bg-accent px-2.5 py-1 text-[11px] text-muted-foreground">
                {q}
              </span>
            ))}
          </div>
        </SectionCard>

        <SectionCard className="flex flex-col items-center justify-center min-w-[200px]">
          <ScoreDisplay score={idea_analysis.score} />
          <span className={`mt-3 inline-block rounded-md border px-3 py-1 text-[12px] font-semibold ${verdictColor}`}>
            {idea_analysis.verdict}
          </span>
        </SectionCard>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Market Demand", value: validation.marketDemand },
          { label: "Feasibility", value: validation.feasibility },
          { label: "Innovation", value: validation.innovationScore },
        ].map((m) => (
          <SectionCard key={m.label}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] text-muted-foreground">{m.label}</span>
              <span className="text-[13px] font-semibold tabular-nums">{m.value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${m.value}%` }} />
            </div>
          </SectionCard>
        ))}
      </div>

      <SectionCard title="Final Verdict">
        <p className="text-[13px] leading-relaxed text-muted-foreground">{final_verdict.summary}</p>
        <div className="mt-3 flex items-center gap-3 text-[12px] text-muted-foreground">
          <span>Confidence: <strong className="text-foreground">{final_verdict.confidence}%</strong></span>
        </div>
      </SectionCard>
    </div>
  );
}
