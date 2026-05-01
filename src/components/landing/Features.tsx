import { useNavigate } from "react-router-dom";

function ScoreVisual() {
  const dims = [
    { l: "Uniqueness", v: 78 },
    { l: "Market demand", v: 84 },
    { l: "Stickiness", v: 65 },
    { l: "Monetization", v: 71 },
    { l: "Scalability", v: 80 },
    { l: "Complexity", v: 58 },
  ];
  const r = 64;
  const c = 2 * Math.PI * r;
  const offset = c - (72 / 100) * c;
  return (
    <div className="w-full">
      <div className="flex items-center gap-8 mb-8">
        <div className="relative w-[160px] h-[160px] flex-shrink-0">
          <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
            <circle cx="80" cy="80" r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
              <circle
                cx="80"
                cy="80"
                r={r}
                stroke="url(#scoreGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={offset}
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-[44px] font-black text-white leading-none tabular-nums tracking-tighter">72</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 mt-1">Index</div>
            </div>
          </div>
          <div className="flex-1 space-y-3.5">
            {dims.map((d) => (
              <div key={d.l}>
                <div className="flex justify-between text-[11px] mb-1.5 font-bold uppercase tracking-wider">
                  <span className="text-zinc-600">{d.l}</span>
                  <span className="text-white font-mono tabular-nums opacity-60">{d.v}</span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.03] overflow-hidden border border-white/[0.02]">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: `${d.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  function MarketVisual() {
    return (
      <div className="w-full flex items-center justify-center py-10">
        <div className="relative w-full max-w-[340px] aspect-square">
          {/* TAM */}
          <div className="absolute inset-0 rounded-[32px] border border-white/[0.05] bg-white/[0.01] flex items-start justify-start p-6 group hover:bg-white/[0.02] transition-colors">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">TAM Estimation</div>
              <div className="text-[28px] font-black text-white tracking-tighter">$24.8B</div>
            </div>
          </div>
          {/* SAM */}
          <div className="absolute inset-[15%] rounded-[24px] border border-blue-500/20 bg-blue-500/[0.03] flex items-start justify-start p-6 backdrop-blur-sm">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/60 mb-1">SAM Strategy</div>
              <div className="text-[24px] font-black text-white tracking-tighter">$6.2B</div>
            </div>
          </div>
          {/* SOM */}
          <div className="absolute inset-[32%] rounded-[18px] border border-purple-500/30 bg-purple-500/[0.05] flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(139,92,246,0.1)]">
            <div className="text-center">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400/70 mb-1">Target SOM</div>
              <div className="text-[20px] font-black text-white tracking-tighter">$420M</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function KanbanVisual() {
    const cols = [
      { t: "Strategy", items: ["Market Fit", "Pricing Model"] },
      { t: "Dev", items: ["API Spec", "UI/UX"] },
      { t: "Growth", items: ["Early Access", "LTV Opt"] },
    ];
    return (
      <div className="w-full grid grid-cols-3 gap-4">
        {cols.map((col) => (
          <div key={col.t} className="rounded-2xl bg-white/[0.01] border border-white/[0.04] p-4">
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-4 flex justify-between items-center">
              <span>{col.t}</span>
              <span className="w-4 h-4 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-[8px]">{col.items.length}</span>
            </div>
            <div className="space-y-2.5">
              {col.items.map((it) => (
                <div
                  key={it}
                  className="rounded-xl bg-[#121214] border border-white/[0.05] p-3 text-[12px] font-semibold text-zinc-400 shadow-sm"
                >
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

function FeatureBlock({
  label,
  headline,
  body,
  visual,
  reverse = false,
}: {
  label: string;
  headline: string;
  body: string;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="relative py-32 overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        <div className={`${reverse ? "lg:order-2" : ""} relative z-10`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              {label}
            </span>
          </div>
          <h2
            className="text-[40px] md:text-[56px] font-black text-white leading-[1.05] mb-8 tracking-tighter"
          >
            {headline}
          </h2>
          <p className="text-[18px] text-zinc-500 leading-relaxed max-w-[480px] mb-10 font-medium">
            {body}
          </p>
          <button className="group flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
            Learn how it works
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        <div className={`${reverse ? "lg:order-1" : ""} relative`}>
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full -z-10" />
          <div className="rounded-[32px] border border-white/[0.05] bg-[#0C0C0E]/50 p-1 shadow-2xl backdrop-blur-sm">
            <div className="rounded-[28px] border border-white/[0.03] bg-[#0A0A0A] p-10 overflow-hidden">
              {visual}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GlowDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-40 w-[1000px] h-80 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export function Features() {
  return (
    <section id="features">
      <FeatureBlock
        label="Validation Engine"
        headline="AI that thinks like a serial founder"
        body="ValiSearch scores your idea across 6 dimensions — uniqueness, market demand, stickiness, monetization potential, scalability, and technical complexity. Get a 0-100 confidence score with specific reasoning for every dimension."
        visual={<ScoreVisual />}
      />
      <GlowDivider />
      <FeatureBlock
        reverse
        label="Market Intelligence"
        headline="Know your market before you spend a dollar"
        body="Real TAM, SAM, and SOM estimates with sourced reasoning. Google Trends integration shows whether your market is growing or shrinking. Competitor landscape maps show exactly where gaps exist."
        visual={<MarketVisual />}
      />
      <GlowDivider />
      <FeatureBlock
        label="Sprint Planner"
        headline="Validation to build-ready in one session"
        body="The only validation platform with a built-in Kanban sprint board. Your validated features become actionable development tasks — drag, prioritize, and export to Linear, Jira, or Notion."
        visual={<KanbanVisual />}
      />
    </section>
  );
}
