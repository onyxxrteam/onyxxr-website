import { cn } from "@/lib/utils";
import type { ClinicalStatus } from "@/lib/types";

const toneMap: Record<ClinicalStatus, string> = {
  pass: "border-clinical-pass/30 bg-clinical-passBg text-clinical-pass",
  borderline: "border-clinical-borderline/30 bg-clinical-borderlineBg text-clinical-borderline",
  critical: "border-clinical-critical/30 bg-clinical-criticalBg text-clinical-critical",
  progress: "border-clinical-progress/30 bg-clinical-progressBg text-clinical-progress",
  neutral: "border-clinical-neutral/30 bg-clinical-neutralBg text-clinical-neutral"
};

export function Badge({
  children,
  tone = "neutral",
  className
}: {
  children: React.ReactNode;
  tone?: ClinicalStatus;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex min-h-6 items-center rounded-full border px-2.5 py-0.5 text-xs font-bold", toneMap[tone], className)}>
      {children}
    </span>
  );
}
