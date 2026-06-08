import { AppLayout } from "@/components/AppLayout";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { 
  PoundSterling, 
  FolderOpen, 
  PieChart, 
  AlertTriangle, 
  Calendar, 
  Download, 
  CheckCircle2, 
  ArrowUpRight, 
  FileText, 
  History, 
  Bell, 
  Info,
  ChevronRight,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BudgetVsActualChart } from "@/components/Dashboard/BudgetVsActualChart";
import { FundingUtilizationChart } from "@/components/Dashboard/FundingUtilizationChart";
import { CashflowChart } from "@/components/Dashboard/CashflowChart";
import { SpendingPieChart } from "@/components/Dashboard/SpendingPieChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const projectHealthData = [
  { name: "Meridian Quarter", location: "Bristol", status: "healthy", progress: 75, budget: 45.2, actual: 38.5, variance: -6.7 },
  { name: "Harbour Point", location: "London", status: "warning", progress: 42, budget: 120.0, actual: 65.2, variance: 8.4 },
  { name: "Ashford Gardens", location: "Manchester", status: "healthy", progress: 88, budget: 32.5, actual: 29.8, variance: -2.7 },
  { name: "The Exchange", location: "Birmingham", status: "critical", progress: 15, budget: 85.0, actual: 22.4, variance: 12.1 },
  { name: "Riverside View", location: "Leeds", status: "on-track", progress: 60, budget: 54.8, actual: 48.2, variance: -6.6 },
] as const;

const recentActivity = [
  { icon: CheckCircle2, text: "Invoice #INV-4022 approved for Meridian Quarter", time: "2 hours ago", color: "text-green-500" },
  { icon: ArrowUpRight, text: "Drawdown requested for Harbour Point - £4.2M", time: "5 hours ago", color: "text-blue-500" },
  { icon: AlertTriangle, text: "Budget variance alert: The Exchange (+12% overhead)", time: "Yesterday", color: "text-amber-500" },
  { icon: FileText, text: "New site inspection document uploaded for Ashford Gardens", time: "Yesterday", color: "text-indigo-500" },
  { icon: PieChart, text: "Monthly portfolio performance report generated", time: "2 days ago", color: "text-slate-500" },
  { icon: History, text: "New login detected from Manchester, UK (Sarah J.)", time: "3 days ago", color: "text-slate-500" },
];

