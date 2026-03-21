export function SocialProof() {
  const logos = ["TechStars", "Y Combinator", "Sequoia", "a16z", "Accel"];

  return (
    <section className="border-y border-white/[0.04] py-12 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <div className="container mx-auto px-4 text-center">
        <p className="mb-8 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          Trusted by founders backed by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {logos.map((name) => (
            <span key={name} className="text-lg font-semibold text-muted-foreground/30 transition-colors hover:text-muted-foreground/50">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
