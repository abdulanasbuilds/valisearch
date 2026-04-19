import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { StatsBar } from "@/components/landing/StatsBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";

const Index = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up, .reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen selection:bg-[#6C47FF]/30">
      {/* 1. Header Stack */}
      <Navbar />

      <main>
        {/* 2. Above the fold */}
        <HeroSection />

        {/* 3. Traction & Process */}
        <StatsBar />
        <HowItWorks />

        {/* 5. Deep Features */}
        <Features />

        {/* 7. Conversion Focus */}
        <Pricing />
        <FinalCTA />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
