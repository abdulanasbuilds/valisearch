export function KanbanMockup() {
  return (
    <div className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl p-4 shadow-2xl flex gap-4 overflow-hidden">
      {/* Column: Backlog */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2 px-1">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-[11px] font-bold text-white/60 uppercase tracking-wider">Backlog</span>
        </div>
        <div className="bg-[#161616] border border-white/[0.06] rounded-lg p-3">
          <div className="text-[10px] font-semibold text-[#6C47FF] bg-[#6C47FF]/10 px-2 py-0.5 rounded w-fit mb-2">Setup</div>
          <div className="text-[12px] font-medium text-white/90 mb-1">Initialize Supabase project</div>
          <div className="text-[10px] text-white/40">Includes auth and basic tables.</div>
        </div>
        <div className="bg-[#161616] border border-white/[0.06] rounded-lg p-3">
          <div className="text-[10px] font-semibold text-[#FF5F57] bg-[#FF5F57]/10 px-2 py-0.5 rounded w-fit mb-2">High Priority</div>
          <div className="text-[12px] font-medium text-white/90 mb-1">Stripe integration</div>
          <div className="text-[10px] text-white/40">Set up webhooks and checkout.</div>
        </div>
      </div>

      {/* Column: In Progress */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2 px-1">
          <div className="w-2 h-2 rounded-full bg-[#6C47FF]" />
          <span className="text-[11px] font-bold text-white/60 uppercase tracking-wider">In Progress</span>
        </div>
        <div className="bg-[#161616] border border-[#6C47FF]/30 rounded-lg p-3 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6C47FF]" />
          <div className="text-[10px] font-semibold text-[#28C840] bg-[#28C840]/10 px-2 py-0.5 rounded w-fit mb-2">Feature</div>
          <div className="text-[12px] font-medium text-white/90 mb-1">Build UI components</div>
          <div className="text-[10px] text-white/40">Implement Tailwind and shadcn.</div>
        </div>
      </div>

      {/* Column: Done */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2 px-1">
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          <span className="text-[11px] font-bold text-white/60 uppercase tracking-wider">Done</span>
        </div>
        <div className="bg-[#161616] border border-white/[0.04] rounded-lg p-3 opacity-60">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-[10px] font-semibold text-white/40 bg-white/5 px-2 py-0.5 rounded w-fit">Planning</div>
            <div className="w-4 h-4 rounded-full bg-[#28C840]/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 stroke-[#28C840] stroke-2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <div className="text-[12px] font-medium text-white/60 line-through">Market Research</div>
        </div>
      </div>
    </div>
  )
}
