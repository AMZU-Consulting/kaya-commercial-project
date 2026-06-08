import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { month: "Jan", amount: 4.2 },
  { month: "Feb", amount: 3.8 },
  { month: "Mar", amount: 5.1 },
  { month: "Apr", amount: 6.5 },
  { month: "May", amount: 4.9 },
  { month: "Jun", amount: 7.2 },
  { month: "Jul", amount: 8.4 },
  { month: "Aug", amount: 6.1 },
  { month: "Sep", amount: 5.5 },
  { month: "Oct", amount: 7.8 },
  { month: "Nov", amount: 9.2 },
  { month: "Dec", amount: 8.7 },
];

export function DrawdownHistoryChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} 
            tickFormatter={(value) => `£${value}M`}
          />
          <Tooltip 
            cursor={{ fill: "hsl(var(--muted)/0.5)" }}
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              borderColor: "hsl(var(--border))",
              borderRadius: "var(--radius)",
              fontSize: "12px",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
            }}
            formatter={(value: number) => [`£${value}M`, "Amount"]}
          />
          <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
            {data.map((_, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={index === data.length - 1 ? "hsl(var(--primary))" : "hsl(var(--primary)/0.4)"} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}