"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  MonitorDot,
  ShieldAlert
} from "lucide-react";
import { OnyxLogo } from "@/components/onyx-logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Command Center", icon: LayoutDashboard },
  { href: "/learners", label: "Learners", icon: GraduationCap },
  { href: "/student-profile", label: "Student Profile", icon: Activity },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/xr-scenarios", label: "XR Scenarios", icon: MonitorDot },
  { href: "/instructor-validation", label: "Instructor Validation", icon: ClipboardCheck },
  { href: "/remediation", label: "Remediation", icon: ShieldAlert },
  { href: "/certification", label: "Certification", icon: BadgeCheck },
  { href: "/organizations", label: "Organizations", icon: Building2 },
  { href: "/platform-growth", label: "Platform Growth", icon: LineChart },
  { href: "/quality-research", label: "Quality & Research", icon: FlaskConical }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/website") || pathname.startsWith("/login") || pathname.startsWith("/portal") || pathname.startsWith("/e-learning")) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r bg-white xl:block">
        <div className="border-b px-5 py-5">
          <OnyxLogo />
        </div>
        <nav className="clinical-scrollbar h-[calc(100vh-96px)] overflow-y-auto p-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "mb-1 flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-bold text-slate-600",
                  active && "bg-[#e8f0ff] text-[#2f6fdc]"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="xl:pl-72">
        <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
          <div className="flex min-h-16 items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <div className="xl:hidden">
              <OnyxLogo />
            </div>
            <div className="hidden xl:block">
              <div className="text-sm font-black text-slate-950">Onyx Simulation Command Center</div>
              <div className="text-xs font-medium text-slate-500">BLS and ACLS competency validation, instructor control, and medical direction</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border bg-white px-3 py-1 text-xs font-bold text-slate-600">Medical Director View</span>
              <span className="rounded-full border bg-white px-3 py-1 text-xs font-bold text-slate-600">Last 30 days</span>
            </div>
          </div>
          <nav className="clinical-scrollbar flex gap-2 overflow-x-auto border-t px-4 py-2 xl:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={cn("shrink-0 rounded-full border bg-white px-3 py-1.5 text-xs font-bold", pathname === item.href && "border-[#2f6fdc] bg-[#e8f0ff] text-[#2f6fdc]")}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
