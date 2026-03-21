import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <div className="gradient-primary flex h-7 w-7 items-center justify-center rounded-lg">
            <Zap className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold">ValiSearch</span>
        </div>
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} ValiSearch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
