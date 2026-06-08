import React from 'react';
import { Building2, Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

export function AuthSidebar() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between p-12 bg-sidebar text-sidebar-foreground overflow-hidden">
      {/* Background Geometric Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-16">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Kaya ProjectOS</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
            Construction Finance,<br />Intelligently Managed
          </h1>
          <p className="text-lg text-sidebar-foreground/80 max-w-md">
            The enterprise platform trusted by leading developers, lenders, and investors.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {[
            "Bank-grade security & encryption",
            "Role-based access control",
            "Real-time financial visibility"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-sidebar-accent border border-sidebar-border">
                <Shield className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-sm font-medium text-sidebar-foreground/90">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Card className="bg-sidebar-accent border-sidebar-border shadow-2xl">
          <CardContent className="p-6">
            <p className="text-sidebar-foreground italic mb-6 leading-relaxed">
              "Kaya has transformed how we track project budgets and communicate with lenders."
            </p>
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10 border border-sidebar-border">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground">JH</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-white">James Hartley</p>
                <p className="text-xs text-sidebar-foreground/60">Head of Finance, Apex Developments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}