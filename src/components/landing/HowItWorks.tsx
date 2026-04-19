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
          <h2 className="text-3xl md:text-[44px] lg:text-[54px] font-bold text-white tracking-tight max-w-[600px] mx-auto leading-tight">
            From idea to intelligence in 4 stages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative mb-24">
          {/* Scientific Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-[120px] right-[120px] h-px bg-gradient-to-r from-transparent via-[#6C47FF]/40 to-transparent" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[14px] font-black text-[#6C47FF] shadow-[0_10px_30px_rgba(108,71,255,0.1)] group-hover:scale-110 group-hover:bg-[#6C47FF]/10 transition-all duration-300">
                  {step.no}
                </div>
                <h3 className="text-[20px] font-bold text-white mt-8 mb-4 tracking-tight group-hover:text-[#6C47FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#888888] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview Centered */}
        <div className="max-w-3xl mx-auto hidden sm:block">
          <SmartScreenshot
            src="/screenshots/dashboard-overview.png"
            alt="ValiSearch Result Preview"
            className="w-full rounded-xl border border-white/10 shadow-2xl shadow-black/80"
            fallback={
              <div className="scale-90 origin-top">
                <DashboardMockup />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
