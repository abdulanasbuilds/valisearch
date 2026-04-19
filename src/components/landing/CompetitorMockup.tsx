import { motion } from 'framer-motion'
import { TrendingUp, Users, Target } from 'lucide-react'

const competitors = [
  { 
    name: 'Market Leader X', 
    threat: 'High', 
    color: 'text-red-400', 
    bg: 'bg-red-400/10', 
    border: 'border-red-400/20',
    share: 45,
    growth: '+12%',
    customers: '2.4k'
  },
  { 
    name: 'Agile Disruptor', 
    threat: 'Medium', 
    color: 'text-amber-400', 
    bg: 'bg-amber-400/10', 
    border: 'border-amber-400/20',
    share: 18,
    growth: '+28%',
    customers: '850'
  },
  { 
    name: 'Legacy Solution', 
    threat: 'Low', 
    color: 'text-green-400', 
    bg: 'bg-green-400/10', 
    border: 'border-green-400/20',
    share: 32,
    growth: '-4%',
    customers: '12k'
  }
]

export function CompetitorMockup() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
      {competitors.map((comp, idx) => (
        <motion.div 
          key={comp.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#0D0D0D] border border-white/10 rounded-xl p-4 shadow-xl hover:bg-white/[0.02] transition-colors group"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs font-bold text-white/90 mb-0.5">{comp.name}</div>
              <div className="flex items-center gap-1.5 text-[8px] text-white/40 uppercase font-medium">
                <Target className="w-2 h-2" /> Direct Competitor
              </div>
            </div>
            <span className={`text-[8px] px-1.5 py-0.5 rounded uppercase font-bold ${comp.bg} ${comp.color} border ${comp.border} whitespace-nowrap`}>
              {comp.threat} Threat
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[7px] text-white/30 uppercase font-bold mb-1 flex items-center gap-1">
                  <TrendingUp className="w-2 h-2" /> Growth
                </div>
                <div className={`text-[10px] font-bold ${comp.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {comp.growth}
                </div>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[7px] text-white/30 uppercase font-bold mb-1 flex items-center gap-1">
                  <Users className="w-2 h-2" /> Users
                </div>
                <div className="text-[10px] font-bold text-white/90">
                  {comp.customers}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[9px] text-white/30 uppercase font-bold tracking-widest px-1">Market Gap Analysis</div>
              <div className="space-y-1.5">
                {[
                  { label: 'Feature Parity', val: comp.share + 15 },
                  { label: 'UX Satisfaction', val: comp.share - 10 }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[7px] text-white/50">
                      <span>{stat.label}</span>
                      <span>{stat.val}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.val}%` }}
                        transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                        className="h-full bg-primary/40 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between">
              <div className="text-[8px] text-white/40 font-medium">Strategic Position</div>
              <div className="flex -space-x-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-3 h-3 rounded-full border border-[#0D0D0D] bg-white/10" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}