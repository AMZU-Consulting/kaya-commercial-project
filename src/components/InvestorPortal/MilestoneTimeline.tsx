import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Milestone {
  label: string;
  status: "completed" | "current" | "upcoming";
}

interface ProjectMilestones {
  projectName: string;
  milestones: Milestone[];
}

interface MilestoneTimelineProps {
  projects: ProjectMilestones[];
}

export function MilestoneTimeline({ projects }: MilestoneTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Key Milestones & Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {projects.map((project, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-sm font-bold text-foreground">{project.projectName}</h4>
            <div className="relative pt-2 pb-8">
              {/* Connector line */}
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
              
              <div className="relative flex justify-between">
                {project.milestones.map((milestone, mIdx) => (
                  <div key={mIdx} className="flex flex-col items-center relative z-10 w-32">
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full border-2 border-background shadow-sm",
                        milestone.status === "completed" && "bg-green-500",
                        milestone.status === "current" && "bg-blue-500 animate-pulse ring-4 ring-blue-500/20",
                        milestone.status === "upcoming" && "bg-muted border-border"
                      )}
                    />
                    <span className={cn(
                      "absolute top-6 text-[10px] font-medium text-center leading-tight",
                      milestone.status === "current" ? "text-blue-600 font-bold" : "text-muted-foreground"
                    )}>
                      {milestone.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}