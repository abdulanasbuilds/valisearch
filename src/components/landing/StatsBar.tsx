export function StatsBar() {
  const stats = [
    { value: "10,000+", label: "IDEAS_VALIDATED" },
    { value: "30 SEC", label: "ANALYSIS_RUNTIME" },
    { value: "18", label: "INTEL_DIMENSIONS" },
  ];

  return (
    <div className="w-full bg-[#0A0A0A] border-y border-white/[0.04] py-16 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-white bg-[size:30px_30px] opacity-[0.03] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col gap-4 items-center md:items-start ${
                i !== 0 ? 'md:border-l md:border-white/[0.08] md:pl-20' : ''
              }`}
            >
              <div className="text-[52px] font-black leading-none text-white tracking-tighter tabular-nums">
                {stat.value}
              </div>
              <div className="text-[11px] text-white/30 font-black tracking-[0.3em] font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
