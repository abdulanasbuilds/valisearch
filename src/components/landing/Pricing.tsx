import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "0",
      sub: "FOREVER_FREE_NO_CC",
      features: ["3 analyses per month", "15 analysis sections", "Competitor snapshot", "Market overview", "Shareable score card"],
      button: "Begin Now",
      featured: false
    },
    {
      name: "Founder",
      price: "29",
      sub: "INDIVIDUAL_TIER_MONTHLY",
      features: ["20 analyses per month", "All 18 analysis sections", "Full competitor intelligence", "Revenue projections", "Branding generator", "PDF & DOCX export", "Kanban sprint board", "Idea history & memory"],
      button: "Unlock All Features",
      featured: true
    },
    {
      name: "Enterprise",
      price: "79",
      sub: "SCALED_INTELLIGENCE_API",
      features: ["Unlimited analyses", "Multi-agent AI mode", "Build Mode (dev blueprint)", "API access", "White-label reports", "Priority processing", "Concierge setup"],
      button: "Contact Sales",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-40 bg-[#0A0A0A] relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <span className="label-allcaps">INVESTMENT PLANS</span>
          </div>
          <h2 className="text-[44px] lg:text-[54px] font-bold text-white mb-6 tracking-tight">Simple, honest pricing</h2>
          <p className="text-[18px] text-[#888888] font-medium max-w-[500px] mx-auto">
             No hidden fees. No seat limits. Scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-[32px] p-10 border transition-all duration-500 overflow-hidden group ${
                plan.featured 
                ? 'bg-[#111111] border-[#6C47FF]/30 shadow-[0_40px_100px_-20px_rgba(108,71,255,0.15)]' 
                : 'bg-[#111111]/40 backdrop-blur-sm border-white/[0.06] hover:border-white/20'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-[#6C47FF] text-white text-[9px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-bl-2xl">
                  Recommended
                </div>
              )}

              {/* Card Decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#6C47FF]/[0.03] blur-[60px] rounded-full pointer-events-none group-hover:bg-[#6C47FF]/[0.08] transition-colors duration-700" />

              <div className="mb-12">
                 <div className={`text-[12px] font-black uppercase tracking-[0.3em] mb-8 font-mono ${plan.featured ? 'text-[#6C47FF]' : 'text-white/20'}`}>
                    {plan.sub}
                 </div>
                 <div className="flex items-baseline gap-1">
                    <span className="text-[64px] font-black text-white tracking-tighter">${plan.price}</span>
                    <span className="text-[14px] font-medium text-white/30 ml-2">/ month</span>
                 </div>
                 <div className="text-[18px] font-bold text-white mt-4">{plan.name}</div>
              </div>
              
              <div className="h-[1px] w-full bg-white/[0.04] mb-12" />

              <ul className="space-y-6 mb-16">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-4 text-[15px] font-medium text-white/50 group-hover:text-white/80 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
                       <Check className={`w-3 h-3 ${plan.featured ? 'text-[#6C47FF]' : 'text-white/30'}`} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl text-[16px] font-black transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 group/btn shadow-xl ${
                plan.featured 
                ? 'bg-[#6C47FF] hover:bg-[#7C5AFF] text-white' 
                : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white'
              }`}>
                {plan.featured && <Sparkles className="w-4 h-4 text-white/50" />}
                {plan.button}
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.05] transition-opacity" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
