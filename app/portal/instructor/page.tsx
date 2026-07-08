import { Badge } from "@/components/ui/badge";
import { Table, Td, Th } from "@/components/ui/table";
import { PortalCard, PortalFrame, MetricTile } from "@/components/portal-frame";
import { learners } from "@/lib/data";

export default function InstructorPortalPage() {
  return (
    <PortalFrame role="Instructor Portal" description="Operational workspace for practical validation, XR evidence review, checklists, remediation, and certification decisions.">
      <div className="grid gap-4 xl:grid-cols-4">
        <MetricTile label="Assessments today" value="18" tone="blue" />
        <MetricTile label="High-risk learners" value="4" tone="red" />
        <MetricTile label="Ready for validation" value="11" tone="green" />
        <MetricTile label="Checklist completion" value="94%" tone="green" />
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_.8fr]">
        <PortalCard title="Today’s Assessment Queue">
          <div className="overflow-x-auto rounded-lg border">
            <Table>
              <thead><tr><Th>Student</Th><Th>Course</Th><Th>Readiness</Th><Th>Risk</Th><Th>Action</Th></tr></thead>
              <tbody>{learners.filter((l) => l.validation !== "passed").slice(0, 5).map((learner) => <tr key={learner.id}><Td>{learner.name}</Td><Td>{learner.course}</Td><Td>{learner.readiness}/100</Td><Td><Badge tone={learner.risk === "high" ? "critical" : learner.risk === "moderate" ? "borderline" : "pass"}>{learner.risk}</Badge></Td><Td className="min-w-[220px]">{learner.nextAction}</Td></tr>)}</tbody>
            </Table>
          </div>
        </PortalCard>
        <PortalCard title="Instructor Decision Panel">
          <div className="space-y-3">
            {["Review XR replay", "Complete practical checklist", "Pass / remediate / fail decision", "Write instructor note", "Release or hold certificate"].map((item) => (
              <div key={item} className="rounded-2xl border bg-[#F8FBFF] p-4 text-sm font-bold text-slate-700">{item}</div>
            ))}
          </div>
        </PortalCard>
      </div>
    </PortalFrame>
  );
}
