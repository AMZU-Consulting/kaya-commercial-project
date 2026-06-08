import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const exceptions = [
  {
    id: "EX-101",
    type: "Duplicate",
    ref: "INV-8842",
    supplier: "Timber Supply Ltd.",
    amount: "£1,240.00",
    description: "Identical invoice number and amount submitted 4 days ago.",
    severity: "red",
  },
  {
    id: "EX-102",
    type: "VAT Mismatch",
    ref: "INV-2024-001",
    supplier: "Concrete Solutions",
    amount: "£2,504.13",
    description: "Extracted VAT rate (15%) does not match expected (20%).",
    severity: "amber",
  },
  {
    id: "EX-103",
    type: "Missing PO",
    ref: "PO-REQ",
    supplier: "Global Steel Co.",
    amount: "£12,450.00",
    description: "No matching Purchase Order found for this supplier/amount.",
    severity: "amber",
  },
];

export function ExceptionPanel() {
  return (
    <Card className="border-border">
      <CardHeader className="p-4 border-b flex flex-row items-center justify-between">
        <CardTitle className="text-base flex items-center gap-2">
          Flagged Exceptions
          <Badge variant="destructive" className="h-5 px-1.5 text-[10px]">{exceptions.length}</Badge>
        </CardTitle>
        <Button variant="ghost" size="sm" className="h-8 text-xs">Manage All</Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {exceptions.map((ex) => (
            <div key={ex.id} className="p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={ex.severity === 'red' ? 'bg-status-red-bg text-status-red border-status-red/20' : 'bg-status-amber-bg text-status-amber border-status-amber/20'}
                    >
                      {ex.type}
                    </Badge>
                    <span className="text-xs font-semibold text-foreground">{ex.ref}</span>
                  </div>
                  <p className="text-sm font-medium">{ex.supplier}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{ex.amount}</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-semibold">Amount</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {ex.description}
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8 text-xs flex-1 gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-destructive" />
                  Dismiss
                </Button>
                <Button size="sm" className="h-8 text-xs flex-1 gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                  Resolve
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}