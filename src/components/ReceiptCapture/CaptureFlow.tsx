import { useState } from "react";
import { Camera, Upload, Check, ChevronRight, Edit2, RotateCcw, FileText, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

export function CaptureFlow() {
  const [step, setStep] = useState<Step>(1);

  const steps = [
    { id: 1, name: "Capture" },
    { id: 2, name: "Review" },
    { id: 3, name: "Submit" },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors",
                step >= s.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}
            >
              {step > s.id ? <Check className="w-4 h-4" /> : s.id}
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "w-12 h-0.5 mx-2",
                  step > s.id ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <Card className="overflow-hidden border-none shadow-xl bg-card">
        <CardContent className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="aspect-[3/4] bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white relative overflow-hidden group cursor-pointer border-2 border-dashed border-slate-700 hover:border-primary transition-colors">
                <Camera className="w-12 h-12 mb-4 text-slate-400 group-hover:text-primary transition-colors" />
                <p className="text-sm font-medium text-slate-300">Tap to capture</p>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <p className="bg-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Open Camera</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" onClick={() => setStep(2)}>
                  <Camera className="mr-2 h-4 w-4" /> Open Camera
                </Button>
                <Button variant="secondary" className="w-full">
                  <ImageIcon className="mr-2 h-4 w-4" /> Upload from gallery
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <div className="border-2 border-dashed rounded-xl p-4 text-center hover:bg-accent/50 transition-colors cursor-pointer border-muted">
                  <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground font-medium">Upload file area</p>
                </div>
              </div>

              <div className="bg-accent/50 p-3 rounded-lg border border-border">
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  <span className="font-bold text-foreground">Tip:</span> Ensure receipt is flat, well-lit, and all text is visible. Avoid shadows and glares.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="relative aspect-[3/4] bg-muted rounded-xl overflow-hidden border">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png"
                  alt="Receipt Preview"
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-2 right-2 opacity-90"
                  onClick={() => setStep(1)}
                >
                  <RotateCcw className="w-4 h-4 mr-1" /> Re-capture
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4" /> OCR Data Review
                </h4>

                {[
                  { label: "Vendor Name", value: "BuildBase Ltd", confidence: 98 },
                  { label: "Date", value: "14 Oct 2023", confidence: 95 },
                  { label: "Total Amount", value: "£245.50", confidence: 99 },
                  { label: "VAT Amount", value: "£40.92", confidence: 92 },
                ].map((field) => (
                  <div key={field.label} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">{field.label}</label>
                      <div className="flex items-center gap-1.5">
                        <span className={cn(
                          "text-[9px] font-bold px-1.5 py-0.5 rounded-full",
                          field.confidence > 95 ? "bg-status-green-bg text-status-green" : "bg-status-amber-bg text-status-amber"
                        )}>
                          {field.confidence}% match
                        </span>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Edit2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <Input defaultValue={field.value} className="h-9 text-sm" />
                  </div>
                ))}
              </div>

              <Button className="w-full" onClick={() => setStep(3)}>
                Next: Categorize <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold">Assign to Project</label>
                  <Select defaultValue="p1">
                    <SelectTrigger>
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="p1">Riverside Apartments</SelectItem>
                      <SelectItem value="p2">Skyline Tower</SelectItem>
                      <SelectItem value="p3">Green Valley School</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold">Expense Category</label>
                  <Select defaultValue="materials">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="materials">Materials</SelectItem>
                      <SelectItem value="labour">Labour</SelectItem>
                      <SelectItem value="plant">Plant</SelectItem>
                      <SelectItem value="pro-fees">Professional Fees</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold">Notes (Optional)</label>
                  <Textarea
                    placeholder="Add details about this purchase..."
                    className="resize-none h-24"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-[#10b981] hover:bg-[#10b981]/90 text-white border-none h-12 text-base font-bold shadow-lg" onClick={() => setStep(1)}>
                  Submit Receipt
                </Button>
                <Button variant="ghost" className="w-full text-muted-foreground" onClick={() => setStep(2)}>
                  Back to Review
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}