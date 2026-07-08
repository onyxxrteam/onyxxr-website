import { cn } from "@/lib/utils";

export function Table({ className, children }: { className?: string; children: React.ReactNode }) {
  return <table className={cn("w-full caption-bottom text-xs", className)}>{children}</table>;
}

export function Th({ className, children }: { className?: string; children: React.ReactNode }) {
  return <th className={cn("border-b bg-slate-50 px-3 py-2 text-left text-[11px] font-black uppercase tracking-wide text-slate-600", className)}>{children}</th>;
}

export function Td({ className, children }: { className?: string; children: React.ReactNode }) {
  return <td className={cn("border-b px-3 py-2 align-middle text-slate-800", className)}>{children}</td>;
}
