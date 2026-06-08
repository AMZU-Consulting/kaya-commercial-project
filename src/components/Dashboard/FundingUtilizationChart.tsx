import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  {
    name: "Utilization",
    value: 68.4,
    fill: "hsl(var(--chart-3))",
  },
];

export function FundingUtilizationChart() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Funding Utilization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                innerRadius="70%" 
                outerRadius="100%" 
                data={data} 
                startAngle={180} 
                endAngle={0}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={30}
                  fill="hsl(var(--chart-3))"
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
              <span className="text-3xl font-bold">68.4%</span>
              <span className="text-xs text-muted-foreground">Total Utilized</span>
            </div>
          </div>

          <div className="w-full space-y-3 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-sm text-muted-foreground font-medium">Equity</span>
              </div>
              <span className="text-sm font-semibold">£74.6M</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-muted-foreground font-medium">Senior Debt</span>
              </div>
              <span className="text-sm font-semibold">£143.1M</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-sm text-muted-foreground font-medium">Mezzanine</span>
              </div>
              <span className="text-sm font-semibold">£30.8M</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}