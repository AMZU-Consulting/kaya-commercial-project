import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const submissions = [
  { id: 1, vendor: "Screwfix", amount: "£42.99", date: "Today, 10:45", project: "Riverside", status: "Processing" },
  { id: 2, vendor: "B&Q", amount: "£124.50", date: "Today, 09:12", project: "Skyline", status: "Approved" },
  { id: 3, vendor: "Shell UK", amount: "£85.00", date: "Yesterday", project: "Green Valley", status: "Approved" },
  { id: 4, vendor: "Travis Perkins", amount: "£1,240.00", date: "12 Oct", project: "Riverside", status: "Pending" },
  { id: 5, vendor: "Amazon Business", amount: "£12.99", date: "11 Oct", project: "General", status: "Approved" },
  { id: 6, vendor: "BuildBase", amount: "£445.20", date: "10 Oct", project: "Skyline", status: "Approved" },
  { id: 7, vendor: "Local Deli", amount: "£15.40", date: "09 Oct", project: "Site Subsistence", status: "Pending" },
  { id: 8, vendor: "HSS Hire", amount: "£180.00", date: "08 Oct", project: "Riverside", status: "Approved" },
];

export function RecentSubmissions() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Recent Submissions</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto px-0">
        <div className="space-y-1">
          {submissions.map((sub) => (
            <div key={sub.id} className="flex items-center gap-3 px-4 py-3 hover:bg-accent/50 transition-colors border-b last:border-0 border-border/50">
              <div className="w-10 h-10 rounded-lg bg-muted flex-shrink-0 flex items-center justify-center overflow-hidden border">
                <img 
                   src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                   alt={sub.vendor}
                   className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold truncate">{sub.vendor}</p>
                  <span className="text-sm font-bold text-foreground whitespace-nowrap">{sub.amount}</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-0.5">
                  <p className="text-[11px] text-muted-foreground truncate">{sub.project} • {sub.date}</p>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-[9px] px-1.5 py-0 h-4 uppercase font-bold",
                      sub.status === "Approved" && "border-status-green text-status-green bg-status-green-bg",
                      sub.status === "Pending" && "border-status-amber text-status-amber bg-status-amber-bg",
                      sub.status === "Processing" && "border-primary text-primary bg-accent"
                    )}
                  >
                    {sub.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}