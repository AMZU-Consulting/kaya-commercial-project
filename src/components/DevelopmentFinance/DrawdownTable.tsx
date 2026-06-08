import { StatusBadge } from "@/components/StatusBadge";

interface DrawdownRecord {
  id: string;
  project: string;
  requestedAmount: string;
  approvedAmount: string;
  requestDate: string;
  drawDate: string;
  status: "Approved" | "Pending" | "Drawn" | "Queued";
  lender: string;
  notes: string;
}

const drawdownData: DrawdownRecord[] = [
  {
    id: "DD-084",
    project: "River Thames Wharf",
    requestedAmount: "£2.4M",
    approvedAmount: "£2.4M",
    requestDate: "Mar 12, 2025",
    drawDate: "Mar 25, 2025",
    status: "Drawn",
    lender: "OakNorth Bank",
    notes: "Ground works completion",
  },
  {
    id: "DD-085",
    project: "Skyline Apartments",
    requestedAmount: "£1.8M",
    approvedAmount: "£1.8M",
    requestDate: "Mar 18, 2025",
    drawDate: "Apr 02, 2025",
    status: "Approved",
    lender: "Paragon Bank",
    notes: "Structural frame level 4",
  },
  {
    id: "DD-086",
    project: "Victoria Gardens",
    requestedAmount: "£0.9M",
    approvedAmount: "£0.9M",
    requestDate: "Mar 22, 2025",
    drawDate: "Apr 05, 2025",
    status: "Approved",
    lender: "Close Brothers",
    notes: "Internal fit-out phase 1",
  },
  {
    id: "DD-087",
    project: "The Hub Tech Park",
    requestedAmount: "£3.1M",
    approvedAmount: "—",
    requestDate: "Mar 28, 2025",
    drawDate: "Apr 15, 2025",
    status: "Pending",
    lender: "NatWest",
    notes: "Cladding and glazing",
  },
  {
    id: "DD-088",
    project: "Regency Suites",
    requestedAmount: "£1.2M",
    approvedAmount: "—",
    requestDate: "Apr 01, 2025",
    drawDate: "Apr 20, 2025",
    status: "Pending",
    lender: "HSBC UK",
    notes: "M&E services install",
  },
  {
    id: "DD-089",
    project: "Harbour View",
    requestedAmount: "£0.7M",
    approvedAmount: "—",
    requestDate: "Apr 05, 2025",
    drawDate: "May 01, 2025",
    status: "Queued",
    lender: "Lloyds Bank",
    notes: "Landscaping & external",
  },
  {
    id: "DD-090",
    project: "River Thames Wharf",
    requestedAmount: "£2.1M",
    approvedAmount: "—",
    requestDate: "Apr 10, 2025",
    drawDate: "May 10, 2025",
    status: "Queued",
    lender: "OakNorth Bank",
    notes: "Roofing works",
  },
  {
    id: "DD-091",
    project: "Skyline Apartments",
    requestedAmount: "£1.5M",
    approvedAmount: "—",
    requestDate: "Apr 15, 2025",
    drawDate: "May 15, 2025",
    status: "Queued",
    lender: "Paragon Bank",
    notes: "Joinery and finishes",
  },
];

const statusMap: Record<string, "healthy" | "warning" | "on-track" | "delayed"> = {
  Drawn: "healthy",
  Approved: "on-track",
  Pending: "warning",
  Queued: "on-track",
};

export function DrawdownTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <th className="px-4 py-3">Drawdown #</th>
            <th className="px-4 py-3">Project</th>
            <th className="px-4 py-3 text-right">Requested</th>
            <th className="px-4 py-3 text-right">Approved</th>
            <th className="px-4 py-3">Req. Date</th>
            <th className="px-4 py-3">Draw Date</th>
            <th className="px-4 py-3 text-center">Status</th>
            <th className="px-4 py-3">Lender</th>
            <th className="px-4 py-3">Notes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {drawdownData.map((row) => (
            <tr key={row.id} className="hover:bg-muted/30 transition-colors text-sm">
              <td className="px-4 py-4 font-medium">{row.id}</td>
              <td className="px-4 py-4">{row.project}</td>
              <td className="px-4 py-4 text-right">{row.requestedAmount}</td>
              <td className="px-4 py-4 text-right">{row.approvedAmount}</td>
              <td className="px-4 py-4 whitespace-nowrap">{row.requestDate}</td>
              <td className="px-4 py-4 whitespace-nowrap">{row.drawDate}</td>
              <td className="px-4 py-4 text-center">
                <StatusBadge status={statusMap[row.status]} label={row.status} size="sm" />
              </td>
              <td className="px-4 py-4 whitespace-nowrap">{row.lender}</td>
              <td className="px-4 py-4 text-xs text-muted-foreground max-w-[200px] truncate">
                {row.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}