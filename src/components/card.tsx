import { cn } from "@/utils/utils";
import { ReactNode } from "react";

type ShortSchema = {
  children?: ReactNode;
  className?: string;
};

export function CardTitle({ children, className }: ShortSchema) {
  return (
    <h3 className={cn("border-b pb-2 uppercase", className)}>{children}</h3>
  );
}

export function CardPar({ children, className }: ShortSchema) {
  return <p className={cn("pt-2", className)}>{children}</p>;
}

export function Card({ children, className }: ShortSchema) {
  return (
    <div
      className={cn(
        "border border-muted w-full hover:bg-accent transition-all p-4 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
