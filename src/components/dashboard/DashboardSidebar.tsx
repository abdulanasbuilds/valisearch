"use client";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Search, 
  Library, 
  Settings, 
  LogOut, 
  Zap, 
  CreditCard,
  Plus,
  MessageSquare,
  FileText,
  CheckCircle,
  BarChart,
  LineChart,
  Users,
  Box,
  Palette,
  DollarSign,
  Briefcase,
  GitPullRequest,
  Workflow,
  Code
} from "lucide-react";
import { useUserStore } from "@/store/useUserStore";

export function DashboardSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useUserStore();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const analysisItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard/overview" },
    { name: "Validation", icon: CheckCircle, href: "/dashboard/validation" },
    { name: "Market Feasibility", icon: BarChart, href: "/dashboard/market-feasibility" },
    { name: "Market Research", icon: LineChart, href: "/dashboard/market" },
    { name: "Competitors", icon: Users, href: "/dashboard/competitors" },
    { name: "Product", icon: Box, href: "/dashboard/product" },
    { name: "Branding", icon: Palette, href: "/dashboard/branding" },
    { name: "Revenue Intelligence", icon: DollarSign, href: "/dashboard/revenue" },
    { name: "$ Monetization", icon: CreditCard, href: "/dashboard/monetization" },
    { name: "Go-To-Market", icon: Briefcase, href: "/dashboard/go-to-market" },
  ];

  const buildItems = [
    { name: "Idea Evolution", icon: GitPullRequest, href: "/dashboard/evolution" },
    { name: "Flow Editor", icon: Workflow, href: "/dashboard/flow-editor" },
    { name: "API Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="w-64 h-screen bg-[#0A0A0A] border-r border-white/[0.05] flex flex-col fixed left-0 top-0 z-[50]">
      {/* Logo */}
      <div className="p-6 pb-2">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-white rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
            <div className="relative w-3.5 h-3.5 bg-black rounded-sm rotate-45" />
          </div>
          <span className="text-[15px] font-black tracking-tighter text-white uppercase">
            VALISEARCH
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        <div>
          <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] px-3 mb-3">
            Analysis
          </div>
          <div className="space-y-0.5">
            {analysisItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className={`w-4 h-4 ${isActive(item.href) ? "text-white" : "text-zinc-500"}`} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] px-3 mb-3">
            Build
          </div>
          <div className="space-y-0.5">
            {buildItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-white/10 text-white shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className={`w-4 h-4 ${isActive(item.href) ? "text-white" : "text-zinc-500"}`} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* User Footer */}
      <div className="p-4 border-t border-white/[0.05]">
        <div className="bg-zinc-900/50 rounded-2xl p-4 border border-white/[0.05]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-sm font-bold text-white border border-white/10">
              {user?.email?.[0].toUpperCase() ?? "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{user?.email?.split('@')[0] || "User"}</p>
              <Link to="/workspace" className="text-[10px] font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest truncate">View Workspace</Link>
            </div>
          </div>
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
