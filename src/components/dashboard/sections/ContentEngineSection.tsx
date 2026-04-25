import { useAnalysisStore } from "@/store/useAnalysisStore";
import { SectionCard } from "../SectionCard";
import type { ViralContent, EmotionalTrigger } from "@/types/analysis-v2";
import { SectionExportToolbar } from "../SectionExportToolbar";

const TRIGGER_STYLES: Record<EmotionalTrigger, string> = {
  fear_of_missing_out: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  social_status: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  curiosity: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  controversy: "bg-red-500/15 text-red-400 border-red-500/20",
};

const TRIGGER_LABELS: Record<EmotionalTrigger, string> = {
  fear_of_missing_out: "FOMO",
  social_status: "Status",
  curiosity: "Curiosity",
  controversy: "Controversy",
};

export function ContentEngineSection() {
  const analysis = useAnalysisStore((s) => s.analysis);
  if (!analysis) return null;

  const data = (analysis as Record<string, unknown>).viral_content as ViralContent | undefined;
  if (!data) return <div className="text-muted-foreground text-sm p-4">Content Engine data not available for this analysis.</div>;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Content Engine</h2>
          <p className="text-[13px] text-muted-foreground mt-1">Viral hooks, content formats, and weekly system</p>
        </div>
        <SectionExportToolbar sectionId="viral_content" data={data} />
      </div>

      {/* Hooks Bank */}
      <SectionCard title="Hook Bank (10 high-converting hooks)">
        <div className="space-y-3">
          {data.hooks?.map((h, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <span className="text-[11px] font-bold text-muted-foreground/40 mt-1 shrink-0">{i + 1}</span>
                  <p className="text-[14px] font-bold text-foreground leading-snug">{h.hook}</p>
                </div>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold border shrink-0 ${TRIGGER_STYLES[h.emotional_trigger] || "bg-white/[0.06] text-muted-foreground"}`}>
                  {TRIGGER_LABELS[h.emotional_trigger] || h.emotional_trigger}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground/60 mt-1.5 ml-6">{h.why_it_works}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Content Format Matrix */}
      <SectionCard title="Content Format Matrix">
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-white/[0.06] text-muted-foreground/60 text-left">
                <th className="py-2 px-2 font-medium">Format</th>
                <th className="py-2 px-2 font-medium">Platform</th>
                <th className="py-2 px-2 font-medium">Length</th>
                <th className="py-2 px-2 font-medium">Why it spreads</th>
              </tr>
            </thead>
            <tbody>
              {data.content_formats?.map((cf, i) => (
                <tr key={i} className={`border-b border-white/[0.04] ${i % 2 === 1 ? "bg-white/[0.01]" : ""}`}>
                  <td className="py-2.5 px-2">
                    <p className="font-medium text-foreground">{cf.format}</p>
                    <p className="text-[10px] text-muted-foreground/50 italic mt-0.5">{cf.example_title}</p>
                  </td>
                  <td className="py-2.5 px-2 text-muted-foreground">{cf.platform}</td>
                  <td className="py-2.5 px-2 text-muted-foreground">{cf.ideal_length}</td>
                  <td className="py-2.5 px-2 text-muted-foreground">{cf.why_it_spreads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Shareability Audit */}
      <SectionCard title="Shareability Audit">
        <div className="space-y-2">
          {data.shareability_audit?.map((sa, i) => (
            <div key={i} className="flex items-start gap-2.5 p-2">
              <span className="text-sm mt-0.5">📤</span>
              <div>
                <p className="text-[12px] font-medium text-foreground">{sa.format}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{sa.what_makes_people_share}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Weekly System */}
      {data.weekly_system && (
        <SectionCard title={`Weekly System (${data.weekly_system.posts_per_week} posts/week)`}>
          <div className="space-y-2 mb-4">
            {data.weekly_system.rotation?.map((r, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <span className="text-[11px] font-bold text-primary/70 w-20 shrink-0">{r.day}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-foreground">{r.format}</p>
                  <p className="text-[10px] text-muted-foreground/50 mt-0.5">{r.purpose}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-lg bg-amber-500/[0.04] border border-amber-500/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/70">Burnout Prevention</span>
            <p className="text-[12px] text-muted-foreground mt-1">{data.weekly_system.burnout_prevention}</p>
          </div>
        </SectionCard>
      )}
    </div>
  );
}
