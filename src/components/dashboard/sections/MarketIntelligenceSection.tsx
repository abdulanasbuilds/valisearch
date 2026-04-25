import { useAnalysisStore } from "@/store/useAnalysisStore";
import { SectionCard } from "../SectionCard";
import type { MarketBreakdown } from "@/types/analysis-v2";
import { SectionExportToolbar } from "../SectionExportToolbar";

export function MarketIntelligenceSection() {
  const analysis = useAnalysisStore((s) => s.analysis);
  if (!analysis) return null;

  const market = (analysis as Record<string, unknown>).market_breakdown as MarketBreakdown | undefined;
  if (!market) return <div className="text-muted-foreground text-sm p-4">Market Intelligence data not available for this analysis.</div>;

  const sizings = [
    { label: "TAM", ...market.tam },
    { label: "SAM", ...market.sam },
    { label: "SOM", ...market.som },
  ];

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Market Intelligence</h2>
          <p className="text-[13px] text-muted-foreground mt-1">TAM/SAM/SOM, demand trends, and capital flows</p>
        </div>
        <SectionExportToolbar sectionId="market_breakdown" data={market} />
      </div>

      {/* Market Sizing Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {sizings.map((s) => (
          <SectionCard key={s.label}>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">{s.label}</span>
            <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
            <p className="text-[11px] text-muted-foreground/60 mt-2 leading-snug">{s.assumption}</p>
          </SectionCard>
        ))}
      </div>

      {/* Demand Trends */}
      <SectionCard title="Demand Trends">
        <div className="space-y-3">
          {market.demand_trends?.map((t, i) => (
            <div key={i} className="flex gap-3 items-start border-l-2 border-primary/40 pl-4 py-1">
              <span className="text-[11px] font-bold text-primary/60 mt-0.5 shrink-0">{i + 1}</span>
              <div>
                <p className="text-[13px] font-semibold text-foreground">{t.headline}</p>
                <p className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">{t.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Underserved Opportunities */}
      <SectionCard title="Underserved Opportunities">
        <div className="space-y-3">
          {market.underserved_opportunities?.map((o, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-start gap-2">
                <span className="text-sm mt-0.5">🎯</span>
                <div>
                  <p className="text-[13px] font-medium text-foreground">{o.gap}</p>
                  <p className="text-[12px] text-muted-foreground mt-1">{o.why_underserved}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Follow the Money */}
      <SectionCard title="Follow the Money">
        <div className="space-y-3">
          {market.follow_the_money?.map((f, i) => (
            <div key={i} className="p-3 rounded-lg bg-amber-500/[0.04] border border-amber-500/10">
              <div className="flex items-start gap-2">
                <span className="text-sm mt-0.5">💰</span>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">{f.area}</p>
                  <p className="text-[12px] text-muted-foreground mt-1">{f.signal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
