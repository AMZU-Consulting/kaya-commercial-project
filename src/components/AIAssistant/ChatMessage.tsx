import React from "react";
import { cn } from "@/lib/utils";
import { Bot, User, Table } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string | React.ReactNode;
  timestamp?: string;
  isTyping?: boolean;
}

export function ChatMessage({ role, content, timestamp, isTyping }: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={cn(
        "flex w-full gap-4 mb-6 animate-in fade-in slide-in-from-bottom-2",
        isAssistant ? "justify-start" : "justify-end"
      )}
    >
      {isAssistant && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div
        className={cn(
          "relative flex max-w-[80%] flex-col gap-2 rounded-lg px-4 py-3 text-sm shadow-sm",
          isAssistant
            ? "bg-card text-card-foreground border"
            : "bg-primary text-primary-foreground"
        )}
      >
        {isTyping ? (
          <div className="flex gap-1 py-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:-0.3s]"></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:-0.15s]"></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40"></span>
          </div>
        ) : (
          <div className="whitespace-pre-wrap leading-relaxed">{content}</div>
        )}
        {timestamp && (
          <span
            className={cn(
              "text-[10px] opacity-70",
              isAssistant ? "text-muted-foreground" : "text-primary-foreground"
            )}
          >
            {timestamp}
          </span>
        )}
      </div>
      {!isAssistant && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-muted shadow">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}

export function BudgetTable() {
  const data = [
    { category: "Construction", budget: "£38.5M", actual: "£24.2M", variance: "+2.1%" },
    { category: "Professional Fees", budget: "£6.2M", actual: "£4.1M", variance: "-0.8%" },
    { category: "Contingency", budget: "£4.5M", actual: "£1.8M", variance: "+5.4%" },
    { category: "Marketing", budget: "£3.2M", actual: "£2.0M", variance: "+1.2%" },
  ];

  return (
    <div className="mt-3 rounded-md border bg-muted/30 overflow-hidden">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-3 py-2 text-left font-medium">Category</th>
            <th className="px-3 py-2 text-right font-medium">Budget</th>
            <th className="px-3 py-2 text-right font-medium">Actual</th>
            <th className="px-3 py-2 text-right font-medium">Var.</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((row) => (
            <tr key={row.category}>
              <td className="px-3 py-2">{row.category}</td>
              <td className="px-3 py-2 text-right">{row.budget}</td>
              <td className="px-3 py-2 text-right">{row.actual}</td>
              <td className="px-3 py-2 text-right font-medium text-status-green">{row.variance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RiskList() {
  const risks = [
    { name: "Material Cost Inflation", level: "High", color: "bg-status-red text-white" },
    { name: "Planning Delay (Harbour)", level: "Medium", color: "bg-status-amber text-white" },
    { name: "Subcontractor Availability", level: "Low", color: "bg-status-green text-white" },
  ];

  return (
    <div className="mt-3 space-y-2">
      {risks.map((risk) => (
        <div key={risk.name} className="flex items-center justify-between gap-4 rounded-md border bg-muted/30 p-2">
          <span className="font-medium text-xs">{risk.name}</span>
          <Badge className={cn("text-[10px] px-1.5 py-0", risk.color)} variant="outline">
            {risk.level}
          </Badge>
        </div>
      ))}
    </div>
  );
}