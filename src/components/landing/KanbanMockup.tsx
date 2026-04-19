export function KanbanMockup() {
  return (
    <div className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#161616]">
        <div className="text-[11px] font-semibold text-white/50 uppercase tracking-widest">Sprint Board</div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="p-4 grid grid-cols-3 gap-3 h-[300px]">
        {/* Backlog */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[10px] font-bold text-white/40 uppercase">Backlog</span>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 space-y-2">
            <div className="h-2 w-full bg-white/10 rounded-full" />
            <div className="h-2 w-2/3 bg-white/10 rounded-full" />
            <div className="flex justify-between items-center pt-1">
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-primary/20 text-primary uppercase font-bold tracking-tighter">High</span>
              <div className="w-4 h-4 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 space-y-2">
            <div className="h-2 w-full bg-white/10 rounded-full" />
            <div className="flex justify-between items-center pt-1">
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 text-white/40 uppercase font-bold tracking-tighter">Medium</span>
              <div className="w-4 h-4 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        {/* In Progress */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[10px] font-bold text-white/40 uppercase">In Progress</span>
          </div>
          <div className="bg-white/[0.05] border border-primary/20 rounded-lg p-3 space-y-2 ring-1 ring-primary/20">
            <div className="h-2 w-full bg-white/20 rounded-full" />
            <div className="h-2 w-1/2 bg-white/20 rounded-full" />
            <div className="flex justify-between items-center pt-1">
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-primary text-white uppercase font-bold tracking-tighter">Crucial</span>
              <div className="w-4 h-4 rounded-full bg-primary/40 border border-primary/20" />
            </div>
          </div>
        </div>

        {/* Done */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-bold text-white/40 uppercase">Done</span>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3 space-y-2 opacity-50">
            <div className="h-2 w-full bg-white/10 rounded-full" />
            <div className="flex justify-between items-center pt-1">
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 uppercase font-bold tracking-tighter">Verified</span>
              <div className="w-4 h-4 rounded-full bg-green-500/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}