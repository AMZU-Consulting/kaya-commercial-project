import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const data = [
  { month: "Jan", In: 12, Out: 10 },
  { month: "Feb", In: 15, Out: 13 },
  { month: "Mar", In: 13, Out: 14 },
  { month: "Apr", In: 18, Out: 15 },
  { month: "May", In: 20, Out: 17 },
  { month: "Jun", In: 22, Out: 19 },
  { month: "Jul", In: 19, Out: 20 },
  { month: "Aug", In: 24, Out: 21 },
  { month: "Sep", In: 26, Out: 23 },
  { month: "Oct", In: 28, Out: 25 },
  { month: "Nov", In: 25, Out: 27 },
  { month: "Dec", In: 30, Out: 26 },
];

export function CashflowChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Cashflow Trend</CardTitle>
        <Link to="/ai-reporting" className="text-sm font-medium text-primary hover:underline">
          View Full Report
        </Link>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickFormatter={(value) => `£${value}M`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px"
                }}
                itemStyle={{ fontSize: "12px" }}
              />
              <Area 
                type="monotone" 
                dataKey="In" 
                name="Cash In"
                stroke="hsl(var(--chart-1))" 
                fillOpacity={1} 
                fill="url(#colorIn)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="Out" 
                name="Cash Out"
                stroke="hsl(var(--chart-4))" 
                fillOpacity={1} 
                fill="url(#colorOut)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}