const milestones = [
  { project: "Meridian Quarter", milestone: "Practical Completion", date: "24 Apr 2025", status: "On Track" },
  { project: "Harbour Point", milestone: "Structural Topping Out", date: "12 May 2025", status: "At Risk" },
  { project: "Ashford Gardens", milestone: "Facade Installation", date: "08 Jun 2025", status: "On Track" },
  { project: "The Exchange", milestone: "Groundworks Completion", date: "15 Apr 2025", status: "Delayed" },
  { project: "Riverside View", milestone: "Internal Fit-out Start", date: "30 Jul 2025", status: "On Track" },
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* PAGE HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Good morning, Sarah 👋</h1>
            <p className="text-muted-foreground mt-1">Here's your portfolio overview for today — 14 March 2025</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Mar 1 - Mar 14, 2025</span>
            </Button>
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </Button>
          </div>
        </div>

        {/* SECTION 1 — KPI CARDS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Total Portfolio Value"
            value="£248.5M"
            trend="up"
            trendValue="+12.3%"
            trendLabel="vs last quarter"
            highlight="indigo"
            icon={<PoundSterling className="w-5 h-5 text-indigo-600" />}
            iconBg="bg-indigo-100"
          />
          <KpiCard
            title="Active Projects"
            value="24"
            trend="up"
            trendValue="+3"
            trendLabel="new this month"
            highlight="green"
            icon={<FolderOpen className="w-5 h-5 text-green-600" />}
            iconBg="bg-green-100"
          />
          <KpiCard
            title="Budget Utilization"
            value="68.4%"
            subtitle="£169.9M of £248.5M drawn"
            highlight="amber"
            icon={<PieChart className="w-5 h-5 text-amber-600" />}
            iconBg="bg-amber-100"
          />
          <KpiCard
            title="Overdue Invoices"
            value="7"
            subtitle="Requires immediate action"
            trend="down"
            trendValue="-2"
            trendLabel="since yesterday"
            highlight="red"
            icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
            iconBg="bg-red-100"
          />
        </div>

        {/* SECTION 2 — CHARTS ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BudgetVsActualChart />
          <FundingUtilizationChart />
        </div>

        {/* SECTION 3 — PROJECT HEALTH SCORECARDS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">Project Health Overview</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View All Projects <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-1 px-1 no-scrollbar">
            {projectHealthData.map((project) => (
              <Card key={project.name} className="min-w-[300px] shrink-0 hover:shadow-md transition-shadow">
                <CardContent className="p-5 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{project.name}</h3>
                      <div className="flex items-center text-muted-foreground text-xs mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {project.location}
                      </div>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Completion</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          project.status === "healthy" || project.status === "on-track" ? "bg-green-500" : 
                          project.status === "warning" ? "bg-amber-500" : "bg-red-500"
                        )}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold text-muted-foreground">Budget</span>
                      <span className="text-sm font-bold">£{project.budget}M</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold text-muted-foreground">Actual</span>
                      <span className="text-sm font-bold">£{project.actual}M</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold text-muted-foreground">Var</span>
                      <span className={cn(
                        "text-sm font-bold",
                        project.variance > 0 ? "text-red-500" : "text-green-600"
                      )}>
                        {project.variance > 0 ? "+" : ""}{project.variance}M
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SECTION 4 — CASHFLOW TREND */}
        <CashflowChart />

        {/* SECTION 5 — TWO-COLUMN LOWER ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={cn("mt-1 shrink-0", activity.color)}>
                      <activity.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium leading-tight">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 text-muted-foreground text-xs h-8">
                View Activity Log
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Upcoming Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-xs font-semibold text-muted-foreground uppercase">Project</th>
                      <th className="text-left py-3 px-2 text-xs font-semibold text-muted-foreground uppercase">Milestone</th>
                      <th className="text-left py-3 px-2 text-xs font-semibold text-muted-foreground uppercase">Due Date</th>
                      <th className="text-left py-3 px-2 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {milestones.map((m, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-2 text-sm font-semibold">{m.project}</td>
                        <td className="py-4 px-2 text-sm text-muted-foreground">{m.milestone}</td>
                        <td className="py-4 px-2 text-sm">{m.date}</td>
                        <td className="py-4 px-2">
                          <span className={cn(
                            "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                            m.status === "On Track" ? "bg-green-100 text-green-700" :
                            m.status === "At Risk" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                          )}>
                            {m.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 6 — SPENDING BY CATEGORY */}
        <SpendingPieChart />

        {/* SECTION 7 — ALERTS & NOTIFICATIONS STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-status-red-bg border border-status-red/20 rounded-xl p-4 flex items-start gap-4">
            <div className="bg-status-red/10 p-2 rounded-lg">
              <Bell className="w-5 h-5 text-status-red" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-status-red">Critical Variance</h4>
              <p className="text-xs text-status-red/80 mt-1 line-clamp-2">The Exchange budget is 12% over projected groundworks costs.</p>
              <Button variant="link" className="p-0 h-auto text-xs font-bold text-status-red hover:no-underline mt-2">
                Action Now
              </Button>
            </div>
          </div>

          <div className="bg-status-amber-bg border border-status-amber/20 rounded-xl p-4 flex items-start gap-4">
            <div className="bg-status-amber/10 p-2 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-status-amber" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-status-amber">Drawdown Pending</h4>
              <p className="text-xs text-status-amber/80 mt-1 line-clamp-2">Harbour Point drawdown request for £4.2M requires second signature.</p>
              <Button variant="link" className="p-0 h-auto text-xs font-bold text-status-amber hover:no-underline mt-2">
                Review Request
              </Button>
            </div>
          </div>

          <div className="bg-status-green-bg border border-status-green/20 rounded-xl p-4 flex items-start gap-4">
            <div className="bg-status-green/10 p-2 rounded-lg">
              <Info className="w-5 h-5 text-status-green" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-status-green">Invoices Verified</h4>
              <p className="text-xs text-status-green/80 mt-1 line-clamp-2">AI Agent successfully matched 18 invoices for Meridian Quarter this morning.</p>
              <Button variant="link" className="p-0 h-auto text-xs font-bold text-status-green hover:no-underline mt-2">
                View Matches
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}