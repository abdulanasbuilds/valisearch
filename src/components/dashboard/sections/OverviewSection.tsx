import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { ScoreDisplay } from "@/components/dashboard/ScoreDisplay";
import { Lightbulb } from "lucide-react";

export function OverviewSection() {
  const { idea_analysis, validation } = mockAnalysisResult;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
        <p className="mt-1 text-sm text-muted-foreground">Executive summary of your startup analysis</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr,auto]">
        <SectionCard title="Idea Summary">
          <p className="text-sm leading-relaxed text-muted-foreground">{idea_analysis.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {idea_analysis.quickInsights.map((insight, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground">
                <Lightbulb className="h-3 w-3 text-primary" />
                {insight}
              </span>
            ))}
          </div>
        </SectionCard>

        <SectionCard className="flex items-center justify-center min-w-[200px]">
          <ScoreDisplay score={idea_analysis.score} verdict={idea_analysis.verdict} />
        </SectionCard>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <SectionCard title="Market Demand" className="animate-fade-in" style={{ animationDelay: "100ms" } as React.CSSProperties}>
          <div className="mt-2 h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full gradient-primary transition-all duration-1000" style={{ width: `${validation.marketDemand}%` }} />
          </div>
          <span className="mt-2 block text-right text-sm font-semibold">{validation.marketDemand}%</span>
        </SectionCard>

        <SectionCard title="Feasibility" className="animate-fade-in" style={{ animationDelay: "200ms" } as React.CSSProperties}>
          <div className="mt-2 h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full bg-info transition-all duration-1000" style={{ width: `${validation.feasibility}%` }} />
          </div>
          <span className="mt-2 block text-right text-sm font-semibold">{validation.feasibility}%</span>
        </SectionCard>

        <SectionCard title="Innovation" className="animate-fade-in" style={{ animationDelay: "300ms" } as React.CSSProperties}>
          <div className="mt-2 h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full bg-success transition-all duration-1000" style={{ width: `${validation.innovationScore}%` }} />
          </div>
          <span className="mt-2 block text-right text-sm font-semibold">{validation.innovationScore}%</span>
        </SectionCard>
      </div>
    </div>
  );
}
