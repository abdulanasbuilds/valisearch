import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CornerDownLeft } from "lucide-react";
import { useAnalysisStore } from "@/store/useAnalysisStore";

const REPORT_PREVIEW = {
  idea: "AI-powered onboarding tool for B2B SaaS",
  score: 84,
  sections: [
    { label: "Market Opportunity", value: "Large · $4.2B TAM", positive: true },
    { label: "Competition Level", value: "Moderate · 6 direct", positive: null },
    { label: "Revenue Potential", value: "$1.2M ARR yr 2", positive: true },
    { label: "Technical Risk", value: "Low · Proven stack", positive: true },
    { label: "Time to Market", value: "Est. 4–6 months", positive: null },
  ],
};

export function HeroSection() {
  const [idea, setIdea] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const { setIdea: storeSetIdea, runAnalysis } = useAnalysisStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal") ?? [];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    const val = idea.trim();
    if (!val) return;
    storeSetIdea(val);
    runAnalysis(val);
    navigate("/analyze");
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Faint radial centre highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col flex-1 max-w-6xl mx-auto w-full px-5 md:px-8">
        {/* Hero text — takes the top 55% of the viewport */}
        <div className="flex flex-col justify-center pt-40 pb-16">
          {/* Kicker label */}
          <div className="reveal flex items-center gap-2.5 mb-7">
            <div className="h-px w-8 bg-white/20" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
              Startup Validation · Powered by AI
            </span>
          </div>

          {/* Headline — mix of weights / styles */}
          <h1 className="reveal reveal-delay-1 text-[clamp(2.6rem,6.5vw,5.2rem)] font-black text-white leading-[1.04] tracking-[-0.035em] max-w-[820px]">
            Know if your idea<br />
            is worth building—{" "}
            <span className="font-serif-display font-normal text-white/55">
              before you build it.
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mt-7 text-[16px] leading-[1.8] text-white/40 max-w-[500px]">
            Paste your idea. Get a full market report in 30 seconds — competitor
            analysis, market size, monetization strategy, and more.
          </p>

          {/* Input */}
          <div className="reveal reveal-delay-3 mt-10 w-full max-w-[600px]">
            <div
              className={`relative rounded-xl border transition-all duration-200 ${
                focused
                  ? "border-white/20 bg-white/[0.04]"
                  : "border-white/[0.08] bg-white/[0.02]"
              }`}
            >
              <textarea
                ref={textareaRef}
                id="idea-input"
                data-testid="input-idea"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Describe your startup idea…"
                className="w-full resize-none bg-transparent px-5 py-4 pr-14 text-[15px] leading-relaxed text-white/90 placeholder:text-white/20 focus:outline-none min-h-[68px] max-h-[140px]"
                rows={2}
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
                className="absolute bottom-3 right-3 flex items-center justify-center w-9 h-9 rounded-lg bg-white text-black disabled:opacity-25 disabled:cursor-not-allowed hover:bg-white/90 transition-all duration-150 active:scale-[0.96]"
                title="Validate idea"
              >
                <CornerDownLeft className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2.5 px-1">
              <span className="text-[11.5px] text-white/20">
                Press <kbd className="font-mono bg-white/[0.06] px-1.5 py-0.5 rounded text-[10px]">↵</kbd> to validate
              </span>
              <button
                data-testid="button-get-started-hero"
                onClick={handleSubmit}
                disabled={!idea.trim()}
                className="group flex items-center gap-1.5 text-[12px] font-medium text-white/30 hover:text-white/60 disabled:opacity-30 transition-colors duration-150"
              >
                Analyze idea
                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="reveal reveal-delay-4 mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
            {[
              { n: "12,847", label: "analyses run" },
              { n: "4.9★", label: "avg. rating" },
              { n: "~28s", label: "to results" },
              { n: "8", label: "report sections" },
            ].map(({ n, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-[18px] font-bold text-white/80 tracking-tight">{n}</span>
                <span className="text-[12px] text-white/25">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Preview card — full width below hero text */}
        <div className="reveal reveal-delay-5 w-full pb-24">
          <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 h-10 border-b border-white/[0.06] bg-white/[0.015]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-3">
                <div className="h-[22px] max-w-[260px] mx-auto rounded-md bg-white/[0.04] flex items-center px-3 gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400/50" />
                  <span className="text-[11px] text-white/20 font-mono">valisearch.app/dashboard</span>
                </div>
              </div>
            </div>

            {/* Content: sidebar + main */}
            <div className="grid grid-cols-[200px_1fr] min-h-0 h-[420px] md:h-[480px]">
              {/* Sidebar */}
              <div className="border-r border-white/[0.05] p-5 flex flex-col gap-1 hidden sm:flex">
                <div className="mb-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/20 mb-2">Report</div>
                  {["Overview", "Market", "Competitors", "Monetization", "Product", "Branding", "Validation", "Go-to-Market"].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md mb-0.5 cursor-default transition-colors ${
                        i === 0 ? "bg-white/[0.06] text-white/80" : "text-white/30 hover:text-white/50"
                      }`}
                    >
                      <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-indigo-400" : "bg-white/20"}`} />
                      <span className="text-[12px] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-white/[0.05]">
                  <div className="text-[10px] text-white/20 font-mono">Score</div>
                  <div className="text-[32px] font-black text-white/90 leading-none mt-1">
                    {REPORT_PREVIEW.score}
                    <span className="text-[14px] font-medium text-white/30">/100</span>
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-white/[0.08]">
                    <div
                      className="h-full rounded-full bg-indigo-400"
                      style={{ width: `${REPORT_PREVIEW.score}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Main panel */}
              <div className="p-6 md:p-8 flex flex-col gap-6 overflow-hidden">
                {/* Idea heading */}
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/20 mb-1.5">Idea</div>
                  <h2 className="text-[15px] font-semibold text-white/85 leading-snug">
                    {REPORT_PREVIEW.idea}
                  </h2>
                </div>

                {/* Metrics table */}
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/20 mb-3">Key Findings</div>
                  <div className="space-y-2">
                    {REPORT_PREVIEW.sections.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center justify-between py-2.5 px-0 border-b border-white/[0.04] last:border-0"
                      >
                        <span className="text-[13px] text-white/40">{s.label}</span>
                        <span className={`text-[13px] font-medium ${
                          s.positive === true ? "text-white/80" : s.positive === false ? "text-red-400/70" : "text-white/55"
                        }`}>
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary blurb */}
                <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/20 mb-2">AI Summary</div>
                  <p className="text-[12.5px] leading-[1.7] text-white/35">
                    Strong opportunity in a high-growth segment with measurable demand signals. 
                    Existing solutions lack modern UX and AI-native features, creating a clear 
                    wedge. Recommended: target mid-market SaaS teams (50–500 seats) at $49/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-[11.5px] text-white/20">
            Sample analysis output · Your real results will vary based on your idea
          </p>
        </div>
      </div>
    </section>
  );
}
