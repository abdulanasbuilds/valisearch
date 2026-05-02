import { Check, ArrowRight } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";
import { useNavigate } from "react-router-dom";
import { LS_STORE_URL, LS_PRO_VARIANT_ID, LS_PREMIUM_VARIANT_ID } from "@/lib/constants";
import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Starter",
    price: "0",
    sub: "Forever free, no credit card",
    features: [
      "3 analyses per month",
      "15 analysis sections",
      "Competitor snapshot",
      "Market overview",
      "Shareable score card",
    ],
    button: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    price: "29",
    sub: "per month, billed monthly",
    features: [
      "20 analyses per month",
      "All 18 analysis sections",
      "Full competitor intelligence",
      "Revenue projections",
      "Branding generator",
      "PDF & DOCX export",
      "Kanban sprint board",
      "Idea history & memory",
    ],
    button: "Get started",
    featured: true,
  },
  {
    name: "Premium",
    price: "79",
    sub: "per month, billed monthly",
    features: [
      "Everything in Pro",
      "Unlimited analyses",
      "Multi-agent AI mode",
      "Build Mode (dev blueprint)",
      "API access",
      "White-label reports",
      "Priority processing",
    ],
    button: "Get Premium",
    featured: false,
  },
];

export function Pricing() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useUserStore();

  const handlePlanClick = (planName: string) => {
    if (!isAuthenticated) {
      navigate("/register");
      return;
    }
    if (planName === "Starter") {
      navigate("/dashboard");
      return;
    }
    const variantId = planName === "Pro" ? LS_PRO_VARIANT_ID : LS_PREMIUM_VARIANT_ID;
    const checkoutUrl = `${LS_STORE_URL}/checkout/buy/${variantId}?checkout[email]=${user?.email}&checkout[custom][user_id]=${user?.id}`;
    window.open(checkoutUrl, "_blank");
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 lg:py-40 relative z-10">
      <div className="section-container">
        <div className="text-center mb-14 sm:mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6"
          >
            Transparent Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white tracking-tighter leading-[1.05]"
          >
            Simple, honest pricing.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-[1200px] mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-blue-600 text-white text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    Most popular
                  </div>
                </div>
              )}
              <div
                className={`h-full rounded-2xl sm:rounded-[32px] bg-zinc-900/40 backdrop-blur-3xl p-7 sm:p-9 lg:p-10 border transition-all duration-500 flex flex-col ${
                  plan.featured
                    ? "border-blue-500/20 shadow-[0_0_80px_rgba(59,130,246,0.05)]"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                <div
                  className={`text-[12px] uppercase tracking-[0.3em] font-black mb-8 ${
                    plan.featured ? "text-blue-500" : "text-zinc-600"
                  }`}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[56px] font-black text-white leading-none tracking-tighter">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-600 text-sm font-bold">/mo</span>
                </div>
                <div className="text-[13px] text-zinc-500 mb-10 font-medium">{plan.sub}</div>

                <div className="h-px bg-white/5 mb-10" />

                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-4 text-[14px] text-zinc-300 font-medium">
                      <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.featured ? 'bg-blue-500/10 text-blue-500' : 'bg-zinc-800 text-zinc-600'}`}>
                        <Check className="w-2.5 h-2.5" strokeWidth={4} />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`group w-full py-4 rounded-2xl text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.featured
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {plan.button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
