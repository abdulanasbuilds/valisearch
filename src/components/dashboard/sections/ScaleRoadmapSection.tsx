import { useAnalysisStore } from "@/store/useAnalysisStore";
import { SectionCard } from "../SectionCard";
import type { ScaleSystem } from "@/types/analysis-v2";
import { SectionExportToolbar } from "../SectionExportToolbar";

const PHASE_COLORS = {
  phase_1: { dot: "bg-blue-500", line: "border-blue-500/30", label: "text-blue-400", bg: "bg-blue-500/[0.04]" },
  phase_2: { dot: "bg-purple-500", line: "border-purple-500/30", label: "text-purple-400", bg: "bg-purple-500/[0.04]" },
  phase_3: { dot: "bg-amber-500", line: "border-amber-500/30", label: "text-amber-400", bg: "bg-amber-500/[0.04]" },
  phase_4: { dot: "bg-green-500", line: "border-green-500/30", label: "text-green-400", bg: "bg-green-500/[0.04]" },
};

export function ScaleRoadmapSection() {
  const analysis = useAnalysisStore((s) => s.analysis);
  if (!analysis) return null;

  const data = (analysis as Record<string, unknown>).scale_system as ScaleSystem | undefined;
  if (!data) return <div className="text-muted-foreground text-sm p-4">Scale Roadmap data not available for this analysis.</div>;

  const phases = data.phases;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Scale Roadmap</h2>
          <p className="text-[13px] text-muted-foreground mt-1">
            Path to {data.target_revenue} in {data.timeframe}
          </p>
        </div>
        <SectionExportToolbar sectionId="scale_system" data={data} />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-[19px] top-8 bottom-8 w-px bg-white/[0.08]" />

        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="relative flex gap-4">
            <div className="shrink-0 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${PHASE_COLORS.phase_1.dot} flex items-center justify-center text-white text-[13px] font-bold z-10`}>1</div>
            </div>
            <SectionCard className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`text-[13px] font-bold ${PHASE_COLORS.phase_1.label}`}>{phases.phase_1.name}</span>
                <span className="text-[10px] text-muted-foreground/50">Month {phases.phase_1.months}</span>
              </div>
              <p className="text-[12px] text-muted-foreground mb-3">{phases.phase_1.goal}</p>
              <div className="space-y-1.5">
                {phases.phase_1.actions?.map((a, i) => (
                  <div key={i} className={`p-2.5 rounded-lg ${PHASE_COLORS.phase_1.bg} border border-blue-500/10`}>
                    <p className="text-[12px] font-medium text-foreground">{a.action}</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5">{a.why} · <span className="text-blue-400/60">{a.tool}</span></p>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/40">Milestone</span>
                <p className="text-[11px] text-foreground mt-0.5">{phases.phase_1.milestone}</p>
              </div>
            </SectionCard>
          </div>

          {/* Phase 2 */}
          <div className="relative flex gap-4">
            <div className="shrink-0 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${PHASE_COLORS.phase_2.dot} flex items-center justify-center text-white text-[13px] font-bold z-10`}>2</div>
            </div>
            <SectionCard className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`text-[13px] font-bold ${PHASE_COLORS.phase_2.label}`}>{phases.phase_2.name}</span>
                <span className="text-[10px] text-muted-foreground/50">Month {phases.phase_2.months}</span>
              </div>
              <p className="text-[12px] text-muted-foreground mb-3">{phases.phase_2.goal}</p>
              <div className="space-y-1.5">
                {phases.phase_2.automations?.map((a, i) => (
                  <div key={i} className={`p-2.5 rounded-lg ${PHASE_COLORS.phase_2.bg} border border-purple-500/10`}>
                    <p className="text-[12px] font-medium text-foreground">{a.process}</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5">{a.tool} · saves <span className="text-purple-400/60">{a.time_saved_weekly}/wk</span></p>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/40">Milestone</span>
                <p className="text-[11px] text-foreground mt-0.5">{phases.phase_2.milestone}</p>
              </div>
            </SectionCard>
          </div>

          {/* Phase 3 */}
          <div className="relative flex gap-4">
            <div className="shrink-0 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${PHASE_COLORS.phase_3.dot} flex items-center justify-center text-white text-[13px] font-bold z-10`}>3</div>
            </div>
            <SectionCard className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`text-[13px] font-bold ${PHASE_COLORS.phase_3.label}`}>{phases.phase_3.name}</span>
                <span className="text-[10px] text-muted-foreground/50">Month {phases.phase_3.months}</span>
              </div>
              <p className="text-[12px] text-muted-foreground mb-3">{phases.phase_3.goal}</p>
              <div className="space-y-1.5">
                {phases.phase_3.hires?.map((h, i) => (
                  <div key={i} className={`p-2.5 rounded-lg ${PHASE_COLORS.phase_3.bg} border border-amber-500/10`}>
                    <p className="text-[12px] font-medium text-foreground">{h.role}</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-0.5">
                      Hire when: {h.hire_when} · <span className="text-amber-400/60">{h.monthly_cost}/mo</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground/40 mt-0.5">Owns: {h.what_they_own}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/40">Milestone</span>
                <p className="text-[11px] text-foreground mt-0.5">{phases.phase_3.milestone}</p>
              </div>
            </SectionCard>
          </div>

          {/* Phase 4 */}
          <div className="relative flex gap-4">
            <div className="shrink-0 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${PHASE_COLORS.phase_4.dot} flex items-center justify-center text-white text-[13px] font-bold z-10`}>4</div>
            </div>
            <SectionCard className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`text-[13px] font-bold ${PHASE_COLORS.phase_4.label}`}>{phases.phase_4.name}</span>
                <span className="text-[10px] text-muted-foreground/50">Month {phases.phase_4.months}</span>
              </div>
              <p className="text-[12px] text-muted-foreground mb-3">{phases.phase_4.goal}</p>
              <div className={`p-3 rounded-lg ${PHASE_COLORS.phase_4.bg} border border-green-500/10`}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-400/70">Growth Lever</span>
                <p className="text-[13px] font-semibold text-foreground mt-1">{phases.phase_4.growth_lever}</p>
                <p className="text-[11px] text-muted-foreground mt-1">{phases.phase_4.growth_lever_rationale}</p>
                <p className="text-[11px] text-green-400/70 mt-1.5 font-medium">→ {phases.phase_4.revenue_projection}</p>
              </div>
              <div className="mt-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/40">Milestone</span>
                <p className="text-[11px] text-foreground mt-0.5">{phases.phase_4.milestone}</p>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>

      {/* Risk + Advantage */}
      <div className="grid gap-4 sm:grid-cols-2">
        <SectionCard>
          <div className="border-l-2 border-red-500/40 pl-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/70">Biggest Risk</span>
            <p className="text-[13px] text-foreground mt-1 leading-relaxed">{data.biggest_risk}</p>
          </div>
        </SectionCard>
        <SectionCard>
          <div className="border-l-2 border-green-500/40 pl-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-400/70">Your Unfair Advantage</span>
            <p className="text-[13px] text-foreground mt-1 leading-relaxed">{data.unfair_advantage}</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
