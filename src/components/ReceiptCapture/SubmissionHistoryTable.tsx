import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const data = [
  { date: "15 Oct 2023", vendor: "Screwfix", amount: "£42.99", category: "Materials", project: "Riverside Apartments", user: "John D.", status: "Processing" },
  { date: "14 Oct 2023", vendor: "B&Q", amount: "£124.50", category: "Materials", project: "Skyline Tower", user: "John D.", status: "Approved" },
  { date: "13 Oct 2023", vendor: "Shell UK", amount: "£85.00", category: "Fuel", project: "Green Valley School", user: "Sarah M.", status: "Approved" },
  { date: "12 Oct 2023", vendor: "Travis Perkins", amount: "£1,240.00", category: "Materials", project: "Riverside Apartments", user: "John D.", status: "Pending" },
  { date: "11 Oct 2023", vendor: "Amazon Business", amount: "£12.99", category: "Office Supplies", project: "General Admin", user: "Sarah M.", status: "Approved" },
  { date: "10 Oct 2023", vendor: "BuildBase", amount: "£445.20", category: "Materials", project: "Skyline Tower", user: "John D.", status: "Approved" },
  { date: "09 Oct 2023", vendor: "Local Deli", amount: "£15.40", category: "Subsistence", project: "Site Visit", user: "Mark R.", status: "Pending" },
  { date: "08 Oct 2023", vendor: "HSS Hire", amount: "£180.00", category: "Plant Hire", project: "Riverside Apartments", user: "John D.", status: "Approved" },
  { date: "07 Oct 2023", vendor: "Keyline", amount: "£890.00", category: "Materials", project: "Skyline Tower", user: "Mark R.", status: "Approved" },
  { date: "06 Oct 2023", vendor: "Post Office", amount: "£4.50", category: "Postage", project: "General Admin", user: "Sarah M.", status: "Approved" },
];

export function SubmissionHistoryTable() {
  return (
    <Card className="border-none shadow-sm overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b bg-muted/20">
        <CardTitle className="text-lg">All Submissions</CardTitle>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search receipts..." className="pl-9 h-9" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Date</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Submitted By</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium">{row.date}</TableCell>
                <TableCell>{row.vendor}</TableCell>
                <TableCell className="font-bold">{row.amount}</TableCell>
                <TableCell>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium border border-border/50">
                    {row.category}
                  </span>
                </TableCell>
                <TableCell className="max-w-[150px] truncate">{row.project}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-[10px] px-2 h-5 font-bold",
                      row.status === "Approved" && "border-status-green text-status-green bg-status-green-bg",
                      row.status === "Pending" && "border-status-amber text-status-amber bg-status-amber-bg",
                      row.status === "Processing" && "border-primary text-primary bg-accent"
                    )}
                  >
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}