import { CheckCircle2, Clock, Calendar, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Milestone {
  id: string;
  title: string;
  date: string;
  status: "completed" | "in-progress" | "upcoming";
}

const milestones: Milestone[] = [
  { id: "1", title: "Site Acquisition", date: "Jan 15, 2024", status: "completed" },
  { id: "2", title: "Planning Permission Granted", date: "Mar 10, 2024", status: "completed" },
  { id: "3", title: "Groundbreaking & Excavation", date: "Jun 01, 2024", status: "completed" },
  { id: "4", title: "Foundation Works", date: "Aug 20, 2024", status: "in-progress" },
  { id: "5", title: "Structural Steel Topping Out", date: "Feb 15, 2025", status: "upcoming" },
  { id: "6", title: "External Envelope Completion", date: "Sep 30, 2025", status: "upcoming" },
];

export function MilestonesTimeline() {
  return (
    <div className="space-y-6">
      {milestones.map((milestone, index) => (
        <div key={milestone.id} className="relative flex gap-4">
          {index !== milestones.length - 1 && (
            <div className="absolute left-[11px] top-7 bottom-[-24px] w-0.5 bg-border" />
          )}
          <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background">
            {milestone.status === "completed" ? (
              <CheckCircle2 className="h-5 w-5 text-green-500 fill-green-50" />
            ) : milestone.status === "in-progress" ? (
              <Clock className="h-5 w-5 text-amber-500" />
            ) : (
              <Calendar className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
          <div className="flex flex-col gap-1 pb-6">
            <h4 className={cn(
              "text-sm font-semibold",
              milestone.status === "upcoming" ? "text-muted-foreground" : "text-foreground"
            )}>
              {milestone.title}
            </h4>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{milestone.date}</span>
              {milestone.status === "in-progress" && (
                <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700 uppercase">
                  Active
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}