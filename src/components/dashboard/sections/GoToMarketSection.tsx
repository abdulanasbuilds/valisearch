import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "../SectionCard";

export function GoToMarketSection() {
  const { go_to_market } = mockAnalysisResult;

  return (
    <div className="space-y-4 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Go-To-Market</h2>
        <p className="text-[13px] text-muted-foreground mt-1">Distribution channels, launch plan, and growth strategies</p>
      </div>

      <SectionCard title="Distribution Channels">
        <div className="space-y-3">
          {go_to_market.channels.map((c) => (
            <div key={c.name} className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[11px] font-bold text-muted-foreground">{c.name.charAt(0)}</span>
              </div>
              <div>
                <div className="text-[13px] font-medium">{c.name}</div>
                <div className="text-[12px] text-muted-foreground">{c.description}</div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Launch Strategy">
        <div className="space-y-3">
          {go_to_market.launchStrategy.map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[11px] font-mono font-medium text-primary/60 mt-0.5 shrink-0 w-5">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[13px] text-muted-foreground">{step}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Growth Strategies">
        <ul className="space-y-2">
          {go_to_market.growthStrategies.map((g) => (
            <li key={g} className="flex items-start gap-2 text-[13px] text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
              {g}
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
