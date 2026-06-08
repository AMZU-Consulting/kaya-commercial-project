import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Edit3, Sparkles } from "lucide-react";

export function NarrativePreview() {
  return (
    <Card className="border-border overflow-hidden">
      <CardHeader className="bg-primary/5 border-b flex flex-row items-center justify-between py-4">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          AI-Generated Narrative Preview
        </CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
            <Copy className="w-3.5 h-3.5" /> Copy
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
            <Edit3 className="w-3.5 h-3.5" /> Edit
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
          <p className="mb-4 text-foreground font-medium">
            Executive Summary: March 2025 Performance
          </p>
          <p className="mb-4">
            As of March 2025, the Meridian Quarter project is progressing in line with the approved programme, with a physical completion rate of 64%. Current budget analysis reveals a favourable variance of $124,500, primarily driven by early procurement of structural steel. 
          </p>
          <p className="mb-4">
            Cashflow remains robust, though we anticipate a temporary tightening in late Q2 as internal fit-outs commence. The risk profile has shifted towards supply chain lead times for specialized HVAC components, which is currently being mitigated through alternative sourcing strategies.
          </p>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-dashed border-primary/30">
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Key Insights Extracted by AI</p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm">
                <span className="text-primary">•</span>
                <span>Project health score increased by 4% due to milestone completion.</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-primary">•</span>
                <span>Cost-to-complete forecast is within 0.5% of baseline.</span>
              </li>
              <li className="flex gap-2 text-sm">
                <span className="text-primary">•</span>
                <span>Recommendation: Approve variation for cladding ahead of schedule to lock in current pricing.</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}