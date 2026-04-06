import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturesPreview } from "@/components/landing/FeaturesPreview";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Divider = () => (
  <div className="relative h-20 md:h-28">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 55% 100% at 50% 50%, hsl(248 84% 67% / 0.04) 0%, transparent 70%)",
      }}
    />
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-background relative overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <SocialProof />
    <TrustSection />
    <Divider />
    <HowItWorks />
    <Divider />
    <FeaturesPreview />
    <Divider />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
