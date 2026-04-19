import { motion } from "framer-motion";
import { SmartScreenshot } from "./SmartScreenshot";
import { DashboardMockup } from "./DashboardMockup";

export function HowItWorks() {
  const steps = [
    {
      no: "01",
      title: "Input Context",
      body: "Describe your startup vision in natural language. Our system handles the unstructured data."
    },
    {
      no: "02",
      title: "Parallel Analysis",
      body: "18 compute modules analyze everything from TAM to monetization strategy in real-time."
    },
    {
      no: "03",
      title: "Result Delivery",
      body: "An immersive 18-section intelligence dashboard appears instantly, fully validated."
    },
    {
      no: "04",
      title: "Export & Build",
      body: "Convert your strategy to actionable backlogs in Linear, Jira, or download your PDF report."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 md:py-40 bg-[#0A0A0A] relative overflow-hidden reveal">
      <div className="section-container relative z-10">
        <div className="text-center mb-20 md:mb-28">
          <div className="flex justify-center mb-6">
            <span className="label-allcaps text-[#6C47FF]">THE PROTOCOL</span>
          </div>
          <h2 className="text-3xl md:text-[44px] lg:text-[54px] font-bold text-white tracking-tight max-w-[700px] mx-auto leading-tight">
            A precise workflow for <br /> strategic validation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative mb-24">
          {/* Scientific Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-[120px] right-[120px] h-px bg-white/[0.05]" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-14 h-14 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[13px] font-bold text-white/40 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                  {step.no}
                </div>
                <h3 className="text-[18px] font-bold text-white mt-8 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[14px] text-white/30 leading-relaxed font-medium">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview Centered */}
        <div className="max-w-4xl mx-auto hidden sm:block">
          <div className="rounded-2xl border border-white/[0.05] bg-white/[0.01] p-1 shadow-2xl overflow-hidden">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
