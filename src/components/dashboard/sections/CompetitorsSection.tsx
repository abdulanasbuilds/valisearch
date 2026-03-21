import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "@/components/dashboard/SectionCard";

export function CompetitorsSection() {
  const { competitor_analysis } = mockAnalysisResult;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Competitor Analysis</h2>
        <p className="mt-1 text-sm text-muted-foreground">Key players in the space and how to differentiate</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {competitor_analysis.map((c, i) => (
          <SectionCard key={c.name} className="glass-card-hover" style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm">
                {c.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-sm">{c.name}</h4>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{c.description}</p>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-medium text-success uppercase tracking-wider">Strengths</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {c.strengths.map((s) => (
                    <span key={s} className="rounded-md bg-success/10 border border-success/20 px-2 py-0.5 text-xs text-success">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-destructive uppercase tracking-wider">Weaknesses</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {c.weaknesses.map((w) => (
                    <span key={w} className="rounded-md bg-destructive/10 border border-destructive/20 px-2 py-0.5 text-xs text-destructive">{w}</span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
