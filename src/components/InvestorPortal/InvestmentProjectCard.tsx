import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";

interface InvestmentProjectCardProps {
  name: string;
  location: string;
  investmentAmount: string;
  equityPercentage: string;
  status: "healthy" | "warning" | "critical" | "on-track" | "at-risk" | "delayed";
  progress: number;
  gdv: string;
  profitMargin: string;
  completionDate: string;
  img_url: string;
}

export function InvestmentProjectCard({
  name,
  location,
  investmentAmount,
  equityPercentage,
  status,
  progress,
  gdv,
  profitMargin,
  completionDate,
  img_url,
}: InvestmentProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={img_url}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <StatusBadge status={status} />
        </div>
      </div>
      
      <CardContent className="p-5 flex-1">
        <div className="mb-4">
          <h3 className="font-bold text-lg text-foreground line-clamp-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="space-y-0.5">
            <p className="text-[10px] uppercase font-semibold text-muted-foreground">Investment</p>
            <p className="text-sm font-bold">{investmentAmount}</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] uppercase font-semibold text-muted-foreground">Equity %</p>
            <p className="text-sm font-bold">{equityPercentage}</p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-muted-foreground">Construction Progress</span>
            <span className="text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 border-t border-border">
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground mb-0.5">GDV</p>
            <p className="text-xs font-bold">{gdv}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground mb-0.5">Margin</p>
            <p className="text-xs font-bold">{profitMargin}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground mb-0.5">Completion</p>
            <p className="text-xs font-bold">{completionDate}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button variant="outline" className="w-full text-xs h-9">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}