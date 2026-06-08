import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Wallet, TrendingUp, BarChart3, Info } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { PortfolioBanner } from "@/components/InvestorPortal/PortfolioBanner";
import { InvestmentProjectCard } from "@/components/InvestorPortal/InvestmentProjectCard";
import { MilestoneTimeline } from "@/components/InvestorPortal/MilestoneTimeline";
import { DistributionTable } from "@/components/InvestorPortal/DistributionTable";
import { ReportItem, ProjectUpdateItem } from "@/components/InvestorPortal/ContentItems";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function InvestorPortal() {
  const projects = [
    {
      name: "The Berkeley Residencies",
      location: "Manchester, UK",
      investmentAmount: "£12.4M",
      equityPercentage: "16.5%",
      status: "healthy" as const,
      progress: 85,
      gdv: "£84M",
      profitMargin: "22%",
      completionDate: "Q3 2025",
      img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b5ef9b0b16_4a6655dd19f97a41.png",
    },
    {
      name: "Canary Wharf Loft",
      location: "London, UK",
      investmentAmount: "£18.2M",
      equityPercentage: "24.3%",
      status: "on-track" as const,
      progress: 42,
      gdv: "£112M",
      profitMargin: "18.5%",
      completionDate: "Q1 2026",
      img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_287850e9c6_1b655d4e5103efc3.png",
    },
    {
      name: "Victoria Square Phase II",
      location: "Birmingham, UK",
      investmentAmount: "£9.1M",
      equityPercentage: "12.2%",
      status: "warning" as const,
      progress: 68,
      gdv: "£52M",
      profitMargin: "14%",
      completionDate: "Q4 2025",
      img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b8710d653f_57efda5a40b8d5b5.png",
    },
    {
      name: "Riverside Garden Apartments",
      location: "Bristol, UK",
      investmentAmount: "£7.5M",
      equityPercentage: "10.0%",
      status: "healthy" as const,
      progress: 15,
      gdv: "£38M",
      profitMargin: "19.2%",
      completionDate: "Q2 2026",
      img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_63cac0686e_deb532ec48e1d427.png",
    },
    {
      name: "Cambridge Tech Hub",
      location: "Cambridge, UK",
      investmentAmount: "£15.8M",
      equityPercentage: "21.1%",
      status: "on-track" as const,
      progress: 30,
      gdv: "£95M",
      profitMargin: "24%",
      completionDate: "Q4 2026",
      img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_be3bfa036b_1209b7477170b791.png",
    },
    {
      name: "The Landmark Tower",
      location: "Leeds, UK",
      investmentAmount: "£11.6M",
      equityPercentage: "15.5%",
      status: "on-track" as const,
      progress: 55,
      gdv: "£68M",
      profitMargin: "20.1%",
      completionDate: "Q1 2026",
      img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1db021c274_d3ee618dd00b7c1f.png",
    },
  ];

  const milestones = [
    {
      projectName: "The Berkeley Residencies",
      milestones: [
        { label: "Groundwork", status: "completed" as const },
        { label: "Structure", status: "completed" as const },
        { label: "Internal Fit-out", status: "current" as const },
        { label: "Practical Completion", status: "upcoming" as const },
      ],
    },
    {
      projectName: "Canary Wharf Loft",
      milestones: [
        { label: "Planning Approval", status: "completed" as const },
        { label: "Piling & Foundations", status: "completed" as const },
        { label: "Superstructure", status: "current" as const },
        { label: "Cladding", status: "upcoming" as const },
      ],
    },
    {
      projectName: "Cambridge Tech Hub",
      milestones: [
        { label: "Land Acquisition", status: "completed" as const },
        { label: "Demolition", status: "completed" as const },
        { label: "Foundation Work", status: "current" as const },
        { label: "Frame Erection", status: "upcoming" as const },
      ],
    },
  ];

  const distributionData = [
    {
      project: "The Berkeley Residencies",
      amount: "£1,250,000",
      date: "Sep 15, 2025",
      status: "on-track" as const,
      notes: "Final stage profit distribution",
    },
    {
      project: "Southampton Docks",
      amount: "£450,000",
      date: "Jun 20, 2025",
      status: "healthy" as const,
      notes: "Quarterly rental income",
    },
    {
      project: "Victoria Square",
      amount: "£820,000",
      date: "Oct 10, 2025",
      status: "delayed" as const,
      notes: "Delayed by fit-out completion",
    },
    {
      project: "Edinburgh Grand",
      amount: "£2,100,000",
      date: "Dec 05, 2025",
      status: "on-track" as const,
      notes: "Refinance exit payment",
    },
  ];

  const performanceData = [
    { project: "The Berkeley Residencies", equity: "£12.4M", valuation: "£15.8M", gain: "+27.4%", irr: "21.2%", completion: "Aug 2025", status: "healthy" as const },
    { project: "Canary Wharf Loft", equity: "£18.2M", valuation: "£20.1M", gain: "+10.4%", irr: "17.8%", completion: "Jan 2026", status: "on-track" as const },
    { project: "Victoria Square Phase II", equity: "£9.1M", valuation: "£9.4M", gain: "+3.3%", irr: "12.5%", completion: "Nov 2025", status: "warning" as const },
    { project: "Riverside Garden Apartments", equity: "£7.5M", valuation: "£7.5M", gain: "0.0%", irr: "18.2%", completion: "May 2026", status: "healthy" as const },
    { project: "Cambridge Tech Hub", equity: "£15.8M", valuation: "£16.2M", gain: "+2.5%", irr: "24.0%", completion: "Dec 2026", status: "on-track" as const },
    { project: "The Landmark Tower", equity: "£11.6M", valuation: "£13.4M", gain: "+15.5%", irr: "19.5%", completion: "Feb 2026", status: "on-track" as const },
  ];

  const reports = [
    { title: "Q1 2025 Investor Report", date: "Apr 15, 2025" },
    { title: "Financial Summary Dec 2024", date: "Jan 10, 2025" },
    { title: "Annual Portfolio Review 2024", date: "Dec 20, 2024" },
    { title: "Q3 2024 Project Audit", date: "Oct 12, 2024" },
    { title: "Market Outlook Report Q2", date: "May 05, 2024" },
    { title: "Tax Statement FY 2023-24", date: "Apr 02, 2024" },
  ];

  const updates = [
    { projectName: "Berkeley Residencies", update: "Internal plastering now 90% complete across all levels. Cabinetry installation starting next week.", date: "2 days ago", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b7abb2231e_eba737461ac9eeb9.png"},
    { projectName: "Canary Wharf Loft", update: "Cranes have been dismantled. Window installation is progressing on the upper floors ahead of schedule.", date: "1 week ago", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0bcdc2c725_5b4059758b6240ef.png"},
    { projectName: "Victoria Square", update: "Minor delay in material delivery for the facade. Team working weekends to maintain the Q4 timeline.", date: "3 days ago", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7949cee235_cbaf07f36babdc9f.png"},
    { projectName: "Cambridge Tech Hub", update: "Foundation pouring is complete. Steel frame structure will begin rising from Monday.", date: "4 days ago", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_41b063ef8f_1a446830169c5f19.png"},
    { projectName: "Riverside Garden", update: "Site clearance and preliminary drainage work finalized. Piling rigs arrive on site tomorrow.", date: "1 week ago", img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e4ac3f98d3_2bbf943660c066b1.png"},
  ];

  return (
    <AppLayout>
      <div className="p-8 space-y-8">
        {/* PAGE HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Investor Portal</h1>
            <p className="text-muted-foreground mt-1">Transparent project visibility for your investment portfolio</p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Download Portfolio Report
            </Button>
            <div className="flex items-center gap-3 px-3 py-1.5 bg-card border border-border rounded-lg shadow-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                PC
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-none">Pacific Capital Partners</span>
                <span className="text-[10px] text-muted-foreground mt-0.5">Tier 1 Investor</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1 — PORTFOLIO SUMMARY BANNER */}
        <PortfolioBanner
          totalInvestment="£74.6M"
          currentValue="£89.2M"
          projectedIRR="18.4%"
          totalProjects={6}
        />

        {/* SECTION 2 — KPI CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard
            title="Equity Deployed"
            value="£74.6M"
            trend="up"
            trendValue="+4.2%"
            trendLabel="from last quarter"
            icon={<BarChart3 className="w-5 h-5 text-primary" />}
          />
          <KpiCard
            title="Portfolio Uplift"
            value="+£14.6M"
            subtitle="19.6% Increase"
            highlight="green"
            icon={<TrendingUp className="w-5 h-5 text-green-500" />}
          />
          <KpiCard
            title="Capital at Risk"
            value="£8.2M"
            subtitle="11% of Portfolio"
            highlight="amber"
            icon={<Info className="w-5 h-5 text-amber-500" />}
          />
          <KpiCard
            title="Distributions Received"
            value="£2.8M"
            subtitle="To Date"
            icon={<Wallet className="w-5 h-5 text-blue-500" />}
          />
        </div>

        {/* SECTION 3 — PROJECT PORTFOLIO CARDS */}
        <div>
          <h2 className="text-xl font-bold mb-6">Active Portfolio Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <InvestmentProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>

        {/* SECTION 4 — FINANCIAL TRANSPARENCY TABLE */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Investment Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs uppercase font-semibold">Project</TableHead>
                  <TableHead className="text-xs uppercase font-semibold">Equity In</TableHead>
                  <TableHead className="text-xs uppercase font-semibold">Current Valuation</TableHead>
                  <TableHead className="text-xs uppercase font-semibold text-right">Unrealised Gain</TableHead>
                  <TableHead className="text-xs uppercase font-semibold text-right">IRR</TableHead>
                  <TableHead className="text-xs uppercase font-semibold">Completion</TableHead>
                  <TableHead className="text-xs uppercase font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceData.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{row.project}</TableCell>
                    <TableCell>{row.equity}</TableCell>
                    <TableCell>{row.valuation}</TableCell>
                    <TableCell className={cn(
                      "text-right font-bold",
                      row.gain.startsWith("+") ? "text-green-600" : "text-muted-foreground"
                    )}>
                      {row.gain}
                    </TableCell>
                    <TableCell className="text-right font-bold">{row.irr}</TableCell>
                    <TableCell>{row.completion}</TableCell>
                    <TableCell>
                      <StatusBadge status={row.status} size="sm" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* SECTION 5 — MILESTONE TRACKER */}
        <MilestoneTimeline projects={milestones} />

        {/* SECTION 6 — REPORTS & DOCUMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold">Latest Reports</CardTitle>
              <Button variant="link" className="text-xs">View Archive</Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {reports.map((report, i) => (
                <ReportItem key={i} {...report} />
              ))}
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold">Project Updates</CardTitle>
              <Button variant="link" className="text-xs">View All</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {updates.map((update, i) => (
                <ProjectUpdateItem key={i} {...update} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* SECTION 7 — DISTRIBUTION SCHEDULE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DistributionTable data={distributionData} />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-bold">Distribution Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">Pending Distributions</span>
                <span className="text-lg font-bold">£4.62M</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">Average Yield</span>
                <span className="text-lg font-bold">7.4%</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm text-muted-foreground">Next Scheduled Pay-out</span>
                <span className="text-lg font-bold text-primary">Jun 20, 2025</span>
              </div>
              <Button className="w-full mt-4" variant="secondary">Update Distribution Preferences</Button>
            </CardContent>
          </Card>
        </div>

        {/* SECTION 8 — MARKET COMMENTARY */}
        <Card className="bg-muted/30 border-dashed">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                <Info className="w-4 h-4 text-primary" />
              </div>
              AI Market Commentary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The UK residential development market continues to show resilience despite fluctuating interest rates. 
                  Regional cities like Manchester and Birmingham are outperforming London in terms of rental growth, 
                  driven by a persistent supply-demand imbalance. Our AI analysis indicates that your portfolio's 
                  concentration in these high-growth regions (representing 64% of total equity) positions you well 
                  for the anticipated capital appreciation in 2025. Construction costs are beginning to stabilize, 
                  which we expect will bolster profit margins across your active developments in the second half of the year.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Regional Price Growth</p>
                  <p className="text-xl font-bold text-foreground">+5.8% <span className="text-xs font-normal text-muted-foreground">y/y</span></p>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Yield Trends</p>
                  <p className="text-xl font-bold text-foreground">Expanding <span className="text-xs font-normal text-muted-foreground">avg 6.2%</span></p>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Planning Activity</p>
                  <p className="text-xl font-bold text-foreground">-12% <span className="text-xs font-normal text-muted-foreground">decrease in starts</span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}