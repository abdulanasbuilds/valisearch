import { useNavigate, useLocation } from "react-router-dom";
import { LogOut, LayoutDashboard, ShieldCheck, BarChart3, Swords, Layers, Palette,
  DollarSign, Rocket, GitBranch, Cpu, Map, Terminal, Lightbulb, Settings,
  TrendingUp, Activity, Code2, Pencil, Zap, Target, Package, Megaphone,
  LineChart, Scale,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu,
  SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarFooter
} from "@/components/ui/sidebar";
import { useAnalysisStore } from "@/store/useAnalysisStore";
import { useCreditStore } from "@/store/useCreditStore";
import { useUserStore } from "@/store/useUserStore";
import { Progress } from "@/components/ui/progress";
import logoImg from "@/assets/logo.png";
import type { FrameworkId } from "@/types/analysis-v2";

const NEW_SECTIONS = new Set<string>([
  "market-intelligence",
  "problem-landscape",
  "offer-builder",
  "competitive-intel",
  "growth-playbook",
  "content-engine",
  "scale-roadmap",
]);

const INTELLIGENCE_SECTIONS = [
  { title: "Overview",                icon: LayoutDashboard, path: "overview" },
  { title: "Validation Score",        icon: ShieldCheck,     path: "validation" },
  { title: "Market Intelligence",     icon: BarChart3,       path: "market-intelligence" },
  { title: "Problem Landscape",       icon: Target,          path: "problem-landscape" },
  { title: "Offer Builder",           icon: Package,         path: "offer-builder" },
  { title: "Competitive Intelligence",icon: Swords,          path: "competitive-intel" },
];

const BUILD_SECTIONS = [
  { title: "Product Strategy",  icon: Layers,     path: "product" },
  { title: "Tech Stack",        icon: Cpu,         path: "tech-stack" },
  { title: "Branding",          icon: Palette,     path: "branding" },
];

const GROWTH_SECTIONS = [
  { title: "Growth Playbook",       icon: Rocket,      path: "growth-playbook" },
  { title: "Content Engine",        icon: Megaphone,    path: "content-engine" },
  { title: "Revenue Intelligence",  icon: TrendingUp,   path: "revenue" },
  { title: "Monetization",          icon: DollarSign,   path: "monetization" },
];

const EXECUTION_SECTIONS = [
  { title: "User Flow",        icon: Map,        path: "flow" },
  { title: "Flow Editor",      icon: Pencil,     path: "flow-editor" },
  { title: "Sprint Planner",   icon: GitBranch,  path: "kanban" },
  { title: "Scale Roadmap",    icon: Scale,       path: "scale-roadmap" },
  { title: "Build Mode",       icon: Terminal,   path: "build-mode" },
  { title: "IDE Bridge",       icon: Code2,      path: "ide-bridge" },
  { title: "Launch Center",    icon: Lightbulb,  path: "launch-center" },
];

type SectionGroup = {
  label: string;
  items: typeof INTELLIGENCE_SECTIONS;
};

const SECTION_GROUPS: SectionGroup[] = [
  { label: "Intelligence", items: INTELLIGENCE_SECTIONS },
  { label: "Build",        items: BUILD_SECTIONS },
  { label: "Growth",       items: GROWTH_SECTIONS },
  { label: "Execution",    items: EXECUTION_SECTIONS },
];

// Map sidebar paths to framework IDs for fallback badge
const PATH_TO_FRAMEWORK: Record<string, FrameworkId> = {
  "market-intelligence": "market_breakdown",
  "problem-landscape": "problem_prioritization",
  "offer-builder": "offer_creation",
  "competitive-intel": "competitor_weakness",
  "growth-playbook": "distribution_plan",
  "content-engine": "viral_content",
  "scale-roadmap": "scale_system",
};

export function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { idea, setActiveSection, analysis } = useAnalysisStore();
  const { credits, maxCredits, isAdmin } = useCreditStore();
  const { signOut } = useUserStore();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const isActive = (path: string) => location.pathname.includes(path);

  // Check data sources for fallback indicator
  const dataSources = (analysis as Record<string, unknown> | null)?.data_sources as Record<string, string> | undefined;

  const plan = credits >= 40 ? "premium" : credits >= 20 ? "pro" : "free";

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-3 border-b border-border/40">
        <button onClick={() => navigate("/")} className="flex items-center gap-2">
          <img src={logoImg} alt="ValiSearch" className="h-6 w-auto" />
          <span className="text-[13px] font-semibold">ValiSearch</span>
        </button>
        {idea && (
          <div className="mt-2 flex flex-col gap-2">
            <p className="text-[11px] text-muted-foreground/60 leading-snug line-clamp-2 italic">
              "{idea.slice(0, 60)}{idea.length > 60 ? "…" : ""}"
            </p>
            <div className="flex">
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                plan === 'premium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/20' :
                plan === 'pro' ? 'bg-primary/20 text-primary border border-primary/20' :
                'bg-white/5 text-white/40 border border-white/5'
              }`}>
                {plan} Plan
              </span>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        {SECTION_GROUPS.map((group) => (
          <SidebarGroup key={group.label}>
            <div className="px-3 py-2 mt-1">
              <span className="text-[9.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/40">
                {group.label}
              </span>
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const frameworkId = PATH_TO_FRAMEWORK[item.path];
                  const isFallback = frameworkId && dataSources?.[frameworkId] === "fallback";
                  const isNew = NEW_SECTIONS.has(item.path);

                  return (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton
                        onClick={() => {
                          setActiveSection(item.path);
                          navigate(`/dashboard/${item.path}`);
                        }}
                        className={isActive(item.path) ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="text-[13px] flex-1">{item.title}</span>
                        {isNew && (
                          <span className="text-[8px] px-1 py-0.5 rounded bg-primary/20 text-primary font-bold uppercase tracking-wider">New</span>
                        )}
                        {isFallback && (
                          <span className="text-[8px] px-1 py-0.5 rounded bg-white/[0.04] text-muted-foreground/40">· sample</span>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="px-4 py-3 border-t border-border/40 space-y-3">
        {/* Credit display */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
              <Zap className="h-3 w-3 text-primary" />
              Credits
            </span>
            <span className="text-[11px] font-semibold text-foreground/80">
              {credits} / {maxCredits}
            </span>
          </div>
          <Progress value={(credits / maxCredits) * 100} className="h-1.5" />
        </div>

        {/* Admin-only settings link */}
        {isAdmin && (
          <SidebarMenuButton
            onClick={() => navigate("/dashboard/settings")}
            className="text-muted-foreground hover:text-foreground w-full"
          >
            <Settings className="h-4 w-4" />
            <span className="text-[13px]">API Settings</span>
          </SidebarMenuButton>
        )}

        <SidebarMenuButton
          onClick={handleSignOut}
          className="text-muted-foreground hover:text-red-400 w-full"
        >
          <LogOut className="h-4 w-4" />
          <span className="text-[13px]">Sign Out</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
