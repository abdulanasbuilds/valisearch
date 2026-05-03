import { useAnalysisStore } from "@/store/useAnalysisStore";
import { SectionCard } from "../SectionCard";

export function MarketSection() {
  const analysis = useAnalysisStore((s) => s.analysis);
  if (!analysis) return null;

  const { market_research } = analysis;

  return (
    <div className="space-y-4 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Market Research</h2>
        <p className="text-[13px] text-muted-foreground mt-1">Market sizing, growth outlook, and key trends</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Visual TAM SAM SOM */}
        <SectionCard className="flex flex-col items-center justify-center p-8 bg-black/40 border border-white/[0.05]">
            <div className="relative w-full aspect-square max-w-[280px] flex items-center justify-center">
              {/* TAM */}
              <div className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex flex-col items-center justify-start pt-6 shadow-[0_0_40px_rgba(99,102,241,0.05)]">
                 <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest">TAM</span>
                 <span className="text-xs text-indigo-300/70 font-semibold">{market_research.tam_sam_som.tam}</span>
              </div>
              {/* SAM */}
              <div className="absolute w-[70%] h-[70%] bg-purple-500/15 border border-purple-500/25 rounded-full flex flex-col items-center justify-start pt-6 mt-[15%] shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                 <span className="text-[10px] font-black uppercase text-purple-400 tracking-widest">SAM</span>
                 <span className="text-xs text-purple-300/70 font-semibold">{market_research.tam_sam_som.sam}</span>
              </div>
              {/* SOM */}
              <div className="absolute w-[40%] h-[40%] bg-pink-500/20 border border-pink-500/30 rounded-full flex flex-col items-center justify-center mt-[30%] shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                 <span className="text-[10px] font-black uppercase text-pink-400 tracking-widest">SOM</span>
                 <span className="text-xs text-pink-300/70 font-semibold">{market_research.tam_sam_som.som}</span>
              </div>
            </div>
        </SectionCard>

        <div className="flex flex-col gap-4">
          {[
            { label: "Total Addressable Market", value: market_research.tam_sam_som.tam, color: "text-indigo-400" },
            { label: "Serviceable Addressable Market", value: market_research.tam_sam_som.sam, color: "text-purple-400" },
            { label: "Serviceable Obtainable Market", value: market_research.tam_sam_som.som, color: "text-pink-400" },
          ].map((m) => (
            <SectionCard key={m.label} className="flex-1 flex flex-col justify-center">
              <div className={`text-[11px] font-mono font-bold tracking-wide uppercase ${m.color} mb-1`}>{m.label}</div>
              <div className="text-xl font-bold text-white/90">{m.value}</div>
            </SectionCard>
          ))}
        </div>
      </div>

      <SectionCard title="Growth Outlook">
        <p className="text-[13px] leading-relaxed text-muted-foreground">{market_research.growth_outlook}</p>
      </SectionCard>

      <SectionCard title="Key Trends">
        <ul className="space-y-2">
          {market_research.trends.map((t) => (
            <li key={t} className="flex items-start gap-2 text-[13px] text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
