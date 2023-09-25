import { cn } from "@/utils/utils";

export default function State({
  children,
  className,
  isolate,
  color,
}: {
  children: string;
  className?: string;
  isolate?: boolean;
  color: number;
}) {
  const colorPallet = ["blue-900", "red-500", "blue-700", "gold"];

  return (
    <span
      className={cn(
        className,
        `px-4 py-2 ${"bg-" + colorPallet[color]} ${
          isolate ? "me-2 my-2" : ""
        } uppercase rounded-full`
      )}
    >
      {children}
    </span>
  );
}
