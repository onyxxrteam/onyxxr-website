import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Clock3,
  Headset,
  Lock,
  MapPin,
  MonitorDot,
  ShieldCheck,
  Stethoscope,
  Users
} from "lucide-react";
import { OnyxLogo } from "@/components/onyx-logo";

const features = [
  { icon: Headset, title: "Realistic XR Simulation", text: "Immersive emergency-care practice designed to increase repetition beyond traditional simulation room capacity." },
  { icon: ShieldCheck, title: "Clinical Validation", text: "Learners are not cleared by completion alone — performance must be supported by scenarios, checklist evidence, and instructor confirmation." },
  { icon: MapPin, title: "Anytime, Anywhere", text: "Designed for scalable practice across hospitals, EMS academies, military units, and medical schools." },
  { icon: BarChart3, title: "Realtime Dashboard", text: "Medical directors and instructors can monitor competency, risk, remediation, and certification status." },
  { icon: BadgeCheck, title: "Certification Integrity", text: "Every certificate is traceable to course completion, XR evidence, instructor sign-off, and audit history." }
];

const activeCourses = [
  { title: "Basic Life Support", tag: "Active", detail: "CPR quality, AED safety, emergency activation, handover" },
  { title: "Advanced Cardiac Life Support", tag: "Active", detail: "Rhythm recognition, defibrillation timing, drugs, team leadership" },
  { title: "First Aid Training", tag: "Pilot", detail: "Early content validation for general first response training" }
];

const lockedCourses = [
  "Disaster Life Support", "Trauma Life Support", "Toxicology Life Support",
  "Prehospital Life Support", "Tactical Medical Life Support", "OB/GYNE Emergency Procedure",
  "Geriatric Nursing Skill Training", "Medical History and Examination",
  "Medical and Nursing Procedures", "National OSCE Exam Tutorials",
  "Emergency Medical Technician Education"
];

const audiences = [
  { icon: Stethoscope, title: "Medical Students", text: "Clinical readiness before ward exposure, OSCE preparation, and simulation lab sessions." },
  { icon: Users, title: "Nursing Students", text: "Procedure practice, emergency response, teamwork, and communication under pressure." },
  { icon: MonitorDot, title: "Paramedic / EMT", text: "Prehospital decision-making, time-critical action, and repeatable scenario-based training." },
  { icon: ShieldCheck, title: "Military Medical", text: "A roadmap-ready platform for tactical, maritime, and austere medical training." }
];

const workflow = [
  ["Learn", "Build baseline knowledge through structured e-learning and course modules."],
  ["Practice", "Repeat XR scenarios with clear feedback on timing, sequence, and safety."],
  ["Validate", "Instructor confirms performance using a practical checklist and XR evidence."],
  ["Remediate", "Assign targeted remediation for weak or unsafe competencies."],
  ["Certify", "Release certification only when the required evidence is complete."]
];

