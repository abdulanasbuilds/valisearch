import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export function ProductPreview() {
  return (
    <section className="py-40 relative bg-grid-white bg-[size:60px_60px]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <span className="label-allcaps">IMMERSIVE INTERFACE</span>
          </div>
          <h2 className="text-[44px] lg:text-[54px] font-bold text-white mb-6 tracking-tight">Focus on what matters</h2>
          <p className="text-[18px] text-[#888888] font-medium max-w-[500px] mx-auto">
            Our dashboard is designed for clarity. No clutter, just the intelligence you need to make decisions.
          </p>
        </div>

        {/* Ultra-Premium Browser Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[1150px] mx-auto"
        >
          {/* External Atmosphere Glow */}
          <div className="absolute -inset-10 bg-[#6C47FF]/[0.05] blur-[100px] rounded-[40px] pointer-events-none" />

          <div className="relative rounded-[24px] border border-white/[0.08] bg-[#0D0D0D] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)] mockup-shadow">
            {/* Real Desktop Chrome Style */}
            <div className="h-12 bg-[#141414] border-b border-white/[0.05] flex items-center px-6 gap-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/[0.05] border border-white/[0.05]" />
                <div className="w-3 h-3 rounded-full bg-white/[0.05] border border-white/[0.05]" />
                <div className="w-3 h-3 rounded-full bg-white/[0.05] border border-white/[0.05]" />
              </div>
              <div className="flex-1 max-w-[600px] h-7 bg-white/[0.02] border border-white/[0.04] rounded-full flex items-center px-4">
                 <div className="text-[10px] text-white/20 font-mono flex items-center gap-2">
                    <span className="text-[#6C47FF]">https://</span>
                    <span>valisearch.app/analysis/startup-feasibility-001</span>
                 </div>
              </div>
            </div>

            {/* Application UI Design */}
            <div className="flex h-[640px]">
               {/* Left Navigation */}
               <div className="w-64 bg-[#0A0A0A] border-r border-white/[0.04] p-6 space-y-8">
                  <div className="flex items-center gap-3 px-2">
                     <div className="w-8 h-8 rounded-lg bg-[#6C47FF] shadow-[0_0_20px_rgba(108,71,255,0.4)]" />
                     <div className="h-2 w-20 bg-white/10 rounded-full" />
                  </div>
                  <div className="space-y-4 pt-10">
                     {[1, 1, 0.6, 0.4, 0.4, 0.6, 1].map((o, i) => (
                       <div key={i} className="flex items-center gap-3 px-2">
                          <div className="w-4 h-4 rounded bg-white/[0.03]" />
                          <div className="h-1.5 bg-white/[0.08] rounded-full" style={{ width: `${60 * o}%` }} />
                       </div>
                     ))}
                  </div>
               </div>

               {/* Primary Canvas */}
               <div className="flex-1 bg-[#0D0D0D] p-12 overflow-hidden relative">
                  <div className="flex justify-between items-start mb-16">
                     <div className="space-y-3">
                        <div className="h-2 w-32 bg-[#6C47FF]/40 rounded-full" />
                        <div className="h-8 w-64 bg-white/5 rounded-xl" />
                     </div>
                     <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06]" />
                        <div className="w-32 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06]" />
                     </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 h-full">
                     <div className="col-span-8 h-[380px] rounded-3xl bg-white/[0.02] border border-white/[0.05] p-8">
                        <div className="flex items-center gap-2 mb-8">
                           <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">LIVE_METRICS</span>
                        </div>
                        <div className="space-y-6">
                           <div className="h-4 w-full bg-white/[0.03] rounded-lg" />
                           <div className="h-4 w-3/4 bg-white/[0.03] rounded-lg" />
                           <div className="h-4 w-full bg-white/[0.03] rounded-lg" />
                           <div className="mt-12 h-32 w-full bg-gradient-to-t from-[#6C47FF]/10 to-transparent rounded-2xl border-t border-[#6C47FF]/20" />
                        </div>
                     </div>
                     <div className="col-span-4 space-y-6">
                        <div className="h-[180px] rounded-3xl bg-[#1A1A1A] border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-6">
                           <div className="text-[10px] font-black text-[#6C47FF] mb-2 uppercase">REVENUE_POD</div>
                           <div className="text-3xl font-black text-white">$4.2M</div>
                        </div>
                        <div className="h-[174px] rounded-3xl bg-white/[0.01] border border-white/5 p-6 border-dashed" />
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Contextual Floating Info */}
          <div className="absolute top-[40%] -right-20 pointer-events-none hidden xl:block">
             <div className="flex items-center gap-4">
                <div className="h-[1px] w-20 bg-white/10" />
                <div className="px-4 py-2 rounded-full bg-[#111] border border-white/[0.08] text-[11px] font-bold text-white/60 backdrop-blur-md">
                   FULLY_INTERACTIVE_CANVAS
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-[180px] relative overflow-hidden bg-[#0A0A0A]">
      {/* Visual Centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#6C47FF]/[0.08] blur-[160px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-[56px] md:text-[88px] font-black text-white leading-[0.95] tracking-[-0.04em] mb-12">
             Great ideas deserve <br />
             <span className="text-[#6C47FF]">validation.</span>
          </h2>
          
          <p className="text-[20px] text-[#888888] font-medium mb-16 max-w-[580px] mx-auto leading-relaxed">
             Stop building in the dark. Bring your concepts to life and back them with world-class intelligence today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/register" 
              className="w-full sm:w-auto bg-[#6C47FF] hover:bg-[#7C5AFF] text-white text-[16px] font-black px-12 py-5 rounded-2xl transition-all shadow-[0_25px_50px_-12px_rgba(108,71,255,0.4)]"
            >
              Start Your First Report
            </Link>
            <Link 
              to="#pricing" 
              className="w-full sm:w-auto bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white text-[16px] font-bold px-12 py-5 rounded-2xl transition-all"
            >
              Compare Plans 
            </Link>
          </div>
          
          <div className="mt-24 text-[11px] font-black text-white/10 uppercase tracking-[0.4em]">
             trusted by builders worldwide
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-24 border-t border-white/[0.04] bg-[#080808] relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-lg bg-[#6C47FF] shadow-lg shadow-[#6C47FF]/20" />
               <span className="text-[20px] font-black text-white tracking-tighter">ValiSearch</span>
            </div>
            <p className="text-[14px] text-white/30 max-w-[280px] leading-relaxed font-medium">
               Providing founders with the analytical edge to dominate their markets. Validated, optimized, and ready for scale.
            </p>
            <div className="flex items-center gap-4 grayscale opacity-40">
               <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
               <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
               <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[11px] font-black text-white/20 uppercase tracking-[0.2em]">Product</h4>
            <ul className="text-[14px] font-medium text-white/40 space-y-4">
               {["Vision", "Infrastructure", "Intelligence", "Changelog"].map(i => <li key={i} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">{i} <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></li>)}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-black text-white/20 uppercase tracking-[0.2em]">Platform</h4>
            <ul className="text-[14px] font-medium text-white/40 space-y-4">
               {["Documentation", "Connectors", "API Status", "Privacy"].map(i => <li key={i} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">{i} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" /></li>)}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 flex flex-col items-end">
             <div className="text-right space-y-4">
                <div className="text-[11px] font-black text-white/10 uppercase tracking-[0.3em]">HQ</div>
                <div className="text-[14px] font-black text-white/40">ACCRA, GHANA 🇬🇭</div>
                <div className="text-[14px] font-medium text-white/20">The future is built here.</div>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/[0.04]">
           <div className="text-[12px] font-bold text-white/10 tracking-widest uppercase mb-4 md:mb-0">
              © 2026 VALISEARCH_CORE_SYSTEM
           </div>
           <div className="flex items-center gap-8">
              <span className="text-[12px] font-bold text-white/10 hover:text-white/30 cursor-pointer uppercase transition-colors">Security</span>
              <span className="text-[12px] font-bold text-white/10 hover:text-white/30 cursor-pointer uppercase transition-colors">Privacy</span>
              <span className="text-[12px] font-bold text-white/10 hover:text-white/30 cursor-pointer uppercase transition-colors">Terms</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
