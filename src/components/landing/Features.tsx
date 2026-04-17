import { motion } from "framer-motion";
import { Brain, Globe, Layout, ChevronRight } from "lucide-react";

function FeatureBlock({ label, headline, body, visual, reverse = false, icon: Icon }: { label: string, headline: string, body: React.ReactNode, visual: React.ReactNode, reverse?: boolean, icon: React.ElementType }) {
  return (
    <div className="py-40 relative overflow-hidden group">
      {/* Dynamic Background Glow */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${reverse ? 'left-[-10%]' : 'right-[-10%]'} w-[600px] h-[600px] bg-[#6C47FF]/[0.03] blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
      
      {/* Precision Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      
      <div className={`section-container grid lg:grid-cols-[1fr_1.1fr] gap-24 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={reverse ? 'lg:order-2' : ''}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#6C47FF]/10 flex items-center justify-center border border-[#6C47FF]/20">
               <Icon className="w-6 h-6 text-[#6C47FF]" />
            </div>
            <span className="label-allcaps">{label}</span>
          </div>
          
          <h2 className="text-[44px] lg:text-[54px] font-bold text-white mb-8 leading-[1.1] tracking-tight">{headline}</h2>
          <p className="text-[18px] text-[#888888] leading-relaxed max-w-[500px] mb-10 font-medium">
            {body}
          </p>
          
          <button className="flex items-center gap-2 text-[14px] font-bold text-white/40 hover:text-[#6C47FF] transition-colors group/btn">
             EXPLORE MODULE 
             <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative ${reverse ? 'lg:order-1' : ''}`}
        >
           {/* High-End Visual Container */}
           <div className="premium-card p-1 mockup-shadow relative z-10 group/visual">
              <div className="rounded-[14px] bg-[#0A0A0A] overflow-hidden border border-white/[0.05] p-10 flex items-center justify-center min-h-[440px]">
                {visual}
              </div>
              
              {/* Corner Accents */}
              <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-[#6C47FF]/40 rounded-tl-xl pointer-events-none" />
              <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-[#6C47FF]/40 rounded-br-xl pointer-events-none" />
           </div>

           {/* Backdrop Texture */}
           <div className="absolute inset-[-40px] bg-grid-white opacity-20 pointer-events-none z-0" />
        </motion.div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-[#0A0A0A]">
      <FeatureBlock 
        icon={Brain}
        label="CORE ENGINE"
        headline="AI that thinks like a serial founder"
        body="ValiSearch scores your idea across 18 specialized dimensions. Get a 0-100 confidence score backed by raw market data and specific execution logic."
        visual={
          <div className="text-center space-y-8 w-full">
            <div className="relative inline-block">
               <svg className="w-48 h-48 -rotate-90">
                  <circle cx="96" cy="96" r="88" className="stroke-white/[0.04] fill-none stroke-[6]" />
                  <motion.circle 
                    cx="96" cy="96" r="88" 
                    className="stroke-[#6C47FF] fill-none stroke-[6]" 
                    strokeLinecap="round"
                    strokeDasharray={552}
                    initial={{ strokeDashoffset: 552 }}
                    whileInView={{ strokeDashoffset: 552 - (552 * 0.72) }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl font-black text-white">72</div>
                  <div className="text-[10px] font-bold text-white/30 tracking-widest uppercase">CONFIDENCE</div>
               </div>
            </div>
            
            <div className="grid grid-cols-6 gap-2 px-10">
               {[0.8, 0.6, 0.9, 0.7, 0.5, 0.8].map((v, i) => (
                 <div key={i} className="space-y-2">
                    <div className="h-20 bg-white/[0.02] rounded-lg relative overflow-hidden">
                       <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${v * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 + i*0.1 }}
                        className="absolute bottom-0 left-0 right-0 bg-white/[0.1] group-hover/visual:bg-[#6C47FF]/40 transition-colors" 
                       />
                    </div>
                    <div className="h-1 w-1 rounded-full bg-white/20 mx-auto" />
                 </div>
               ))}
            </div>
          </div>
        }
      />

      <FeatureBlock 
        reverse
        icon={Globe}
        label="MARKET INTELLIGENCE"
        headline="Global datasets. Real-time relevance."
        body="Access live TAM/SAM/SOM estimates derived from current market signals. No more guesswork or outdated whitepapers."
        visual={
          <div className="w-full relative py-10">
            {[1, 0.6, 0.3].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`mx-auto rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm flex items-center justify-between px-8 py-6 mb-4 transition-all hover:border-[#6C47FF]/40 hover:bg-[#6C47FF]/[0.02]`}
                style={{ width: `${100 - (i * 15)}%`, opacity: 1 - (i * 0.2) }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center font-mono text-[10px] text-white/40">0{i+1}</div>
                  <div className="text-[14px] font-bold text-white/80">{["TAM", "SAM", "SOM"][i]} Intelligence</div>
                </div>
                <div className="text-[16px] font-black text-white opacity-80">${[2.4, 0.8, 0.2][i]}B</div>
              </motion.div>
            ))}
            
            <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/10 text-right space-y-1">
               <div>DAT_SOURCE: BLOOMBERG_REPORTS</div>
               <div>QUERY_STATUS: OK</div>
               <div>TS_VECTOR: 7B</div>
            </div>
          </div>
        }
      />

      <FeatureBlock 
        icon={Layout}
        label="EXECUTION ENGINE"
        headline="Move from strategy to sprint in seconds"
        body="Every analysis generates a full functional backlog. Export your product roadmap directly to Linear, Jira, or Notion with one click."
        visual={
          <div className="w-full grid grid-cols-2 gap-4">
             <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <motion.div 
                    key={i}
                    className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                    whileHover={{ x: 5, borderColor: "rgba(108,71,255,0.4)" }}
                  >
                     <div className="h-1.5 w-1/2 bg-[#6C47FF]/40 rounded-full mb-3" />
                     <div className="h-1 w-full bg-white/[0.05] rounded-full" />
                  </motion.div>
                ))}
             </div>
             <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/[0.08] shadow-2xl flex flex-col justify-between">
                <div>
                   <div className="text-[10px] font-bold text-white/20 uppercase mb-4 tracking-widest">Selected Roadmap</div>
                   <div className="space-y-3">
                      <div className="h-2 w-full bg-[#6C47FF] rounded-full" />
                      <div className="h-2 w-3/4 bg-white/[0.05] rounded-full" />
                      <div className="h-2 w-full bg-white/[0.05] rounded-full" />
                   </div>
                </div>
                <button className="w-full py-3 bg-[#6C47FF]/10 text-[#6C47FF] text-[12px] font-bold rounded-xl border border-[#6C47FF]/20">
                   EXPORT_TO_LINEAR
                </button>
             </div>
          </div>
        }
      />
    </section>
  );
}
