import Link from "next/link";
import { ArrowRight, Clock, FileCheck2, Lock, MonitorDot, ShieldAlert } from "lucide-react";
import { CircularProgress, LearningStep, ModuleCard, ProgressBar, StatusChip } from "@/components/learning-ui";
import { OnyxLogo } from "@/components/onyx-logo";
import { Badge } from "@/components/ui/badge";
import { eLearningProgressRecords } from "@/lib/data";

export default function ELearningPage() {
  const learner = eLearningProgressRecords[0];
  const activeModule = learner.modules.find((module) => module.status === "in_progress") ?? learner.modules[0];

  return (
    <main className="min-h-screen bg-[#F7F9FC] font-[Montserrat] text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <OnyxLogo />
          <div className="flex flex-wrap gap-2">
            <Link href="/portal/student" className="rounded-full border px-4 py-2 text-xs font-black text-slate-700">Student portal</Link>
            <Link href="/" className="rounded-full bg-[#4F83DF] px-4 py-2 text-xs font-black text-white">Command center</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-5 xl:grid-cols-[1fr_.38fr]">
          <div className="rounded-[28px] border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#4F83DF]">Learner E-learning</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{learner.courseName}</h1>
                <p className="mt-2 text-sm font-semibold text-slate-600">{learner.learnerName} · {learner.role} · Last activity {learner.lastActivityAt}</p>
              </div>
              <CircularProgress value={learner.overallProgress} />
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-4">
              <div className="rounded-2xl bg-[#F0F3F8] p-4">
                <div className="text-xs font-black uppercase tracking-wide text-slate-500">Pre-test</div>
                <div className="mt-2 text-2xl font-black text-slate-950">{learner.preTest.score}%</div>
                <StatusChip status={learner.preTest.status} />
              </div>
              <div className="rounded-2xl bg-[#F0F3F8] p-4">
                <div className="text-xs font-black uppercase tracking-wide text-slate-500">Post-test</div>
                <div className="mt-2 text-2xl font-black text-slate-950">{learner.postTest.score ?? "Locked"}</div>
                <StatusChip status={learner.postTest.status} />
              </div>
              <div className="rounded-2xl bg-[#F0F3F8] p-4">
                <div className="text-xs font-black uppercase tracking-wide text-slate-500">Video progress</div>
                <div className="mt-2 text-2xl font-black text-slate-950">{learner.videoProgress}%</div>
                <ProgressBar value={learner.videoProgress} className="mt-3" />
              </div>
              <div className="rounded-2xl bg-[#F0F3F8] p-4">
                <div className="text-xs font-black uppercase tracking-wide text-slate-500">Time remaining</div>
                <div className="mt-2 text-2xl font-black text-slate-950">{learner.estimatedRemainingMin}m</div>
                <div className="mt-1 text-xs font-bold text-slate-500">{learner.totalTimeSpentMin}m completed</div>
              </div>
            </div>
          </div>

          <aside className="rounded-[28px] border bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              {learner.lockedReason ? <Lock className="mt-1 h-5 w-5 text-[#D89B00]" /> : <FileCheck2 className="mt-1 h-5 w-5 text-[#15834a]" />}
              <div>
                <h2 className="text-lg font-black text-slate-950">Next action</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{learner.nextAction}</p>
              </div>
            </div>
            {learner.lockedReason && (
              <div className="mt-4 rounded-2xl border border-[#F1C76B] bg-[#FFF8E6] p-4 text-sm font-bold leading-6 text-slate-700">
                {learner.lockedReason}
              </div>
            )}
            <Link href={`/e-learning/module/${activeModule.id}`} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4F83DF] px-5 py-3 text-sm font-black text-white">
              Continue module <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/e-learning/test/pre-test" className="mt-3 inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-sm font-black text-slate-700">
              Review pre-test
            </Link>
          </aside>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[.9fr_1.1fr]">
          <section className="rounded-[28px] border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">Clinical learning pathway</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">Progress weighting follows the operational certification model.</p>
            <div className="mt-5 grid gap-3">
              {learner.sectionProgress.map((step) => (
                <LearningStep key={step.section} title={step.section} weight={step.weight} progress={step.progress} status={step.status} />
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-slate-950">Assigned modules</h2>
                <p className="mt-2 text-sm font-semibold text-slate-600">Video completion requires 90% watch threshold and checkpoint clearance.</p>
              </div>
              <Badge tone="progress">{learner.moduleCompletion}% modules</Badge>
            </div>
            <div className="mt-5 grid gap-3">
              {learner.modules.map((module) => (
                <ModuleCard key={module.id} id={module.id} title={module.title} progress={module.progress} status={module.status} timeSpent={module.timeSpentMin} remaining={module.estimatedRemainingMin} />
              ))}
            </div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[28px] border bg-white p-6 shadow-sm">
            <MonitorDot className="h-7 w-7 text-[#4F83DF]" />
            <h3 className="mt-3 text-lg font-black">XR eligibility</h3>
            <div className="mt-2"><StatusChip status={learner.xrEligibility} /></div>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">XR opens only after required videos, checkpoints, and post-test pass criteria are met.</p>
          </div>
          <div className="rounded-[28px] border bg-white p-6 shadow-sm">
            <ShieldAlert className="h-7 w-7 text-[#D9342B]" />
            <h3 className="mt-3 text-lg font-black">Remediation</h3>
            <div className="mt-2"><Badge tone={learner.remediation.required ? "critical" : "pass"}>{learner.remediation.required ? "Required" : "Not required"}</Badge></div>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{learner.remediation.reason}</p>
          </div>
          <div className="rounded-[28px] border bg-white p-6 shadow-sm">
            <Clock className="h-7 w-7 text-[#4F83DF]" />
            <h3 className="mt-3 text-lg font-black">Completion rule</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">A learner is not certification-ready until knowledge, XR performance, critical safety checks, and instructor validation are complete.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
