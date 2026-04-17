export function CompetitorMockup() {
  const competitors = [
    {
      name: "Acme Corp",
      threat: "High",
      strengths: ["Strong brand presence", "Large marketing budget", "Enterprise integrations"],
      weaknesses: ["Outdated UI/UX", "Slow feature delivery"],
      marketShare: 65,
    },
    {
      name: "Nova Tools",
      threat: "Medium",
      strengths: ["Modern interface", "Developer friendly", "Affordable pricing"],
      weaknesses: ["Missing advanced features", "Small support team"],
      marketShare: 20,
    },
    {
      name: "Zenith App",
      threat: "Low",
      strengths: ["Niche community", "Specialized tools", "High retention"],
      weaknesses: ["Hard to use", "Poor onboarding"],
      marketShare: 10,
    }
  ];

  return (
    <div className="flex gap-4 overflow-hidden py-4 w-full">
      {competitors.map((comp, idx) => (
        <div key={idx} className="flex-1 bg-[#111] border border-white/10 rounded-xl p-5 shadow-2xl relative group hover:-translate-y-1 transition-transform">
          {/* Top section */}
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-sm font-bold text-white/90">{comp.name}</h4>
            <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              comp.threat === 'High' ? 'bg-[#FF5F57]/20 text-[#FF5F57]' :
              comp.threat === 'Medium' ? 'bg-[#FEBC2E]/20 text-[#FEBC2E]' :
              'bg-[#28C840]/20 text-[#28C840]'
            }`}>
              {comp.threat} Threat
            </div>
          </div>
          
          {/* Strengths */}
          <div className="mb-3">
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1.5">Strengths</div>
            <ul className="space-y-1">
              {comp.strengths.map((str, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] text-white/70">
                  <span className="text-[#28C840] shrink-0">✓</span>
                  <span className="leading-tight">{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="mb-4">
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1.5">Weaknesses</div>
            <ul className="space-y-1">
              {comp.weaknesses.map((wk, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] text-white/70">
                  <span className="text-[#FF5F57] shrink-0">×</span>
                  <span className="leading-tight">{wk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Share */}
          <div className="mt-auto pt-3 border-t border-white/5">
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-white/40">Est. Market Share</span>
              <span className="text-white/70 font-bold">{comp.marketShare}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full bg-[#6C47FF]" 
                style={{ width: `${comp.marketShare}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
