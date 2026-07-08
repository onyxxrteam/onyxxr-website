import Link from "next/link";
import { ArrowLeft, Flag, Timer, CheckCircle2 } from "lucide-react";
import { ProgressBar, StatusChip } from "@/components/learning-ui";
import { OnyxLogo } from "@/components/onyx-logo";
import { Badge } from "@/components/ui/badge";
import { eLearningProgressRecords } from "@/lib/data";

const sampleQuestion = {
  stem: "During adult cardiac arrest, which action should occur immediately after AED shock delivery?",
  options: [
    "Resume high-quality chest compressions immediately",
    "Check carotid pulse for 30 seconds",
    "Wait for the AED to reanalyze before touching the patient",
    "Move the patient before restarting CPR"
  ],
  answer: "Resume high-quality chest compressions immediately"
};

export function generateStaticParams() {
  return [{ kind: "pre-test" }, { kind: "post-test" }, { kind: "checkpoint" }];
}

export default async function TestPage({ params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  const learner = eLearningProgressRecords[0];
  const test = kind === "post-test" ? learner.postTest : learner.preTest;
  const answered = Math.min(8, test.questions);
  const progress = Math.round((answered / test.questions) * 100);

  return (
    <main className="min-h-screen bg-[#F7F9FC] font-[Montserrat] text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <OnyxLogo />
          <Link href="/e-learning" className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black text-slate-700">
            <ArrowLeft className="h-4 w-4" /> Back to e-learning
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-6">
        <div className="rounded-[28px] border bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#4F83DF]">{test.courseType} knowledge assessment</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">{test.title}</h1>
              <p className="mt-2 text-sm font-semibold text-slate-600">Attempt {Math.max(1, test.attemptNumber)} · Passing score {test.passingScore}% · {test.questions} questions</p>
            </div>
            <StatusChip status={test.status} />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-[#F0F3F8] p-4">
              <Timer className="h-6 w-6 text-[#4F83DF]" />
              <div className="mt-2 text-xs font-black uppercase tracking-wide text-slate-500">Timer</div>
              <div className="mt-1 text-2xl font-black">{test.timeUsedMin ?? 11}/{test.timeLimitMin}m</div>
            </div>
            <div className="rounded-2xl bg-[#F0F3F8] p-4">
              <div className="text-xs font-black uppercase tracking-wide text-slate-500">Question</div>
              <div className="mt-1 text-2xl font-black">{answered}/{test.questions}</div>
              <ProgressBar value={progress} className="mt-3" />
            </div>
            <div className="rounded-2xl bg-[#F0F3F8] p-4">
              <div className="text-xs font-black uppercase tracking-wide text-slate-500">Current score</div>
              <div className="mt-1 text-2xl font-black">{test.score ?? "--"}%</div>
              <div className="mt-2"><Badge tone={test.score && test.score >= test.passingScore ? "pass" : "borderline"}>Target {test.passingScore}%</Badge></div>
            </div>
            <div className="rounded-2xl bg-[#F0F3F8] p-4">
              <Flag className="h-6 w-6 text-[#D89B00]" />
              <div className="mt-2 text-xs font-black uppercase tracking-wide text-slate-500">Flagged</div>
              <div className="mt-1 text-2xl font-black">2</div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_.38fr]">
          <section className="rounded-[28px] border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-black">Question {answered}</h2>
              <button className="rounded-full border px-4 py-2 text-xs font-black text-slate-700">Flag question</button>
            </div>
            <p className="mt-5 text-lg font-bold leading-8 text-slate-900">{sampleQuestion.stem}</p>
            <div className="mt-6 grid gap-3">
              {sampleQuestion.options.map((option) => (
                <button key={option} className="rounded-2xl border bg-white p-4 text-left text-sm font-bold leading-6 text-slate-700 transition hover:border-[#4F83DF] hover:bg-[#F8FBFF]">
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-between gap-3">
              <button className="rounded-full border px-5 py-3 text-sm font-black text-slate-700">Previous</button>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full border px-5 py-3 text-sm font-black text-slate-700">Save answer</button>
                <button className="rounded-full bg-[#4F83DF] px-5 py-3 text-sm font-black text-white">Next question</button>
              </div>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[28px] border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black">Result screen concept</h2>
              <div className="mt-4 rounded-2xl bg-[#F0F3F8] p-4">
                <CheckCircle2 className="h-7 w-7 text-[#15834a]" />
                <div className="mt-3 text-2xl font-black">{test.score ?? "Pending"}%</div>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">After submission, the learner sees pass/fail status, weak topic areas, recommended modules, and XR unlock status.</p>
              </div>
            </div>
            <div className="rounded-[28px] border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black">Weak topic areas</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {(test.weakTopicAreas.length ? test.weakTopicAreas : ["AED safety sequence", "Compression interruptions"]).map((topic) => (
                  <Badge key={topic} tone="borderline">{topic}</Badge>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-black">Recommended modules</h2>
              <div className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-700">
                {(test.recommendedModules.length ? test.recommendedModules : ["AED Operation and Safety Check"]).map((module) => <p key={module}>- {module}</p>)}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
