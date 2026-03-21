import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [idea, setIdea] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (idea.trim()) {
      navigate("/analyze", { state: { idea: idea.trim() } });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-info/[0.06] blur-[100px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(217 33% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 33% 50% / 0.3) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl opacity-0 animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Startup Intelligence
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl" style={{ textWrap: "balance" }}>
            Turn your startup idea into a{" "}
            <span className="gradient-text">validated business</span>{" "}
            in seconds
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={{ textWrap: "pretty" }}>
            AI-powered validation, market research, competitor analysis, and a complete go-to-market strategy — all from a single prompt.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
          <div className="glass-card rounded-2xl p-2">
            <div className="flex flex-col gap-2 sm:flex-row">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Describe your startup idea… e.g. AI platform for farmers in developing countries"
                className="flex-1 resize-none rounded-xl bg-white/[0.04] px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 min-h-[48px] max-h-[120px]"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAnalyze();
                  }
                }}
              />
              <Button
                onClick={handleAnalyze}
                disabled={!idea.trim()}
                className="gradient-primary border-0 text-white shadow-lg shadow-primary/25 h-12 px-6 rounded-xl font-semibold active:scale-[0.97] transition-transform whitespace-nowrap"
              >
                Validate Idea
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground/60">No signup required. Results in under 30 seconds.</p>
        </div>
      </div>
    </section>
  );
}
