import Link from "next/link";
import { AlertTriangle, CheckCircle2, Lock, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { LearningStatus } from "@/lib/types";

export function learningTone(status: LearningStatus) {
  if (status === "completed" || status === "passed") return "pass";
  if (status === "in_progress") return "progress";
  if (status === "failed" || status === "remediation_required") return "critical";
  if (status === "locked") return "neutral";
  return "neutral";
}

export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`h-2 overflow-hidden rounded-full bg-slate-200 ${className}`}>
      <div className="h-full rounded-full bg-[#4F83DF]" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function CircularProgress({ value }: { value: number }) {
  const angle = Math.round(value * 3.6);
  return (
    <div className="grid h-36 w-36 place-items-center rounded-full" style={{ background: `conic-gradient(#4F83DF ${angle}deg, #E6ECF5 0deg)` }}>
      <div className="grid h-28 w-28 place-items-center rounded-full bg-white">
        <div className="text-center">
          <div className="text-3xl font-black text-slate-950">{value}%</div>
          <div className="text-[10px] font-black uppercase tracking-wide text-slate-500">Overall</div>
        </div>
      </div>
    </div>
  );
}

export function StatusChip({ status }: { status: LearningStatus }) {
  return <Badge tone={learningTone(status)}>{status.replaceAll("_", " ")}</Badge>;
}

export function LearningStep({ title, progress, status, weight }: { title: string; progress: number; status: LearningStatus; weight: number }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-black text-slate-950">{title}</div>
          <div className="mt-1 text-xs font-semibold text-slate-500">Weight {weight}%</div>
        </div>
        <StatusChip status={status} />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <ProgressBar value={progress} className="flex-1" />
        <span className="w-10 text-right text-xs font-black text-slate-600">{progress}%</span>
      </div>
    </div>
  );
}

export function ModuleCard({ id, title, progress, status, timeSpent, remaining }: { id: string; title: string; progress: number; status: LearningStatus; timeSpent: number; remaining: number }) {
  const Icon = status === "locked" ? Lock : status === "completed" ? CheckCircle2 : status === "remediation_required" ? AlertTriangle : PlayCircle;
  return (
    <Link href={`/e-learning/module/${id}`} className="block rounded-2xl border bg-white p-4 transition hover:border-[#4F83DF] hover:bg-[#F8FBFF]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <Icon className="mt-1 h-5 w-5 text-[#4F83DF]" />
          <div>
            <div className="font-black text-slate-950">{title}</div>
            <div className="mt-1 text-xs font-semibold text-slate-500">{timeSpent}m spent · {remaining}m remaining</div>
          </div>
        </div>
        <StatusChip status={status} />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <ProgressBar value={progress} className="flex-1" />
        <span className="w-10 text-right text-xs font-black text-slate-600">{progress}%</span>
      </div>
    </Link>
  );
}
