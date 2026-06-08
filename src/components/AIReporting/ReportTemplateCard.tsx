import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReportTemplateCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  lastGenerated: string;
  tags: string[];
  isHighlighted?: boolean;
}

export function ReportTemplateCard({
  icon,
  name,
  description,
  lastGenerated,
  tags,
  isHighlighted,
}: ReportTemplateCardProps) {
  return (
    <Card className={cn(
      "transition-all duration-200 hover:shadow-md",
      isHighlighted ? "border-primary ring-1 ring-primary/20" : "border-border"
    )}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
                {tag === "AI-Powered" && <Sparkles className="w-3 h-3 mr-1" />}
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <h3 className="font-semibold text-lg mt-3">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {description}
        </p>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          <span>Last generated: {lastGenerated}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 pt-0">
        <Button variant="outline" className="flex-1 text-sm h-9">
          Generate
        </Button>
        <Button variant="ghost" className="text-xs text-primary hover:text-primary hover:bg-primary/5 h-9 px-3">
          Schedule
        </Button>
      </CardFooter>
    </Card>
  );
}