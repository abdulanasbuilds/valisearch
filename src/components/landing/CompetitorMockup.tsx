import { Check, X } from "lucide-react";

export function CompetitorMockup() {
  const competitors = [
    {
      name: "Acme Corp",
      threat: "high",
      strengths: ["Strong enterprise sales", "Robust API", "Brand recognition"],
      weaknesses: ["Slow iteration speed", "High pricing"],
      share: 45
    },
    {
      name: "GlobalTech",
      threat: "medium",
      strengths: ["Large feature set", "Global reach", "Good documentation"],
      weaknesses: ["Poor customer support", "Outdated UI"],
      share: 25
    },
    {
      name: "StartupX",
      threat: "low",
      strengths: ["Agile team", "Modern stack", "Low pricing"],
      weaknesses: ["No enterprise features", "Small team"],
      share: 10
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0A] rounded-xl border border-white/10 p-4 sm:p-5 overflow-hidden">
      <div className="text-[12px] text-white/40 uppercase tracking-widest font-medium mb-4">
        Competitor Analysis
      </div>
      <div className="flex flex-col gap-3">
        {competitors.map((comp) => (
          <div key={comp.name} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-white/90">{comp.name}</span>
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border
                ${comp.threat === 'high' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                  comp.threat === 'medium' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                  'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                {comp.threat} Threat
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <div className="text-[10px] text-white/40 uppercase">Strengths</div>
                {comp.strengths.slice(0,2).map(s => (
                  <div key={s} className="flex items-center gap-1.5 text-[11px] text-white/70">
                    <Check className="w-3 h-3 text-green-400 shrink-0" />
                    <span className="truncate">{s}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <div className="text-[10px] text-white/40 uppercase">Weaknesses</div>
                {comp.weaknesses.slice(0,2).map(w => (
                  <div key={w} className="flex items-center gap-1.5 text-[11px] text-white/70">
                    <X className="w-3 h-3 text-red-400 shrink-0" />
                    <span className="truncate">{w}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 pt-3 border-t border-white/[0.05]">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] text-white/50">Est. Market Share</span>
                <span className="text-[10px] text-white/70 font-semibold">{comp.share}%</span>
              </div>
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500/60 rounded-full" style={{ width: `${comp.share}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}