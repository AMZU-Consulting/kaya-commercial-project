import { AppLayout } from "@/components/AppLayout";
import { KpiCard } from "@/components/KpiCard";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Download, 
  FileText, 
  Filter, 
  ArrowUpRight, 
  Layers 
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area 
} from "recharts";
import { WaterfallChart } from "@/components/DevelopmentFinance/WaterfallChart";
import { DrawdownTable } from "@/components/DevelopmentFinance/DrawdownTable";
import { CovenantTable } from "@/components/DevelopmentFinance/CovenantTable";
import { LenderCard } from "@/components/DevelopmentFinance/LenderCard";
import { FundingSummaryCards } from "@/components/DevelopmentFinance/FundingSummaryCards";

// Mock data for LineChart (Monthly Drawdown Activity)
const monthlyDrawdownData = [
  { month: "Apr 24", amount: 4.2 },
  { month: "May 24", amount: 5.1 },
  { month: "Jun 24", amount: 7.8 },
  { month: "Jul 24", amount: 6.4 },
  { month: "Aug 24", amount: 9.2 },
  { month: "Sep 24", amount: 10.5 },
  { month: "Oct 24", amount: 8.7 },
  { month: "Nov 24", amount: 12.1 },
  { month: "Dec 24", amount: 11.4 },
  { month: "Jan 25", amount: 13.8 },
  { month: "Feb 25", amount: 15.2 },
  { month: "Mar 25", amount: 12.7 },
];

// Mock data for PieChart (Drawdown by Project)
const drawdownByProjectData = [
  { name: "River Thames Wharf", value: 35 },
  { name: "Skyline Apartments", value: 25 },
  { name: "Victoria Gardens", value: 15 },
  { name: "The Hub Tech Park", value: 12 },
  { name: "Regency Suites", value: 8 },
  { name: "Harbour View", value: 5 },
];

const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#06b6d4", "#8b5cf6"];

// Mock data for AreaChart (Projected Cash Position)
const projectedCashData = [
  { month: "Apr 25", drawdowns: 8.2, repayments: 0, net: -8.2 },
  { month: "May 25", drawdowns: 10.5, repayments: 0, net: -18.7 },
  { month: "Jun 25", drawdowns: 12.1, repayments: 0, net: -30.8 },
  { month: "Jul 25", drawdowns: 9.4, repayments: 5.0, net: -35.2 },
  { month: "Aug 25", drawdowns: 7.2, repayments: 12.5, net: -29.9 },
  { month: "Sep 25", drawdowns: 6.5, repayments: 25.0, net: -11.4 },
  { month: "Oct 25", drawdowns: 4.2, repayments: 45.0, net: 29.4 },
  { month: "Nov 25", drawdowns: 2.1, repayments: 60.0, net: 87.3 },
  { month: "Dec 25", drawdowns: 1.5, repayments: 40.0, net: 125.8 },
  { month: "Jan 26", drawdowns: 0, repayments: 30.0, net: 155.8 },
  { month: "Feb 26", drawdowns: 0, repayments: 25.0, net: 180.8 },
  { month: "Mar 26", drawdowns: 0, repayments: 15.0, net: 195.8 },
];

