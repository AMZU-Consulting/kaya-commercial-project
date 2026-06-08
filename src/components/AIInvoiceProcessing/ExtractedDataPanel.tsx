import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ChevronLeft, ChevronRight, Maximize2, Flag } from "lucide-react";
// AIImage replaced with a plain img element

export function ExtractedDataPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Invoice Preview */}
      <Card className="border-border">
        <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0">
          <div className="flex flex-col">
            <CardTitle className="text-base">Invoice Preview</CardTitle>
            <span className="text-xs text-muted-foreground">INV-2024-001.pdf</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-muted rounded-md border p-0.5">
              <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronLeft className="h-4 w-4" /></Button>
              <span className="text-xs px-2 font-medium">1 / 1</span>
              <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronRight className="h-4 w-4" /></Button>
            </div>
            <Button variant="outline" size="icon" className="h-8 w-8"><Maximize2 className="h-4 w-4" /></Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 bg-muted/20 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center p-4 text-muted-foreground text-sm">
            Invoice Preview
          </div>
        </CardContent>
      </Card>

      {/* Right: AI Extracted Data */}
      <Card className="border-border flex flex-col">
        <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">AI Extracted Data</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">98% Overall Confidence</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6 flex-1 overflow-y-auto max-h-[650px]">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="supplier" className="text-xs font-semibold">Supplier Name</Label>
                <Badge className="bg-emerald-500 hover:bg-emerald-600 text-[9px] h-4">High</Badge>
              </div>
              <Input id="supplier" defaultValue="Concrete Solutions Ltd." />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="inv-num" className="text-xs font-semibold">Invoice Number</Label>
                <Badge className="bg-emerald-500 hover:bg-emerald-600 text-[9px] h-4">High</Badge>
              </div>
              <Input id="inv-num" defaultValue="INV-2024-001" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="date" className="text-xs font-semibold">Invoice Date</Label>
                <Badge className="bg-emerald-500 hover:bg-emerald-600 text-[9px] h-4">High</Badge>
              </div>
              <Input id="date" defaultValue="Mar 12, 2024" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="due-date" className="text-xs font-semibold">Due Date</Label>
                <Badge className="bg-amber-500 hover:bg-amber-600 text-[9px] h-4">Med</Badge>
              </div>
              <Input id="due-date" defaultValue="Apr 11, 2024" />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-xs font-semibold">Line Items</Label>
            <div className="border rounded-md overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="text-[11px] h-8 py-0">Description</TableHead>
                    <TableHead className="text-[11px] h-8 py-0 text-right">Qty</TableHead>
                    <TableHead className="text-[11px] h-8 py-0 text-right">Unit Price</TableHead>
                    <TableHead className="text-[11px] h-8 py-0 text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { desc: "C30 Concrete Mix", qty: 24, price: 85.00, total: 2040.00 },
                    { desc: "Delivery Charge", qty: 2, price: 45.00, total: 90.00 },
                    { desc: "Waiting Time", qty: 1, price: 35.00, total: 35.00 },
                    { desc: "Environmental Levy", qty: 1, price: 12.50, total: 12.50 },
                  ].map((item, i) => (
                    <TableRow key={i} className="text-xs">
                      <TableCell className="py-2">{item.desc}</TableCell>
                      <TableCell className="py-2 text-right">{item.qty}</TableCell>
                      <TableCell className="py-2 text-right">£{item.price.toFixed(2)}</TableCell>
                      <TableCell className="py-2 text-right font-medium">£{item.total.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">£2,177.50</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">VAT (15%)</span>
                <Badge variant="outline" className="bg-status-amber-bg text-amber-600 border-status-amber/30 h-4 px-1 text-[9px] gap-1">
                  <AlertTriangle className="w-2.5 h-2.5" /> Non-standard
                </Badge>
              </div>
              <span className="font-medium">£326.63</span>
            </div>
            <div className="flex justify-between items-center text-base pt-2 border-t font-bold">
              <span>Total Amount</span>
              <span className="text-primary font-black">£2,504.13</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="space-y-2">
              <Label className="text-xs font-semibold">Project Assignment</Label>
              <Select defaultValue="sky-tower">
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sky-tower">Sky Tower Development</SelectItem>
                  <SelectItem value="river-wharf">River Wharf Phase II</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold">Cost Category</Label>
              <Select defaultValue="materials">
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="materials">Raw Materials - Concrete</SelectItem>
                  <SelectItem value="plant">Plant Hire</SelectItem>
                  <SelectItem value="subcon">Subcontractors</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-status-amber-bg/50 border border-status-amber/20 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-status-amber font-bold text-xs">
              <Flag className="w-3.5 h-3.5" />
              AI EXCEPTIONS DETECTED
            </div>
            <p className="text-xs text-amber-800 leading-relaxed">
              VAT rate appears non-standard (15% — expected 20% for UK materials).
              Please verify if this supplier is exempt or if this was an extraction error.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}