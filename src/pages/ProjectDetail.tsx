import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { KpiCard } from "@/components/KpiCard";
import { ProjectTabs } from "@/components/ProjectDetail/ProjectTabs";
import { MilestonesTimeline } from "@/components/ProjectDetail/MilestonesTimeline";
import { BudgetVarianceTable } from "@/components/ProjectDetail/BudgetVarianceTable";
import { DrawdownTable } from "@/components/ProjectDetail/DrawdownTable";
import { DocumentsGrid } from "@/components/ProjectDetail/DocumentsGrid";
import { 
  ChevronRight, 
  Download, 
  Edit3, 
  Calendar, 
  User, 
  Wallet, 
  Clock, 
  MoreHorizontal, 
  Filter, 
  Search, 
  Plus, 
  Upload, 
  ArrowUpRight, 
  FileText,
  Briefcase,
  TrendingUp,
  BarChart3,
  Users
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Cell,
  Legend
} from "recharts";
import { cn } from "@/lib/utils";

const SPEND_DATA = [
  { month: "Jan 24", actual: 1200000, forecast: 1100000 },
  { month: "Feb 24", actual: 1800000, forecast: 1750000 },
  { month: "Mar 24", actual: 2400000, forecast: 2500000 },
  { month: "Apr 24", actual: 3100000, forecast: 3200000 },
  { month: "May 24", actual: 3800000, forecast: 4100000 },
  { month: "Jun 24", actual: 4200000, forecast: 4500000 },
  { month: "Jul 24", actual: 5100000, forecast: 5000000 },
  { month: "Aug 24", actual: 5900000, forecast: 6200000 },
  { month: "Sep 24", actual: 6800000, forecast: 7100000 },
];

const BUDGET_BREAKDOWN = [
  { category: "Acquisition", value: 12500000 },
  { category: "Groundworks", value: 4200000 },
  { category: "Structural", value: 15800000 },
  { category: "MEP Services", value: 6400000 },
  { category: "Internal Fit-out", value: 8200000 },
  { category: "Professional Fees", value: 3100000 },
  { category: "Contingency", value: 1000000 },
  { category: "Landscaping", value: 1200000 },
];

const DRAWDOWN_SCHEDULE = [
  { month: "Jun 24", amount: 1250000 },
  { month: "Jul 24", amount: 3100000 },
  { month: "Aug 24", amount: 1820000 },
  { month: "Sep 24", amount: 2450000 },
  { month: "Oct 24", amount: 2100000 },
  { month: "Nov 24", amount: 1750000 },
];

const HEALTH_METRICS = [
  { name: "Budget Health", score: 92, color: "bg-green-500" },
  { name: "Schedule Health", score: 78, color: "bg-amber-500" },
  { name: "Quality Score", score: 95, color: "bg-green-500" },
  { name: "Safety Record", score: 100, color: "bg-green-500" },
  { name: "Stakeholder Satisfaction", score: 85, color: "bg-green-500" },
];

const TEAM_MEMBERS = [
  { name: "Sarah Mitchell", role: "Project Manager", initials: "SM" },
  { name: "David Chen", role: "Lead Architect", initials: "DC" },
  { name: "James Wilson", role: "Quantity Surveyor", initials: "JW" },
  { name: "Elena Rodriguez", role: "Site Supervisor", initials: "ER" },
  { name: "Mark Thompson", role: "Structural Engineer", initials: "MT" },
  { name: "Sophie Clarke", role: "MEP Consultant", initials: "SC" },
];

const INVOICES = [
  { id: "INV-2024-8829", supplier: "Brickwork Solutions Ltd", category: "Structural", amount: 12450.00, date: "Sep 20, 2024", status: "Approved" },
  { id: "INV-2024-8830", supplier: "Mainstream MEP", category: "MEP Services", amount: 45200.00, date: "Sep 18, 2024", status: "Pending" },
  { id: "INV-2024-8825", supplier: "Site Surveys Pro", category: "Professional Fees", amount: 8400.00, date: "Sep 15, 2024", status: "Approved" },
  { id: "INV-2024-8821", supplier: "Groundworks Inc", category: "Groundworks", amount: 125000.00, date: "Sep 12, 2024", status: "Rejected" },
  { id: "INV-2024-8818", supplier: "Global Steel supply", category: "Structural", amount: 82400.00, date: "Sep 10, 2024", status: "Approved" },
  { id: "INV-2024-8815", supplier: "City Architect Group", category: "Professional Fees", amount: 15000.00, date: "Sep 08, 2024", status: "Approved" },
  { id: "INV-2024-8812", supplier: "Plant Hire Co", category: "Groundworks", amount: 3200.00, date: "Sep 05, 2024", status: "Approved" },
  { id: "INV-2024-8809", supplier: "Safety First Ltd", category: "Professional Fees", amount: 1800.00, date: "Sep 02, 2024", status: "Pending" },
  { id: "INV-2024-8805", supplier: "Concrete Masters", category: "Structural", amount: 56000.00, date: "Aug 28, 2024", status: "Approved" },
  { id: "INV-2024-8801", supplier: "Lumber Kings", category: "Structural", amount: 12500.00, date: "Aug 25, 2024", status: "Approved" },
];

