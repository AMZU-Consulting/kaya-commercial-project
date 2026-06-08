import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, MoreHorizontal, FileText, ExternalLink } from "lucide-react";
import type { ProjectData } from "./ProjectCard";
import { cn } from "@/lib/utils";

interface ProjectTableProps {
  projects: ProjectData[];
}

export function ProjectTable({ projects }: ProjectTableProps) {
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(val);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[250px] font-bold">
              <div className="flex items-center gap-2">
                Project Name
                <ChevronDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead className="font-bold">Type</TableHead>
            <TableHead className="font-bold">Location</TableHead>
            <TableHead className="font-bold">Budget</TableHead>
            <TableHead className="font-bold">Actual Spend</TableHead>
            <TableHead className="font-bold text-right">Variance</TableHead>
            <TableHead className="font-bold text-center">% Complete</TableHead>
            <TableHead className="font-bold">PM</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => {
            const variance = project.budget - project.spend;
            const variancePercent = (variance / project.budget) * 100;
            const isNegative = variance < 0;

            return (
              <TableRow key={project.id} className="hover:bg-muted/30">
                <TableCell className="font-bold">{project.name}</TableCell>
                <TableCell>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full font-medium">
                    {project.type}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">{project.location}</TableCell>
                <TableCell className="font-medium">{formatCurrency(project.budget)}</TableCell>
                <TableCell className="font-medium">{formatCurrency(project.spend)}</TableCell>
                <TableCell className={cn("text-right font-medium", isNegative ? "text-destructive" : "text-green-600")}>
                  {isNegative ? "" : "+"}{Math.round(variancePercent)}%
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-bold">{project.completion}%</span>
                    <div className="w-12 bg-muted rounded-full h-1 overflow-hidden">
                      <div
                        className="bg-primary h-full"
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={project.pmAvatar} />
                      <AvatarFallback>{project.pmName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium">{project.pmName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={project.status} size="sm" />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <FileText className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}