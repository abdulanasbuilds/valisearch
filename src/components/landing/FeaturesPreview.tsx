import { useEffect, useRef } from "react";

const FEATURES = [
  {
    n: "01",
    title: "Validation Score",
    body: "A 0–100 composite score across market demand, feasibility, competition, and timing. Backed by data points, not gut feel.",
  },
  {
    n: "02",
    title: "Competitor Map",
    body: "Who's already building this, their market position, pricing, weaknesses — and the exact gap you can exploit.",
  },
  {
    n: "03",
    title: "Market Sizing",
    body: "TAM, SAM, SOM with cited growth projections and macro trend signals. The numbers investors actually ask about.",
  },
  {
    n: "04",
    title: "Monetization Plan",
    body: "Pricing model recommendations, revenue stream options, and realistic Year 1–3 projections for your specific segment.",
  },
  {
    n: "05",
    title: "Product Roadmap",
    body: "Prioritized MVP features, differentiating bets, and a premium feature ladder — mapped to customer segments.",
  },
  {
    n: "06",
    title: "Brand & Go-to-Market",
    body: "Naming directions, positioning statement, ideal customer profile, and the first three acquisition channels to test.",
  },
];

export function FeaturesPreview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal") ?? [];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={ref} className="border-t border-white/[0.05] py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-white/15" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/25">
                Eight-section report
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-black text-white leading-[1.06] tracking-[-0.03em]">
              Everything a founder<br />
              needs to{" "}
              <span className="font-serif-display font-normal text-white/45">decide.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-1 md:pt-16">
            <p className="text-[15px] leading-[1.85] text-white/35">
              Most validation tools give you a vibe check. ValiSearch gives you the 
              complete picture — the same eight dimensions that investors and experienced 
              founders evaluate before committing to an idea.
            </p>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] border border-white/[0.04] rounded-2xl overflow-hidden">
          {FEATURES.map((f, i) => (
            <div
              key={f.n}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-[#0A0A0A] p-7 group hover:bg-white/[0.025] transition-colors duration-300`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-semibold text-white/20 group-hover:text-indigo-400/50 transition-colors duration-200">
                  {f.n}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold text-white/75 mb-3 group-hover:text-white/90 transition-colors duration-200">
                {f.title}
              </h3>
              <p className="text-[13px] leading-[1.75] text-white/30">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
