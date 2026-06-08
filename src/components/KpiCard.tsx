import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  trendLabel?: string;
  icon?: ReactNode;
  iconBg?: string;
  className?: string;
  highlight?: "green" | "amber" | "red" | "indigo";
}

const highlightMap = {
  green: "border-l-4 border-l-green-500",
  amber: "border-l-4 border-l-amber-500",
  red: "border-l-4 border-l-red-500",
  indigo: "border-l-4 border-l-indigo-500",
};

const trendColors = {
  up: "text-green-600",
  down: "text-red-500",
  neutral: "text-muted-foreground",
};

export function KpiCard({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  trendLabel,
  icon,
  iconBg,
  className,
  highlight,
}: KpiCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div
      className={cn(
        "bg-card rounded-xl border border-border p-5 flex flex-col gap-3 shadow-sm",
        highlight && highlightMap[highlight],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
              iconBg ?? "bg-accent"
            )}
          >
            {icon}
          </div>
        )}
      </div>
      {(trend || trendValue) && (
        <div className={cn("flex items-center gap-1.5 text-xs font-medium", trendColors[trend ?? "neutral"])}>
          <TrendIcon className="w-3.5 h-3.5" />
          <span>{trendValue}</span>
          {trendLabel && <span className="text-muted-foreground font-normal">{trendLabel}</span>}
        </div>
      )}
    </div>
  );
}