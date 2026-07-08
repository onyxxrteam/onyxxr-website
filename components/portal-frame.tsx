import Link from "next/link";
import { ArrowLeft, LogOut } from "lucide-react";
import { OnyxLogo } from "@/components/onyx-logo";

export function PortalFrame({
  role,
  description,
  children
}: {
  role: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F7F9FC] font-[Montserrat] text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <OnyxLogo />
          <div className="flex items-center gap-2">
            <Link href="/login" className="inline-flex items-center rounded-full border px-4 py-2 text-xs font-black text-slate-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Switch role
            </Link>
            <Link href="/website" className="inline-flex items-center rounded-full bg-[#4F83DF] px-4 py-2 text-xs font-black text-white">
              <LogOut className="mr-2 h-4 w-4" />
              Exit demo
            </Link>
          </div>
        </div>
      </header>
      <section className="border-b bg-white px-5 py-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#4F83DF]">Onyx Simulation Portal</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{role}</h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-slate-600">{description}</p>
        </div>
      </section>
      <section className="px-5 py-6">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>
    </main>
  );
}

export function PortalCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black text-slate-950">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function MetricTile({ label, value, tone = "blue" }: { label: string; value: string; tone?: "blue" | "green" | "yellow" | "red" | "gray" }) {
  const colors = {
    blue: "border-[#4F83DF] bg-[#EAF1FC] text-[#2F5EAE]",
    green: "border-[#15834a] bg-[#E4F4EA] text-[#15834a]",
    yellow: "border-[#a66e00] bg-[#FFF3D5] text-[#a66e00]",
    red: "border-[#bd2431] bg-[#F9E2E5] text-[#bd2431]",
    gray: "border-slate-300 bg-slate-100 text-slate-600"
  };
  return (
    <div className={`rounded-2xl border-l-4 p-4 ${colors[tone]}`}>
      <div className="text-xs font-black uppercase tracking-wide opacity-80">{label}</div>
      <div className="mt-2 text-2xl font-black">{value}</div>
    </div>
  );
}
