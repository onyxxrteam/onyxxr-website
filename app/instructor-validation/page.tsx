import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Td, Th } from "@/components/ui/table";
import { learners } from "@/lib/data";
import { clinicalToneFromRisk } from "@/components/status";

const checklist = [
  ["Identifies pulseless VF and selects shockable arrest algorithm", "pass"],
  ["Delivers defibrillation with clear safety command", "pass"],
  ["Minimizes pulse/rhythm check interruption", "borderline"],
  ["Maintains closed-loop communication and team leadership", "borderline"],
  ["Administers epinephrine at appropriate interval", "pass"]
] as const;

export default function InstructorValidationPage() {
  return (
    <>
      <PageHeader title="Instructor Validation" description="Daily practical assessment queue, readiness score, checklist, XR evidence, remediation, and pass/fail decision." />
      <div className="grid gap-4 xl:grid-cols-[1fr_.9fr]">
        <Card><CardHeader><div><CardTitle>Today’s Assessment Queue</CardTitle><CardDescription>Ordered by clinical risk and certification deadline.</CardDescription></div></CardHeader><CardContent><Table><thead><tr><Th>Student</Th><Th>Course</Th><Th>Readiness</Th><Th>Risk</Th><Th>Instructor focus</Th></tr></thead><tbody>{learners.filter((l) => l.validation !== "passed").map((l) => <tr key={l.id}><Td>{l.name}</Td><Td>{l.course}</Td><Td>{l.readiness}/100</Td><Td><Badge tone={clinicalToneFromRisk(l.risk)}>{l.risk}</Badge></Td><Td className="min-w-[260px]">{l.nextAction}</Td></tr>)}</tbody></Table></CardContent></Card>
        <Card><CardHeader><div><CardTitle>Practical Checklist</CardTitle><CardDescription>Selected learner: Lt. Jirawat S. · ACLS Provider.</CardDescription></div><Badge tone="progress">In progress</Badge></CardHeader><CardContent className="space-y-2">{checklist.map(([item, tone]) => <div key={item} className="flex items-center justify-between gap-3 rounded-lg border p-3 text-xs font-bold"><span>{item}</span><Badge tone={tone}>{tone}</Badge></div>)}<div className="grid grid-cols-3 gap-2 pt-2"><Button>Pass</Button><Button variant="secondary">Pass with remediation</Button><Button variant="critical">Fail</Button></div></CardContent></Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card><CardHeader><div><CardTitle>XR Replay Summary Panel</CardTitle></div></CardHeader><CardContent className="text-sm font-semibold leading-7 text-slate-700">Borderline first-cycle leadership. One pulse/rhythm pause measured at 11 seconds. No unsafe shock behavior observed. Medication timing acceptable.</CardContent></Card>
        <Card><CardHeader><div><CardTitle>Instructor Notes</CardTitle></div></CardHeader><CardContent><textarea className="min-h-32 w-full rounded-lg border p-3 text-sm font-medium" defaultValue="Learner demonstrates safe defibrillation behavior but remains borderline in early role assignment. Recommend focused two-minute leader drill before certification release." /></CardContent></Card>
      </div>
    </>
  );
}
