export function CompetitorMockup() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
      {[
        { name: 'Incumbent A', threat: 'High', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/20' },
        { name: 'Disruptor B', threat: 'Medium', color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
        { name: 'Niche C', threat: 'Low', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' }
      ].map((comp) => (
        <div key={comp.name} className="bg-[#0D0D0D] border border-white/10 rounded-xl p-4 shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <div className="text-xs font-bold text-white/90">{comp.name}</div>
            <span className={`text-[8px] px-1.5 py-0.5 rounded uppercase font-bold ${comp.bg} ${comp.color} border ${comp.border}`}>
              {comp.threat} Threat
            </span>
          </div>
          
          <div className="space-y-3">
            <div className="space-y-1.5">
              <div className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Strengths</div>
              {[1, 2].map(i => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <div className="h-1.5 flex-1 bg-white/5 rounded-full" />
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              <div className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Weaknesses</div>
              {[1].map(i => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </div>
                  <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/5">
              <div className="flex justify-between text-[8px] text-white/40 mb-1">
                <span>Market Share</span>
                <span>{Math.floor(Math.random() * 40 + 10)}%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary/40 rounded-full w-2/3" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}