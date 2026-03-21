import { mockAnalysisResult } from "@/data/mockData";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";

export function ValidationSection() {
  const { validation } = mockAnalysisResult;

  const severityConfig = {
    high: { color: "bg-destructive/10 text-destructive border-destructive/20", icon: ShieldAlert },
    medium: { color: "bg-warning/10 text-warning border-warning/20", icon: AlertTriangle },
    low: { color: "bg-muted text-muted-foreground border-border", icon: AlertTriangle },
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Validation</h2>
        <p className="mt-1 text-sm text-muted-foreground">Market demand, feasibility, and risk assessment</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <SectionCard title="Market Demand">
          <div className="flex items-end gap-3">
            <span className="text-4xl font-extrabold">{validation.marketDemand}%</span>
            <span className="mb-1 text-sm text-muted-foreground">demand signal</span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full gradient-primary" style={{ width: `${validation.marketDemand}%` }} />
          </div>
        </SectionCard>

        <SectionCard title="Technical Feasibility">
          <div className="flex items-end gap-3">
            <span className="text-4xl font-extrabold">{validation.feasibility}%</span>
            <span className="mb-1 text-sm text-muted-foreground">feasible</span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div className="h-full rounded-full bg-info" style={{ width: `${validation.feasibility}%` }} />
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Risk Assessment">
        <div className="space-y-3">
          {validation.risks.map((risk, i) => {
            const config = severityConfig[risk.severity];
            const Icon = config.icon;
            return (
              <div key={i} className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${config.color}`}>
                <Icon className="h-4 w-4 shrink-0" />
                <span className="text-sm">{risk.label}</span>
                <span className="ml-auto text-xs font-medium uppercase tracking-wider opacity-70">{risk.severity}</span>
              </div>
            );
          })}
        </div>
      </SectionCard>

      <SectionCard title="Key Strengths">
        <div className="grid gap-3 sm:grid-cols-2">
          {validation.strengths.map((s, i) => (
            <div key={i} className="flex items-start gap-2 rounded-xl bg-success/5 border border-success/10 px-4 py-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <span className="text-sm text-muted-foreground">{s}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
