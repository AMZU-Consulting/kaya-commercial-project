import { cn } from "@/lib/utils";

interface FacilityBannerProps {
  totalFacility: string;
  drawnToDate: string;
  available: string;
  expiry: string;
  className?: string;
}

export function FacilityBanner({ totalFacility, drawnToDate, available, expiry, className }: FacilityBannerProps) {
  const stats = [
    { label: "Total Facility", value: totalFacility },
    { label: "Drawn to Date", value: drawnToDate },
    { label: "Available", value: available },
    { label: "Facility Expiry", value: expiry },
  ];

  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-gradient-to-r from-sidebar-background to-[#1e293b] p-8 text-white shadow-lg", className)}>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-3xl font-bold mt-1">{stat.value}</span>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block h-12 w-px bg-white/10 ml-auto mr-0" />
            )}
          </div>
        ))}
      </div>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}