import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Setting {
  id: string;
  label: string;
  description: string;
  defaultChecked?: boolean;
}

const INVESTOR_SETTINGS: Setting[] = [
  { id: "inv-photos", label: "Project Photos", description: "Allow investors to view construction progress photos.", defaultChecked: true },
  { id: "inv-fin", label: "Financial Summaries", description: "High-level overview of project ROI and distributions.", defaultChecked: true },
  { id: "inv-dist", label: "Distribution Data", description: "Detailed breakdown of upcoming and past payments.", defaultChecked: true },
  { id: "inv-market", label: "Market Reports", description: "Internal market analysis and research documents.", defaultChecked: false },
  { id: "inv-budget", label: "Full Budget Detail", description: "Line-by-line budget items and variance reports.", defaultChecked: false },
];

const LENDER_SETTINGS: Setting[] = [
  { id: "len-cov", label: "Covenant Data", description: "Compliance tracking and loan covenant reporting.", defaultChecked: true },
  { id: "len-draw", label: "Drawdown Schedules", description: "Historical and projected funding requests.", defaultChecked: true },
  { id: "len-risk", label: "Risk Reports", description: "Monthly risk assessment and mitigation logs.", defaultChecked: true },
  { id: "len-sec", label: "Security Documents", description: "Access to charge documents and security deeds.", defaultChecked: true },
  { id: "len-full", label: "Full Financials", description: "Full access to balance sheets and cash flow statements.", defaultChecked: false },
];

export function PortalAccessSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Investor Portal Settings</CardTitle>
          <CardDescription>Configure default visibility for investor stakeholders.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {INVESTOR_SETTINGS.map((setting) => (
            <div key={setting.id} className="flex items-start justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor={setting.id} className="text-sm font-semibold cursor-pointer">
                  {setting.label}
                </Label>
                <p className="text-xs text-muted-foreground">{setting.description}</p>
              </div>
              <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Lender Portal Settings</CardTitle>
          <CardDescription>Configure default visibility for financial institution partners.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {LENDER_SETTINGS.map((setting) => (
            <div key={setting.id} className="flex items-start justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor={setting.id} className="text-sm font-semibold cursor-pointer">
                  {setting.label}
                </Label>
                <p className="text-xs text-muted-foreground">{setting.description}</p>
              </div>
              <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}