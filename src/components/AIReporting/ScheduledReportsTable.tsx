import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit2, Pause, Trash2, Play } from "lucide-react";

const SCHEDULED_REPORTS = [
  {
    name: "Monthly Portfolio Wrap-up",
    frequency: "Monthly",
    recipients: "Stakeholders Group",
    nextRun: "Apr 01, 2025",
    lastRun: "Mar 01, 2025",
    status: "Active",
  },
  {
    name: "Weekly Budget Variance",
    frequency: "Weekly",
    recipients: "Finance Team",
    nextRun: "Mar 24, 2025",
    lastRun: "Mar 17, 2025",
    status: "Active",
  },
  {
    name: "Quarterly Lender Package",
    frequency: "Quarterly",
    recipients: "Lender Relations",
    nextRun: "Apr 15, 2025",
    lastRun: "Jan 15, 2025",
    status: "Active",
  },
  {
    name: "Investor Update - Meridian",
    frequency: "Monthly",
    recipients: "Key Investors",
    nextRun: "Apr 05, 2025",
    lastRun: "Mar 05, 2025",
    status: "Paused",
  },
  {
    name: "Daily Health Snapshot",
    frequency: "Daily",
    recipients: "Project Managers",
    nextRun: "Mar 21, 2025",
    lastRun: "Mar 20, 2025",
    status: "Active",
  },
];

export function ScheduledReportsTable() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg">Scheduled Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Name</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>Recipients</TableHead>
              <TableHead>Next Run</TableHead>
              <TableHead>Last Run</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SCHEDULED_REPORTS.map((report, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-sm">{report.name}</TableCell>
                <TableCell className="text-sm">{report.frequency}</TableCell>
                <TableCell className="text-sm">{report.recipients}</TableCell>
                <TableCell className="text-sm">{report.nextRun}</TableCell>
                <TableCell className="text-sm">{report.lastRun}</TableCell>
                <TableCell>
                  <Badge 
                    variant={report.status === "Active" ? "outline" : "secondary"}
                    className={report.status === "Active" ? "border-green-500 text-green-600 bg-green-50" : ""}
                  >
                    {report.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                      {report.status === "Active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/5">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}