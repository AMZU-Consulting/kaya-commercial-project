import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KpiCard } from "@/components/KpiCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { LayoutDashboard, FileText, Zap } from "lucide-react";

const DATA = [
  { month: "Jan", reports: 85 },
  { month: "Feb", reports: 98 },
  { month: "Mar", reports: 124 },
  { month: "Apr", reports: 110 },
  { month: "May", reports: 135 },
  { month: "Jun", reports: 147 },
  { month: "Jul", reports: 120 },
  { month: "Aug", reports: 130 },
  { month: "Sep", reports: 155 },
  { month: "Oct", reports: 168 },
  { month: "Nov", reports: 175 },
  { month: "Dec", reports: 190 },
];

export function ReportAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard
          title="Total Reports"
          value="147"
          subtitle="Generated this year"
          trend="up"
          trendValue="+12%"
          icon={<FileText className="w-5 h-5 text-primary" />}
        />
        <KpiCard
          title="Most Generated"
          value="Portfolio"
          subtitle="Executive Summary"
          icon={<LayoutDashboard className="w-5 h-5 text-primary" />}
        />
        <KpiCard
          title="Avg Gen Time"
          value="12s"
          subtitle="Including AI narrative"
          trend="down"
          trendValue="-3s"
          icon={<Zap className="w-5 h-5 text-primary" />}
        />
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg">Reports Generated This Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} 
                />
                <Tooltip 
                  cursor={{ fill: "hsl(var(--muted))", opacity: 0.4 }}
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px"
                  }}
                />
                <Bar dataKey="reports" radius={[4, 4, 0, 0]}>
                  {DATA.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.month === "Jun" ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.4)"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}