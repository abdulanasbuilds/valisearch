import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-[220px] pb-40 overflow-hidden bg-grid-white">
      {/* Background Atmosphere */}
      <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#6C47FF]/[0.05] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#6C47FF]/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="label-allcaps">AI STARTUP INTELLIGENCE</span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            
            <h1 className="display-headline mb-8">
              Validate your <br />
              <span className="text-serif-italic">startup idea</span> <br />
              before you build.
            </h1>

            <p className="text-[19px] text-[#888888] leading-relaxed max-w-[520px] mb-12 font-medium">
              Turn raw concepts into investor-ready intelligence reports in 30 seconds. 
              The ultimate validation stack for serial founders.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link 
                to="/register" 
                className="w-full sm:w-auto bg-[#6C47FF] hover:bg-[#7C5AFF] text-white text-[16px] font-bold px-10 py-5 rounded-xl transition-all shadow-[0_20px_40px_rgba(108,71,255,0.25)] flex items-center justify-center gap-2 group"
              >
                Start Validating Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#how-it-works" 
                className="w-full sm:w-auto bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-[#F0F0F0] text-[16px] font-semibold px-10 py-5 rounded-xl transition-all text-center flex items-center justify-center gap-2"
              >
                Watch Demo
              </Link>
            </div>

            <div className="mt-24 flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">
                Backed by modern tech stacks
              </span>
              <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-30 grayscale contrast-125">
                 {/* Modern Tech Names as Logo placeholders */}
                 {["OPENAI", "SUPABASE", "STRIPE", "GROQ", "VERCEL"].map(name => (
                   <span key={name} className="text-[14px] font-black tracking-tighter">{name}</span>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Mockup Window */}
            <div className="relative z-10 premium-card p-1 mockup-shadow group">
              <div className="rounded-[14px] bg-[#0A0A0A] overflow-hidden border border-white/[0.05]">
                {/* Custom Tab Bar */}
                <div className="h-12 bg-[#121212] border-b border-white/[0.04] flex items-center px-5 justify-between">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  </div>
                  <div className="bg-white/[0.03] rounded-full px-4 py-1 flex items-center gap-2 border border-white/[0.04]">
                     <Sparkles className="w-3 h-3 text-[#6C47FF]" />
                     <span className="text-[10px] text-white/40 font-mono tracking-tight">ai_analysis_result.json</span>
                  </div>
                  <div className="w-6" />
                </div>

                {/* Content Area */}
                <div className="p-8 space-y-10">
                   {/* Score Header */}
                   <div className="flex items-end justify-between">
                      <div>
                        <div className="text-[10px] font-black text-[#6C47FF] uppercase tracking-widest mb-2">VALIDATION_READY</div>
                        <div className="text-6xl font-black text-white tracking-tighter">72<span className="text-xl text-white/20 font-light ml-1">/100</span></div>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-[#22C55E]/[0.08] border border-[#22C55E]/20">
                         <span className="text-[12px] font-bold text-[#22C55E]">HIGH POTENTIAL</span>
                      </div>
                   </div>

                   {/* Modern Progress Bar */}
                   <div className="relative h-2 w-full bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "72%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-gradient-to-r from-[#6C47FF] to-[#8E74FF] rounded-full" 
                      />
                   </div>

                   {/* Stats Grid */}
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                         <div className="text-[10px] font-bold text-white/30 uppercase mb-2">MARKET_SIZE</div>
                         <div className="text-xl font-bold text-white">$2.4B</div>
                      </div>
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                         <div className="text-[10px] font-bold text-white/30 uppercase mb-2">SATURATION</div>
                         <div className="text-xl font-bold text-white">MEDIUM</div>
                      </div>
                   </div>

                   {/* Mini Competitor Rows */}
                   <div className="space-y-2">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.01] border border-white/[0.02]">
                            <div className="flex items-center gap-3">
                               <div className="w-5 h-5 rounded bg-white/[0.05]" />
                               <div className="h-2 w-24 bg-white/[0.05] rounded-full" />
                            </div>
                            <div className="h-1.5 w-12 bg-white/[0.05] rounded-full" />
                         </div>
                       ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 px-5 py-3 rounded-2xl bg-[#1A1A1A] border border-white/[0.1] shadow-2xl z-20"
            >
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6C47FF] flex items-center justify-center">
                     <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-white">18 Modules</div>
                    <div className="text-[10px] text-white/40 font-medium">Parallel AI Check</div>
                  </div>
               </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 px-5 py-3 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/[0.05] shadow-2xl z-20"
            >
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="text-[12px] font-bold text-white/80 font-mono tracking-tighter">SUCCESS_VERIFIED</span>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
