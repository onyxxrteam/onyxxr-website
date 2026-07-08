import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, ClipboardCheck, GraduationCap, KeyRound, ShieldCheck, Stethoscope } from "lucide-react";
import { OnyxLogo } from "@/components/onyx-logo";

const roles = [
  {
    href: "/portal/student",
    icon: GraduationCap,
    title: "Student",
    description: "View assigned courses, complete e-learning, launch XR practice, review feedback, and track certification readiness."
  },
  {
    href: "/portal/instructor",
    icon: ClipboardCheck,
    title: "Instructor",
    description: "Manage today’s assessment queue, review XR evidence, complete checklists, assign remediation, and validate performance."
  },
  {
    href: "/portal/admin",
    icon: Building2,
    title: "Admin / Manager",
    description: "Manage cohorts, organizations, users, devices, course access, schedules, renewal status, and operational reports."
  },
  {
    href: "/portal/medical-course-director",
    icon: Stethoscope,
    title: "Medical Course Director",
    description: "Oversee clinical standards, instructor calibration, certification integrity, critical events, and quality improvement."
  }
];

const loginSteps = [
  "Select organization or training center.",
  "Sign in with email, SSO, or institution account.",
  "System detects role and opens the correct portal.",
  "User only sees actions appropriate to role and permission level."
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] font-[Montserrat] text-slate-900">
      <section className="grid min-h-screen lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex flex-col justify-between bg-white p-6 lg:p-10">
          <div>
            <OnyxLogo />
            <div className="mt-16 max-w-xl">
              <p className="text-xs font-black uppercase tracking-[0.34em] text-[#4F83DF]">Secure Portal</p>
              <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-slate-950">
                Login by clinical role.
              </h1>
              <p className="mt-5 text-base font-semibold leading-7 text-slate-600">
                Onyx Simulation should route each user to the workflow they actually need. Students practice, instructors validate, managers operate, and the Medical Course Director governs quality.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-3xl bg-[#F0F3F8] p-5">
            <div className="flex items-center gap-3">
              <KeyRound className="h-8 w-8 text-[#4F83DF]" />
              <div>
                <div className="font-black text-slate-950">Authentication-ready</div>
                <div className="text-sm font-semibold text-slate-600">Designed for Supabase Auth, SSO, or institution-managed accounts.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 lg:p-10">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-[32px] border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">Demo role selector</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                This is a prototype login. Choose a role to preview the portal. In production, role routing should come from the user profile and organization permission policy.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <Link key={role.href} href={role.href} className="group rounded-3xl border bg-white p-5 transition hover:border-[#4F83DF] hover:bg-[#F8FBFF]">
                      <Icon className="h-9 w-9 text-[#4F83DF]" />
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <h3 className="text-lg font-black text-slate-950">{role.title}</h3>
                        <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#4F83DF]" />
                      </div>
                      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{role.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="mt-5 rounded-[32px] border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">Recommended login flow</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-4">
                {loginSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-[#F0F3F8] p-4">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#4F83DF] text-sm font-black text-white">{index + 1}</div>
                    <div className="text-sm font-bold leading-6 text-slate-700">{step}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/website" className="rounded-full border px-5 py-3 text-sm font-black text-slate-700">Back to website</Link>
              <Link href="/" className="rounded-full bg-[#4F83DF] px-5 py-3 text-sm font-black text-white">Open command center</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
