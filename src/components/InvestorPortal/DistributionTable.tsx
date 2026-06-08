import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";

interface DistributionRow {
  project: string;
  amount: string;
  date: string;
  status: "on-track" | "delayed" | "healthy";
  notes: string;
}

interface DistributionTableProps {
  data: DistributionRow[];
}

export function DistributionTable({ data }: DistributionTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Distribution Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs uppercase font-semibold">Project</TableHead>
              <TableHead className="text-xs uppercase font-semibold">Expected Distribution</TableHead>
              <TableHead className="text-xs uppercase font-semibold">Anticipated Date</TableHead>
              <TableHead className="text-xs uppercase font-semibold">Status</TableHead>
              <TableHead className="text-xs uppercase font-semibold">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium text-sm">{row.project}</TableCell>
                <TableCell className="text-sm">{row.amount}</TableCell>
                <TableCell className="text-sm">{row.date}</TableCell>
                <TableCell>
                  <StatusBadge status={row.status} size="sm" />
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}