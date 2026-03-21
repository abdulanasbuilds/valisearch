import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export function MarketSection() {
  const { market_research } = mockAnalysisResult;

  const marketSizes = [
    { label: "TAM", value: market_research.tam, desc: market_research.tamDescription, color: "gradient-primary" },
    { label: "SAM", value: market_research.sam, desc: market_research.samDescription, color: "bg-info" },
    { label: "SOM", value: market_research.som, desc: market_research.somDescription, color: "bg-success" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Market Research</h2>
        <p className="mt-1 text-sm text-muted-foreground">Total addressable market and growth outlook</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {marketSizes.map((m, i) => (
          <SectionCard key={m.label} className="text-center" style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{m.label}</span>
            <p className="mt-2 text-3xl font-extrabold tracking-tight">{m.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
          </SectionCard>
        ))}
      </div>

      <SectionCard>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-2xl font-extrabold">{market_research.growthRate}</span>
            <span className="ml-1.5 text-sm text-muted-foreground">CAGR through 2030</span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{market_research.growthOutlook}</p>
      </SectionCard>

      <SectionCard title="Key Trends">
        <div className="space-y-3">
          {market_research.trends.map((trend, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl bg-white/[0.02] px-4 py-3">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{trend}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
