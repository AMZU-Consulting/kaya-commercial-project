import { Progress } from "@/components/ui/progress";
import { User, Calendar, CreditCard } from "lucide-react";

interface LenderCardProps {
  name: string;
  type: string;
  amount: string;
  drawnPercent: number;
  rate: string;
  nextReview: string;
  manager: string;
}

export function LenderCard({
  name,
  type,
  amount,
  drawnPercent,
  rate,
  nextReview,
  manager,
}: LenderCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground">{type}</p>
        </div>
        <div className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">
          Active
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground font-medium">Facility Utilization</span>
            <span className="font-semibold text-foreground">{drawnPercent}%</span>
          </div>
          <Progress value={drawnPercent} className="h-1.5" />
          <p className="text-[11px] text-muted-foreground mt-1">
            {amount} total facility
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
              <CreditCard className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-bold">Rate</p>
              <p className="text-xs font-semibold">{rate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-bold">Review</p>
              <p className="text-xs font-semibold">{nextReview}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
              <User className="w-3 h-3 text-secondary-foreground" />
            </div>
            <span className="text-xs text-muted-foreground">{manager}</span>
          </div>
          <button className="text-xs font-semibold text-primary hover:underline">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}