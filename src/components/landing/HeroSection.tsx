import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CornerDownLeft } from "lucide-react";
import { useAnalysisStore } from "@/store/useAnalysisStore";
import { sanitizeIdea } from "@/lib/sanitize";

const REPORT = {
  idea: "AI-powered onboarding tool for B2B SaaS",
  score: 84,
  rows: [
    { label: "Market Opportunity", value: "Large · $4.2B TAM", positive: true },
    { label: "Competition", value: "Moderate · 6 direct", positive: false },
    { label: "Revenue Potential", value: "$1.2M ARR yr 2", positive: true },
    { label: "Technical Risk", value: "Low · Proven stack", positive: true },
    { label: "Time to Market", value: "Est. 4–6 months", positive: false },
  ],
  nav: ["Overview", "Market", "Competitors", "Monetization", "Product", "Branding", "Validation", "GTM"],
};

export function HeroSection() {
  const [idea, setIdea] = useState("");
  const [focused, setFocused] = useState(false);
  const [scoreVisible, setScoreVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const { setIdea: storeSetIdea, runAnalysis } = useAnalysisStore();
  const scoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!scoreRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setScoreVisible(true); },
      { threshold: 0.5 }
    );
    observer.observe(scoreRef.current);
    return () => observer.disconnect();
  }, []);

  const MAX_IDEA_LEN = 500;

  const handleSubmit = () => {
    const val = sanitizeIdea(idea);
    if (!val) return;
    storeSetIdea(val);
    runAnalysis(val);
    navigate("/analyze");
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Linear-style ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
              radial-gradient(ellipse 50% 30% at 20% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 30%)
            `,
          }}
        />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col max-w-[1120px] mx-auto w-full px-5 md:px-6">
        <div className="pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">

          {/* Kicker badge */
          <div
            className={`mb-8 transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#818cf8]" />
              <span className="text-xs font-medium text-white/60">
                AI-Powered Startup Validation
              </span>
            </div>
          </div>

          {/* Headline - Linear style large typography */
          <h1 className="mb-8 max-w-[900px]">
            <span
              className={`block text-[clamp(2.8rem,7vw,5.5rem)] font-bold text-white leading-[1.05] tracking-[-0.04em] transition-all duration-700 delay-150 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Validate your startup idea
            </span>
            <span
              className={`block text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #818cf8 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              before you build it.
            </span>
          </h1>

          {/* Subtext */
          <p
            className={`text-lg leading-relaxed text-white/50 max-w-[520px] mb-10 transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Get a complete intelligence report in 30 seconds — market analysis, 
            competitor research, monetization strategy, and sprint-ready execution plan.
          </p>

          {/* Input - Glassmorphism style */
          <div
            className={`w-full max-w-[600px] transition-all duration-700 delay-[350ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div
              className={`relative rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                focused
                  ? "border-[#818cf8]/30 bg-white/[0.05] shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.03]"
              }`}
            >
              <textarea
                id="idea-input"
                data-testid="input-idea"
                value={idea}
                onChange={(e) => setIdea(e.target.value.slice(0, MAX_IDEA_LEN))}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Describe your startup idea in a few sentences..."
                className="w-full resize-none bg-transparent px-6 py-5 pr-16 text-[15px] leading-relaxed text-white/90 placeholder:text-white/20 focus:outline-none min-h-[80px] max-h-[160px]"
                rows={3}
                maxLength={MAX_IDEA_LEN}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />
              <button
                data-testid="button-validate"
                onClick={handleSubmit}
                disabled={!idea.trim()}
                className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#6366f1] text-white disabled:opacity-20 disabled:cursor-not-allowed hover:from-[#6366f1] hover:to-[#4f46e5] transition-all duration-200 active:scale-[0.95] shadow-lg shadow-indigo-500/20"
              >
                <CornerDownLeft className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-between mt-3 px-1">
              <span className="text-xs text-white/30 flex items-center gap-2">
                <kbd className="font-mono bg-white/[0.05] border border-white/[0.08] px-2 py-0.5 rounded text-[10px]">
                  ↵
                </kbd>
                to analyze
                {idea.length >= MAX_IDEA_LEN * 0.85 && (
                  <span className={`${idea.length >= MAX_IDEA_LEN ? "text-red-400/80" : "text-white/40"}`}>
                    {idea.length}/{MAX_IDEA_LEN}
                  </span>
                )}
              </span>
              <button
                data-testid="button-get-started-hero"
                onClick={handleSubmit}
                disabled={!idea.trim()}
                className="group flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-[#818cf8] disabled:opacity-0 transition-all duration-200"
              >
                Start Analysis
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Stats - Clean minimal style */
          <div
            className={`mt-14 flex flex-wrap items-center gap-10 transition-all duration-700 delay-[450ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { n: "10,000+", label: "Ideas validated" },
              { n: "~30s", label: "To full report" },
              { n: "18", label: "Data dimensions" },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-bold text-white/80 tracking-tight tabular-nums">{n}</span>
                <span className="text-xs text-white/35 font-medium uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>

          {/* Product preview - Glass card */
        <div
          className={`w-full pb-24 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_0_80px_-20px_rgba(99,102,241,0.15)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 h-12 px-4 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-2">
                {["#ef4444", "#eab308", "#22c55e"].map((color, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: `${color}40` }} />
                ))}
              </div>
              <div className="flex-1 mx-8 flex justify-center">
                <div className="h-7 w-64 rounded-lg bg-white/[0.04] flex items-center px-3 gap-2 border border-white/[0.06]">
                  <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                  <span className="text-[11px] text-white/25 font-mono">valisearch.app/report</span>
                </div>
              </div>
            </div>

            {/* App content */}
            <div className="grid sm:grid-cols-[200px_1fr] h-[400px] md:h-[500px]">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col border-r border-white/[0.06] p-4 bg-white/[0.01]">
                <div className="mb-4 px-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/30">
                    Analysis Report
                  </span>
                </div>
                <nav className="flex flex-col gap-1">
                  {REPORT.nav.map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-default select-none transition-all text-[13px] font-medium ${
                        i === 0
                          ? "bg-white/[0.06] text-white/90 border border-white/[0.08]"
                          : "text-white/35 hover:text-white/55 hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? "bg-[#818cf8]" : "bg-white/15"}`} />
                      {item}
                    </div>
                  ))}
                </nav>

                <div ref={scoreRef} className="mt-auto pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/25 mb-2">
                    Validation Score
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-white/90 leading-none tabular-nums tracking-tight">
                      {REPORT.score}
                    </span>
                    <span className="text-sm text-white/30">/100</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#818cf8] to-[#c084fc]"
                      style={{ width: scoreVisible ? `${REPORT.score}%` : "0%", transition: 'width 1s ease-out' }}
                    />
                  </div>
                  <div className="mt-2 text-[11px] text-white/30">Strong Opportunity</div>
                </div>
              </div>

              {/* Main content */}
              <div className="p-6 md:p-8 flex flex-col gap-5 overflow-hidden">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/25 mb-2">Idea</div>
                  <p className="text-base font-medium text-white/85 leading-relaxed">{REPORT.idea}</p>
                </div>

                <div className="flex-1">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/25 mb-3">
                    Key Findings
                  </div>
                  <div className="grid gap-2">
                    {REPORT.rows.map((row) => (
                      <div 
                        key={row.label} 
                        className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                      >
                        <span className="text-sm text-white/40">{row.label}</span>
                        <span className={`text-sm font-medium ${row.positive ? "text-emerald-400/80" : "text-amber-400/80"}`}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4 backdrop-blur-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/25 mb-2">
                    AI Summary
                  </div>
                  <p className="text-[13px] leading-[1.7] text-white/45">
                    Strong opportunity in a growing segment with measurable demand signals. 
                    Existing solutions lack modern UX and AI-native features, creating a clear wedge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-white/20">
            Sample report output — Results vary based on your idea complexity
          </p>
        </div>
      </div>
    </section>
  );
}
