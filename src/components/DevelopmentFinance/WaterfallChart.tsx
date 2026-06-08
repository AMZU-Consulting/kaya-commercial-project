import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface WaterfallData {
  name: string;
  amount: number;
  displayAmount: number;
  isTotal?: boolean;
}

const data: WaterfallData[] = [
  { name: "Senior Debt", amount: 143, displayAmount: 143 },
  { name: "Mezzanine", amount: 32, displayAmount: 32 },
  { name: "Equity", amount: 75, displayAmount: 75 },
  { name: "Developer Profit", amount: 60, displayAmount: 60 },
  { name: "GDV Target", amount: 310, displayAmount: 310, isTotal: true },
];

// Calculate offsets for waterfall effect
const processData = (data: WaterfallData[]) => {
  let cumulative = 0;
  return data.map((item) => {
    if (item.isTotal) {
      return { ...item, start: 0 };
    }
    const start = cumulative;
    cumulative += item.amount;
    return { ...item, start };
  });
};

const processedData = processData(data);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const total = 310;
    const percentage = ((data.displayAmount / total) * 100).toFixed(1);
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
        <p className="text-sm font-semibold">{data.name}</p>
        <p className="text-sm text-foreground">Amount: £{data.displayAmount}M</p>
        {!data.isTotal && <p className="text-xs text-muted-foreground">Share of GDV: {percentage}%</p>}
      </div>
    );
  }
  return null;
};

export function WaterfallChart() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={processedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            tickFormatter={(value) => `£${value}M`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--accent))", opacity: 0.4 }} />
          <Bar dataKey="displayAmount" stackId="a">
            {processedData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.isTotal ? "hsl(var(--primary))" : `hsl(var(--chart-${(index % 5) + 1}))`} 
              />
            ))}
          </Bar>
          {/* Invisible bar to create waterfall effect */}
          <Bar dataKey="start" stackId="a" fill="transparent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}