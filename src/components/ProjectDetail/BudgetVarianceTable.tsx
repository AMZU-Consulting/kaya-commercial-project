import { cn } from "@/lib/utils";

interface BudgetRow {
  category: string;
  budget: number;
  committed: number;
  actual: number;
  status: "On Track" | "At Risk" | "Over Budget";
}

const budgetData: BudgetRow[] = [
  { category: "Acquisition & Fees", budget: 12500000, committed: 12500000, actual: 12450000, status: "On Track" },
  { category: "Groundworks", budget: 4200000, committed: 4200000, actual: 4100000, status: "On Track" },
  { category: "Structural Works", budget: 15800000, committed: 12400000, actual: 8200000, status: "On Track" },
  { category: "MEP Services", budget: 6400000, committed: 4100000, actual: 2100000, status: "On Track" },
  { category: "Internal Fit-out", budget: 8200000, committed: 3200000, actual: 1200000, status: "On Track" },
  { category: "Landscaping", budget: 1200000, committed: 0, actual: 0, status: "On Track" },
  { category: "Professional Fees", budget: 3100000, committed: 1800000, actual: 2800000, status: "At Risk" },
  { category: "Contingency", budget: 1000000, committed: 0, actual: 350000, status: "On Track" },
];

const formatCurrency = (val: number) => 
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);

export function BudgetVarianceTable() {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
          <tr>
            <th className="px-4 py-3 font-semibold">Category</th>
            <th className="px-4 py-3 font-semibold text-right">Budget</th>
            <th className="px-4 py-3 font-semibold text-right">Committed</th>
            <th className="px-4 py-3 font-semibold text-right">Actual</th>
            <th className="px-4 py-3 font-semibold text-right">Variance £</th>
            <th className="px-4 py-3 font-semibold text-right">Var %</th>
            <th className="px-4 py-3 font-semibold text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {budgetData.map((row, i) => {
            const variance = row.budget - row.actual;
            const varPercent = (variance / row.budget) * 100;
            const isNegative = variance < 0;

            return (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{row.category}</td>
                <td className="px-4 py-3 text-right tabular-nums">{formatCurrency(row.budget)}</td>
                <td className="px-4 py-3 text-right tabular-nums">{formatCurrency(row.committed)}</td>
                <td className="px-4 py-3 text-right tabular-nums">{formatCurrency(row.actual)}</td>
                <td className={cn(
                  "px-4 py-3 text-right tabular-nums font-medium",
                  isNegative ? "text-destructive" : "text-green-600"
                )}>
                  {variance > 0 ? "+" : ""}{formatCurrency(variance)}
                </td>
                <td className={cn(
                  "px-4 py-3 text-right tabular-nums",
                  isNegative ? "text-destructive" : "text-green-600"
                )}>
                  {varPercent.toFixed(1)}%
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={cn(
                    "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase",
                    row.status === "On Track" ? "bg-green-100 text-green-700" :
                    row.status === "At Risk" ? "bg-amber-100 text-amber-700" :
                    "bg-red-100 text-red-700"
                  )}>
                    {row.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}