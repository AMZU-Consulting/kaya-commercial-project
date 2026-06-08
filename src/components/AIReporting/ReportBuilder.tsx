import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { FileText, FileSpreadsheet, FileCode, Sparkles, Calendar as CalendarIcon, Clock } from "lucide-react";

const PROJECTS = [
  "Meridian Quarter",
  "River North Residences",
  "Skyline Plaza",
  "Harbor Wharf",
  "The Grand Atrium",
  "Maple Grove Industrial"
];

const SECTIONS = [
  { id: "exec", label: "Executive Summary" },
  { id: "budget", label: "Budget Analysis" },
  { id: "cashflow", label: "Cashflow" },
  { id: "risk", label: "Risk Summary" },
  { id: "milestones", label: "Milestones" },
  { id: "appendix", label: "Appendix" },
];

export function ReportBuilder() {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const toggleProject = (project: string) => {
    setSelectedProjects(prev =>
      prev.includes(project)
        ? prev.filter(p => p !== project)
        : [...prev, project]
    );
  };

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Report Builder
          <Badge variant="outline" className="font-normal text-xs border-primary/30 text-primary bg-primary/5">
            Step-by-step
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1 & 2 */}
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">1</span>
                Select Report Type
              </label>
              <Select defaultValue="portfolio-summary">
                <SelectTrigger>
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portfolio-summary">Portfolio Executive Summary</SelectItem>
                  <SelectItem value="budget-variance">Budget Variance Report</SelectItem>
                  <SelectItem value="cash-flow">Cash Flow Forecast</SelectItem>
                  <SelectItem value="investor-progress">Investor Progress Report</SelectItem>
                  <SelectItem value="lender-compliance">Lender Compliance Report</SelectItem>
                  <SelectItem value="health-scorecard">Project Health Scorecard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">2</span>
                Select Projects
              </label>
              <div className="grid grid-cols-2 gap-3 p-3 border rounded-lg bg-muted/30">
                {PROJECTS.map((project) => (
                  <div key={project} className="flex items-center space-x-2">
                    <Checkbox
                      id={`project-${project}`}
                      checked={selectedProjects.includes(project)}
                      onCheckedChange={() => toggleProject(project)}
                    />
                    <label
                      htmlFor={`project-${project}`}
                      className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {project}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">3</span>
                Date Range
              </label>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="w-full justify-start text-left font-normal text-muted-foreground">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>March 01, 2025 - March 31, 2025</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Step 4 & 5 */}
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">4</span>
                Sections to Include
              </label>
              <div className="space-y-2 border rounded-lg p-3">
                {SECTIONS.map((section) => (
                  <div key={section.id} className="flex items-center justify-between">
                    <Label htmlFor={`section-${section.id}`} className="text-xs">{section.label}</Label>
                    <Switch id={`section-${section.id}`} defaultChecked />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">5</span>
                Output Format
              </label>
              <RadioGroup defaultValue="pdf" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pdf" id="pdf" />
                  <Label htmlFor="pdf" className="flex items-center gap-1.5 text-xs cursor-pointer">
                    <FileText className="w-3.5 h-3.5 text-red-500" /> PDF
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excel" id="excel" />
                  <Label htmlFor="excel" className="flex items-center gap-1.5 text-xs cursor-pointer">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-green-600" /> Excel
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="word" id="word" />
                  <Label htmlFor="word" className="flex items-center gap-1.5 text-xs cursor-pointer">
                    <FileCode className="w-3.5 h-3.5 text-blue-500" /> Word
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t flex flex-col items-center gap-3">
          <Button size="lg" className="w-full max-w-md h-12 text-base gap-2 shadow-lg shadow-primary/20">
            <Sparkles className="w-5 h-5" />
            Generate Report with AI
          </Button>
          <p className="text-xs text-muted-foreground italic flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Estimated generation time: ~15 seconds
          </p>
        </div>
      </CardContent>
    </Card>
  );
}