import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, ShieldCheck, BarChart3, Swords, Layers, Palette, DollarSign, Rocket
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu,
  SidebarMenuItem, SidebarMenuButton, SidebarHeader
} from "@/components/ui/sidebar";

const items = [
  { title: "Overview", icon: LayoutDashboard, path: "overview" },
  { title: "Validation", icon: ShieldCheck, path: "validation" },
  { title: "Market", icon: BarChart3, path: "market" },
  { title: "Competitors", icon: Swords, path: "competitors" },
  { title: "Product", icon: Layers, path: "product" },
  { title: "Branding", icon: Palette, path: "branding" },
  { title: "Monetization", icon: DollarSign, path: "monetization" },
  { title: "Go-To-Market", icon: Rocket, path: "go-to-market" },
];

export function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-3 border-b border-border/40">
        <button onClick={() => navigate("/")} className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
            <span className="text-[10px] font-black text-white leading-none">V</span>
          </div>
          <span className="text-[13px] font-semibold">ValiSearch</span>
        </button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname.includes(item.path);
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      onClick={() => navigate(`/dashboard/${item.path}`)}
                      className={isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="text-[13px]">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
