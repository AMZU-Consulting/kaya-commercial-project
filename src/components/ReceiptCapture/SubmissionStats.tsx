import { Card, CardContent } from "@/components/ui/card";
import { Receipt, Calendar, Clock, DollarSign } from "lucide-react";

const stats = [
  { label: "Today's Receipts", value: "3", icon: Receipt, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "This Week", value: "12", icon: Calendar, color: "text-indigo-500", bg: "bg-indigo-50" },
  { label: "Pending Review", value: "2", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
  { label: "Total Amount", value: "£3,240", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
];

export function SubmissionStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-none shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className={`p-2 rounded-lg ${stat.bg}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}