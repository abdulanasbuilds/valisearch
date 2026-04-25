import { useAnalysisStore } from "@/store/useAnalysisStore";
import { SectionCard } from "../SectionCard";
import type { OfferCreation } from "@/types/analysis-v2";
import { SectionExportToolbar } from "../SectionExportToolbar";

export function OfferBuilderSection() {
  const analysis = useAnalysisStore((s) => s.analysis);
  if (!analysis) return null;

  const data = (analysis as Record<string, unknown>).offer_creation as OfferCreation | undefined;
  if (!data) return <div className="text-muted-foreground text-sm p-4">Offer Builder data not available for this analysis.</div>;

  return (
    <div className="space-y-4 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Offer Builder</h2>
          <p className="text-[13px] text-muted-foreground mt-1">Landing-page-ready offer architecture</p>
        </div>
        <SectionExportToolbar sectionId="offer_creation" data={data} />
      </div>

      {/* Headline */}
      <SectionCard>
        <p className="text-2xl font-bold text-foreground text-center leading-tight py-4">{data.headline}</p>
      </SectionCard>

      {/* ICP */}
      <SectionCard title="Ideal Customer Profile">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">Who</span>
            <p className="text-[13px] text-foreground mt-1">{data.icp.who}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">Situation</span>
            <p className="text-[13px] text-foreground mt-1">{data.icp.situation}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/50">Pain Level</span>
            <p className="text-[13px] text-foreground mt-1">{data.icp.pain_level}</p>
          </div>
        </div>
      </SectionCard>

      {/* Value Prop */}
      <SectionCard>
        <div className="text-center py-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">Value Proposition</span>
          <p className="text-[15px] font-semibold text-foreground mt-2 leading-relaxed max-w-lg mx-auto">{data.value_proposition}</p>
        </div>
      </SectionCard>

      {/* Offer Components */}
      <SectionCard title="What's Included">
        <div className="grid gap-3 sm:grid-cols-2">
          {data.offer_components?.map((c, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <p className="text-[13px] font-semibold text-foreground">{c.component}</p>
              <p className="text-[11px] text-primary/60 mt-1">{c.format}</p>
              <p className="text-[12px] text-muted-foreground mt-1.5">{c.value}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Pricing Tiers */}
      <div className="grid gap-4 sm:grid-cols-3">
        {data.pricing_tiers?.map((tier, i) => (
          <SectionCard key={i} className={i === 1 ? "border-primary/30 ring-1 ring-primary/10 relative" : ""}>
            {i === 1 && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 rounded-full bg-primary text-white font-bold uppercase tracking-wider">Popular</span>}
            <div className="text-center py-2">
              <p className="text-[12px] font-medium text-muted-foreground">{tier.name}</p>
              <p className="text-2xl font-bold text-foreground mt-1">{tier.price}</p>
              <p className="text-[11px] text-muted-foreground/60 mt-2">{tier.who_its_for}</p>
              <p className="text-[11px] text-primary/70 mt-1.5 font-medium">{tier.key_difference}</p>
              <button className={`mt-4 w-full py-2 rounded-lg text-[12px] font-semibold transition-colors ${i === 1 ? "bg-primary text-white hover:bg-primary/90" : "bg-white/[0.04] text-foreground border border-white/[0.08] hover:bg-white/[0.06]"}`}>
                {i === 0 ? "Get started free" : i === 1 ? "Start trial →" : "Go Premium"}
              </button>
            </div>
          </SectionCard>
        ))}
      </div>

      {/* Guarantee */}
      <SectionCard>
        <div className="flex items-start gap-3 p-2">
          <span className="text-lg mt-0.5">✅</span>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-400/70">Our Guarantee</span>
            <p className="text-[13px] text-foreground mt-1 leading-relaxed">{data.guarantee}</p>
          </div>
        </div>
      </SectionCard>

      {/* Competitive Edge */}
      <SectionCard title="Competitive Edge">
        <div className="grid gap-3 sm:grid-cols-3">
          {data.competitive_edge?.map((edge, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-[11px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
              <p className="text-[12px] text-foreground leading-relaxed">{edge}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
