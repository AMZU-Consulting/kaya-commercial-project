import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FEATURES = [
  "Dashboard",
  "Projects",
  "Budget Edit",
  "Invoices",
  "Drawdowns",
  "Reports",
  "Investor Portal",
  "Lender Portal",
  "User Mgmt",
  "Admin Settings",
];

const ROLES = [
  { name: "Super Admin", access: [true, true, true, true, true, true, true, true, true, true] },
  { name: "Project Manager", access: [true, true, true, true, true, true, false, false, false, false] },
  { name: "Finance Manager", access: [true, true, true, true, true, true, false, false, false, false] },
  { name: "Site Manager", access: [true, true, false, true, false, true, false, false, false, false] },
  { name: "Investor", access: [true, true, false, false, false, true, true, false, false, false] },
  { name: "Lender", access: [true, true, false, false, true, true, false, true, false, false] },
  { name: "Viewer", access: [true, true, false, false, false, true, false, false, false, false] },
];

export function PermissionsMatrix() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Permission Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border border-border">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[180px] bg-muted/50 sticky left-0 z-10">Role / Feature</TableHead>
                {FEATURES.map((feature) => (
                  <TableHead key={feature} className="text-center text-xs font-semibold whitespace-nowrap px-4">
                    {feature}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {ROLES.map((role) => (
                <TableRow key={role.name}>
                  <TableCell className="font-medium text-sm bg-background sticky left-0 z-10 border-r">
                    {role.name}
                  </TableCell>
                  {role.access.map((hasAccess, idx) => (
                    <TableCell key={idx} className="text-center">
                      <div className="flex justify-center">
                        {hasAccess ? (
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}