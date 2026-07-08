import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Td, Th } from "@/components/ui/table";
import { auditTrail, learners, remediationPlans, safetyEvents, xrSessions } from "@/lib/data";

const learner = learners.find((item) => item.id === "lrn-piyada") ?? learners[0];
const competencies = [
  ["Rhythm ID", "borderline"],
  ["CPR Quality", "pass"],
  ["Defib Timing", "critical"],
  ["Drug Timing", "pass"],
  ["Pulse Check", "critical"],
  ["Team Lead", "borderline"],
  ["ROSC Care", "neutral"],
  ["Handover", "pass"]
] as const;

export default function StudentProfilePage() {
  return (
    <>
      <PageHeader title="Student Profile" description="Longitudinal learner evidence record for knowledge, XR attempts, critical events, instructor checklist, remediation, certification, and audit trail." />
      <div className="grid gap-4 xl:grid-cols-[1fr_.85fr]">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>{learner.name}</CardTitle>
              <CardDescription>{learner.profession} · {learner.organization} · {learner.cohort}</CardDescription>
            </div>
            <Badge tone="critical">Certification blocked</Badge>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-4">
              {[
                ["Learning progress", `${learner.learningProgress}%`],
                ["Knowledge", `${learner.preTest}% → ${learner.postTest}%`],
                ["Best XR score", `${learner.xrScore}%`],
                ["Readiness score", `${learner.readiness}/100`]
              ].map(([label, value]) => <div key={label} className="rounded-lg border bg-slate-50 p-3"><div className="text-xs font-bold text-slate-500">{label}</div><div className="mt-2 text-xl font-black">{value}</div></div>)}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
              {competencies.map(([name, tone]) => <div key={name} className="rounded-md border p-3"><div className="text-xs font-bold text-slate-500">{name}</div><Badge tone={tone} className="mt-2">{tone}</Badge></div>)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><div><CardTitle>Critical Safety Events</CardTitle><CardDescription>Unresolved critical failures block certification.</CardDescription></div></CardHeader>
          <CardContent className="space-y-3">
            {safetyEvents.filter((event) => event.learner === learner.name).map((event) => (
              <div key={event.id} className="rounded-lg border p-3"><div className="font-black">{event.event}</div><p className="mt-1 text-xs font-semibold leading-5 text-slate-600">{event.evidence}</p><Badge tone={event.severity} className="mt-2">{event.status}</Badge></div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <Card><CardHeader><div><CardTitle>Knowledge Test History</CardTitle></div></CardHeader><CardContent><Table><tbody><tr><Th>Pre-test</Th><Td>{learner.preTest}%</Td></tr><tr><Th>Post-test</Th><Td>{learner.postTest}%</Td></tr><tr><Th>Weak domain</Th><Td>Shockable rhythm algorithm</Td></tr></tbody></Table></CardContent></Card>
        <Card><CardHeader><div><CardTitle>XR Attempt History</CardTitle></div></CardHeader><CardContent className="space-y-2">{xrSessions.filter((session) => session.learnerId === learner.id).map((session) => <div key={session.id} className="rounded border p-3 text-xs font-semibold">{session.scenario} · Attempt {session.attempt} · {session.score}% · {session.notes}</div>)}</CardContent></Card>
        <Card><CardHeader><div><CardTitle>Remediation Plan</CardTitle></div></CardHeader><CardContent className="space-y-2">{remediationPlans.filter((plan) => plan.learner === learner.name).map((plan) => <div key={plan.id} className="rounded border p-3 text-xs font-semibold">{plan.requiredAction}<br /><Badge tone={plan.status} className="mt-2">{plan.retest}</Badge></div>)}</CardContent></Card>
      </div>
      <Card className="mt-4">
        <CardHeader><div><CardTitle>Audit Trail</CardTitle><CardDescription>Traceable record for certification integrity and dispute review.</CardDescription></div></CardHeader>
        <CardContent><div className="rounded-lg bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-100">{auditTrail.map((event) => <div key={event.timestamp}>{event.timestamp} · {event.event}</div>)}</div></CardContent>
      </Card>
    </>
  );
}
