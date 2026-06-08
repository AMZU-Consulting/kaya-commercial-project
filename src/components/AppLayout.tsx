import { AppSidebar } from "@/components/AppSidebar";
import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1 ml-64 min-h-screen overflow-x-hidden bg-background">
        {children}
      </main>
    </div>
  );
}