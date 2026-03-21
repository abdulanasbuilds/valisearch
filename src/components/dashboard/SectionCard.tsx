import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function SectionCard({ title, description, children, className }: SectionCardProps) {
  return (
    <div className={cn("glass-card rounded-2xl p-6 opacity-0 animate-fade-in", className)}>
      {title && (
        <div className="mb-4">
          <h3 className="text-base font-semibold">{title}</h3>
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
