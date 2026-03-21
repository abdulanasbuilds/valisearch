import { Target, Swords, Layers, DollarSign } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Validation Score",
    description: "Get an instant viability score with market demand analysis, feasibility assessment, and risk identification.",
  },
  {
    icon: Swords,
    title: "Competitor Intelligence",
    description: "Discover who's already in the space, their strengths, weaknesses, and the gaps you can exploit.",
  },
  {
    icon: Layers,
    title: "Product Roadmap",
    description: "AI-generated MVP features, differentiation strategy, and premium feature recommendations.",
  },
  {
    icon: DollarSign,
    title: "Monetization Plan",
    description: "Pricing models, revenue streams, and financial projections tailored to your specific market.",
  },
];

export function FeaturesPreview() {
  return (
    <section id="features" className="py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to{" "}
            <span className="gradient-text">launch with confidence</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            One prompt delivers a complete startup intelligence report — the kind that used to take consultants weeks.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card-hover group rounded-2xl p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
