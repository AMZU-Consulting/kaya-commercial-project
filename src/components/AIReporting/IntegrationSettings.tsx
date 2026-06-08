import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Share2, Mail, ShieldAlert, Zap } from "lucide-react";

export function IntegrationSettings() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          Export & Integration Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-sm flex items-center gap-2">
              <Share2 className="w-3.5 h-3.5 text-primary" />
              Auto-share to Investor Portal
            </Label>
            <p className="text-xs text-muted-foreground">Immediately publish generated reports to the investor portal.</p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-sm flex items-center gap-2">
              <Share2 className="w-3.5 h-3.5 text-primary" />
              Auto-share to Lender Portal
            </Label>
            <p className="text-xs text-muted-foreground">Immediately publish generated reports to the lender portal.</p>
          </div>
          <Switch />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-sm flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary" />
              Email on Generation
            </Label>
            <p className="text-xs text-muted-foreground">Send a copy to your primary email when generation finishes.</p>
          </div>
          <Switch defaultChecked />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-sm flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-primary" />
              Watermark Reports
            </Label>
            <p className="text-xs text-muted-foreground">Add "DRAFT" or "CONFIDENTIAL" watermark to PDF exports.</p>
          </div>
          <Switch />
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 pt-4 flex justify-end">
        <Button size="sm">Save Settings</Button>
      </CardFooter>
    </Card>
  );
}