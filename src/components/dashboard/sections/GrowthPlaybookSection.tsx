import { useState } from "react";
import { useAnalysisStore } from "@/store/useAnalysisStore";
import { SectionCard } from "../SectionCard";
import type { DistributionPlan } from "@/types/analysis-v2";
import { SectionExportToolbar } from "../SectionExportToolbar";
import { ChevronDown, ChevronUp } from "lucide-react";

function CostBadge({ cost }: { cost: string }) {
  const style = cost === "low" ? "bg-green-500/15 text-green-400" : cost === "medium" ? "bg-amber-500/15 text-amber-400" : "bg-red-500/15 text-red-400";
  return <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${style}`}>{cost}</span>;
}

export function GrowthPlaybookSection() {
  const analysis = useAnalysisStore((s) => s.analysis);
  const [expandedPlay, setExpandedPlay] = useState<number | null>(null);
  if (!analysis) return null;

  const data = (analysis as Record<string, unknown>).distribution_plan as DistributionPlan | undefined;
  if (!data) return <div className="text-muted-foreground text-sm p-4">Growth Playbook data not available for this analysis.</div>;

  const weeks = data.weekly_calendar ? [
    { label: "Week 1", value: data.weekly_calendar.week_1 },
    { label: "Week 2", value: data.weekly_calendar.week_2 },
    { label: "Week 3", value: data.weekly_calendar.week_3 },
    { label: "Week 4", value: data.weekly_calendar.week_4 },
  ] : [];

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Growth Playbook</h2>
          <p className="text-[13px] text-muted-foreground mt-1">30-day distribution plan for your first 100 users</p>
        </div>
        <SectionExportToolbar sectionId="distribution_plan" data={data} />
      </div>

      {/* Top 5 Channels */}
      <SectionCard title="Acquisition Channels (ranked)">
        <div className="space-y-2">
          {data.acquisition_channels?.map((ch) => (
            <div key={ch.rank} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary text-[12px] font-bold flex items-center justify-center shrink-0">{ch.rank}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-foreground">{ch.channel}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{ch.why_this_audience}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <CostBadge cost={ch.cost_efficiency} />
                <span className="text-[10px] text-muted-foreground/50">{ch.time_to_first_result}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Content Formats */}
      <SectionCard title="Content Formats">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-white/[0.06] text-muted-foreground/60 text-left">
                <th className="py-2 px-2 font-medium">Format</th>
                <th className="py-2 px-2 font-medium">Channel</th>
                <th className="py-2 px-2 font-medium">Why it works</th>
              </tr>
            </thead>
            <tbody>
              {data.content_formats?.map((cf, i) => (
                <tr key={i} className="border-b border-white/[0.04]">
                  <td className="py-2.5 px-2">
                    <p className="font-medium text-foreground">{cf.format}</p>
                    <p className="text-[10px] text-muted-foreground/50 italic mt-0.5">{cf.example_title}</p>
                  </td>
                  <td className="py-2.5 px-2 text-muted-foreground">{cf.channel}</td>
                  <td className="py-2.5 px-2 text-muted-foreground">{cf.why_it_works}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* 4-Week Calendar */}
      <SectionCard title="4-Week Execution Calendar">
        <div className="grid gap-3 sm:grid-cols-2">
          {weeks.map((w) => (
            <div key={w.label} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">{w.label}</span>
              <p className="text-[12px] text-muted-foreground mt-1.5 leading-relaxed">{w.value}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Budget Split */}
      {data.budget_split && (
        <SectionCard title="Budget Split">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1">
              <div className="h-3 rounded-full bg-white/[0.06] overflow-hidden flex">
                <div className="h-full bg-green-500/40 rounded-l-full" style={{ width: `${data.budget_split.organic_percentage}%` }} />
                <div className="h-full bg-amber-500/40 rounded-r-full" style={{ width: `${data.budget_split.paid_percentage}%` }} />
              </div>
              <div className="flex justify-between mt-1.5 text-[10px] text-muted-foreground/50">
                <span>🌱 Organic {data.budget_split.organic_percentage}%</span>
                <span>💰 Paid {data.budget_split.paid_percentage}%</span>
              </div>
            </div>
          </div>
          <p className="text-[12px] text-muted-foreground leading-relaxed">{data.budget_split.rationale}</p>
        </SectionCard>
      )}

      {/* Leverage Plays */}
      <SectionCard title="Leverage Plays">
        <div className="space-y-2">
          {data.leverage_plays?.map((lp, i) => (
            <div key={i} className="rounded-lg bg-white/[0.02] border border-white/[0.06] overflow-hidden">
              <button
                onClick={() => setExpandedPlay(expandedPlay === i ? null : i)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <p className="text-[13px] font-semibold text-foreground">{lp.tactic}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{lp.why_it_multiplies}</p>
                </div>
                {expandedPlay === i ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
              </button>
              {expandedPlay === i && (
                <div className="px-3 pb-3 border-t border-white/[0.04]">
                  <p className="text-[12px] text-muted-foreground mt-2 leading-relaxed">{lp.how_to_execute}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
