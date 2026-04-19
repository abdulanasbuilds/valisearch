import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/useUserStore";
import { getSupabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, MousePointer2 } from "lucide-react";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { user } = useUserStore();

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      const supabase = getSupabase();
      if (supabase && user) {
        await supabase
          .from('profiles')
          .update({ onboarding_completed: true })
          .eq('id', user.id);
      }
      navigate("/");
    }
  };

  const steps = [
    {
      id: 1,
      icon: Sparkles,
      title: `Welcome to ValiSearch, ${user?.user_metadata?.full_name?.split(' ')[0] || 'Founder'}!`,
      description: "You have 15 free idea validations. Let's validate your first startup idea together.",
      button: "Start validating →"
    },
    {
      id: 2,
      icon: MousePointer2,
      title: "How it works",
      description: "Just describe your idea in plain English. Our AI analyzes 18 critical dimensions from market size to tech stack.",
      button: "Got it, let's go →"
    },
    {
      id: 3,
      icon: CheckCircle2,
      title: "Your first report",
      description: "Once the analysis is complete, you'll get a full interactive dashboard to share with investors or co-founders.",
      button: "Let's validate! →"
    }
  ];

  const currentStep = steps[step - 1];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] px-4">
      <div className="max-w-md w-full relative">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 w-10 rounded-full transition-all duration-300 ${
                s === step ? "bg-primary w-12" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="p-10 border border-white/10 rounded-3xl bg-white/[0.02] backdrop-blur-xl shadow-2xl text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <currentStep.icon className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
              {currentStep.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {currentStep.description}
            </p>

            <button
              onClick={handleNext}
              className="w-full py-4 px-6 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
            >
              {currentStep.button}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </AnimatePresence>

        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-white/40 hover:text-white/60 transition-colors"
          >
            Go back
          </button>
        )}
      </div>
    </div>
  );
}