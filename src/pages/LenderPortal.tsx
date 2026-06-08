import { AppLayout } from "@/components/AppLayout";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { FacilityBanner } from "@/components/LenderPortal/FacilityBanner";
import { CovenantCard } from "@/components/LenderPortal/CovenantCard";
import { RiskMatrix } from "@/components/LenderPortal/RiskMatrix";
import { DrawdownHistoryChart } from "@/components/LenderPortal/DrawdownHistoryChart";
import { 
  Building2, 
  FileText, 
  Download, 
  ChevronRight, 
  Lock, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Plus,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const LOAN_BOOK_DATA = [
  { id: "FAC-901", project: "The Grand Residency", type: "Senior Debt", amount: "£25.0M", drawn: "£18.5M", ltv: 58, rate: "SONIA + 3.2%", maturity: "Jun 2025", status: "Active" },
  { id: "FAC-902", project: "Riverfront Plaza", type: "Mezzanine", amount: "£12.5M", drawn: "£10.0M", ltv: 68, rate: "Fixed 8.5%", maturity: "Sep 2024", status: "Review" },
  { id: "FAC-903", project: "Oakwood Heights", type: "Development", amount: "£45.0M", drawn: "£32.2M", ltv: 61, rate: "SONIA + 3.5%", maturity: "Dec 2025", status: "Active" },
  { id: "FAC-904", project: "Harbor View Mall", type: "Senior Debt", amount: "£38.0M", drawn: "£25.0M", ltv: 64, rate: "SONIA + 3.0%", maturity: "Mar 2026", status: "Active" },
  { id: "FAC-905", project: "Central Park Towers", type: "Mezzanine", amount: "£15.0M", drawn: "£8.5M", ltv: 55, rate: "Fixed 7.8%", maturity: "Jan 2026", status: "Active" },
  { id: "FAC-906", project: "West End Lofts", type: "Bridge Loan", amount: "£7.5M", drawn: "£4.3M", ltv: 52, rate: "Fixed 6.5%", maturity: "Oct 2024", status: "Active" },
];

const PENDING_DRAWDOWNS = [
  { project: "The Grand Residency", amount: "£1.2M", requested: "2 days ago", status: "Complete", ref: "DR-442" },
  { project: "Oakwood Heights", amount: "£2.5M", requested: "1 day ago", status: "Pending Docs", ref: "DR-445" },
  { project: "Harbor View Mall", amount: "£850k", requested: "5 hours ago", status: "Review", ref: "DR-448" },
];

const COVENANTS = [
  { name: "LTV Covenant", threshold: "≤ 65%", current: "61.2%", trend: "up" as const, status: "healthy" as const, progress: 61 },
  { name: "DSCR (Minimum)", threshold: "≥ 1.25x", current: "1.38x", trend: "neutral" as const, status: "healthy" as const, progress: 78 },
  { name: "Cost Overrun Limit", threshold: "≤ 10%", current: "3.2%", trend: "down" as const, status: "healthy" as const, progress: 32 },
  { name: "Interest Cover Ratio", threshold: "≥ 2.0x", current: "2.1x", trend: "down" as const, status: "warning" as const, progress: 52 },
  { name: "Pre-Sales Target", threshold: "≥ 40%", current: "42%", trend: "up" as const, status: "healthy" as const, progress: 42 },
  { name: "Tenant Concentration", threshold: "≤ 20%", current: "18%", trend: "neutral" as const, status: "warning" as const, progress: 90 },
];

const SECURITY_REGISTER = [
  { asset: "Grand Residency Phase 1", type: "1st Legal Charge", value: "£45.0M", valuation: "Jan 2024", ltv: "55.6%" },
  { asset: "Riverfront Site A", type: "Debenture", value: "£18.2M", valuation: "Dec 2023", ltv: "68.7%" },
  { asset: "Oakwood Common Land", type: "1st Legal Charge", value: "£62.0M", valuation: "Feb 2024", ltv: "51.9%" },
  { asset: "Harbor Commercial Units", type: "Charge over Shares", value: "£55.0M", valuation: "Mar 2024", ltv: "45.4%" },
];

const REPORTING_SCHEDULE = [
  { type: "Monthly Management Accounts", frequency: "Monthly", due: "05 Nov 2023", last: "03 Oct 2023", status: "on-track" as const },
  { type: "Quarterly Compliance Cert", frequency: "Quarterly", due: "15 Dec 2023", last: "14 Sep 2023", status: "on-track" as const },
  { type: "Annual Valuations", frequency: "Annual", due: "31 Dec 2023", last: "15 Jan 2023", status: "at-risk" as const },
  { type: "Insurance Renewal Cert", frequency: "Annual", due: "20 Nov 2023", last: "19 Nov 2022", status: "healthy" as const },
  { type: "ESG Performance Report", frequency: "Bi-Annual", due: "15 Jan 2024", last: "10 Jul 2023", status: "on-track" as const },
];

export default function LenderPortal() {
  return (
    <AppLayout>
      <div className="p-6 lg:p-8 max-w-[1600px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Lender Portal</h1>
            <p className="text-muted-foreground mt-1">
              Secure access to funding status, drawdown visibility and project risk monitoring
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-muted px-3 py-1.5 rounded-lg border border-border flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Northgate Bank PLC</span>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <FileText className="w-4 h-4" />
              Generate Lender Pack
            </button>
          </div>
        </div>

        {/* SECTION 1 — FACILITY OVERVIEW BANNER */}
        <FacilityBanner 
          totalFacility="£143M"
          drawnToDate="£98.5M"
          available="£44.5M"
          expiry="Dec 2026"
        />

        {/* SECTION 2 — KPI CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KpiCard 
            title="LTV Ratio" 
            value="61.2%" 
            subtitle="Limit: 65.0%" 
            highlight="green"
            trend="up"
            trendValue="0.4%"
            trendLabel="from last month"
          />
          <KpiCard 
            title="DSCR" 
            value="1.38x" 
            subtitle="Min: 1.25x" 
            highlight="green"
            trend="neutral"
            trendValue="Flat"
          />
          <KpiCard 
            title="Cost Overrun" 
            value="3.2%" 
            subtitle="Limit: 10.0%" 
            highlight="green"
            trend="down"
            trendValue="0.8%"
          />
          <KpiCard 
            title="Days to Maturity" 
            value="638" 
            subtitle="Dec 2026" 
            highlight="amber"
          />
        </div>

        {/* SECTION 3 — LOAN BOOK TABLE */}
        <section className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h2 className="text-lg font-bold">Active Facilities</h2>
            <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
              View All Facilities <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-border text-muted-foreground uppercase text-[10px] tracking-wider font-semibold">
                  <th className="px-6 py-4">Facility #</th>
                  <th className="px-6 py-4">Project Name</th>
                  <th className="px-6 py-4">Facility Type</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Drawn</th>
                  <th className="px-6 py-4 text-center">LTV %</th>
                  <th className="px-6 py-4">Rate</th>
                  <th className="px-6 py-4">Maturity</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {LOAN_BOOK_DATA.map((row) => (
                  <tr key={row.id} className="hover:bg-accent/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">{row.id}</td>
                    <td className="px-6 py-4 font-medium text-foreground">{row.project}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.type}</td>
                    <td className="px-6 py-4 font-semibold">{row.amount}</td>
                    <td className="px-6 py-4">{row.drawn}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded text-xs font-bold",
                        row.ltv < 60 ? "text-green-600 bg-green-50" : 
                        row.ltv < 65 ? "text-amber-600 bg-amber-50" : 
                        "text-red-600 bg-red-50"
                      )}>
                        {row.ltv}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{row.rate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.maturity}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={row.status === "Active" ? "healthy" : "warning"} label={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4 — DRAWDOWN VISIBILITY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-6">Drawdown History</h2>
            <DrawdownHistoryChart />
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-6">Pending Drawdown Requests</h2>
            <div className="space-y-4">
              {PENDING_DRAWDOWNS.map((req, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg bg-accent/20 hover:bg-accent/40 transition-colors group">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">{req.project}</h4>
                        <span className="text-[10px] text-muted-foreground font-mono bg-muted px-1 rounded">{req.ref}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                        <span className="font-medium text-foreground">{req.amount}</span>
                        <span>•</span>
                        <span>Requested {req.requested}</span>
                        <span>•</span>
                        <span className={cn(
                          "px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter",
                          req.status === "Complete" ? "bg-green-100 text-green-700" : 
                          req.status === "Review" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                        )}>
                          {req.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Review <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button className="w-full py-3 border border-dashed border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all flex items-center justify-center gap-2">
                View All Pending Requests
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 5 — COVENANT MONITORING DASHBOARD */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Covenant Compliance Status</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Overall Compliance:</span>
              <StatusBadge status="healthy" label="92% Passing" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COVENANTS.map((cov, i) => (
              <CovenantCard key={i} {...cov} />
            ))}
          </div>
        </section>

        {/* SECTION 6 — RISK INDICATORS */}
        <section className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-bold">Project Risk Matrix</h2>
          </div>
          <RiskMatrix />
        </section>

        {/* SECTION 7 — SECURITY & DOCUMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card border border-border rounded-xl overflow-hidden shadow-sm h-full">
            <div className="p-6 border-b border-border flex justify-between items-center">
              <h2 className="text-lg font-bold">Security Register</h2>
              <button className="text-xs font-semibold text-primary">Manage Collateral</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border text-muted-foreground uppercase text-[10px] tracking-wider font-semibold">
                    <th className="px-6 py-4">Asset</th>
                    <th className="px-6 py-4">Charge Type</th>
                    <th className="px-6 py-4">Value</th>
                    <th className="px-6 py-4">Last Valuation</th>
                    <th className="px-6 py-4">LTV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {SECURITY_REGISTER.map((row, i) => (
                    <tr key={i} className="hover:bg-accent/30 transition-colors">
                      <td className="px-6 py-4 font-medium flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        {row.asset}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground text-xs">{row.type}</td>
                      <td className="px-6 py-4 font-semibold">{row.value}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.valuation}</td>
                      <td className="px-6 py-4 font-bold">{row.ltv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Secure Documents</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "Facility Agreement", date: "Jan 2023", size: "4.2 MB" },
                { name: "Valuation Reports", date: "Mar 2024", size: "12.8 MB" },
                { name: "Insurance Certificate", date: "Nov 2023", size: "1.1 MB" },
                { name: "Security Documents", date: "Dec 2022", size: "8.5 MB" },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg bg-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-background flex items-center justify-center text-muted-foreground">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{doc.name}</p>
                      <p className="text-[10px] text-muted-foreground">{doc.date} • {doc.size}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-accent rounded-full transition-colors text-muted-foreground">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button className="w-full mt-2 py-2 text-xs font-semibold text-primary hover:bg-primary/5 rounded-lg transition-colors border border-primary/20">
                Access Data Room
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 8 — REPORTING & COMPLIANCE */}
        <section className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">Reporting Schedule</h2>
              <p className="text-xs text-muted-foreground">Obligatory reporting requirements as per Facility Agreement</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
              <Plus className="w-4 h-4" />
              Submit Compliance Report
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-border text-muted-foreground uppercase text-[10px] tracking-wider font-semibold">
                  <th className="px-6 py-4">Report Type</th>
                  <th className="px-6 py-4">Frequency</th>
                  <th className="px-6 py-4">Next Due</th>
                  <th className="px-6 py-4">Last Submitted</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {REPORTING_SCHEDULE.map((row, i) => (
                  <tr key={i} className="hover:bg-accent/30 transition-colors">
                    <td className="px-6 py-4 font-medium flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-muted-foreground" />
                      {row.type}
                    </td>
                    <td className="px-6 py-4 text-xs">{row.frequency}</td>
                    <td className="px-6 py-4 font-semibold">{row.due}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.last}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:underline text-xs font-semibold">View History</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}