import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Role {
  name: string;
  badgeVariant: "default" | "secondary" | "outline" | "destructive";
  description: string;
}

interface RoleCategoryCardProps {
  title: string;
  description: string;
  roles: Role[];
}

export function RoleCategoryCard({ title, description, roles }: RoleCategoryCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        {roles.map((role) => (
          <div key={role.name} className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Badge variant={role.badgeVariant}>{role.name}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{role.description}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" className="w-full border-dashed" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Role
        </Button>
      </CardFooter>
    </Card>
  );
}