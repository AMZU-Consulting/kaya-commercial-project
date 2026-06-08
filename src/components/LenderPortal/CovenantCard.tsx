import { StatusBadge } from "@/components/StatusBadge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CovenantCardProps {
  name: string;
  threshold: string;
  current: string;
  trend: "up" | "down" | "neutral";
  status: "healthy" | "warning" | "critical";
  progress: number; // 0 to 100
}

export function CovenantCard({ name, threshold, current, trend, status, progress }: CovenantCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  
  const statusColors = {
    healthy: "bg-status-green",
    warning: "bg-status-amber",
    critical: "bg-status-red",
  };

  const progressColors = {
    healthy: "bg-green-500",
    warning: "bg-amber-500",
    critical: "bg-red-500",
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">Threshold: {threshold}</p>
        </div>
        <StatusBadge status={status === "healthy" ? "healthy" : status === "warning" ? "warning" : "critical"} />
      </div>

      <div className="flex items-baseline justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">{current}</span>
          <div className={cn(
            "flex items-center text-xs font-medium",
            trend === "up" ? "text-green-600" : trend === "down" ? "text-red-500" : "text-muted-foreground"
          )}>
            <TrendIcon className="w-3 h-3 mr-0.5" />
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div 
            className={cn("h-full transition-all duration-500", progressColors[status])}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}