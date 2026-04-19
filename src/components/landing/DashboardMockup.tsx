export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[580px]">
      {/* Purple glow behind */}
      <div className="absolute inset-0 bg-[#6C47FF]/10 
        blur-3xl rounded-3xl -z-10 scale-110" />
      
      {/* Browser chrome */}
      <div className="rounded-xl overflow-hidden border 
        border-white/10 shadow-2xl shadow-black/70
        bg-[#0D0D0D]">
        
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-3 
          bg-[#161616] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 mx-4 bg-[#1C1C1C] rounded-md 
            px-3 py-1 text-[11px] text-white/30 font-mono">
            valisearch.app/dashboard
          </div>
        </div>
        
        {/* Dashboard content */}
        <div className="flex h-[340px]">
          
          {/* Sidebar */}
          <div className="w-44 border-r border-white/[0.06] 
            bg-[#0A0A0A] p-3 flex flex-col gap-0.5 
            flex-shrink-0 hidden sm:flex">
            <div className="px-2 py-1 text-[10px] 
              text-white/30 uppercase tracking-widest 
              font-medium mb-1">
              Analysis
            </div>
            {[
              { label: 'Overview', active: true },
              { label: 'Validation' },
              { label: 'Market' },
              { label: 'Competitors' },
              { label: 'Product' },
              { label: 'Branding' },
              { label: 'Revenue' },
              { label: 'Go-to-Market' },
            ].map((item) => (
              <div
                key={item.label}
                className={`px-2 py-1.5 rounded-md text-[11px] 
                  font-medium cursor-default transition-colors
                  ${item.active 
                    ? 'bg-[#6C47FF]/15 text-[#6C47FF]' 
                    : 'text-white/40 hover:text-white/60'
                  }`}
              >
                {item.label}
              </div>
            ))}
            <div className="px-2 py-1 text-[10px] 
              text-white/30 uppercase tracking-widest 
              font-medium mt-2 mb-1">
              Build
            </div>
            {['Tech Stack', 'Kanban', 'Launch'].map((item) => (
              <div key={item}
                className="px-2 py-1.5 rounded-md text-[11px]
                  font-medium text-white/40 cursor-default">
                {item}
              </div>
            ))}
          </div>
          
          {/* Main content */}
          <div className="flex-1 p-4 sm:p-5 overflow-hidden">
            <div className="text-[11px] text-white/40 
              uppercase tracking-widest font-medium mb-3">
              Idea Score
            </div>
            
            {/* Score display */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-5">
              <div className="relative w-20 h-20 flex-shrink-0 mx-auto sm:mx-0">
                <svg viewBox="0 0 80 80" className="w-20 h-20 
                  -rotate-90">
                  <circle cx="40" cy="40" r="34" fill="none"
                    stroke="rgba(255,255,255,0.06)" strokeWidth="6"/>
                  <circle cx="40" cy="40" r="34" fill="none"
                    stroke="#22C55E" strokeWidth="6"
                    strokeDasharray="213.6"
                    strokeDashoffset="59.8"
                    strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 flex flex-col 
                  items-center justify-center">
                  <span className="text-2xl font-black 
                    text-white leading-none">72</span>
                  <span className="text-[9px] text-white/40 
                    font-medium">/ 100</span>
                </div>
              </div>
              
              {/* Dimension bars */}
              <div className="flex-1 space-y-2">
                {[
                  { label: 'Market Demand', value: 80, 
                    color: '#22C55E' },
                  { label: 'Uniqueness', value: 65, 
                    color: '#EAB308' },
                  { label: 'Monetization', value: 75, 
                    color: '#22C55E' },
                  { label: 'Scalability', value: 70, 
                    color: '#22C55E' },
                ].map((dim) => (
                  <div key={dim.label}>
                    <div className="flex justify-between 
                      items-center mb-0.5">
                      <span className="text-[10px] 
                        text-white/50">{dim.label}</span>
                      <span className="text-[10px] 
                        font-semibold text-white/70">
                        {Math.round(dim.value / 10)}/10
                      </span>
                    </div>
                    <div className="h-1 bg-white/[0.06] 
                      rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full 
                          transition-all duration-1000"
                        style={{ 
                          width: `${dim.value}%`,
                          backgroundColor: dim.color 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { label: 'Market Size', value: '$2.4B' },
                { label: 'Competitors', value: '8 found' },
                { label: 'Build Time', value: '3-4 months' },
              ].map((stat) => (
                <div key={stat.label}
                  className="bg-white/[0.03] border 
                    border-white/[0.06] rounded-lg p-2.5">
                  <div className="text-[11px] font-bold 
                    text-white/90">{stat.value}</div>
                  <div className="text-[9px] text-white/40 
                    mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
