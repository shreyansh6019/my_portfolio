import * as React from "react";

import { cn } from "@/lib/utils";

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl",
          "border border-border/60",
          "bg-background/60",
          "backdrop-blur-xl",
          "shadow-sm",
          "transition-all duration-300",
          "hover:-translate-y-1",
          "hover:border-primary/50",
          "hover:shadow-2xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };