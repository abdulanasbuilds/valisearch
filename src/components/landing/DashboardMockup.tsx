export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Background Glow */}
      <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] rounded-[5rem] -z-10 opacity-50" />
      
      {/* Browser chrome / App Window */}
      <div className="rounded-[20px] overflow-hidden border border-white/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.9)] bg-[#0C0C0E] backdrop-blur-3xl">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#121214] border-b border-white/[0.04]">
          <div className="flex gap-2.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/20" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/20" />
          </div>
          <div className="flex-1 mx-12 max-w-md bg-[#080808] border border-white/[0.03] rounded-lg px-4 py-1.5 flex items-center justify-between">
            <span className="text-[10px] text-zinc-600 font-medium tracking-wider">vali.search/analysis/startup-project-01</span>
            <div className="w-3 h-3 rounded bg-zinc-800" />
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-20 h-2 bg-zinc-800 rounded-full" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-800 border border-white/5" />
          </div>
        </div>
        
        {/* Dashboard content */}
        <div className="flex h-[580px]">
          
          {/* Sidebar */}
          <div className="w-60 border-r border-white/[0.03] bg-[#0A0A0A]/30 p-5 flex flex-col gap-1.5 flex-shrink-0 hidden lg:flex">
            <div className="px-3 py-3 text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold mb-3">
              Workbench
            </div>
            {[
              { label: 'Market Dynamics', active: true, icon: '⚡' },
              { label: 'Competitive Moat', active: false, icon: '🛡️' },
              { label: 'Persona Mapping', active: false, icon: '🎯' },
              { label: 'Financial Projections', active: false, icon: '📉' },
              { label: 'GTM Strategy', active: false, icon: '🛰️' },
            ].map((item) => (
              <div
                key={item.label}
                className={`px-4 py-2.5 rounded-xl text-[12px] font-semibold cursor-default transition-all duration-300 flex items-center gap-4
                  ${item.active 
                    ? 'bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05]' 
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]'
                  }`}
              >
                <span className="text-sm opacity-80 grayscale">{item.icon}</span>
                {item.label}
              </div>
            ))}
            
            <div className="mt-auto p-4 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.03]">
              <div className="text-[11px] font-bold text-white mb-2">Upgrade to Pro</div>
              <p className="text-[10px] text-zinc-500 leading-relaxed mb-3">Unlock deep-tier market intelligence and Linear export.</p>
              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="flex-1 p-10 overflow-hidden bg-[#0A0A0A]">
            <div className="flex items-start justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight mb-2">Market Viability Score</h2>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded">V1.4.2</span>
                  <p className="text-sm text-zinc-600">Calculated across 42 market indicators</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-zinc-800" />
                  ))}
                </div>
                <div className="bg-white text-black px-4 py-2 rounded-xl text-xs font-bold hover:scale-[1.02] transition-transform cursor-default">
                  Share Analysis
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Main Score Card */}
              <div className="lg:col-span-2 border border-white/[0.05] rounded-[24px] bg-gradient-to-b from-white/[0.03] to-transparent p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
                <div className="relative w-40 h-40 mb-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="4"/>
                    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#gradient)" strokeWidth="6" strokeDasharray="263.8" strokeDashoffset="65.9" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-6xl font-black text-white leading-none tracking-tighter">75</span>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Index</span>
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-1">Strong Potential</div>
                <div className="text-[11px] font-bold text-blue-500/80 uppercase tracking-[0.2em]">Alpha Certified</div>
              </div>

              {/* Detail Metrics */}
              <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                {[
                  { label: 'TAM Estimation', value: '$4.2B', trend: '↑ 12% YoY', color: 'text-green-500' },
                  { label: 'Competitive Heat', value: 'Medium', trend: '4 Entry Gaps', color: 'text-blue-500' },
                  { label: 'Moat Strength', value: 'High', trend: 'IP Defensible', color: 'text-purple-500' },
                  { label: 'Time to Market', value: '8wks', trend: 'MVP Optimized', color: 'text-amber-500' }
                ].map((stat, i) => (
                  <div key={i} className="border border-white/[0.03] rounded-[20px] bg-white/[0.01] p-6 flex flex-col justify-between hover:bg-white/[0.03] transition-colors cursor-default">
                    <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-4">{stat.label}</div>
                    <div>
                      <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                      <div className={`text-[10px] font-bold ${stat.color} tracking-tight uppercase`}>{stat.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights strip */}
            <div className="mt-8 border border-white/[0.04] rounded-[24px] bg-[#111113] p-6 flex items-start gap-6 group hover:border-white/[0.08] transition-all cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-105 transition-transform">
                <span className="text-blue-400 text-2xl">✧</span>
              </div>
              <div>
                <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  Synthesis Intelligence
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                </h4>
                <p className="text-[14px] text-zinc-500 leading-relaxed max-w-2xl">
                  Analysis indicates a <span className="text-white font-medium">92% match</span> between current market sentiment and your value proposition. Recommended entry via "Vertical AI" integration before Q3 saturation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  )
}