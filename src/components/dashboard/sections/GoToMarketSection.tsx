import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { Users, Smartphone, Building2, Heart, Share2, ArrowRight, Rocket } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users, Smartphone, Building2, Heart, Share2,
};

export function GoToMarketSection() {
  const { go_to_market } = mockAnalysisResult;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Go-To-Market</h2>
        <p className="mt-1 text-sm text-muted-foreground">Distribution channels, launch plan, and growth strategies</p>
      </div>

      <SectionCard title="Distribution Channels">
        <div className="grid gap-3 sm:grid-cols-2">
          {go_to_market.channels.map((ch) => {
            const Icon = iconMap[ch.icon] || Users;
            return (
              <div key={ch.name} className="flex items-start gap-3 rounded-xl bg-white/[0.02] p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{ch.name}</h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">{ch.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>

      <SectionCard title="Launch Strategy">
        <div className="space-y-3">
          {go_to_market.launchStrategy.map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-primary text-xs font-bold text-white mt-0.5">
                {i + 1}
              </div>
              <span className="text-sm text-muted-foreground">{step}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Growth Strategies">
        <div className="space-y-2">
          {go_to_market.growthStrategies.map((g, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.02] px-4 py-3">
              <Rocket className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{g}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
