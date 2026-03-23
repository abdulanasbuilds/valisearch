import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const navigate = useNavigate();
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
    <section id="pricing" ref={ref} className="border-t border-white/[0.05] py-28 md:py-40 relative overflow-hidden">
      {/* Extremely subtle radial wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-[640px]">
          <div className="reveal flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-white/15" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/25">
              Free to start
            </span>
          </div>

          <h2 className="reveal reveal-delay-1 text-[clamp(2.4rem,5.5vw,4.5rem)] font-black text-white leading-[1.04] tracking-[-0.035em]">
            Stop guessing.<br />
            <span className="font-serif-display font-normal text-white/45">
              Start knowing.
            </span>
          </h2>

          <p className="reveal reveal-delay-2 mt-7 text-[15px] leading-[1.85] text-white/35 max-w-[420px]">
            Join 12,000 founders who validate ideas before spending months building the wrong thing. No credit card. No signup.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row items-start gap-3">
            <button
              data-testid="button-cta-try"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-[14px] font-semibold hover:bg-white/90 transition-all duration-150 active:scale-[0.98]"
            >
              Try ValiSearch free
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
            <div className="flex items-center gap-5 sm:mt-0 mt-1 sm:pl-2 sm:border-l sm:border-white/[0.08]">
              {["No signup", "~30s results", "100% free"].map((t) => (
                <span key={t} className="text-[12px] text-white/25 font-medium">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
