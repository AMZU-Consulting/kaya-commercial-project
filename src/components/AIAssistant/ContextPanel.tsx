import React from "react";
import {
  ChevronRight,
  Target,
  Calendar,
  UserCircle,
  MessageSquare,
  Database,
  Zap,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch as ShadSwitch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function ContextPanel() {
  return (
    <div className="flex flex-col h-full bg-card border-l overflow-hidden">
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Active Context */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Active Context</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-accent text-accent-foreground">
                    <Target className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground leading-none mb-1">Selected Project</p>
                    <p className="text-xs font-medium">Meridian Quarter</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-accent text-accent-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none mb-1">Date Range</p>
                  <p className="text-xs font-medium">Last 30 days</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-accent text-accent-foreground">
                  <UserCircle className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none mb-1">User Role</p>
                  <p className="text-xs font-medium">Project Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Questions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Suggested Questions</h3>
            <div className="space-y-2">
              {[
                "Analyze construction costs",
                "Next funding milestone?",
                "Identify budget overruns",
                "Review pending invoices",
                "Summarize risk register",
                "Generate PM report"
              ].map((q) => (
                <button
                  key={q}
                  className="w-full flex items-center justify-between p-2 rounded-md border bg-muted/30 hover:bg-muted transition-colors text-left group"
                >
                  <span className="text-xs">{q}</span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Recent Conversations */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Recent Conversations</h3>
            <div className="space-y-2">
              {[
                { title: "Monthly Budget Review", date: "2h ago" },
                { title: "Harbour Point Q3 Forecast", date: "Yesterday" },
                { title: "Drawdown Request #4", date: "Oct 12" },
                { title: "Risk Mitigation Strategy", date: "Oct 10" },
                { title: "Vendor Compliance Audit", date: "Oct 8" }
              ].map((conv) => (
                <div key={conv.title} className="flex flex-col p-2 rounded-md hover:bg-accent cursor-pointer transition-colors">
                  <span className="text-xs font-medium truncate">{conv.title}</span>
                  <span className="text-[10px] text-muted-foreground">{conv.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
              <Database className="h-3 w-3" /> Data Sources
            </h3>
            <div className="space-y-3 pt-1">
              {["Projects", "Finance", "Invoices", "Documents"].map((source) => (
                <div key={source} className="flex items-center justify-between">
                  <Label htmlFor={`source-${source}`} className="text-xs font-normal cursor-pointer">
                    {source}
                  </Label>
                  <ShadSwitch id={`source-${source}`} defaultChecked />
                </div>
              ))}
            </div>
          </div>

          {/* AI Capabilities */}
          <div className="pb-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
              <Zap className="h-3 w-3" /> AI Capabilities
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Budget Analysis",
                "Risk Assessment",
                "Narrative Generation",
                "Document Q&A"
              ].map((cap) => (
                <Badge key={cap} variant="secondary" className="text-[10px] font-normal px-2 py-0 h-5 bg-accent text-accent-foreground border-none">
                  {cap}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

