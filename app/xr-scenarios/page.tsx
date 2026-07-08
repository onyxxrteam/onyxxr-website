import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Td, Th } from "@/components/ui/table";
import { xrSessions } from "@/lib/data";

export default function XrScenariosPage() {
  return (
    <>
      <PageHeader title="XR Scenarios" description="Scenario analytics for time-critical BLS and ACLS behavior under simulated clinical pressure." />
      <div className="grid gap-4 xl:grid-cols-[1fr_.85fr]">
        <Card>
          <CardHeader><div><CardTitle>XR Session Evidence</CardTitle><CardDescription>Simulation data should support, not replace, instructor judgment.</CardDescription></div></CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table><thead><tr><Th>Learner</Th><Th>Scenario</Th><Th>Course</Th><Th>Attempt</Th><Th>Score</Th><Th>Critical</Th><Th>CPR fraction</Th><Th>Notes</Th></tr></thead><tbody>{xrSessions.map((session) => <tr key={session.id}><Td>{session.learner}</Td><Td className="min-w-[220px]">{session.scenario}</Td><Td>{session.course}</Td><Td>{session.attempt}</Td><Td>{session.score}%</Td><Td><Badge tone={session.criticalFailures ? "critical" : "pass"}>{session.criticalFailures}</Badge></Td><Td>{session.cprFraction ?? "-"}%</Td><Td className="min-w-[260px]">{session.notes}</Td></tr>)}</tbody></Table>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><div><CardTitle>XR Replay Summary</CardTitle><CardDescription>Selected case: Nurse Piyada K. · VF/pVT arrest.</CardDescription></div><Badge tone="critical">Failed</Badge></CardHeader>
          <CardContent className="space-y-3 text-xs font-semibold text-slate-700">
            <div className="rounded border p-3">00:31 CPR started</div>
            <div className="rounded border p-3">00:42 Initial rhythm misclassified as SVT</div>
            <div className="rounded border p-3">02:48 First shock delivered</div>
            <div className="rounded border p-3">03:06 CPR resumed after 18 sec pause</div>
            <div className="rounded border p-3">04:12 Epinephrine administered on schedule</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
