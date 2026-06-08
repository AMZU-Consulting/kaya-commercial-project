import { MapPin, Calendar, Clock, MoreVertical, FileText, ExternalLink } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProjectData {
  id: string;
  name: string;
  type: string;
  location: string;
  status: "healthy" | "warning" | "critical" | "on-track";
  budget: number;
  spend: number;
  startDate: string;
  duration: string;
  completion: number;
  pmName: string;
  pmAvatar: string;
  img_url: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', notation: 'compact', maximumFractionDigits: 1 }).format(val);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="relative h-48 w-full">
        <img className="w-full h-full object-cover" src={project.img_url} />
        <div className="absolute top-3 left-3">
          <StatusBadge status={project.status} />
        </div>
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
            {project.type}
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg leading-tight text-foreground">{project.name}</h3>
          <button className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>{project.location}</span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-xs font-medium mb-1">
            <span className="text-muted-foreground">Budget: {formatCurrency(project.budget)}</span>
            <span className="text-foreground">{Math.round((project.spend / project.budget) * 100)}% Spent</span>
          </div>
          <Progress value={(project.spend / project.budget) * 100} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6 text-center border-t border-b border-border py-3">
          <div>
            <p className="text-[10px] uppercase text-muted-foreground font-semibold mb-1">Start Date</p>
            <p className="text-xs font-bold">{project.startDate}</p>
          </div>
          <div className="border-l border-r border-border">
            <p className="text-[10px] uppercase text-muted-foreground font-semibold mb-1">Duration</p>
            <p className="text-xs font-bold">{project.duration}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-muted-foreground font-semibold mb-1">Complete</p>
            <p className="text-xs font-bold text-primary">{project.completion}%</p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border border-background shadow-sm">
              <AvatarImage src={project.pmAvatar} />
              <AvatarFallback>{project.pmName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground font-medium leading-none mb-1">PM</span>
              <span className="text-xs font-semibold leading-none">{project.pmName}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <FileText className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="sm" className="h-8 text-xs font-semibold">
              View Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}