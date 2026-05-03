import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSupabase } from '@/lib/supabase'
import { useUserStore } from '@/store/useUserStore'
import { useAnalysisStore } from '@/store/useAnalysisStore'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { sanitizeIdea } from '@/lib/sanitize'
import { formatDistanceToNow } from 'date-fns'
import { Zap, ChevronRight, Clock, Loader2, Sparkles, Plus, History, Lightbulb } from 'lucide-react'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'

interface AnalysisRecord {
  id: string
  created_at: string
  overall_score: number | null
  data_source: string
  ideas: { idea_text: string; title: string }
}

export default function Workspace() {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useUserStore()
  const { runAnalysis, isAnalyzing, setIdea: setStoreIdea } = useAnalysisStore()
  const [analyses, setAnalyses] = useState<AnalysisRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [idea, setIdea] = useState('')
  const [credits, setCredits] = useState(15)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?returnUrl=/workspace')
      return
    }
    const supabase = getSupabase()
    
    const fetchAnalyses = async () => {
      setIsLoading(true)
      try {
        if (!supabase) throw new Error('Supabase not configured')
        
        const { data, error } = await supabase
          .from('analysis')
          .select('id, created_at, overall_score, data_source, ideas(idea_text, title)')
          .eq('user_id', user!.id)
          .order('created_at', { ascending: false })

        if (error) throw error
        setAnalyses((data ?? []) as unknown as AnalysisRecord[])
      } catch (err) {
        console.error('Failed to fetch analyses:', err)
      } finally {
        setIsLoading(false)
      }
    }

    const fetchCredits = async () => {
      if (!supabase) return
      const { data } = await supabase.from('credits').select('balance').eq('user_id', user!.id).single()
      if (data) setCredits(data.balance)
    }

    fetchAnalyses()
    fetchCredits()
  }, [isAuthenticated, navigate, user])

  const handleValidate = async (type: 'quick' | 'full') => {
    if (idea.trim().length < 15) {
      toast.error('Help us out! Describe your idea in at least 15 characters.')
      return
    }
    const sanitized = sanitizeIdea(idea)
    setStoreIdea(sanitized)
    navigate('/analyze')
    await runAnalysis(sanitized, type)
  }

  const getScoreBg = (score: number | null) => {
    if (!score) return 'bg-zinc-800'
    if (score >= 70) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    if (score >= 50) return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    return 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  }

  const firstName = user?.email?.split('@')[0] ?? 'builder'
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <DashboardLayout credits={credits}>
      <div className="max-w-5xl mx-auto">
        {/* Welcome Section */}
        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              {greeting}, {firstName}.
            </h1>
            <p className="text-zinc-500 font-medium">
              What are we validating today? You have {credits} credits ready for deep analysis.
            </p>
          </motion.div>
        </section>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Idea Input */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#0A0A0A] border border-white/[0.05] rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none group-focus-within:opacity-40 transition-opacity">
                <Sparkles className="w-20 h-20 text-white" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">The Intelligence Box</h2>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Start a new validation</p>
                  </div>
                </div>

                <textarea
                  value={idea}
                  onChange={e => setIdea(e.target.value.slice(0, 2000))}
                  placeholder="Paste your raw idea here... Be as detailed as you want."
                  rows={6}
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-2xl px-6 py-5 text-white text-[15px] placeholder:text-zinc-600 resize-none outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all mb-4"
                />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{idea.length} / 2000 characters</span>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleValidate('quick')} 
                      disabled={idea.trim().length < 15 || isAnalyzing || credits < 1} 
                      className="px-6 py-3 bg-zinc-900 border border-white/10 text-white text-sm font-bold rounded-xl hover:bg-zinc-800 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isAnalyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                      Quick Scan
                    </button>
                    <button 
                      onClick={() => handleValidate('full')} 
                      disabled={idea.trim().length < 15 || isAnalyzing || credits < 2} 
                      className="px-8 py-3 bg-white text-black text-sm font-black rounded-xl hover:bg-zinc-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95"
                    >
                      {isAnalyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                      Deep Intelligence
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty State / Tips */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Expert Tip</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Mention your target audience and revenue model for 2x more accurate market sizing.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Latest Update</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  VALISEARCH now supports multi-engine GTM analysis for every report.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: History */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] flex items-center gap-2">
                <History className="w-4 h-4" /> Past Intelligence
              </h2>
              <span className="text-[10px] font-bold text-zinc-600 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">{analyses.length} Total</span>
            </div>

            <div className="space-y-3">
              {isLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-20 bg-white/5 rounded-2xl animate-pulse border border-white/5" />
                  ))}
                </div>
              ) : analyses.length === 0 ? (
                <div className="text-center py-20 bg-white/[0.01] border border-dashed border-white/10 rounded-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <History className="w-6 h-6 text-zinc-700" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-400 mb-1">Clean slate</h3>
                  <p className="text-sm text-zinc-600 px-10">Your validation history will appear here once you start your first project.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {analyses.map(analysis => (
                    <motion.button 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={analysis.id} 
                      onClick={() => navigate(`/workspace/${analysis.id}`)} 
                      className="w-full flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:border-white/20 hover:bg-white/[0.04] transition-all text-left group relative overflow-hidden"
                    >
                      <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border ${getScoreBg(analysis.overall_score)}`}>
                        <span className="text-[9px] font-bold uppercase opacity-60">Score</span>
                        <span className="text-base font-black tracking-tighter leading-none">{analysis.overall_score ?? '-'}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] font-bold text-white truncate group-hover:text-white transition-colors">
                          {analysis.ideas?.title || analysis.ideas?.idea_text?.slice(0, 50) || 'Untitled Analysis'}
                        </p>
                        <p className="text-[11px] font-medium text-zinc-500 mt-1 flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {formatDistanceToNow(new Date(analysis.created_at), { addSuffix: true })}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}