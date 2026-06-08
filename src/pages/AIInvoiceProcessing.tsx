import { AppLayout } from "@/components/AppLayout";
import { KpiCard } from "@/components/KpiCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileCheck, 
  Clock, 
  Zap, 
  TrendingUp, 
  Download, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  CheckCircle,
  MessageSquare,
  XCircle,
  Save
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Page Scoped Components
import { InvoiceUploadZone } from "@/components/AIInvoiceProcessing/InvoiceUploadZone";
import { ProcessingQueueTable } from "@/components/AIInvoiceProcessing/ProcessingQueueTable";
import { ExtractedDataPanel } from "@/components/AIInvoiceProcessing/ExtractedDataPanel";
import { ExceptionPanel } from "@/components/AIInvoiceProcessing/ExceptionPanel";

export default function AIInvoiceProcessing() {
  return (
    <AppLayout>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="px-8 py-6 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">AI Invoice Processing</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Upload invoices for automated extraction, validation and approval
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2 relative">
                Processing Queue
                <Badge className="bg-primary hover:bg-primary/90 h-5 px-1.5 min-w-[20px] justify-center">3</Badge>
              </Button>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Batch Upload
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1 px-8 py-8 space-y-10 max-w-7xl mx-auto w-full">
          {/* Section 6 — AI PERFORMANCE STATS (Moving up for visibility) */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard
              title="Invoices Processed"
              value="247"
              subtitle="This Month"
              icon={<FileCheck className="w-5 h-5 text-indigo-600" />}
              iconBg="bg-indigo-50"
              trend="up"
              trendValue="+12%"
              trendLabel="vs last month"
            />
            <KpiCard
              title="Extraction Accuracy"
              value="96.3%"
              subtitle="Across all fields"
              icon={<Zap className="w-5 h-5 text-emerald-600" />}
              iconBg="bg-emerald-50"
              trend="up"
              trendValue="+0.8%"
              trendLabel="since update"
            />
            <KpiCard
              title="Processing Time"
              value="8s"
              subtitle="Average per document"
              icon={<Clock className="w-5 h-5 text-amber-600" />}
              iconBg="bg-amber-50"
              trend="down"
              trendValue="-2s"
              trendLabel="efficiency gain"
            />
            <KpiCard
              title="Cost Saved"
              value="£4,200"
              subtitle="Estimated labor savings"
              icon={<TrendingUp className="w-5 h-5 text-emerald-600" />}
              iconBg="bg-emerald-50"
              trend="up"
              trendValue="£480"
              trendLabel="this week"
              highlight="green"
            />
          </section>

          {/* SECTION 1 — UPLOAD ZONE */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <InvoiceUploadZone />
            </div>
            <div>
              <ProcessingQueueTable />
            </div>
          </section>

          {/* SECTION 3 — EXTRACTED DATA PREVIEW */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Active Review</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground italic">Last extracted: 2 minutes ago</span>
              </div>
            </div>
            <ExtractedDataPanel />
          </section>

          {/* SECTION 4 — APPROVAL ACTIONS BAR (Integrated as a sticky-ish card or separate section) */}
          <section className="sticky bottom-8 z-40">
            <div className="bg-card border border-border rounded-xl shadow-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 w-full md:w-auto">
                <Textarea 
                  placeholder="Add approval comments or internal notes..." 
                  className="min-h-[40px] resize-none border-none bg-muted/30 focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                <Button variant="outline" className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Draft
                </Button>
                <Button variant="outline" className="gap-2 text-destructive hover:bg-destructive/10">
                  <XCircle className="w-4 h-4" />
                  Reject
                </Button>
                <Button variant="outline" className="gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Clarify
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2 min-w-[140px]">
                  <CheckCircle className="w-4 h-4" />
                  Approve & Post
                </Button>
              </div>
            </div>
          </section>

          {/* SECTION 5 & 7 — HISTORY & EXCEPTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight">Recent Invoice Activity</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search invoices..." className="pl-9 h-9 w-[200px]" />
                  </div>
                  <Button variant="outline" size="sm" className="h-9 gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 gap-2">
                    <Download className="w-4 h-4" />
                    Export CSV
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/30">
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "INV-4421", supplier: "Standard Steel", amount: "£14,500.00", project: "Sky Tower", date: "Today, 10:15", status: "Approved" },
                      { id: "INV-4420", supplier: "Eco Glazing", amount: "£3,200.00", project: "River Wharf", date: "Today, 09:40", status: "Approved" },
                      { id: "INV-4419", supplier: "Rapid Plant Hire", amount: "£850.00", project: "Sky Tower", date: "Yesterday", status: "Needs Review" },
                      { id: "INV-4418", supplier: "Electric Direct", amount: "£2,100.00", project: "River Wharf", date: "Yesterday", status: "Rejected" },
                      { id: "INV-4417", supplier: "Waste Co.", amount: "£450.00", project: "Sky Tower", date: "Mar 15, 2024", status: "Approved" },
                      { id: "INV-4416", supplier: "Safety First Ltd", amount: "£1,200.00", project: "Sky Tower", date: "Mar 14, 2024", status: "Approved" },
                      { id: "INV-4415", supplier: "Brick Master", amount: "£6,800.00", project: "River Wharf", date: "Mar 14, 2024", status: "Approved" },
                      { id: "INV-4414", supplier: "Concrete Solutions", amount: "£2,504.13", project: "Sky Tower", date: "Mar 12, 2024", status: "Needs Review" },
                    ].map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="font-semibold text-primary">{row.id}</TableCell>
                        <TableCell className="font-medium">{row.supplier}</TableCell>
                        <TableCell className="font-bold">{row.amount}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.project}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{row.date}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={
                              row.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                              row.status === 'Rejected' ? 'bg-red-50 text-red-700 border-red-200' : 
                              'bg-amber-50 text-amber-700 border-amber-200'
                            }
                          >
                            {row.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight">Alert Center</h2>
              <ExceptionPanel />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}