import { cn } from "@/lib/utils";
import type { ProjectData } from "./ProjectCard";

interface PortfolioTimelineProps {
  projects: ProjectData[];
}

export function PortfolioTimeline({ projects }: PortfolioTimelineProps) {
  // Mocking timeline months
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Assigning random positions for visualization
  const getTimelineStyle = (index: number) => {
    const starts = [10, 25, 5, 40, 15, 50, 30, 20];
    const widths = [40, 30, 50, 35, 45, 25, 40, 30];
    return {
      left: `${starts[index % starts.length]}%`,
      width: `${widths[index % widths.length]}%`,
    };
  };

  const statusColors: Record<string, string> = {
    healthy: "bg-green-500",
    "on-track": "bg-green-500",
    warning: "bg-amber-500",
    critical: "bg-red-500",
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-lg">Portfolio Timeline</h3>
        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-green-500" />
            <span>Healthy</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-amber-500" />
            <span>Warning</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-red-500" />
            <span>Critical</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Month grid */}
        <div className="absolute inset-0 flex justify-between pointer-events-none">
          {months.map((m) => (
            <div key={m} className="h-full border-l border-border/50 first:border-0" />
          ))}
        </div>

        {/* Labels header */}
        <div className="flex justify-between mb-6 text-[10px] font-bold text-muted-foreground uppercase tracking-wider relative z-10 px-1">
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>

        {/* Timeline rows */}
        <div className="space-y-4 relative z-10">
          {projects.slice(0, 8).map((project, idx) => (
            <div key={project.id} className="group flex flex-col gap-1">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors cursor-default">
                  {project.name}
                </span>
                <span className="text-muted-foreground text-[10px]">{project.completion}%</span>
              </div>
              <div className="relative h-2.5 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={cn(
                    "absolute h-full rounded-full transition-all group-hover:opacity-80",
                    statusColors[project.status]
                  )}
                  style={getTimelineStyle(idx)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}