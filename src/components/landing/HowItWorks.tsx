import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Paste your idea",
    body: "Describe what you want to build in plain language. No pitch deck, no jargon — just the core idea. One paragraph is enough.",
  },
  {
    n: "02",
    title: "AI runs the analysis",
    body: "Six independent agents evaluate market demand, competitive landscape, risks, revenue potential, and go-to-market fit simultaneously.",
  },
  {
    n: "03",
    title: "Read your blueprint",
    body: "A structured, eight-section report with a viability score, strategy recommendations, and a monetization plan you can act on today.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal") ?? [];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="border-t border-white/[0.05] py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-14">
          <div className="h-px w-8 bg-white/15" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/25">
            How it works
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: big headline */}
          <div className="reveal">
            <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-black text-white leading-[1.06] tracking-[-0.03em]">
              From raw idea to<br />
              investor-ready{" "}
              <span className="font-serif-display font-normal text-white/45">report.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-white/35 max-w-[380px]">
              Three steps. Thirty seconds. A report that would take a consultant three weeks to produce.
            </p>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col gap-0 reveal reveal-delay-1">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className="relative flex gap-6 py-8 border-b border-white/[0.05] last:border-0 group"
              >
                <div className="shrink-0 pt-0.5">
                  <span className="font-mono text-[11px] font-semibold text-white/20 group-hover:text-indigo-400/60 transition-colors duration-200">
                    {step.n}
                  </span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.75] text-white/30">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
