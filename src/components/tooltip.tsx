import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/utils/utils";
import { ReactNode } from "react";

export default function ToolTip({
  children,
  hoverP,
  classNameP,
  className,
}: {
  children: ReactNode;
  hoverP: string;
  classNameP?: string;
  className?: string;
}) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className={className}>{children}</TooltipTrigger>
        <TooltipContent>
          <p className={cn(classNameP, "max-w-[200px]")}>{hoverP}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
