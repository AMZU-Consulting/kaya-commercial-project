import { StatusBadge } from "@/components/StatusBadge";

interface Covenant {
  metric: string;
  limit: string;
  current: string;
  status: "healthy" | "warning" | "critical";
  lastTested: string;
}

const covenants: Covenant[] = [
  {
    metric: "LTV Ratio (Senior)",
    limit: "Max 65%",
    current: "61.2%",
    status: "healthy",
    lastTested: "Mar 01, 2025",
  },
  {
    metric: "DSCR (Debt Service)",
    limit: "Min 1.25x",
    current: "1.38x",
    status: "healthy",
    lastTested: "Mar 15, 2025",
  },
  {
    metric: "Cost Overrun Allowance",
    limit: "Max 10%",
    current: "3.2%",
    status: "healthy",
    lastTested: "Mar 20, 2025",
  },
  {
    metric: "LTC Ratio (Total)",
    limit: "Max 80%",
    current: "78.5%",
    status: "warning",
    lastTested: "Mar 25, 2025",
  },
  {
    metric: "Sales Velocity (Units/Mo)",
    limit: "Min 4.0",
    current: "3.8",
    status: "warning",
    lastTested: "Mar 28, 2025",
  },
  {
    metric: "Contingency Remaining",
    limit: "Min £1.5M",
    current: "£0.8M",
    status: "critical",
    lastTested: "Mar 28, 2025",
  },
];

export function CovenantTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <th className="px-4 py-3">Metric</th>
            <th className="px-4 py-3">Limit</th>
            <th className="px-4 py-3">Current</th>
            <th className="px-4 py-3 text-center">Status</th>
            <th className="px-4 py-3">Last Tested</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {covenants.map((item, idx) => (
            <tr key={idx} className="hover:bg-muted/30 transition-colors text-sm">
              <td className="px-4 py-4 font-medium">{item.metric}</td>
              <td className="px-4 py-4 text-muted-foreground">{item.limit}</td>
              <td className="px-4 py-4 font-semibold">{item.current}</td>
              <td className="px-4 py-4 text-center">
                <StatusBadge status={item.status} size="sm" />
              </td>
              <td className="px-4 py-4 text-xs text-muted-foreground">{item.lastTested}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}