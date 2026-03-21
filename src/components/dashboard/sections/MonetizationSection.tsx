import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { Check, DollarSign } from "lucide-react";

export function MonetizationSection() {
  const { monetization } = mockAnalysisResult;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Monetization</h2>
        <p className="mt-1 text-sm text-muted-foreground">Pricing strategy and revenue streams</p>
      </div>

      <SectionCard>
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Pricing Model</span>
        <p className="mt-1 text-lg font-semibold">{monetization.pricingModel}</p>
      </SectionCard>

      <div className="grid gap-5 sm:grid-cols-3">
        {monetization.tiers.map((tier, i) => {
          const isPopular = tier.name === "Growth";
          return (
            <SectionCard
              key={tier.name}
              className={`relative ${isPopular ? "border-primary/30 shadow-lg shadow-primary/10" : ""}`}
              style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}
            >
              {isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-3 py-0.5 text-xs font-semibold text-white">
                  Recommended
                </span>
              )}
              <h4 className="text-sm font-semibold">{tier.name}</h4>
              <p className="mt-1 text-2xl font-extrabold">{tier.price}</p>
              <div className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-3.5 w-3.5 text-success shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </SectionCard>
          );
        })}
      </div>

      <SectionCard title="Revenue Streams">
        <div className="space-y-2">
          {monetization.revenueStreams.map((r, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.02] px-4 py-3">
              <DollarSign className="h-4 w-4 shrink-0 text-success" />
              <span className="text-sm text-muted-foreground">{r}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
