import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MoreHorizontal, 
  Search, 
  Filter, 
  ChevronDown, 
  UserPlus,
  Mail,
  Edit,
  ShieldCheck,
  UserX
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  accessLevel: "Admin" | "Manager" | "Viewer" | "Stakeholder";
  projects: number;
  lastLogin: string;
  status: "Active" | "Inactive" | "Pending";
  avatar?: string;
}

const USERS_DATA: User[] = [
  { id: "1", name: "Alex Thompson", email: "alex.t@kayaprojects.com", role: "Super Admin", accessLevel: "Admin", projects: 12, lastLogin: "2 mins ago", status: "Active" },
  { id: "2", name: "Sarah Chen", email: "sarah.c@kayaprojects.com", role: "Project Manager", accessLevel: "Manager", projects: 4, lastLogin: "1 hour ago", status: "Active" },
  { id: "3", name: "Marcus Miller", email: "m.miller@investorgroup.com", role: "Lead Investor", accessLevel: "Stakeholder", projects: 2, lastLogin: "Yesterday", status: "Active" },
  { id: "4", name: "Elena Rodriguez", email: "elena.r@kayaprojects.com", role: "Finance Manager", accessLevel: "Manager", projects: 8, lastLogin: "3 hours ago", status: "Active" },
  { id: "5", name: "James Wilson", email: "j.wilson@lendingcorp.com", role: "Primary Lender", accessLevel: "Stakeholder", projects: 3, lastLogin: "2 days ago", status: "Active" },
  { id: "6", name: "Priya Sharma", email: "priya.s@kayaprojects.com", role: "Site Manager", accessLevel: "Manager", projects: 2, lastLogin: "4 hours ago", status: "Active" },
  { id: "7", name: "David Burke", email: "d.burke@kayaprojects.com", role: "Viewer", accessLevel: "Viewer", projects: 1, lastLogin: "5 days ago", status: "Inactive" },
  { id: "8", name: "Lisa Wong", email: "lisa.w@investorgroup.com", role: "Co-Investor", accessLevel: "Stakeholder", projects: 1, lastLogin: "Never", status: "Pending" },
  { id: "9", name: "Robert Taylor", email: "r.taylor@kayaprojects.com", role: "Project Manager", accessLevel: "Manager", projects: 3, lastLogin: "10 mins ago", status: "Active" },
  { id: "10", name: "Sophie Martin", email: "s.martin@lendingcorp.com", role: "Auditor", accessLevel: "Stakeholder", projects: 5, lastLogin: "3 days ago", status: "Active" },
  { id: "11", name: "Tom Harris", email: "tom.h@kayaprojects.com", role: "Finance Manager", accessLevel: "Manager", projects: 6, lastLogin: "1 hour ago", status: "Active" },
  { id: "12", name: "Emma Davis", email: "emma.d@investorgroup.com", role: "Observer", accessLevel: "Stakeholder", projects: 1, lastLogin: "Yesterday", status: "Active" },
  { id: "13", name: "Michael Scott", email: "m.scott@kayaprojects.com", role: "Super Admin", accessLevel: "Admin", projects: 12, lastLogin: "15 mins ago", status: "Active" },
  { id: "14", name: "Jessica Alba", email: "j.alba@kayaprojects.com", role: "Site Manager", accessLevel: "Manager", projects: 2, lastLogin: "2 hours ago", status: "Active" },
  { id: "15", name: "Kevin Hart", email: "k.hart@lendingcorp.com", role: "Secondary Lender", accessLevel: "Stakeholder", projects: 1, lastLogin: "Never", status: "Pending" },
  { id: "16", name: "Ryan Reynolds", email: "ryan.r@kayaprojects.com", role: "Viewer", accessLevel: "Viewer", projects: 1, lastLogin: "1 week ago", status: "Inactive" },
  { id: "17", name: "Blake Lively", email: "blake.l@kayaprojects.com", role: "Project Manager", accessLevel: "Manager", projects: 4, lastLogin: "45 mins ago", status: "Active" },
  { id: "18", name: "Chris Pratt", email: "c.pratt@investorgroup.com", role: "Lead Investor", accessLevel: "Stakeholder", projects: 3, lastLogin: "Yesterday", status: "Active" },
  { id: "19", name: "Gal Gadot", email: "gal.g@kayaprojects.com", role: "Finance Manager", accessLevel: "Manager", projects: 5, lastLogin: "12 hours ago", status: "Active" },
  { id: "20", name: "Henry Cavill", email: "h.cavill@lendingcorp.com", role: "Primary Lender", accessLevel: "Stakeholder", projects: 2, lastLogin: "2 days ago", status: "Active" },
];

export function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = USERS_DATA.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: User["status"]) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50">Active</Badge>;
      case "Inactive":
        return <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-slate-200">Inactive</Badge>;
      case "Pending":
        return <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">Pending</Badge>;
      default:
        return null;
    }
  };

  const getRoleBadge = (role: string) => {
    if (role.includes("Admin")) return <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">Admin</Badge>;
    if (role.includes("Investor")) return <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100">Investor</Badge>;
    if (role.includes("Lender") || role.includes("Auditor")) return <Badge className="bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-100">Lender</Badge>;
    return <Badge variant="outline" className="text-slate-600">{role}</Badge>;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-bold">All Users</CardTitle>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-9 h-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[250px]">User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Access Level</TableHead>
                <TableHead className="text-center">Projects</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{user.name}</span>
                        <span className="text-xs text-muted-foreground">{user.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>
                    <span className="text-sm text-foreground">{user.accessLevel}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="font-normal">{user.projects}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-xs text-muted-foreground">{user.lastLogin}</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" /> Edit Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ShieldCheck className="mr-2 h-4 w-4" /> Permissions
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <UserX className="mr-2 h-4 w-4" /> Deactivate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}