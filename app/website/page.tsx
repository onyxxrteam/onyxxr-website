import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
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
  { icon: ShieldCheck, title: "Clinical Validation", text: "Learners are not cleared by completion alone. Performance must be supported by scenarios, checklist evidence, and instructor confirmation." },
  { icon: MapPin, title: "Anytime, Anywhere", text: "Designed for scalable practice across hospitals, EMS academies, military units, and medical schools." },
  { icon: BarChart3, title: "Realtime Dashboard", text: "Medical directors and instructors can monitor competency, risk, remediation, and certification status." },
  { icon: BadgeCheck, title: "Certification Integrity", text: "Every certificate should be traceable to course completion, XR evidence, instructor sign-off, and audit history." }
];

const activeCourses = [
  { title: "Basic Life Support", tag: "Active", detail: "CPR quality, AED safety, emergency activation, handover" },
  { title: "Advanced Cardiac Life Support", tag: "Active", detail: "Rhythm recognition, defibrillation timing, drugs, team leadership" },
  { title: "First Aid Training", tag: "Pilot", detail: "Early content validation for general first response training" }
];

const lockedCourses = [
  "Disaster Life Support",
  "Trauma Life Support",
  "Toxicology Life Support",
  "Prehospital Life Support",
  "Tactical Medical Life Support",
  "OB/GYNE Emergency Procedure",
  "Geriatric Nursing Skill Training",
  "Medical History and Examination",
  "Medical and Nursing Procedures",
  "National OSCE Exam Tutorials",
  "Emergency Medical Technician Education"
];

