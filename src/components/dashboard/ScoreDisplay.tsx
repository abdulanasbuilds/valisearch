import { useEffect, useState } from "react";

interface ScoreDisplayProps {
  score: number;
  maxScore?: number;
  label?: string;
  verdict?: string;
}

export function ScoreDisplay({ score, maxScore = 10, label = "ValiScore", verdict }: ScoreDisplayProps) {
  const [displayed, setDisplayed] = useState(0);
  const pct = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (pct / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setDisplayed(score), 200);
    return () => clearTimeout(timer);
  }, [score]);

  const verdictColor = verdict === "Build"
    ? "text-success bg-success/10"
    : verdict === "Improve"
    ? "text-warning bg-warning/10"
    : "text-destructive bg-destructive/10";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-36 w-36">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
          <circle
            cx="60" cy="60" r="54" fill="none"
            stroke="url(#scoreGradient)" strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(263, 70%, 58%)" />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-extrabold tracking-tight animate-count-up">{displayed}</span>
          <span className="text-xs text-muted-foreground">/ {maxScore}</span>
        </div>
      </div>
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{label}</span>
      {verdict && (
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${verdictColor}`}>
          {verdict}
        </span>
      )}
    </div>
  );
}
