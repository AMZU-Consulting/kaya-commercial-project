import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderOpen,
  FileSearch,
  Camera,
  TrendingUp,
  Users,
  BarChart3,
  Bot,
  UserCog,
  Building2,
  ChevronRight,
  BellRing,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", path: "/projects", icon: FolderOpen },
  { label: "Project Detail", path: "/project-detail", icon: FileSearch },
  { label: "AI Invoice Processing", path: "/ai-invoice", icon: BarChart3 },
  { label: "Mobile Receipt Capture", path: "/receipt-capture", icon: Camera },
  { label: "Development Finance", path: "/development-finance", icon: TrendingUp },
  { label: "Investor Portal", path: "/investor-portal", icon: Users },
  { label: "Lender Portal", path: "/lender-portal", icon: Building2 },
  { label: "AI Reporting", path: "/ai-reporting", icon: BarChart3 },
  { label: "AI Project Assistant", path: "/ai-assistant", icon: Bot },
  { label: "User Roles", path: "/user-roles", icon: UserCog },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <aside
      className="fixed inset-y-0 left-0 z-50 flex flex-col w-64 shrink-0"
      style={{ background: "hsl(var(--sidebar-background))" }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-5 py-5 border-b"
        style={{ borderColor: "hsl(var(--sidebar-border))" }}
      >
        <div
          className="flex items-center justify-center w-9 h-9 rounded-lg"
          style={{ background: "hsl(var(--sidebar-primary))" }}
        >
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-white font-bold text-base leading-tight tracking-tight">Kaya</div>
          <div
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "hsl(var(--sidebar-foreground))", opacity: 0.6 }}
          >
            ProjectOS
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        <div
          className="text-xs font-semibold uppercase tracking-widest mb-3 px-3"
          style={{ color: "hsl(var(--sidebar-foreground))", opacity: 0.4 }}
        >
          Platform
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-nav-item group",
                isActive && "active"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate text-sm">{item.label}</span>
              {item.label === "AI Invoice Processing" && (
                <Badge
                  className="ml-auto text-xs px-1.5 py-0 h-4"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.25)" : "hsl(var(--sidebar-accent))",
                    color: isActive ? "white" : "hsl(var(--sidebar-accent-foreground))",
                    border: "none"
                  }}
                >
                  3
                </Badge>
              )}
              {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto shrink-0 opacity-70" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom user section */}
      <div
        className="border-t px-3 py-3 space-y-0.5"
        style={{ borderColor: "hsl(var(--sidebar-border))" }}
      >
        <button
          className="sidebar-nav-item w-full"
        >
          <BellRing className="w-4 h-4 shrink-0" />
          <span className="text-sm">Notifications</span>
          <Badge
            className="ml-auto text-xs px-1.5 py-0 h-4 border-none"
            style={{
              background: "hsl(0 84% 60% / 0.2)",
              color: "hsl(0 84% 60%)"
            }}
          >
            5
          </Badge>
        </button>
        <button className="sidebar-nav-item w-full">
          <Settings className="w-4 h-4 shrink-0" />
          <span className="text-sm">Settings</span>
        </button>
        <div
          className="flex items-center gap-3 px-3 py-2.5 mt-2 rounded-lg"
          style={{ background: "hsl(var(--sidebar-accent))" }}
        >
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold truncate text-white">Sarah Mitchell</div>
            <div
              className="text-xs truncate"
              style={{ color: "hsl(var(--sidebar-foreground))", opacity: 0.6 }}
            >
              Project Manager
            </div>
          </div>
          <LogOut
            className="w-4 h-4 shrink-0 cursor-pointer hover:opacity-80"
            style={{ color: "hsl(var(--sidebar-foreground))" }}
          />
        </div>
      </div>
    </aside>
  );
}