export default function DevelopmentFinance() {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8 space-y-8 pb-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Development Finance</h1>
            <p className="text-muted-foreground mt-1">
              Monitor funding structures, drawdown schedules and lender-ready financial views.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button className="gap-2">
              <FileText className="w-4 h-4" />
              Lender Pack
            </Button>
          </div>
        </div>

        {/* SECTION 1 — KPI STRIP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Total Facility"
            value="£185.0M"
            highlight="indigo"
            icon={<Layers className="w-5 h-5 text-primary" />}
            iconBg="bg-primary/10"
          />
          <KpiCard
            title="Drawn to Date"
            value="£127.3M"
            subtitle="68.8% Utilization"
            highlight="amber"
            trend="up"
            trendValue="+4.2%"
            trendLabel="from last month"
            icon={<ArrowUpRight className="w-5 h-5 text-amber-600" />}
            iconBg="bg-amber-50"
          />
          <KpiCard
            title="Available to Draw"
            value="£57.7M"
            highlight="green"
            icon={<Download className="w-5 h-5 text-green-600" />}
            iconBg="bg-green-50"
          />
          <KpiCard
            title="Next Drawdown"
            value="£8.2M"
            subtitle="Due Apr 15, 2025"
            icon={<Calendar className="w-5 h-5 text-muted-foreground" />}
          />
        </div>

        {/* SECTION 2 — FUNDING STRUCTURE WATERFALL */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Funding Stack Waterfall</h2>
            <p className="text-sm text-muted-foreground">Capital stack distribution relative to GDV target of £310M</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <WaterfallChart />
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Debt-to-GDV</p>
                  <p className="text-2xl font-bold">56.5%</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Equity Multiplier</p>
                  <p className="text-2xl font-bold">2.4x</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Projected ROI</p>
                  <p className="text-2xl font-bold text-green-600">19.4%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Funding Stack Summary</h3>
            <FundingSummaryCards />
          </div>
        </div>

        {/* SECTION 3 — DRAWDOWN SCHEDULE TABLE */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl font-bold">Drawdown Schedule</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Filter className="w-3.5 h-3.5" />
                Filter Project
              </Button>
            </div>
          </div>
          <DrawdownTable />
        </div>

        {/* SECTION 4 — UTILIZATION CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-6">Monthly Drawdown Activity</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyDrawdownData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                    tickFormatter={(v) => `£${v}M`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px" }}
                    itemStyle={{ fontSize: "12px" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: "hsl(var(--primary))", strokeWidth: 2, stroke: "white" }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-6">Drawdown by Project</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={drawdownByProjectData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {drawdownByProjectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px" }}
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-foreground font-bold text-xl"
                  >
                    100%
                  </text>
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {drawdownByProjectData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                    <span className="text-muted-foreground truncate">{item.name}</span>
                    <span className="font-semibold ml-auto">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 — COVENANT MONITORING */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="text-xl font-bold">Covenant Compliance</h2>
            <Button variant="ghost" size="sm" className="text-primary text-xs font-semibold">
              View All Metrics
            </Button>
          </div>
          <CovenantTable />
        </div>

        {/* SECTION 6 — LENDER SUMMARY CARDS */}
        <div>
          <h2 className="text-xl font-bold mb-6">Lender Relationships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LenderCard
              name="OakNorth Bank"
              type="Senior Debt Provider"
              amount="£143.0M"
              drawnPercent={68.8}
              rate="SONIA + 3.25%"
              nextReview="Jun 12, 2025"
              manager="Sarah Jenkins"
            />
            <LenderCard
              name="Fortwell Capital"
              type="Mezzanine Lender"
              amount="£32.0M"
              drawnPercent={65.0}
              rate="Fixed 11.5%"
              nextReview="Apr 20, 2025"
              manager="David Ross"
            />
            <LenderCard
              name="BlackRock Real Assets"
              type="Equity Partner"
              amount="£75.0M"
              drawnPercent={10.6}
              rate="8.0% Preferred"
              nextReview="May 05, 2025"
              manager="Elena Martinez"
            />
          </div>
        </div>

        {/* SECTION 7 — FINANCIAL PROJECTIONS */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xl font-bold">Financial Projections</h2>
              <p className="text-sm text-muted-foreground">18-month cashflow and repayment forecast</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-primary/30" />
                <span>Drawdowns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-emerald-500/30" />
                <span>Repayments</span>
              </div>
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={projectedCashData}>
                <defs>
                  <linearGradient id="colorDraw" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorRepay" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  tickFormatter={(v) => `£${v}M`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px" }}
                />
                <Area 
                  type="monotone" 
                  dataKey="drawdowns" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorDraw)" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="repayments" 
                  stroke="#10b981" 
                  fillOpacity={1} 
                  fill="url(#colorRepay)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}