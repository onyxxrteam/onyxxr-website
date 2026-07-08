import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, Lock, MonitorDot, PlayCircle, ShieldAlert } from "lucide-react";
import { ProgressBar, StatusChip } from "@/components/learning-ui";
import { OnyxLogo } from "@/components/onyx-logo";
import { Badge } from "@/components/ui/badge";
import { eLearningProgressRecords } from "@/lib/data";

export function generateStaticParams() {
  return eLearningProgressRecords.flatMap((record) => record.modules.map((module) => ({ moduleId: module.id })));
}

export default async function ModuleDetailPage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const learner = eLearningProgressRecords.find((record) => record.modules.some((module) => module.id === moduleId)) ?? eLearningProgressRecords[0];
  const module = learner.modules.find((item) => item.id === moduleId) ?? learner.modules[0];
  const lesson = module.lessons[0];
  const nextModule = learner.modules.find((item) => item.status === "in_progress" && item.id !== module.id) ?? learner.modules.find((item) => item.id !== module.id);

  return (
    <main className="min-h-screen bg-[#F7F9FC] font-[Montserrat] text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <OnyxLogo />
          <div className="flex flex-wrap gap-2">
            <Link href="/e-learning" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black text-slate-700">
              <ArrowLeft className="h-4 w-4" /> E-learning
            </Link>
            <Link href="/portal/student" className="rounded-full bg-[#4F83DF] px-4 py-2 text-xs font-black text-white">Student portal</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-5 xl:grid-cols-[1fr_.42fr]">
          <section className="rounded-[28px] border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#4F83DF]">{module.courseName}</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{module.title}</h1>
                <p className="mt-2 text-sm font-semibold text-slate-600">Related XR: {module.relatedXrScenario}</p>
              </div>
              <StatusChip status={module.status} />
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border bg-slate-950">
              <div className="grid min-h-[320px] place-items-center bg-[radial-gradient(circle_at_center,#1F3D73,#07111F_70%)] text-white">
                <div className="text-center">
                  <PlayCircle className="mx-auto h-16 w-16 text-[#8DB5FF]" />
                  <div className="mt-4 text-2xl font-black">{lesson.title}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-300">Prototype video area · {lesson.watchedMin}/{lesson.durationMin} minutes watched</div>
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="flex items-center justify-between gap-3 text-sm font-black">
                  <span>Watch threshold {lesson.requiredWatchThreshold}%</span>
                  <span>{lesson.watchedPercent}% watched</span>
                </div>
                <ProgressBar value={lesson.watchedPercent} className="mt-3" />
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border p-5">
                <h2 className="text-lg font-black">Learning objectives</h2>
                <ul className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-700">
                  {module.objectives.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </div>
              <div className="rounded-2xl border p-5">
                <h2 className="text-lg font-black">Key clinical points</h2>
                <ul className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-700">
                  {module.keyClinicalPoints.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[28px] border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-[#4F83DF]" />
                <h2 className="text-lg font-black">Module status</h2>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-[#F0F3F8] p-4">
                  <div className="text-xs font-black uppercase tracking-wide text-slate-500">Progress</div>
                  <div className="mt-2 text-3xl font-black">{module.progress}%</div>
                  <ProgressBar value={module.progress} className="mt-3" />
                </div>
                <div className="rounded-2xl bg-[#F0F3F8] p-4">
                  <div className="text-xs font-black uppercase tracking-wide text-slate-500">Time</div>
                  <div className="mt-2 text-sm font-bold text-slate-700">{module.timeSpentMin}m spent · {module.estimatedRemainingMin}m remaining</div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black">Completion criteria</h2>
              <div className="mt-4 space-y-3">
                {module.completionCriteria.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-[#F0F3F8] p-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#15834a]" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[.9fr_1.1fr]">
          <section className="rounded-[28px] border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Chapters</h2>
            <div className="mt-5 space-y-3">
              {lesson.chapters.map((chapter) => (
                <div key={chapter.id} className="rounded-2xl border p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-black text-slate-950">{chapter.title}</div>
                      <div className="mt-1 text-xs font-bold text-slate-500">{chapter.durationMin} minutes</div>
                    </div>
                    <StatusChip status={chapter.checkpointStatus} />
                  </div>
                  <ProgressBar value={chapter.watchedPercent} className="mt-3" />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Checkpoint panel</h2>
            <div className="mt-5 grid gap-3">
              {module.checkpoints.map((checkpoint) => (
                <div key={checkpoint.id} className="rounded-2xl border p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="font-black">{checkpoint.title}</div>
                      <div className="mt-1 text-xs font-bold text-slate-500">Trigger {checkpoint.triggerPercent}% · {checkpoint.questions} questions · attempts {checkpoint.attempts}</div>
                    </div>
                    <StatusChip status={checkpoint.status} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge tone={checkpoint.score >= checkpoint.passingScore ? "pass" : checkpoint.status === "locked" ? "neutral" : "borderline"}>Score {checkpoint.score}%</Badge>
                    <Badge tone="progress">Pass {checkpoint.passingScore}%</Badge>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[28px] border bg-white p-6 shadow-sm">
            <ShieldAlert className="h-7 w-7 text-[#D9342B]" />
            <h3 className="mt-3 text-lg font-black">Critical safety errors</h3>
            <ul className="mt-4 space-y-2 text-sm font-semibold leading-6 text-slate-700">
              {module.criticalSafetyErrors.map((item) => <li key={item}>- {item}</li>)}
            </ul>
          </div>
          <div className="rounded-[28px] border bg-white p-6 shadow-sm">
            <MonitorDot className="h-7 w-7 text-[#4F83DF]" />
            <h3 className="mt-3 text-lg font-black">Related XR scenario</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{module.relatedXrScenario}</p>
          </div>
          <div className="rounded-[28px] border bg-white p-6 shadow-sm">
            {nextModule ? (
              <>
                <h3 className="text-lg font-black">Next module</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{nextModule.title}</p>
                <Link href={`/e-learning/module/${nextModule.id}`} className="mt-4 inline-flex rounded-full bg-[#4F83DF] px-5 py-3 text-sm font-black text-white">Open next module</Link>
              </>
            ) : (
              <>
                <Lock className="h-7 w-7 text-slate-400" />
                <h3 className="mt-3 text-lg font-black">No next module</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">Return to the pathway to continue testing or XR eligibility review.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