export default function WebsitePage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1d20]" style={{ fontFamily: "var(--font-body)" }}>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <OnyxLogo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 lg:flex">
            <a href="#why" className="hover:text-slate-900 transition-colors">Why</a>
            <a href="#courses" className="hover:text-slate-900 transition-colors">Courses</a>
            <a href="#platform" className="hover:text-slate-900 transition-colors">Platform</a>
            <a href="#pilot" className="hover:text-slate-900 transition-colors">Pilot</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#pilot" className="rounded-full bg-[#2F5EAE] px-4 py-2 text-sm font-medium text-white hover:bg-[#245096] transition-colors">
              Request Pilot
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 lg:pt-32">
        <div className="pointer-events-none absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-[#4F83DF]/6" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#4F83DF]/4" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#BFD4F6] bg-[#EEF4FF] px-4 py-1.5 text-xs font-medium text-[#2F5EAE]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F83DF]" />
            Now in active pilot — BLS &amp; ACLS
          </div>
          <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <h1 style={{ fontFamily: "var(--font-display)" }} className="text-5xl font-medium leading-[1.08] tracking-tight text-[#0d1117] lg:text-7xl">
                Medical simulation<br />
                <span className="text-[#4F83DF]">that scales.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg font-normal leading-8 text-slate-500">
                A medical XR training platform for BLS, ACLS, and future clinical skills — built for measurable competency, instructor validation, and director oversight.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#pilot" className="inline-flex items-center gap-2 rounded-full bg-[#2F5EAE] px-6 py-3 text-sm font-medium text-white hover:bg-[#245096] transition-colors">
                  Request a pilot <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-end">
              <OnyxLogo showWord={false} />
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:border-[#BFD4F6] hover:bg-[#F5F8FF] transition-colors">
                  <Icon className="h-6 w-6 text-[#4F83DF]" />
                  <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-4 text-sm font-600 text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="border-y border-slate-100 bg-[#FAFBFD] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4F83DF]">Why Onyx Simulation</p>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-slate-950 lg:text-5xl">
            Simulation training must scale without weakening professional standards.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
            Training centers face limited instructor capacity, expensive simulation assets, restricted lab time, and insufficient performance data for medical direction.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { icon: Clock3, title: "More Practice Time", text: "Increase repetition without depending on instructor and simulation room availability for every session.", color: "text-[#4F83DF]" },
              { icon: CheckCircle2, title: "Validated Competency", text: "Separate course completion from actual professional readiness.", color: "text-[#15834a]" },
              { icon: BarChart3, title: "Director-Level Data", text: "Track cohort risk, instructor backlog, remediation load, and certification integrity.", color: "text-[#4F83DF]" }
            ].map(({ icon: Icon, title, text, color }) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6">
                <Icon className={`h-7 w-7 ${color}`} />
                <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-5 text-lg font-500 text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4F83DF]">Courses</p>
              <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-4 text-3xl font-medium leading-tight tracking-tight text-slate-950 lg:text-4xl">
                Start with BLS and ACLS.<br />Expand with discipline.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-500">
                BLS and ACLS are the active focus. Other courses are on the roadmap, locked until curriculum, validation, and instructor governance are ready.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <div className="grid gap-4 md:grid-cols-3">
                {activeCourses.map((course) => (
                  <div key={course.title} className="rounded-xl bg-white border border-slate-100 p-5">
                    <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#2F5EAE]">{course.tag}</span>
                    <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-4 text-base font-500 text-slate-900">{course.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{course.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-slate-100 bg-white p-5">
                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-sm font-600 text-slate-700">Locked Roadmap</h3>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {lockedCourses.map((course) => (
                    <div key={course} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-500">
                      <Lock className="h-3 w-3 text-slate-300 shrink-0" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="border-y border-slate-900 bg-[#0d1117] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7BAAF7]">Platform</p>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight lg:text-4xl">
            From learning to validation.<br />Not another generic LMS.
          </h2>
          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {workflow.map(([title, text], i) => (
              <div key={title} className="rounded-2xl border border-white/8 bg-white/4 p-5">
                <div className="mb-5 text-xs font-medium text-[#7BAAF7]">0{i + 1}</div>
                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-base font-500">{title}</h3>
                <p className="mt-3 text-xs leading-5 text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4F83DF]">Audience</p>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-4 text-3xl font-medium leading-tight tracking-tight text-slate-950 lg:text-4xl">
            Built for the medical education ecosystem
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {audiences.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-white p-5">
                <Icon className="h-7 w-7 text-[#4F83DF]" />
                <h3 style={{ fontFamily: "var(--font-display)" }} className="mt-4 text-sm font-600 text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section id="pilot" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-[#0d1117] px-10 py-14 lg:px-16 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7BAAF7]">Pilot Program</p>
                <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-white lg:text-4xl">
                  Start with one BLS or ACLS cohort.<br />Prove the outcome.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
                  A credible pilot includes baseline testing, XR attempts, instructor validation, remediation rate, certification integrity, and a medical director report.
                </p>
              </div>
              <div>
                <a href="#pilot" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0d1117] hover:bg-slate-100 transition-colors">
                  Request Pilot <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <OnyxLogo />
          <p className="text-xs text-slate-400">BLS · ACLS · XR Simulation · Instructor Validation · Medical Director Dashboard</p>
          <div className="flex gap-4 text-xs text-slate-400">
            <Link href="/dashboard" className="hover:text-slate-700 transition-colors">Command Center</Link>
            <Link href="/login" className="hover:text-slate-700 transition-colors">Sign in</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
