import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Mail, Camera, FileText, Image as ImageIcon, FileSpreadsheet, Copy, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function InvoiceUploadZone() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <Card className="border-border overflow-hidden">
      <Tabs defaultValue="upload" className="w-full">
        <div className="px-6 pt-4 border-b border-border">
          <TabsList className="bg-transparent h-auto p-0 gap-6">
            <TabsTrigger 
              value="upload" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
            >
              Upload File
            </TabsTrigger>
            <TabsTrigger 
              value="email" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
            >
              Email Import
            </TabsTrigger>
            <TabsTrigger 
              value="camera" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
            >
              Camera Capture
            </TabsTrigger>
          </TabsList>
        </div>

        <CardContent className="p-6">
          <TabsContent value="upload" className="mt-0 space-y-6">
            <div 
              className={cn(
                "border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center transition-colors",
                dragActive ? "border-primary bg-primary/5" : "border-border bg-muted/30"
              )}
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Drag & drop PDF, image, or Excel files</h3>
              <p className="text-sm text-muted-foreground mb-4">or <button className="text-primary hover:underline font-medium">browse files</button> from your computer</p>
              <p className="text-xs text-muted-foreground/60 italic">Accepted formats: .pdf, .jpg, .png, .xlsx (Max 25MB)</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="h-16 flex flex-col gap-1 items-center justify-center border-dashed">
                <FileText className="w-4 h-4" />
                <span className="text-xs">Upload PDF</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1 items-center justify-center border-dashed">
                <ImageIcon className="w-4 h-4" />
                <span className="text-xs">Upload Photo</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-1 items-center justify-center border-dashed">
                <FileSpreadsheet className="w-4 h-4" />
                <span className="text-xs">Upload Excel</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="email" className="mt-0 space-y-6">
            <div className="bg-muted/30 rounded-xl p-6 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Dedicated Intake Email</h3>
                  <p className="text-xs text-muted-foreground">Invoices sent here will be automatically extracted and queued.</p>
                </div>
                <Mail className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg mb-6">
                <code className="flex-1 font-mono text-sm">invoices@kaya-os.com</code>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Copy className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Recent Email Imports</h4>
                <div className="space-y-2">
                  {[
                    { from: "billing@concrete-solutions.co", file: "INV-2024-001.pdf", time: "10 mins ago" },
                    { from: "accounts@timber-supply.com", file: "TS_8842.pdf", time: "1 hour ago" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 text-sm">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium truncate max-w-[150px]">{item.file}</p>
                          <p className="text-[10px] text-muted-foreground">From: {item.from}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="camera" className="mt-0">
            <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-border rounded-xl bg-muted/30">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Capture with Mobile</h3>
              <p className="text-sm text-muted-foreground text-center max-w-xs mb-6">
                Use your device camera to snap a photo of physical receipts or invoices.
              </p>
              <div className="flex gap-3">
                <Button className="gap-2">
                  <Camera className="w-4 h-4" />
                  Open Camera
                </Button>
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Mobile App
                </Button>
              </div>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}