export default function ProjectDetail() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "budget", label: "Budget" },
    { id: "expenditure", label: "Expenditure" },
    { id: "funding", label: "Funding/Drawdowns" },
    { id: "documents", label: "Documents" },
  ];

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(val);

  return (
    <AppLayout>
      <div className="p-8 max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>Projects</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Meridian Quarter</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Meridian Quarter</h1>
                <StatusBadge status="on-track" label="On Track" />
              </div>
              <p className="text-muted-foreground">
                Mixed-Use Development | Bristol City Centre | Project Ref: KP-2024-0047
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                <Download className="h-4 w-4" />
                Download Report
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-colors">
                <Edit3 className="h-4 w-4" />
                Edit Project
              </button>
            </div>
          </div>

          {/* Quick Stats Pills */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-muted/40 border border-border px-3 py-1.5 rounded-full text-xs font-medium">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">Start:</span>
              <span className="text-foreground">Jun 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/40 border border-border px-3 py-1.5 rounded-full text-xs font-medium">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">Completion:</span>
              <span className="text-foreground">Dec 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/40 border border-border px-3 py-1.5 rounded-full text-xs font-medium">
              <Wallet className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">Total Budget:</span>
              <span className="text-foreground">£52.4M</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/40 border border-border px-3 py-1.5 rounded-full text-xs font-medium">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">PM:</span>
              <span className="text-foreground">Sarah Mitchell</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <ProjectTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === "overview" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard 
                  title="Budget Utilization" 
                  value="61%" 
                  subtitle="£31.2M of £52.4M spent"
                  highlight="indigo"
                  trend="up"
                  trendValue="4.2%"
                  trendLabel="vs last month"
                />
                <KpiCard 
                  title="Days to Completion" 
                  value="482" 
                  subtitle="Estimated Dec 15, 2026"
                  highlight="amber"
                  icon={<Clock className="h-5 w-5 text-amber-600" />}
                  iconBg="bg-amber-50"
                />
                <KpiCard 
                  title="Invoices Pending" 
                  value="3" 
                  subtitle="Total value: £53.4k"
                  highlight="amber"
                  icon={<FileText className="h-5 w-5 text-amber-600" />}
                  iconBg="bg-amber-50"
                />
                <KpiCard 
                  title="Risk Score" 
                  value="2.4/5" 
                  subtitle="Decreased from 2.6"
                  highlight="green"
                  trend="down"
                  trendValue="0.2"
                  trendLabel="improvement"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Project Spend Over Time</h3>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-sm bg-primary" />
                        <span className="text-muted-foreground">Actual Spend</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-sm bg-muted-foreground/30" />
                        <span className="text-muted-foreground">Forecast Spend</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={SPEND_DATA}>
                        <defs>
                          <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                          dy={10}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                          tickFormatter={(val) => `£${val/1000000}M`}
                        />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                          formatter={(value: number) => [formatCurrency(value), '']}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="actual" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          fillOpacity={1} 
                          fill="url(#colorActual)" 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="forecast" 
                          stroke="hsl(var(--muted-foreground))" 
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          fill="transparent"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Key Milestones</h3>
                  <MilestonesTimeline />
                  <button className="w-full mt-2 py-2 text-sm text-primary font-medium hover:underline">
                    View Full Schedule
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Project Description</h3>
                  <div className="prose prose-sm text-muted-foreground">
                    <p>
                      The Meridian Quarter is a flagship regeneration project in Bristol's vibrant city centre. This mixed-use development encompasses over 250,000 square feet of Grade A office space, 150 luxury residential apartments, and an integrated retail plaza.
                    </p>
                    <p className="mt-4">
                      Sustainability is at the core of the design, targeting BREEAM "Outstanding" and WELL Platinum certifications. The project features a significant focus on green infrastructure, including living walls, rooftop gardens, and extensive public realm improvements.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Health Scorecard</h3>
                  <div className="space-y-5">
                    {HEALTH_METRICS.map((metric) => (
                      <div key={metric.name} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground font-medium">{metric.name}</span>
                          <span className="font-bold">{metric.score}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div 
                            className={cn("h-1.5 rounded-full", metric.color)} 
                            style={{ width: `${metric.score}%` }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Project Team</h3>
                    <button className="p-1 hover:bg-muted rounded">
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {TEAM_MEMBERS.map((member) => (
                      <div key={member.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                            {member.initials}
                          </div>
                          <div>
                            <p className="text-sm font-semibold">{member.name}</p>
                            <p className="text-xs text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "budget" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-card border border-border rounded-xl p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Total Budget</p>
                  <p className="text-2xl font-bold">£52,400,000</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Contingency</p>
                  <p className="text-2xl font-bold">£3,500,000</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Committed</p>
                  <p className="text-2xl font-bold text-primary">£38,240,000</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Forecast to Complete</p>
                  <p className="text-2xl font-bold">£48,700,000</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Budget Breakdown by Category</h3>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={BUDGET_BREAKDOWN} layout="vertical" margin={{ left: 40, right: 30 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" />
                        <XAxis type="number" hide />
                        <YAxis 
                          dataKey="category" 
                          type="category" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'hsl(var(--foreground))', fontSize: 11, fontWeight: 500 }}
                          width={100}
                        />
                        <Tooltip 
                          cursor={{ fill: 'hsl(var(--muted)/0.5)' }}
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                          formatter={(value: number) => [formatCurrency(value), 'Budget']}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                          {BUDGET_BREAKDOWN.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`hsl(var(--chart-${(index % 5) + 1}))`} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-card border border-border rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-border flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Variance Table</h3>
                    <button className="text-sm text-primary font-medium hover:underline">Export CSV</button>
                  </div>
                  <BudgetVarianceTable />
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Budget Adjustments History</h3>
                <div className="space-y-4">
                  {[
                    { date: "Aug 12, 2024", user: "James Wilson (QS)", action: "Reallocation", amount: "£450,000", from: "Contingency", to: "Structural Works", note: "Additional reinforcement required for sector B" },
                    { date: "Jul 05, 2024", user: "Sarah Mitchell (PM)", action: "Budget Increase", amount: "£1,200,000", from: "Central Reserve", to: "Landscaping", note: "Extended public realm design approval" },
                    { date: "May 20, 2024", user: "James Wilson (QS)", action: "Initial Setup", amount: "£52,400,000", from: "N/A", to: "Main Project", note: "Base budget baseline established" },
                    { date: "Sep 01, 2024", user: "Elena Rodriguez (Site)", action: "Expense Approval", amount: "£35,000", from: "MEP Services", to: "Emergency Repairs", note: "Main water line diversion on site" },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="flex-none">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold">{log.action}: {log.amount}</p>
                          <span className="text-xs text-muted-foreground">{log.date}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">{log.user}</span> • Moved from <span className="font-medium text-foreground">{log.from}</span> to <span className="font-medium text-foreground">{log.to}</span>
                        </p>
                        <p className="text-xs italic text-muted-foreground mt-1">"{log.note}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "expenditure" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card border border-border p-4 rounded-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search invoices..." 
                      className="pl-9 pr-4 py-2 border border-border bg-background rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                    <Filter className="h-4 w-4" />
                    Category
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                    <Calendar className="h-4 w-4" />
                    Date Range
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                    Status
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-colors">
                  <Plus className="h-4 w-4" />
                  Add New Invoice
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-card border border-border rounded-xl p-5 border-l-4 border-l-blue-500">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Total Invoices</p>
                  <p className="text-2xl font-bold">142</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 border-l-4 border-l-green-500">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Approved</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">£31.2M</p>
                    <span className="text-[10px] text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">91%</span>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 border-l-4 border-l-amber-500">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Pending</p>
                  <p className="text-2xl font-bold">£2.1M</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5 border-l-4 border-l-red-500">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Rejected</p>
                  <p className="text-2xl font-bold">£0.4M</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
                      <tr>
                        <th className="px-6 py-4 font-semibold">Invoice #</th>
                        <th className="px-6 py-4 font-semibold">Supplier</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold text-right">Amount</th>
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {INVOICES.map((inv) => (
                        <tr key={inv.id} className="hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4 font-medium text-primary cursor-pointer hover:underline">{inv.id}</td>
                          <td className="px-6 py-4 font-medium">{inv.supplier}</td>
                          <td className="px-6 py-4 text-muted-foreground">{inv.category}</td>
                          <td className="px-6 py-4 text-right tabular-nums font-semibold">{formatCurrency(inv.amount)}</td>
                          <td className="px-6 py-4 text-muted-foreground">{inv.date}</td>
                          <td className="px-6 py-4">
                            <span className={cn(
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                              inv.status === "Approved" ? "bg-green-100 text-green-700" :
                              inv.status === "Pending" ? "bg-amber-100 text-amber-700" :
                              "bg-red-100 text-red-700"
                            )}>
                              {inv.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                              <MoreHorizontal className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-border flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Showing 1 to 10 of 142 invoices</p>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 border border-border rounded text-xs disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-xs">1</button>
                    <button className="px-3 py-1 border border-border rounded text-xs hover:bg-muted">2</button>
                    <button className="px-3 py-1 border border-border rounded text-xs hover:bg-muted">3</button>
                    <span className="text-xs px-2">...</span>
                    <button className="px-3 py-1 border border-border rounded text-xs hover:bg-muted">Next</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "funding" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Funding Structure</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Equity (30%)</span>
                        <span className="text-sm font-bold text-foreground">£15.72M</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div className="bg-blue-600 h-full" style={{ width: "30%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Senior Debt (55%)</span>
                        <span className="text-sm font-bold text-foreground">£28.82M</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: "55%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Mezzanine (15%)</span>
                        <span className="text-sm font-bold text-foreground">£7.86M</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div className="bg-amber-500 h-full" style={{ width: "15%" }} />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground font-semibold uppercase">Next Drawdown</p>
                            <p className="text-lg font-bold">£2,100,000</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">Scheduled for Oct 15, 2024 (HSBC Commercial)</p>
                        <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-colors">
                          Prepare Request
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Drawdown Schedule</h3>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={DRAWDOWN_SCHEDULE}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `£${val/1000000}M`} />
                        <Tooltip 
                          cursor={{ fill: 'hsl(var(--muted)/0.5)' }}
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                          formatter={(value: number) => [formatCurrency(value), 'Amount']}
                        />
                        <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Drawdown Requests</h3>
                  <button className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                    <Download className="h-4 w-4" />
                    Download Log
                  </button>
                </div>
                <DrawdownTable />
              </div>
            </div>
          )}

          {activeTab === "documents" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 space-y-6">
                  <div 
                    className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-semibold mb-1">Upload Documents</p>
                    <p className="text-xs text-muted-foreground">Drag and drop files here or click to browse</p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Categories</h4>
                    <div className="space-y-1">
                      {[
                        { name: "Contracts", count: 14, icon: FileText },
                        { name: "Invoices", count: 142, icon: FileText },
                        { name: "Reports", count: 45, icon: BarChart3 },
                        { name: "Planning", count: 28, icon: Briefcase },
                        { name: "Insurance", count: 12, icon: FileText },
                      ].map((cat) => (
                        <button 
                          key={cat.name}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <cat.icon className="h-4 w-4 text-muted-foreground" />
                            <span>{cat.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{cat.count}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Storage Usage</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Used: 2.4 GB</span>
                        <span className="text-muted-foreground">Total: 10 GB</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: "24%" }} />
                      </div>
                      <p className="text-[10px] text-muted-foreground pt-1">
                        You're using 24% of your project storage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input 
                        type="text" 
                        placeholder="Search project documents..." 
                        className="pl-9 pr-4 py-2 border border-border bg-background rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 border border-border rounded-lg bg-background hover:bg-muted">
                        <Filter className="h-4 w-4" />
                      </button>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                        New Folder
                      </button>
                    </div>
                  </div>

                  <DocumentsGrid />

                  <div className="flex justify-center pt-6">
                    <button className="text-sm font-medium text-primary hover:underline">
                      Load More Documents
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}