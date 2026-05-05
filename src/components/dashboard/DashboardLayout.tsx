import { useState, useEffect } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { Bell, Zap, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { CommandPalette, CommandPaletteTrigger } from "./CommandPalette";
import { Breadcrumbs } from "./Breadcrumbs";

interface DashboardLayoutProps {
  children: React.ReactNode;
  credits?: number;
}

export function DashboardLayout({ children, credits = 0 }: DashboardLayoutProps) {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<boolean>(() =>
    typeof window !== "undefined" && localStorage.getItem("vs-sidebar-collapsed") === "1"
  );

  // Sync with sidebar's localStorage flag
  useEffect(() => {
    const onStorage = () => {
      setCollapsed(localStorage.getItem("vs-sidebar-collapsed") === "1");
    };
    window.addEventListener("storage", onStorage);
    const interval = setInterval(onStorage, 400); // local same-tab sync
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
  }, []);

  const padLeft = isMobile ? "pl-0" : collapsed ? "pl-[72px]" : "pl-64";

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <CommandPalette />
      <DashboardSidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <main className={`${padLeft} min-h-screen transition-[padding] duration-300`}>
        {/* Top Header */}
        <header className="h-16 border-b border-white/[0.05] flex items-center justify-between gap-3 px-4 md:px-8 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {isMobile && (
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="p-2 -ml-2 text-zinc-400 hover:text-white"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <div className="hidden md:block min-w-0 max-w-md">
              <Breadcrumbs />
            </div>
            <div className="flex-1" />
            <CommandPaletteTrigger />
          </div>

          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-white/[0.05] rounded-full">
              <Zap className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-xs font-bold text-white">{credits}</span>
              <span className="text-[10px] text-zinc-600 font-medium hidden sm:inline">credits</span>
            </div>

            <button className="p-2 text-zinc-500 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Mobile breadcrumbs row */}
        {isMobile && (
          <div className="px-4 py-2 border-b border-white/[0.05] overflow-x-auto">
            <Breadcrumbs />
          </div>
        )}

        {/* Page Content */}
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
