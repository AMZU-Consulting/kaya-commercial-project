import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, MoreVertical, Eye, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const queueItems = [
  {
    id: "1",
    fileName: "Invoiced_INV-0042.pdf",
    uploadTime: "2 mins ago",
    status: "Processing",
    confidence: null,
  },
  {
    id: "2",
    fileName: "Site_Supplies_March.png",
    uploadTime: "12 mins ago",
    status: "Needs Review",
    confidence: 68,
  },
  {
    id: "3",
    fileName: "Cement_Batch_882.pdf",
    uploadTime: "15 mins ago",
    status: "Extracted",
    confidence: 94,
  },
  {
    id: "4",
    fileName: "Utility_Bill_Q1.pdf",
    uploadTime: "24 mins ago",
    status: "Extracted",
    confidence: 89,
  },
];

export function ProcessingQueueTable() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold flex items-center gap-2">
          Processing Queue
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">3</Badge>
        </h3>
        <Button variant="ghost" size="sm" className="text-xs">View All</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>File Name</TableHead>
            <TableHead>Upload Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Confidence %</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queueItems.map((item) => (
            <TableRow key={item.id} className={cn(item.status === "Needs Review" && "bg-status-amber-bg/30")}>
              <TableCell className="font-medium">{item.fileName}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{item.uploadTime}</TableCell>
              <TableCell>
                {item.status === "Processing" ? (
                  <div className="flex items-center gap-2 text-primary font-medium text-xs">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Processing
                  </div>
                ) : item.status === "Needs Review" ? (
                  <div className="flex items-center gap-2 text-amber-600 font-medium text-xs">
                    <AlertCircle className="w-3 h-3" />
                    Needs Review
                  </div>
                ) : (
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px]">
                    {item.status}
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-right">
                {item.confidence ? (
                  <span className={cn(
                    "font-medium",
                    item.confidence > 90 ? "text-emerald-600" : item.confidence > 70 ? "text-amber-600" : "text-red-500"
                  )}>
                    {item.confidence}%
                  </span>
                ) : (
                  <span className="text-muted-foreground">--</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}