import { Lightbulb, Brain, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Describe Your Idea",
    description: "Enter your startup concept in plain language. No jargon needed — just tell us what you want to build.",
    step: "01",
  },
  {
    icon: Brain,
    title: "AI Analyzes Everything",
    description: "Our multi-agent AI system evaluates market demand, competitors, risks, and opportunities simultaneously.",
    step: "02",
  },
  {
    icon: BarChart3,
    title: "Get Your Blueprint",
    description: "Receive a comprehensive startup blueprint with validation score, strategy, branding, and monetization plan.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From idea to strategy in{" "}
            <span className="gradient-text">three steps</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our AI acts as your co-founder — analyzing, validating, and strategizing while you focus on building.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="glass-card-hover rounded-2xl p-8 text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-lg shadow-primary/20">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary/60">Step {step.step}</span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
