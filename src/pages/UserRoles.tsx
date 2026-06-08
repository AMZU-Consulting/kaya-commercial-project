import { AppLayout } from "@/components/AppLayout";
import { KpiCard } from "@/components/KpiCard";
import { 
  Users, 
  UserCheck, 
  UserPlus, 
  Building2, 
  Download, 
  History,
  Clock,
  ExternalLink,
  ShieldAlert,
  Send,
  XCircle,
  MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoleCategoryCard } from "@/components/UserRoles/RoleCategoryCard";
import { UsersTable } from "@/components/UserRoles/UsersTable";
import { PermissionsMatrix } from "@/components/UserRoles/PermissionsMatrix";
import { PortalAccessSettings } from "@/components/UserRoles/PortalAccessSettings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const USER_STATS = [
  { title: "Total Users", value: "34", icon: <Users className="w-5 h-5 text-indigo-600" />, iconBg: "bg-indigo-50", highlight: "indigo" as const },
  { title: "Internal Team", value: "18", icon: <UserCheck className="w-5 h-5 text-emerald-600" />, iconBg: "bg-emerald-50", highlight: "green" as const },
  { title: "Investors", value: "10", icon: <Building2 className="w-5 h-5 text-blue-600" />, iconBg: "bg-blue-50", highlight: "indigo" as const },
  { title: "Lenders", value: "6", icon: <Building2 className="w-5 h-5 text-teal-600" />, iconBg: "bg-teal-50", highlight: "green" as const },
];

const ROLE_CATEGORIES = [
  {
    title: "Internal Team",
    description: "Core company employees with varying levels of project management and financial access.",
    roles: [
      { name: "Super Admin", badgeVariant: "default" as const, description: "Full access to all modules and system settings." },
      { name: "Project Manager", badgeVariant: "secondary" as const, description: "Manage project timelines, site logs, and budgets." },
      { name: "Finance Manager", badgeVariant: "secondary" as const, description: "Handle invoice approvals and drawdown tracking." },
      { name: "Site Manager", badgeVariant: "secondary" as const, description: "Field access for logs, photos, and daily reports." },
      { name: "Viewer", badgeVariant: "outline" as const, description: "Read-only access to specific project data." },
    ]
  },
  {
    title: "Investor Access",
    description: "External equity partners who need visibility into project performance and returns.",
    roles: [
      { name: "Lead Investor", badgeVariant: "default" as const, description: "Full visibility into performance, distributions, and market data." },
      { name: "Co-Investor", badgeVariant: "secondary" as const, description: "Access to specific project updates and financial summaries." },
      { name: "Observer", badgeVariant: "outline" as const, description: "Limited view of project milestones and high-level financials." },
    ]
  },
  {
    title: "Lender Access",
    description: "Financial institutions providing debt capital, focused on risk and covenant monitoring.",
    roles: [
      { name: "Primary Lender", badgeVariant: "default" as const, description: "Full access to drawdown requests and covenant tracking." },
      { name: "Secondary Lender", badgeVariant: "secondary" as const, description: "Restricted access to financial compliance documents." },
      { name: "Auditor", badgeVariant: "outline" as const, description: "Temporary read access to drawdown and invoice history." },
    ]
  }
];

const PENDING_INVITATIONS = [
  { name: "Jordan Smith", email: "j.smith@realestate.com", role: "Project Manager", invitedBy: "Alex Thompson", date: "Oct 24, 2023", expiry: "2 days" },
  { name: "Kelly Wu", email: "k.wu@investments.co", role: "Observer", invitedBy: "Elena Rodriguez", date: "Oct 23, 2023", expiry: "1 day" },
  { name: "Liam O'Connor", email: "l.oconnor@lenderhub.net", role: "Auditor", invitedBy: "Alex Thompson", date: "Oct 22, 2023", expiry: "Expired" },
  { name: "Rachel Green", email: "r.green@kayaprojects.com", role: "Finance Manager", invitedBy: "Michael Scott", date: "Oct 25, 2023", expiry: "3 days" },
];

const ACCESS_LOGS = [
  { user: "Alex Thompson", action: "Updated Permissions", resource: "Investor Portal Settings", ip: "192.168.1.45", time: "10 mins ago", status: "Success" },
  { user: "Sarah Chen", action: "Exported Report", resource: "Monthly Budget Variance", ip: "192.168.1.12", time: "1 hour ago", status: "Success" },
  { user: "Marcus Miller", action: "Login Attempt", resource: "Investor Portal", ip: "172.16.0.4", time: "2 hours ago", status: "Success" },
  { user: "Elena Rodriguez", action: "Deleted User", resource: "John Doe (ID: 54)", ip: "192.168.1.18", time: "4 hours ago", status: "Success" },
  { user: "James Wilson", action: "Login Failed", resource: "Lender Portal", ip: "203.0.113.1", time: "5 hours ago", status: "Denied" },
  { user: "Priya Sharma", action: "Modified Project", resource: "The Grand Residency", ip: "192.168.1.22", time: "6 hours ago", status: "Success" },
  { user: "System", action: "Auto-deactivation", resource: "Inactive User (ID: 102)", ip: "Internal", time: "12 hours ago", status: "Success" },
  { user: "Michael Scott", action: "Invite Sent", resource: "r.green@kayaprojects.com", ip: "192.168.1.5", time: "Yesterday", status: "Success" },
];

export default function UserRoles() {
  return (
    <AppLayout>
      <div className="p-8 space-y-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">User Roles & Access Control</h1>
            <p className="text-muted-foreground mt-1">Manage team permissions, portal visibility, and user access for all stakeholders.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="h-10">
              <Download className="w-4 h-4 mr-2" />
              Export User List
            </Button>
            <Button size="sm" className="h-10 px-5">
              <UserPlus className="w-4 h-4 mr-2" />
              Invite User
            </Button>
          </div>
        </div>

        {/* SECTION 1 — USER STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {USER_STATS.map((stat, idx) => (
            <KpiCard key={idx} {...stat} />
          ))}
        </div>

        {/* SECTION 2 — ROLE DEFINITIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROLE_CATEGORIES.map((category, idx) => (
            <RoleCategoryCard key={idx} {...category} />
          ))}
        </div>

        {/* SECTION 3 — USERS TABLE */}
        <UsersTable />

        {/* SECTION 4 — PERMISSIONS MATRIX */}
        <PermissionsMatrix />

        {/* SECTION 5 — PORTAL ACCESS SETTINGS */}
        <PortalAccessSettings />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SECTION 6 — PENDING INVITATIONS */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold">Pending Invitations</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Active invites waiting for user acceptance.</p>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PENDING_INVITATIONS.map((invite) => (
                    <TableRow key={invite.email}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-sm">{invite.name}</span>
                          <span className="text-xs text-muted-foreground">{invite.email}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-normal">{invite.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span className={invite.expiry === "Expired" ? "text-destructive font-medium" : ""}>
                            {invite.expiry}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                            <Send className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* SECTION 7 — AUDIT LOG */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold">Recent Access Log</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Audit trail of administrative and portal activities.</p>
              </div>
              <History className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ACCESS_LOGS.map((log, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={log.status === "Denied" ? "text-destructive" : "text-primary"}>
                        {log.status === "Denied" ? <ShieldAlert className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{log.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {log.user} • {log.resource}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium">{log.time}</p>
                      <p className="text-[10px] text-muted-foreground">{log.ip}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                View Full Audit History
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}