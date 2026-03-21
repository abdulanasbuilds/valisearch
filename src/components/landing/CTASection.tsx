import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 sm:py-32 border-t border-white/[0.04]">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl gradient-primary p-10 text-center sm:p-16 opacity-0 animate-fade-in">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(263_70%_70%_/_0.3),_transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ textWrap: "balance" }}>
              Stop guessing. Start validating.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70">
              Join thousands of founders who validate their ideas before writing a single line of code.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="mt-8 h-12 rounded-xl bg-white px-8 font-semibold text-background hover:bg-white/90 active:scale-[0.97] transition-transform"
            >
              Try ValiSearch Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
