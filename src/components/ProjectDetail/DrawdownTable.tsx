import { CheckCircle2, Clock, AlertCircle, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Drawdown {
  id: string;
  requestNo: string;
  amount: number;
  date: string;
  status: "Approved" | "Pending" | "Processing";
  lender: string;
  notes: string;
}

const drawdowns: Drawdown[] = [
  { id: "1", requestNo: "DD-008", amount: 2450000, date: "Sep 12, 2024", status: "Approved", lender: "HSBC Commercial", notes: "Groundwork completion phase 2" },
  { id: "2", requestNo: "DD-007", amount: 1820000, date: "Aug 15, 2024", status: "Approved", lender: "HSBC Commercial", notes: "Material procurement - Steel" },
  { id: "3", requestNo: "DD-006", amount: 3100000, date: "Jul 10, 2024", status: "Approved", lender: "HSBC Commercial", notes: "Site preparation works" },
  { id: "4", requestNo: "DD-005", amount: 1250000, date: "Jun 05, 2024", status: "Approved", lender: "HSBC Commercial", notes: "Initial mobilization" },
  { id: "5", requestNo: "DD-009", amount: 2100000, date: "Oct 15, 2024", status: "Pending", lender: "HSBC Commercial", notes: "Structural concrete pours" },
  { id: "6", requestNo: "DD-010", amount: 1750000, date: "Nov 12, 2024", status: "Processing", lender: "HSBC Commercial", notes: "Facade systems deposit" },
];

const formatCurrency = (val: number) => 
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);

export function DrawdownTable() {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-y border-border">
          <tr>
            <th className="px-4 py-3 font-semibold">Request #</th>
            <th className="px-4 py-3 font-semibold text-right">Amount</th>
            <th className="px-4 py-3 font-semibold">Date</th>
            <th className="px-4 py-3 font-semibold">Lender</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {drawdowns.map((row) => (
            <tr key={row.id} className="hover:bg-muted/30 transition-colors">
              <td className="px-4 py-3 font-medium text-foreground">{row.requestNo}</td>
              <td className="px-4 py-3 text-right tabular-nums font-semibold">{formatCurrency(row.amount)}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.date}</td>
              <td className="px-4 py-3 text-foreground">{row.lender}</td>
              <td className="px-4 py-3">
                <span className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium",
                  row.status === "Approved" ? "bg-green-100 text-green-700" :
                  row.status === "Pending" ? "bg-amber-100 text-amber-700" :
                  "bg-blue-100 text-blue-700"
                )}>
                  {row.status === "Approved" ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="text-primary hover:underline text-xs flex items-center gap-1">
                  View Details <ExternalLink className="h-3 w-3" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}