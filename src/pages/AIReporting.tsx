import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { ReportTemplateCard } from "@/components/AIReporting/ReportTemplateCard";
import { ReportBuilder } from "@/components/AIReporting/ReportBuilder";
import { ScheduledReportsTable } from "@/components/AIReporting/ScheduledReportsTable";
import { RecentReportsLibrary } from "@/components/AIReporting/RecentReportsLibrary";
import { NarrativePreview } from "@/components/AIReporting/NarrativePreview";
import { ReportAnalytics } from "@/components/AIReporting/ReportAnalytics";
import { IntegrationSettings } from "@/components/AIReporting/IntegrationSettings";
import { 
  BarChart3, 
  FilePieChart, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  HeartPulse,
  Plus,
  Zap
} from "lucide-react";

const TEMPLATES = [
  {
    name: "Portfolio Executive Summary",
    description: "High-level overview of portfolio performance, key metrics, and AI-driven status insights.",
    icon: <BarChart3 className="w-5 h-5" />,
    lastGenerated: "Mar 15, 2025",
    tags: ["AI-Powered", "PDF Export"],
    isHighlighted: true,
  },
  {
    name: "Budget Variance Report",
    description: "Detailed analysis of planned vs actual spend across all active project line items.",
    icon: <TrendingUp className="w-5 h-5" />,
    lastGenerated: "Mar 12, 2025",
    tags: ["Financial", "Excel"],
  },
  {
    name: "Cash Flow Forecast",
    description: "Projections of capital requirements and liquid positions over the next 12-24 months.",
    icon: <FilePieChart className="w-5 h-5" />,
    lastGenerated: "Mar 05, 2025",
    tags: ["Strategic"],
  },
  {
    name: "Investor Progress Report",
    description: "Narrative-heavy report designed for external stakeholders with visual milestone tracking.",
    icon: <Users className="w-5 h-5" />,
    lastGenerated: "Mar 01, 2025",
    tags: ["AI-Powered", "Branded"],
  },
  {
    name: "Lender Compliance Report",
    description: "Automated verification of loan-to-cost ratios and other bank-mandated covenants.",
    icon: <ShieldCheck className="w-5 h-5" />,
    lastGenerated: "Feb 28, 2025",
    tags: ["Compliance"],
  },
  {
    name: "Project Health Scorecard",
    description: "Multi-factor assessment of project risk, timeline, and budget stability.",
    icon: <HeartPulse className="w-5 h-5" />,
    lastGenerated: "Mar 18, 2025",
    tags: ["Real-time"],
  },
];

export function AIReporting() {
  return (
    <AppLayout>
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Reporting</h1>
            <p className="text-muted-foreground mt-1">
              Generate intelligent financial and project reports with automated narrative insights.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">Schedule Report</Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Generate Now
            </Button>
          </div>
        </div>

        {/* SECTION 1 — REPORT TEMPLATES GRID */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Report Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEMPLATES.map((template) => (
              <ReportTemplateCard key={template.name} {...template} />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Builder and Narrative */}
          <div className="lg:col-span-2 space-y-8">
            {/* SECTION 2 — ACTIVE REPORT GENERATION */}
            <section id="report-builder">
              <ReportBuilder />
            </section>

            {/* SECTION 5 — AI NARRATIVE PREVIEW */}
            <section>
              <NarrativePreview />
            </section>

            {/* SECTION 4 — RECENT REPORTS LIBRARY */}
            <section>
              <RecentReportsLibrary />
            </section>
          </div>

          {/* Right Column - Analytics and Settings */}
          <div className="space-y-8">
            {/* SECTION 6 — REPORT ANALYTICS */}
            <section>
              <ReportAnalytics />
            </section>

            {/* SECTION 7 — INTEGRATION & EXPORT SETTINGS */}
            <section>
              <IntegrationSettings />
            </section>

            {/* Additional AI Tip Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 relative overflow-hidden group">
              <Zap className="absolute -right-4 -top-4 w-24 h-24 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Pro Tip: Smart Scheduling
                </h3>
                <p className="text-xs text-primary/80 leading-relaxed">
                  Connect your Lender Portal to automatically send Compliance Reports on the 1st of every month after AI validation.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto text-xs font-bold mt-4">
                  Learn more about workflows →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 — SCHEDULED REPORTS */}
        <section className="pb-8">
          <ScheduledReportsTable />
        </section>
      </div>
    </AppLayout>
  );
}

export default AIReporting;