import { useAnalysisStore } from "@/store/useAnalysisStore";
import { SectionCard } from "../SectionCard";
import type { ProblemPrioritization } from "@/types/analysis-v2";
import { SectionExportToolbar } from "../SectionExportToolbar";

function ScoreBadge({ score, max = 10 }: { score: number; max?: number }) {
  const color = score >= 8 ? "bg-green-500/15 text-green-400 border-green-500/20"
    : score >= 5 ? "bg-amber-500/15 text-amber-400 border-amber-500/20"
    : "bg-red-500/15 text-red-400 border-red-500/20";
  return <span className={`inline-flex items-center justify-center w-8 h-6 rounded text-[11px] font-bold border ${color}`}>{score}/{max}</span>;
}

function TrajectoryBadge({ trajectory }: { trajectory: string }) {
  const style = trajectory === "rising fast" ? "bg-green-500/15 text-green-400"
    : trajectory === "stable" ? "bg-white/[0.06] text-muted-foreground"
    : "bg-red-500/15 text-red-400";
  return <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${style}`}>{trajectory}</span>;
}

export function ProblemLandscapeSection() {
  const analysis = useAnalysisStore((s) => s.analysis);
  if (!analysis) return null;

  const data = (analysis as Record<string, unknown>).problem_prioritization as ProblemPrioritization | undefined;
  if (!data) return <div className="text-muted-foreground text-sm p-4">Problem Landscape data not available for this analysis.</div>;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Problem Landscape</h2>
          <p className="text-[13px] text-muted-foreground mt-1">Top 10 problems ranked by urgency and willingness to pay</p>
        </div>
        <SectionExportToolbar sectionId="problem_prioritization" data={data} />
      </div>

      <SectionCard>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-white/[0.06] text-muted-foreground/60 text-left">
                <th className="py-2 px-2 font-medium">#</th>
                <th className="py-2 px-2 font-medium">Problem</th>
                <th className="py-2 px-2 font-medium text-center">Urgency</th>
                <th className="py-2 px-2 font-medium text-center">WTP</th>
                <th className="py-2 px-2 font-medium text-center">Score</th>
                <th className="py-2 px-2 font-medium">Trend</th>
                <th className="py-2 px-2 font-medium text-center">Signal</th>
              </tr>
            </thead>
            <tbody>
              {data.problems?.map((p) => (
                <tr key={p.rank} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-2 text-muted-foreground/40 font-bold">{p.rank}</td>
                  <td className="py-3 px-2">
                    <p className="text-[12px] font-medium text-foreground">{p.problem}</p>
                    <p className="text-[10px] text-muted-foreground/50 mt-0.5 leading-snug">{p.why_it_ranks_here}</p>
                  </td>
                  <td className="py-3 px-2 text-center"><ScoreBadge score={p.urgency} /></td>
                  <td className="py-3 px-2 text-center"><ScoreBadge score={p.willingness_to_pay} /></td>
                  <td className="py-3 px-2 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[13px] font-bold">{p.combined_score}</span>
                      <div className="w-full max-w-[60px] h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(p.combined_score / 20) * 100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2"><TrajectoryBadge trajectory={p.growth_trajectory} /></td>
                  <td className="py-3 px-2 text-center text-[14px]">{p.complaint_signal ? "✓" : "✗"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {data.top_insight && (
        <SectionCard>
          <div className="flex gap-3 border-l-2 border-primary pl-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">Key Insight</span>
              <p className="text-[13px] text-muted-foreground italic mt-1 leading-relaxed">{data.top_insight}</p>
            </div>
          </div>
        </SectionCard>
      )}
    </div>
  );
}
