import { cn } from "@/lib/utils";

export function Button({
  className,
  children,
  variant = "default"
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "critical";
}) {
  return (
    <button
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md border px-3 text-xs font-bold transition-colors",
        variant === "default" && "border-[#2f6fdc] bg-[#2f6fdc] text-white hover:bg-[#245fc1]",
        variant === "secondary" && "border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
        variant === "critical" && "border-clinical-critical bg-clinical-critical text-white hover:bg-red-800",
        className
      )}
    >
      {children}
    </button>
  );
}
