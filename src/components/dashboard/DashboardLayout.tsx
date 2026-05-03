import { DashboardSidebar } from "./DashboardSidebar";
import { Search, Bell, Zap } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  credits?: number;
}

export function DashboardLayout({ children, credits = 0 }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <DashboardSidebar />
      
      <main className="pl-64 min-h-screen">
        {/* Top Header */}
        <header className="h-16 border-b border-white/[0.05] flex items-center justify-between px-8 bg-[#050505]/50 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="Search ideas, analyses, or market data..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:bg-white/[0.08] focus:border-white/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-white/[0.05] rounded-full">
              <Zap className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-xs font-bold text-white">{credits}</span>
              <span className="text-xs text-zinc-600 font-medium">credits</span>
            </div>
            
            <button className="p-2 text-zinc-500 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