const audiences = [
  { icon: Stethoscope, title: "Medical Students", text: "Clinical readiness before ward exposure, OSCE preparation, and simulation lab sessions." },
  { icon: Users, title: "Nursing Students", text: "Procedure practice, emergency response, teamwork, and communication under pressure." },
  { icon: MonitorDot, title: "Paramedic / EMT", text: "Prehospital decision-making, time-critical action, and repeatable scenario-based training." },
  { icon: ShieldCheck, title: "Military Medical", text: "A roadmap-ready platform for tactical, maritime, and austere medical training." },
  { icon: Building2, title: "Hospitals & Schools", text: "Institution-level visibility for training compliance, competency, and instructor workload." }
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
    <main className="min-h-screen bg-white font-[Montserrat] text-[#2f3033]">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <OnyxLogo />
          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-600 lg:flex">
            <a href="#why">Why</a>
            <a href="#courses">Courses</a>
            <a href="#platform">Platform</a>
            <a href="#implementation">Implementation</a>
            <a href="#pilot">Pilot</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="hidden rounded-full border px-4 py-2 text-xs font-black text-slate-700 sm:inline-flex">Login</Link>
            <Link href="/" className="hidden rounded-full border px-4 py-2 text-xs font-black text-slate-700 sm:inline-flex">Dashboard</Link>
            <a href="#pilot" className="rounded-full bg-[#4F83DF] px-4 py-2 text-xs font-black text-white">Request Pilot</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 py-16 lg:py-20">
        <div className="absolute -right-40 -top-72 h-[520px] w-[760px] rounded-bl-[520px] border-b-[28px] border-l-[28px] border-[#4F83DF]/60" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="mb-8 flex items-center gap-5">
              <OnyxLogo showWord={false} className="[&_svg]:h-24 [&_svg]:w-24" />
              <div className="text-5xl font-black leading-none tracking-tight text-black lg:text-7xl">
                Onyx<span className="text-[#4F83DF]">XR</span>
              </div>
            </div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.34em] text-[#4F83DF]">Onyx Simulation</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-[#303033] lg:text-7xl">
              Redefining Medical Simulation Training
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
              A medical XR training platform for BLS, ACLS, and future clinical skills training. Built for scalable practice, measurable competency, instructor validation, and medical director oversight.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pilot" className="inline-flex items-center rounded-full bg-[#4F83DF] px-5 py-3 text-sm font-black text-white">
                Request Pilot <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link href="/" className="inline-flex items-center rounded-full border border-[#BFD4F6] bg-white px-5 py-3 text-sm font-black text-[#4F83DF]">
                View Command Center
              </Link>
            </div>
          </div>
          <div className="rounded-[42px] bg-[#F0F3F8] p-5 shadow-[0_24px_70px_rgba(47,128,237,.14)]">
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-3xl bg-white p-5">
                    <Icon className="h-9 w-9 text-[#4F83DF]" />
                    <h3 className="mt-4 text-base font-black text-[#2F5EAE]">{feature.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="border-y bg-[#FAFBFD] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#4F83DF]">Why Onyx Simulation</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 lg:text-5xl">
              Simulation training must scale without weakening professional standards.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
              The core problem is not only content. Training centers face limited instructor capacity, expensive simulation assets, restricted lab time, and insufficient performance data for medical direction.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Clock3 className="h-8 w-8 text-[#4F83DF]" />
              <h3 className="mt-5 text-xl font-black">More Practice Time</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Increase repetition without depending on instructor and simulation room availability for every session.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-8 w-8 text-[#15834a]" />
              <h3 className="mt-5 text-xl font-black">Validated Competency</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Separate course completion from actual professional readiness.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <BarChart3 className="h-8 w-8 text-[#4F83DF]" />
              <h3 className="mt-5 text-xl font-black">Director-Level Data</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">Track cohort risk, instructor backlog, remediation load, and certification integrity.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.34em] text-[#4F83DF]">Courses</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 lg:text-5xl">Start with BLS and ACLS. Expand with discipline.</h2>
              <p className="mt-5 text-base font-semibold leading-7 text-slate-600">
                Onyx Simulation should communicate clearly: BLS and ACLS are the initial active focus. Other medical education courses are visible as a locked roadmap until curriculum, validation, and instructor governance are ready.
              </p>
            </div>
            <div className="rounded-[36px] bg-[#F0F3F8] p-6">
              <div className="grid gap-4 md:grid-cols-3">
                {activeCourses.map((course) => (
                  <div key={course.title} className="rounded-3xl bg-white p-5">
                    <span className="rounded-full bg-[#E5EEFD] px-3 py-1 text-xs font-black text-[#2F5EAE]">{course.tag}</span>
                    <h3 className="mt-4 text-xl font-black">{course.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{course.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl bg-white p-5">
                <h3 className="text-lg font-black">Locked Roadmap Courses</h3>
                <p className="mt-2 text-sm font-semibold text-slate-600">Planned but closed until curriculum, instructor validation, and clinical governance are ready.</p>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  {lockedCourses.map((course) => (
                    <div key={course} className="flex items-center gap-2 rounded-2xl border bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600">
                      <Lock className="h-4 w-4 text-slate-400" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="border-y bg-[#2F5EAE] px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.34em] text-[#BFD4F6]">Platform</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-tight lg:text-5xl">From learning to validation. Not another generic LMS.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {workflow.map(([title, text], index) => (
              <div key={title} className="rounded-3xl border border-white/15 bg-white/8 p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#4F83DF] text-sm font-black">{index + 1}</div>
                <h3 className="text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.34em] text-[#4F83DF]">Audience</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 lg:text-5xl">Built for the medical education ecosystem</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <div key={audience.title} className="rounded-3xl border bg-white p-5">
                  <Icon className="h-9 w-9 text-[#4F83DF]" />
                  <h3 className="mt-4 text-lg font-black">{audience.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{audience.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="implementation" className="border-y bg-[#FAFBFD] px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#4F83DF]">Implementation</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 lg:text-5xl">Introduce the platform before discussing a commercial proposal.</h2>
            <p className="mt-5 text-base font-semibold leading-7 text-slate-600">
              For first conversations, the right message is capability, reliability, and institutional fit. A commercial proposal should come later after scope, course count, headset needs, instructor model, and deployment requirements are clear.
            </p>
          </div>
          <div className="rounded-[36px] bg-white p-8 shadow-sm">
            <div className="text-4xl font-black text-slate-950">
              Pilot-first deployment
            </div>
            <div className="mt-2 text-xl font-bold text-slate-500">Start with one controlled cohort, measure outcomes, then expand.</div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {["Course setup", "XR training workflow", "Instructor dashboard", "Medical director report"].map((item) => (
                <div key={item} className="rounded-2xl bg-[#F0F3F8] p-4 text-lg font-black text-slate-700">{item}</div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[#F0F3F8] p-5 text-base font-bold text-slate-700">
              Recommended first step: run a BLS or ACLS pilot, compare pre/post knowledge, XR performance, instructor validation, remediation burden, and certification readiness.
            </div>
          </div>
        </div>
      </section>

      <section id="pilot" className="px-5 py-16">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#4F83DF] p-8 text-white lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.34em] text-white/70">Pilot Program</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight lg:text-5xl">Start with one BLS or ACLS cohort. Prove the outcome.</h2>
              <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-white/85">
                A credible pilot should include baseline testing, XR attempts, instructor validation, remediation rate, certification integrity, and a medical director report.
              </p>
            </div>
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black text-[#4F83DF]">
              Open Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-semibold text-slate-500 md:flex-row">
          <div>Onyx Simulation · powered by OnyxXR</div>
          <div>BLS · ACLS · XR Simulation · Instructor Validation · Medical Director Dashboard</div>
        </div>
      </footer>
    </main>
  );
}
