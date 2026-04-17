import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight, Github, Twitter, Linkedin, ExternalLink, Play, Sparkles } from "lucide-react";

export function ProductPreview() {
  return (
    <section className="py-40 relative bg-grid-white bg-[size:60px_60px]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <span className="label-allcaps">LIVE PRODUCT DEMO</span>
          </div>
          <h2 className="text-[44px] lg:text-[54px] font-bold text-white mb-6 tracking-tight">Built for speed & scale</h2>
          <p className="text-[18px] text-[#888888] font-medium max-w-[500px] mx-auto">
            Experience the future of startup validation. From ideation to execution in one seamless flow.
          </p>
        </div>

        {/* Premium Screen Recording / Gallery Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-40">
           {/* Left: Animated Analysis Flow */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative rounded-[32px] overflow-hidden border border-white/[0.08] bg-[#0F0F0F] group"
           >
              <img 
                src="/analysis_modules_video_style.png" 
                alt="AI Analysis Engine" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-6 h-6 text-white fill-white" />
                 </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="text-[10px] font-black text-[#6C47FF] uppercase tracking-widest mb-2 font-mono">LIVE_COMPUTE_STREAM</div>
                 <h3 className="text-xl font-bold text-white">Parallel Intelligence Engine</h3>
              </div>
           </motion.div>

           {/* Right: Dashboard Preview Cards */}
           <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-1.5 rounded-[32px] border border-white/[0.08] bg-[#111] overflow-hidden group h-[280px]"
              >
                  <img 
                    src="/dashboard_premium_mockup.png" 
                    alt="Dashboard Snapshot" 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                  />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                     <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-3">SYSTEM_VIEW</span>
                     <h3 className="text-[24px] font-black text-white tracking-tight">Full Visibility</h3>
                     <p className="text-[14px] text-white/40 mt-2">Every metric, every competitor, at a glance.</p>
                  </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-8">
                 <div className="p-8 rounded-[32px] border border-white/[0.08] bg-[#0A0A0A] flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#6C47FF]/10 border border-[#6C47FF]/20 flex items-center justify-center">
                       <ArrowUpRight className="w-5 h-5 text-[#6C47FF]" />
                    </div>
                    <div>
                       <div className="text-[18px] font-bold text-white">Export Ready</div>
                       <p className="text-[13px] text-white/30 mt-1">PDF, Excel, & JSON</p>
                    </div>
                 </div>
                 <div className="p-8 rounded-[32px] border border-white/[0.08] bg-[#0A0A0A] flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                       <Play className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                       <div className="text-[18px] font-bold text-white">Zero Latency</div>
                       <p className="text-[13px] text-white/30 mt-1">Real-time reports</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Existing Browser Mockup Refinement */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[1150px] mx-auto"
        >
          <div className="absolute -inset-10 bg-[#6C47FF]/[0.05] blur-[100px] rounded-[40px] pointer-events-none" />

          <div className="relative rounded-[24px] border border-white/[0.08] bg-[#0D0D0D] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.8)] mockup-shadow">
            <div className="h-12 bg-[#141414] border-b border-white/[0.05] flex items-center px-6 gap-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/[0.05] border border-white/[0.05]" />
                <div className="w-3 h-3 rounded-full bg-white/[0.05] border border-white/[0.05]" />
                <div className="w-3 h-3 rounded-full bg-white/[0.05] border border-white/[0.05]" />
              </div>
              <div className="flex-1 max-w-[600px] h-7 bg-white/[0.02] border border-white/[0.04] rounded-full flex items-center px-4">
                 <div className="text-[10px] text-white/20 font-mono flex items-center gap-2">
                    <span className="text-[#6C47FF]">https://</span>
                    <span>valisearch.app/dashboard/overview</span>
                 </div>
              </div>
            </div>

            <div className="flex h-[640px]">
               {/* Left Navigation */}
               <div className="w-64 bg-[#0A0A0A] border-r border-white/[0.04] p-6 space-y-8">
                  <div className="flex items-center gap-3 px-2">
                     <div className="w-8 h-8 rounded-lg bg-[#6C47FF]" />
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
                  <img 
                    src="/dashboard_premium_mockup.png" 
                    alt="Dashboard Interface" 
                    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
                  />
                  <div className="relative z-10 flex justify-between items-start mb-16">
                     <div className="space-y-3">
                        <div className="h-2 w-32 bg-[#6C47FF]/40 rounded-full" />
                        <div className="h-8 w-64 bg-white/5 rounded-xl underline decoration-[#6C47FF]/40 underline-offset-8" />
                     </div>
                     <div className="flex gap-3">
                        <Link to="/dashboard" className="px-6 py-2 rounded-xl bg-[#6C47FF] text-white text-[12px] font-black">LOGIN_TO_DASHBOARD</Link>
                     </div>
                  </div>

                  <div className="relative z-10 grid grid-cols-12 gap-6 h-full">
                     <div className="col-span-8 h-[380px] rounded-3xl bg-white/[0.02] border border-white/[0.05] p-8 backdrop-blur-md">
                        <div className="flex items-center gap-2 mb-8">
                           <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">REALTIME_INGESTION</span>
                        </div>
                        <div className="space-y-6">
                           <div className="h-4 w-full bg-white/[0.03] rounded-lg" />
                           <div className="h-4 w-3/4 bg-white/[0.03] rounded-lg" />
                           <div className="mt-12 h-32 w-full bg-white/[0.02] rounded-2xl border border-white/[0.05]" />
                        </div>
                     </div>
                     <div className="col-span-4 space-y-6">
                        <div className="h-[180px] rounded-3xl bg-[#1A1A1A] border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-6">
                           <div className="text-[10px] font-black text-[#6C47FF] mb-2 uppercase tracking-widest">API_KEY_SECURED</div>
                           <div className="text-xl font-mono text-white/20">************</div>
                        </div>
                        <div className="h-[174px] rounded-3xl bg-white/[0.01] border border-white/5 p-8 flex items-center justify-center">
                           <Sparkles className="w-12 h-12 text-[#6C47FF]/20" />
                        </div>
                     </div>
                  </div>
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#6C47FF]/[0.05] blur-[180px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-[56px] md:text-[88px] font-black text-white leading-[0.95] tracking-[-0.04em] mb-12">
             Great ideas deserve <br />
             <span className="text-[#6C47FF]">validation.</span>
          </h2>
          
          <p className="text-[20px] text-[#888888] font-medium mb-16 max-w-[580px] mx-auto leading-relaxed">
             Stop building in the dark. ValiSearch gives you the intelligence to scale with confidence. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/register" 
              className="w-full sm:w-auto bg-[#6C47FF] hover:bg-[#7C5AFF] text-white text-[16px] font-black px-12 py-5 rounded-2xl transition-all shadow-[0_25px_50px_-12px_rgba(108,71,255,0.4)] flex items-center justify-center gap-2 group"
            >
              Get Started Free
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="w-full sm:w-auto bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white text-[16px] font-bold px-12 py-5 rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              Learn More
            </Link>
          </div>
          
          <div className="mt-28 flex flex-col items-center gap-4">
             <div className="h-px w-20 bg-white/10" />
             <div className="text-[11px] font-black text-white/15 uppercase tracking-[0.5em]">
                trusted by high-growth startups
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/abdulanasbuilds" },
    { icon: Github, href: "https://github.com/abdulanas" },
    { icon: Linkedin, href: "https://linkedin.com/in/abdulanas" }
  ];

  return (
    <footer className="py-24 border-t border-white/[0.04] bg-[#080808] relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-lg bg-[#6C47FF]" />
               <span className="text-[22px] font-black text-white tracking-tighter">ValiSearch</span>
            </div>
            
            <div className="space-y-4">
               <p className="text-[15px] font-medium text-white/80">
                  Built by <span className="font-black text-white">Abdul Anas</span>
               </p>
               <p className="text-[14px] text-white/40 max-w-[320px] leading-relaxed">
                  The ultimate intelligence platform for serial founders. Optimized for market-ready execution.
               </p>
            </div>

            <div className="space-y-4">
               <p className="text-[12px] font-bold text-[#6C47FF] uppercase tracking-widest">Connect</p>
               <div className="flex items-center gap-6 text-white/30">
                  {socialLinks.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                       <s.icon className="w-5 h-5" />
                    </a>
                  ))}
               </div>
               <p className="text-[13px] text-white/40 italic">
                  Follow him <span className="font-bold text-white/60">@abdulanasbuilds</span> on all social media platforms
               </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[11px] font-black text-white/20 uppercase tracking-[0.2em]">Product</h4>
            <ul className="text-[14px] font-medium text-white/40 space-y-4">
               {["Vision", "Infrastructure", "Intelligence", "Pricing"].map(i => (
                 <li key={i} className="hover:text-white cursor-pointer transition-colors group">
                    <Link to={i === "Pricing" ? "/pricing" : "/#"} className="flex items-center gap-2">
                       {i} <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                 </li>
               ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-black text-white/20 uppercase tracking-[0.2em]">Platform</h4>
            <ul className="text-[14px] font-medium text-white/40 space-y-4">
               {["Register", "Login", "Documentation", "Terms"].map(i => (
                 <li key={i} className="hover:text-white cursor-pointer transition-colors group">
                    <Link to={i === "Register" ? "/register" : i === "Login" ? "/login" : "#"} className="flex items-center gap-2">
                       {i} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                    </Link>
                 </li>
               ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 flex flex-col items-end">
             <div className="text-right space-y-6">
                <div className="text-[11px] font-black text-white/10 uppercase tracking-[0.4em]">system_status</div>
                <div className="flex items-center gap-2 justify-end">
                   <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                   <span className="text-[14px] font-black text-white/30">OPERATIONAL_v1.0.4</span>
                </div>
                <p className="text-[13px] font-medium text-white/20 max-w-[180px]">
                   Engineered for speed and data accuracy.
                </p>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-white/[0.04]">
           <div className="text-[12px] font-bold text-white/10 tracking-[0.2em] uppercase">
              © 2026 VALISEARCH_CORE_SYSTEM
           </div>
           <div className="flex items-center gap-8 font-mono">
              <span className="text-[11px] font-bold text-white/10 hover:text-white/30 cursor-pointer uppercase transition-all hover:tracking-widest">AB_AN_B_001</span>
              <span className="text-[11px] font-bold text-white/10 hover:text-white/30 cursor-pointer uppercase transition-all">PVP_SECURED</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
