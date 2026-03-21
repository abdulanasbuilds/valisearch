import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const analysisSteps = [
  "Analyzing your idea…",
  "Scanning market trends…",
  "Identifying competitors…",
  "Building your strategy…",
];

export default function Analyze() {
  const navigate = useNavigate();
  const location = useLocation();
  const idea = (location.state as { idea?: string })?.idea || "Your startup idea";
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStep((s) => {
        if (s >= analysisSteps.length - 1) {
          clearInterval(stepInterval);
          return s;
        }
        return s + 1;
      });
    }, 1800);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 1;
      });
    }, 72);

    const redirect = setTimeout(() => {
      navigate("/dashboard", { state: { idea } });
    }, 7500);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      clearTimeout(redirect);
    };
  }, [navigate, idea]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 gradient-bg">
      {/* Glow orb */}
      <div className="relative mb-12">
        <div className="h-32 w-32 rounded-full gradient-primary opacity-20 animate-pulse-glow blur-xl absolute inset-0" />
        <div className="h-32 w-32 rounded-full gradient-primary opacity-40 animate-pulse-glow flex items-center justify-center relative" style={{ animationDelay: "500ms" }}>
          <div className="h-20 w-20 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <Zap className="h-8 w-8 text-primary animate-float" />
          </div>
        </div>
        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"
            style={{ animationDelay: `${i * 2.6}s`, animationDuration: `${6 + i}s` }}
          >
            <div className="h-2 w-2 rounded-full bg-primary/60" />
          </div>
        ))}
      </div>

      {/* Step text */}
      <p className="text-lg font-semibold text-foreground animate-count-up" key={step}>
        {analysisSteps[step]}
      </p>
      <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
        "{idea.slice(0, 80)}{idea.length > 80 ? "…" : ""}"
      </p>

      {/* Progress bar */}
      <div className="mt-8 w-full max-w-xs">
        <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full gradient-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-xs text-muted-foreground/60">
          <span>{Math.round(progress)}%</span>
          <span>Step {step + 1} of {analysisSteps.length}</span>
        </div>
      </div>

      {/* Step indicators */}
      <div className="mt-6 flex gap-2">
        {analysisSteps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-8 rounded-full transition-all duration-500 ${
              i <= step ? "gradient-primary" : "bg-secondary"
            }`}
          />
        ))}
      </div>

      {/* Skip */}
      <Button
        variant="ghost"
        size="sm"
        className="mt-8 text-xs text-muted-foreground/50 hover:text-muted-foreground"
        onClick={() => navigate("/dashboard", { state: { idea } })}
      >
        Skip to results →
      </Button>
    </div>
  );
}
