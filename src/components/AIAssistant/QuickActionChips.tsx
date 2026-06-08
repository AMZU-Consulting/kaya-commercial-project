import React from "react";
import { Button } from "@/components/ui/button";

const chips = [
  "Budget Summary",
  "Project Status",
  "Cashflow Forecast",
  "Risk Analysis",
  "Upcoming Drawdowns",
  "Invoice Queue"
];

export function QuickActionChips() {
  return (
    <div className="flex flex-wrap gap-2 pb-4">
      {chips.map((chip) => (
        <Button
          key={chip}
          variant="outline"
          size="sm"
          className="h-8 rounded-full bg-card text-xs font-medium hover:bg-accent hover:text-accent-foreground border-border"
        >
          {chip}
        </Button>
      ))}
    </div>
  );
}