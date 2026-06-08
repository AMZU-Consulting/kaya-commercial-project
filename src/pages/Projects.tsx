import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import type { ProjectData } from "@/components/Projects/ProjectCard";
import { cn } from "@/lib/utils";
import { ProjectTable } from "@/components/Projects/ProjectTable";
import { PortfolioTimeline } from "@/components/Projects/PortfolioTimeline";
import {
  Search,
  Plus,
  LayoutGrid,
  List,
  Filter,
  MapPin,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  Briefcase,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  MoreVertical,
  History
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PROJECTS_DATA: ProjectData[] = [
  {
    id: "1",
    name: "Apex Heights Residential",
    type: "Residential",
    location: "Manchester, UK",
    status: "healthy",
    budget: 45000000,
    spend: 28500000,
    startDate: "Jan 2023",
    duration: "24 Months",
    completion: 65,
    pmName: "Sarah Jenkins",
    pmAvatar: "https://i.pravatar.cc/150?u=sarah",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_050a3fe2c3558119.png"},
  {
    id: "2",
    name: "River Thames Quay",
    type: "Mixed Use",
    location: "London, UK",
    status: "warning",
    budget: 65000000,
    spend: 42000000,
    startDate: "Mar 2023",
    duration: "36 Months",
    completion: 45,
    pmName: "David Miller",
    pmAvatar: "https://i.pravatar.cc/150?u=david",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_eba25e2920f3b625.png"},
  {
    id: "3",
    name: "Solstice Tech Park",
    type: "Commercial",
    location: "Cambridge, UK",
    status: "on-track",
    budget: 32000000,
    spend: 12000000,
    startDate: "Oct 2023",
    duration: "18 Months",
    completion: 25,
    pmName: "Elena Rodriguez",
    pmAvatar: "https://i.pravatar.cc/150?u=elena",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_9b2690867ec37f81.png"},
  {
    id: "4",
    name: "The Grand Plaza",
    type: "Commercial",
    location: "Birmingham, UK",
    status: "critical",
    budget: 28500000,
    spend: 26000000,
    startDate: "Nov 2022",
    duration: "20 Months",
    completion: 88,
    pmName: "James Wilson",
    pmAvatar: "https://i.pravatar.cc/150?u=james",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_b8319a2f16e5f586.png"},
  {
    id: "5",
    name: "Greenfield Village",
    type: "Residential",
    location: "Bristol, UK",
    status: "healthy",
    budget: 15000000,
    spend: 45000000,
    startDate: "Feb 2024",
    duration: "14 Months",
    completion: 12,
    pmName: "Mark Thompson",
    pmAvatar: "https://i.pravatar.cc/150?u=mark",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_c4695fbe404341ab.png"},
  {
    id: "6",
    name: "Portside Logistics Hub",
    type: "Commercial",
    location: "Southampton, UK",
    status: "on-track",
    budget: 22000000,
    spend: 18500000,
    startDate: "May 2023",
    duration: "12 Months",
    completion: 78,
    pmName: "Sophie Chen",
    pmAvatar: "https://i.pravatar.cc/150?u=sophie",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_c095588332e53dca.png"},
  {
    id: "7",
    name: "Crescent Row Apartments",
    type: "Residential",
    location: "Leeds, UK",
    status: "warning",
    budget: 12500000,
    spend: 9000000,
    startDate: "Sep 2023",
    duration: "18 Months",
    completion: 55,
    pmName: "Robert Taylor",
    pmAvatar: "https://i.pravatar.cc/150?u=robert",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_6a1c1fbc6d68999a.png"},
  {
    id: "8",
    name: "Skyline Office Tower",
    type: "Commercial",
    location: "Glasgow, UK",
    status: "healthy",
    budget: 55000000,
    spend: 15000000,
    startDate: "Dec 2023",
    duration: "30 Months",
    completion: 20,
    pmName: "Lisa Wong",
    pmAvatar: "https://i.pravatar.cc/150?u=lisa",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_5cfc08373cd75234.png"},
  {
    id: "9",
    name: "Central Station Plaza",
    type: "Mixed Use",
    location: "Newcastle, UK",
    status: "on-track",
    budget: 38000000,
    spend: 32000000,
    startDate: "Jan 2022",
    duration: "28 Months",
    completion: 92,
    pmName: "Thomas Brown",
    pmAvatar: "https://i.pravatar.cc/150?u=thomas",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_340bcac3f7bd27ac.png"},
  {
    id: "10",
    name: "Harbor Point Marina",
    type: "Mixed Use",
    location: "Liverpool, UK",
    status: "warning",
    budget: 48000000,
    spend: 25000000,
    startDate: "Aug 2023",
    duration: "24 Months",
    completion: 38,
    pmName: "Rachel Adams",
    pmAvatar: "https://i.pravatar.cc/150?u=rachel",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_f643995ac04ac3c7.png"},
  {
    id: "11",
    name: "Willow Creek Estates",
    type: "Residential",
    location: "Oxford, UK",
    status: "healthy",
    budget: 8500000,
    spend: 3200000,
    startDate: "Apr 2024",
    duration: "12 Months",
    completion: 15,
    pmName: "Kevin Park",
    pmAvatar: "https://i.pravatar.cc/150?u=kevin",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_2f6c7ba396222ded.png"},
  {
    id: "12",
    name: "Metro Innovation Center",
    type: "Commercial",
    location: "Sheffield, UK",
    status: "critical",
    budget: 19000000,
    spend: 18500000,
    startDate: "Jun 2023",
    duration: "12 Months",
    completion: 85,
    pmName: "Alice Cooper",
    pmAvatar: "https://i.pravatar.cc/150?u=alice",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b17cac7460_b7ac4da48e09b132.png"}
];

export default function Projects() {
  const [viewMode, setViewMode] = useState<"card" | "table">("card");

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', notation: 'compact', maximumFractionDigits: 1 }).format(val);

  return (
    <AppLayout>
      <div className="p-8 max-w-[1600px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-1 text-sm font-medium">
              24 active projects across your portfolio
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:flex gap-2 font-semibold">
              Export Report
            </Button>
            <Button className="gap-2 bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4" />
              New Project
            </Button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md py-4 border-b border-border -mx-4 px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects by name, location or manager..."
                className="pl-10 bg-card border-border"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px] bg-card border-border">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="healthy">Healthy</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[140px] bg-card border-border">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="mixed">Mixed Use</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[140px] bg-card border-border">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="north">North</SelectItem>
                  <SelectItem value="midlands">Midlands</SelectItem>
                </SelectContent>
              </Select>

              <div className="h-8 w-px bg-border mx-1 hidden sm:block" />

              <div className="bg-muted p-1 rounded-lg flex items-center gap-1 shrink-0 shadow-inner">
                <Button
                  variant={viewMode === "card" ? "secondary" : "ghost"}
                  size="sm"
                  className={cn("h-7 px-3 text-xs font-semibold rounded-md", viewMode === "card" && "bg-background shadow-sm")}
                  onClick={() => setViewMode("card")}
                >
                  <LayoutGrid className="w-3.5 h-3.5 mr-1.5" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === "table" ? "secondary" : "ghost"}
                  size="sm"
                  className={cn("h-7 px-3 text-xs font-semibold rounded-md", viewMode === "table" && "bg-background shadow-sm")}
                  onClick={() => setViewMode("table")}
                >
                  <List className="w-3.5 h-3.5 mr-1.5" />
                  Table
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Card or Table View */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {viewMode === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {PROJECTS_DATA.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <ProjectTable projects={PROJECTS_DATA} />
          )}
        </div>

        {/* Portfolio Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-xl border border-border bg-card overflow-hidden divide-x divide-y sm:divide-y-0 divide-border shadow-sm">
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Budget</p>
              <p className="text-2xl font-bold">£248.5M</p>
            </div>
          </div>
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Spend</p>
              <p className="text-2xl font-bold">£169.9M</p>
            </div>
          </div>
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">On Track</p>
              <p className="text-2xl font-bold">16</p>
            </div>
          </div>
          <div className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">At Risk</p>
              <p className="text-2xl font-bold text-amber-600">8</p>
            </div>
          </div>
        </div>

        {/* Portfolio Timeline View */}
        <PortfolioTimeline projects={PROJECTS_DATA} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Financial Summary Table */}
          <div className="lg:col-span-2">
            <Card className="shadow-sm border-border overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-lg">Portfolio Financial Summary</CardTitle>
                  <CardDescription>Top projects by financial engagement</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-xs font-semibold gap-1 text-primary">
                  View Full Portfolio <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/30">
                      <TableHead className="font-bold pl-6">Project</TableHead>
                      <TableHead className="font-bold text-right">Budget</TableHead>
                      <TableHead className="font-bold text-right">Drawn</TableHead>
                      <TableHead className="font-bold text-right">Remaining</TableHead>
                      <TableHead className="font-bold text-right">Variance %</TableHead>
                      <TableHead className="font-bold text-right pr-6 text-primary">Forecast</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {PROJECTS_DATA.slice(0, 6).map((project) => (
                      <TableRow key={project.id} className="hover:bg-muted/10">
                        <TableCell className="font-medium pl-6">{project.name}</TableCell>
                        <TableCell className="text-right">{formatCurrency(project.budget)}</TableCell>
                        <TableCell className="text-right">{formatCurrency(project.spend)}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{formatCurrency(project.budget - project.spend)}</TableCell>
                        <TableCell className="text-right font-medium text-green-600">+1.2%</TableCell>
                        <TableCell className="text-right font-bold pr-6 text-primary">{formatCurrency(project.budget * 1.05)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Recent Project Updates */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Recent Updates</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                <History className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  project: "Apex Heights",
                  type: "Milestone",
                  desc: "Foundations completed on schedule.",
                  time: "2h ago",
                  user: "Sarah J.",
                  avatar: "https://i.pravatar.cc/150?u=sarah"
                },
                {
                  id: 2,
                  project: "River Thames",
                  type: "Finance",
                  desc: "Variation order #45 approved for £120k.",
                  time: "5h ago",
                  user: "David M.",
                  avatar: "https://i.pravatar.cc/150?u=david"
                },
                {
                  id: 3,
                  project: "The Grand Plaza",
                  type: "Risk",
                  desc: "Weather delays affecting structural steel delivery.",
                  time: "1d ago",
                  user: "James W.",
                  avatar: "https://i.pravatar.cc/150?u=james"
                },
              ].map((update) => (
                <div key={update.id} className="bg-card border border-border p-4 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs">{update.project}</span>
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider",
                      update.type === "Milestone" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                      update.type === "Finance" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    )}>
                      {update.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug mb-4">
                    {update.desc}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={update.avatar} />
                        <AvatarFallback>{update.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium">{update.user}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {update.time}
                    </span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full text-xs font-bold h-10 border-dashed">
                Load More Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}