import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Maximize, Zap } from "lucide-react";

const tips = [
  {
    icon: Lightbulb,
    title: "Good Lighting",
    text: "Ensure the receipt is well-lit for the best OCR accuracy.",
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    icon: Maximize,
    title: "Flat Surface",
    text: "Place receipt on a dark, flat surface to avoid distortions.",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: Zap,
    title: "Fast Capture",
    text: "Hold steady until the camera focuses for a sharp image.",
    color: "text-green-500",
    bg: "bg-green-50"
  }
];

export function MobileTips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tips.map((tip) => (
        <Card key={tip.title} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-start gap-4">
            <div className={`p-2.5 rounded-xl ${tip.bg} flex-shrink-0`}>
              <tip.icon className={`w-5 h-5 ${tip.color}`} />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">{tip.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{tip.text}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}