import { Button } from "@/components/ui/button";
import { cn } from "@/utils/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { HTMLAttributes } from "react";

const arrowVariant = cva(
  "inline-flex items-center group relative uppercase justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gold text-primary-foreground hover:bg-gold/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        defaultOutline:
          "border-gold border text-gold hover:bg-accent bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-xl",
        xl: "h-[60px] rounded-md px-6 text-3xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ArrowButton
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof arrowVariant> {}

export default function ArrowButton({
  children,
  className,
  variant,
  size,
  ...props
}: ArrowButton) {
  return (
    <Button
      className={cn(arrowVariant({ variant, size, className }))}
      {...props}
    >
      {children}{" "}
      <ArrowRight
        className="group opacity-0 group-hover:opacity-100 z-10 duration-300 -translate-x-5 group-hover:translate-x-[10px] transition-all group-hover:ms-2"
        width={size == "xl" ? 35 : 30}
        height={size == "xl" ? 35 : 30}
      />
      <ArrowRight
        width={35}
        height={35}
        className="absolute right-5 opacity-30 z-0 group-hover:opacity-0 transition-all duration-300"
      />
    </Button>
  );
}
