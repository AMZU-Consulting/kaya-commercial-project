import { cn } from "@/lib/utils";

type Status = "healthy" | "warning" | "critical" | "on-track" | "at-risk" | "delayed";

const statusConfig: Record<Status, { label: string; dotClass: string; bgClass: string; textClass: string }> = {
  healthy: { label: "Healthy", dotClass: "bg-green-500", bgClass: "bg-status-green", textClass: "status-green" },
  "on-track": { label: "On Track", dotClass: "bg-green-500", bgClass: "bg-status-green", textClass: "status-green" },
  warning: { label: "Warning", dotClass: "bg-amber-500", bgClass: "bg-status-amber", textClass: "status-amber" },
  "at-risk": { label: "At Risk", dotClass: "bg-amber-500", bgClass: "bg-status-amber", textClass: "status-amber" },
  critical: { label: "Critical", dotClass: "bg-red-500", bgClass: "bg-status-red", textClass: "status-red" },
  delayed: { label: "Delayed", dotClass: "bg-red-500", bgClass: "bg-status-red", textClass: "status-red" },
};

interface StatusBadgeProps {
  status: Status;
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

export function StatusBadge({ status, label, className, size = "md" }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        config.bgClass,
        config.textClass,
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs",
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", config.dotClass)} />
      {label ?? config.label}
    </span>
  );
}