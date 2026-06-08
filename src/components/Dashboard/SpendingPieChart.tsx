import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Labour", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Materials", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Plant & Equipment", value: 18, color: "hsl(var(--chart-3))" },
  { name: "Professional Fees", value: 12, color: "hsl(var(--chart-4))" },
  { name: "Contingency", value: 7, color: "hsl(var(--chart-5))" },
];

export function SpendingPieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Spending by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    borderColor: "hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {data.sort((a, b) => b.value - a.value).map((item, index) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-bold text-muted-foreground w-4">{index + 1}.</div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden hidden sm:block">
                    <div 
                      className="h-full rounded-full" 
                      style={{ width: `${item.value}%`, backgroundColor: item.color }} 
                    />
                  </div>
                  <span className="text-sm font-bold w-10 text-right">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}