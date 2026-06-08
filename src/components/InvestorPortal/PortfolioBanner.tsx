import { Card } from "@/components/ui/card";

interface PortfolioBannerProps {
  totalInvestment: string;
  currentValue: string;
  projectedIRR: string;
  totalProjects: number;
}

export function PortfolioBanner({
  totalInvestment,
  currentValue,
  projectedIRR,
  totalProjects,
}: PortfolioBannerProps) {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500 p-8 text-white shadow-lg">
      <div className="absolute top-0 right-0 -mt-8 -mr-8 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
      
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-1">
          <p className="text-blue-100 text-sm font-medium">Total Investment</p>
          <p className="text-3xl font-bold tracking-tight">{totalInvestment}</p>
        </div>
        <div className="space-y-1">
          <p className="text-blue-100 text-sm font-medium">Current Portfolio Value</p>
          <p className="text-3xl font-bold tracking-tight">{currentValue}</p>
        </div>
        <div className="space-y-1">
          <p className="text-blue-100 text-sm font-medium">Projected IRR</p>
          <p className="text-3xl font-bold tracking-tight">{projectedIRR}</p>
        </div>
        <div className="space-y-1">
          <p className="text-blue-100 text-sm font-medium">Projects</p>
          <p className="text-3xl font-bold tracking-tight">{totalProjects}</p>
        </div>
      </div>
    </Card>
  );
}