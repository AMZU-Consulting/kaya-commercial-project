import { cn } from "@/lib/utils";

interface ProjectRisk {
  project: string;
  schedule: "Low" | "Medium" | "High";
  budget: "Low" | "Medium" | "High";
  market: "Low" | "Medium" | "High";
  overall: "Low" | "Medium" | "High";
  lastReviewed: string;
}

const riskData: ProjectRisk[] = [
  { project: "The Grand Residency", schedule: "Low", budget: "Low", market: "Medium", overall: "Low", lastReviewed: "12 Oct 2023" },
  { project: "Riverfront Plaza", schedule: "Medium", budget: "High", market: "Low", overall: "Medium", lastReviewed: "15 Oct 2023" },
  { project: "Oakwood Heights", schedule: "Low", budget: "Low", market: "Low", overall: "Low", lastReviewed: "10 Oct 2023" },
  { project: "Harbor View Mall", schedule: "High", budget: "Medium", market: "Medium", overall: "High", lastReviewed: "18 Oct 2023" },
  { project: "Central Park Towers", schedule: "Low", budget: "Medium", market: "Low", overall: "Low", lastReviewed: "14 Oct 2023" },
];

const riskColorMap = {
  Low: "text-green-600 font-semibold",
  Medium: "text-amber-600 font-semibold",
  High: "text-red-600 font-semibold",
};

export function RiskMatrix() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b border-border text-muted-foreground uppercase text-[10px] tracking-wider font-semibold">
            <th className="px-4 py-3 font-semibold">Project</th>
            <th className="px-4 py-3 font-semibold">Schedule Risk</th>
            <th className="px-4 py-3 font-semibold">Budget Risk</th>
            <th className="px-4 py-3 font-semibold">Market Risk</th>
            <th className="px-4 py-3 font-semibold">Overall Risk</th>
            <th className="px-4 py-3 font-semibold">Last Reviewed</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {riskData.map((row, i) => (
            <tr key={i} className="hover:bg-accent/50 transition-colors">
              <td className="px-4 py-4 font-medium text-foreground">{row.project}</td>
              <td className={cn("px-4 py-4", riskColorMap[row.schedule])}>{row.schedule}</td>
              <td className={cn("px-4 py-4", riskColorMap[row.budget])}>{row.budget}</td>
              <td className={cn("px-4 py-4", riskColorMap[row.market])}>{row.market}</td>
              <td className={cn("px-4 py-4", riskColorMap[row.overall])}>{row.overall}</td>
              <td className="px-4 py-4 text-muted-foreground">{row.lastReviewed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}