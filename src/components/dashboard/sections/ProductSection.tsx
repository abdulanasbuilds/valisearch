import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { Check, Star, Lock, Sparkles } from "lucide-react";

export function ProductSection() {
  const { product_strategy } = mockAnalysisResult;

  const iconMap = {
    "must-have": Check,
    differentiator: Star,
    premium: Lock,
  };

  const colorMap = {
    "must-have": "text-success",
    differentiator: "text-primary",
    premium: "text-warning",
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Product Strategy</h2>
        <p className="mt-1 text-sm text-muted-foreground">MVP features, differentiation, and premium tier</p>
      </div>

      <SectionCard title="MVP Features" description="Must-have for launch">
        <div className="space-y-2">
          {product_strategy.mvpFeatures.map((f, i) => {
            const Icon = iconMap[f.priority];
            return (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.02] px-4 py-3">
                <Icon className={`h-4 w-4 shrink-0 ${colorMap[f.priority]}`} />
                <span className="text-sm">{f.feature}</span>
              </div>
            );
          })}
        </div>
      </SectionCard>

      <SectionCard title="Differentiation Features" description="What sets you apart">
        <div className="space-y-2">
          {product_strategy.differentiationFeatures.map((f, i) => {
            const Icon = iconMap[f.priority];
            return (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-primary/5 border border-primary/10 px-4 py-3">
                <Icon className={`h-4 w-4 shrink-0 ${colorMap[f.priority]}`} />
                <span className="text-sm">{f.feature}</span>
                <Sparkles className="ml-auto h-3.5 w-3.5 text-primary/40" />
              </div>
            );
          })}
        </div>
      </SectionCard>

      {/* Premium - locked/blurred */}
      <div className="relative">
        <SectionCard title="Premium Features" description="Advanced capabilities" className="opacity-60 blur-[2px] pointer-events-none select-none">
          <div className="space-y-2">
            {product_strategy.premiumFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.02] px-4 py-3">
                <Lock className="h-4 w-4 shrink-0 text-warning" />
                <span className="text-sm">{f.feature}</span>
              </div>
            ))}
          </div>
        </SectionCard>
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-background/40 backdrop-blur-sm">
          <Lock className="h-6 w-6 text-primary mb-2" />
          <span className="text-sm font-semibold">Upgrade to Unlock Premium Insights</span>
          <button className="mt-3 rounded-lg gradient-primary px-5 py-2 text-xs font-semibold text-white active:scale-[0.97] transition-transform">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
