import { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Loader2, Paperclip, Sparkles } from "lucide-react";
import { AuthGateModal } from '@/components/auth/AuthGateModal';
import { useAnalysisStore } from '@/store/useAnalysisStore';
import { useUserStore } from '@/store/useUserStore';
import { sanitizeIdea } from '@/lib/sanitize';
import { MAX_IDEA_LENGTH } from '@/lib/constants';
import { toast } from 'sonner';

export function HeroSection() {
  const [idea, setIdea] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showAuthGate, setShowAuthGate] = useState(false);
  const navigate = useNavigate();
  const { runAnalysis, isAnalyzing, setIdea: setStoreIdea } = useAnalysisStore();
  const { isAuthenticated } = useUserStore();

  const handleSubmit = async () => {
    if (idea.trim().length < 15) {
      toast.error('Please describe your idea in a bit more detail.');
      return;
    }

    if (!isAuthenticated) {
      setShowAuthGate(true);
      return;
    }

    const sanitized = sanitizeIdea(idea);
    setStoreIdea(sanitized);
    navigate('/analyze');
    await runAnalysis(sanitized);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-52 overflow-hidden bg-[#0A0A0A] flex flex-col items-center hero-gradient">
      {/* Aesthetic glowing background elements inspired by the references */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10 w-full flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full max-w-3xl mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Build with <span className="text-zinc-500">certainty.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Validate startup ideas, analyze markets, and plan your MVP in seconds with human-centric AI analysis.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl mx-auto px-4"
        >
          {/* Prompt Box resembling bolt.new precisely */}
          <div className={`relative rounded-2xl border border-white/10 bg-zinc-900/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 ${isFocused ? 'border-white/20 bg-zinc-900/80 shadow-[0_0_80px_rgba(59,130,246,0.1)]' : ''}`}>
            <div className="px-6 py-6 pb-20">
              <textarea
                id="idea-input"
                value={idea}
                onChange={(e) => setIdea(e.target.value.slice(0, MAX_IDEA_LENGTH))}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyDown}
                placeholder="What do you want to build?"
                rows={3}
                className="w-full bg-transparent text-white placeholder:text-zinc-600 resize-none outline-none text-xl leading-relaxed font-medium"
              />
            </div>
            
            {/* Bottom action bar inside the input */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button className="p-2.5 hover:bg-white/5 rounded-xl transition-colors text-zinc-500 hover:text-zinc-300" title="Attach context">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-2.5 hover:bg-white/5 rounded-xl transition-colors text-zinc-500 hover:text-zinc-300" title="Refine description">
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-6">
                <span className={`text-[11px] font-mono tracking-wider ${idea.length > MAX_IDEA_LENGTH * 0.9 ? 'text-amber-500' : 'text-zinc-600'}`}>
                  {idea.length}/{MAX_IDEA_LENGTH}
                </span>
                <button
                  onClick={handleSubmit}
                  disabled={isAnalyzing || idea.trim().length < 15}
                  className="py-2.5 px-6 bg-white text-black font-bold rounded-xl text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-20 disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    'Validate'
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick suggestions */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['SaaS for creators', 'Local marketplace', 'Dev tool'].map(tag => (
              <button 
                key={tag}
                onClick={() => setIdea(`I want to build a ${tag} that...`)}
                className="px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[11px] text-zinc-500 hover:text-zinc-300 hover:border-white/10 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Social Proof / Logo strip - Grayscale, professional */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 w-full max-w-4xl mx-auto text-center"
        >
          <p className="text-[10px] font-bold text-zinc-600 tracking-[0.2em] uppercase mb-10">
            Backed by the world's most ambitious founders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 grayscale hover:opacity-60 transition-all duration-700">
            <CompanyLogo name="VELOCITY" />
            <CompanyLogo name="QUANTUM" />
            <CompanyLogo name="NEXUS" />
            <CompanyLogo name="ORBIT" />
            <CompanyLogo name="LUMINA" />
          </div>
        </motion.div>
      </div>

      {showAuthGate && (
        <AuthGateModal
          idea={idea}
          onClose={() => setShowAuthGate(false)}
          onAuthSuccess={() => setShowAuthGate(false)}
        />
      )}
    </section>
  );
}

function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 select-none group">
      <div className="w-5 h-5 bg-zinc-800 rounded flex items-center justify-center border border-white/10 transition-colors group-hover:bg-zinc-700">
        <div className="w-2.5 h-2.5 bg-zinc-600 rounded-sm group-hover:bg-zinc-400 transition-colors" />
      </div>
      <span className="text-[14px] font-black tracking-tight transition-colors group-hover:text-zinc-400">
        {name}
      </span>
    </div>
  );
}