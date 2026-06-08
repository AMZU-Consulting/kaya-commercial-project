import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReportItemProps {
  title: string;
  date: string;
}

export function ReportItem({ title, date }: ReportItemProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center text-primary">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-[10px] text-muted-foreground">{date}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
        <Download className="w-4 h-4" />
      </Button>
    </div>
  );
}

interface ProjectUpdateItemProps {
  projectName: string;
  update: string;
  date: string;
  img_url: string;
}

export function ProjectUpdateItem({ projectName, update, date, img_url }: ProjectUpdateItemProps) {
  return (
    <div className="flex gap-4 p-3 rounded-lg border border-border">
      <div className="w-16 h-16 rounded overflow-hidden shrink-0">
        <img src={img_url} alt="Update" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs font-bold text-foreground">{projectName}</p>
          <p className="text-[10px] text-muted-foreground">{date}</p>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {update}
        </p>
      </div>
    </div>
  );
}