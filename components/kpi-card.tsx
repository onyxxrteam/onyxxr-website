import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  note,
  tone = "neutral"
}: {
  label: string;
  value: string | number;
  note: string;
  tone?: "pass" | "borderline" | "critical" | "progress" | "neutral";
}) {
  const tones = {
    pass: "border-l-clinical-pass",
    borderline: "border-l-clinical-borderline",
    critical: "border-l-clinical-critical",
    progress: "border-l-clinical-progress",
    neutral: "border-l-slate-400"
  };
  return (
    <Card className={cn("border-l-4", tones[tone])}>
      <CardContent className="p-4">
        <div className="text-xs font-bold leading-5 text-slate-500">{label}</div>
        <div className="mt-2 text-2xl font-black tracking-tight text-slate-950">{value}</div>
        <div className="mt-2 text-xs font-semibold leading-5 text-slate-500">{note}</div>
      </CardContent>
    </Card>
  );
}
