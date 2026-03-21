import {
  LayoutDashboard, ShieldCheck, TrendingUp, Swords,
  Layers, Palette, DollarSign, Rocket, Zap,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const sections = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "validation", label: "Validation", icon: ShieldCheck },
  { id: "market", label: "Market", icon: TrendingUp },
  { id: "competitors", label: "Competitors", icon: Swords },
  { id: "product", label: "Product", icon: Layers },
  { id: "branding", label: "Branding", icon: Palette },
  { id: "monetization", label: "Monetization", icon: DollarSign },
  { id: "go-to-market", label: "Go-To-Market", icon: Rocket },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-white/[0.06]">
      <SidebarContent>
        <div className="flex h-16 items-center gap-2 px-4 border-b border-white/[0.06]">
          <div className="gradient-primary flex h-8 w-8 items-center justify-center rounded-lg shrink-0">
            <Zap className="h-4 w-4 text-white" />
          </div>
          {!collapsed && <span className="text-sm font-bold tracking-tight">ValiSearch</span>}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((s) => (
                <SidebarMenuItem key={s.id}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={`/dashboard/${s.id}`}
                      end
                      className="hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <s.icon className="mr-2 h-4 w-4 shrink-0" />
                      {!collapsed && <span>{s.label}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export { sections };
