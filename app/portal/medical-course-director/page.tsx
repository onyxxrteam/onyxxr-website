import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Table, Td, Th } from "@/components/ui/table";
import { PortalCard, PortalFrame, MetricTile } from "@/components/portal-frame";
import { courses, instructors, safetyEvents } from "@/lib/data";

export default function MedicalCourseDirectorPortalPage() {
  return (
    <PortalFrame role="Medical Course Director Portal" description="Clinical governance workspace for course standards, instructor calibration, certification integrity, critical safety events, and quality improvement.">
      <div className="grid gap-4 xl:grid-cols-4">
        <MetricTile label="Critical safety rate" value="6.8%" tone="red" />
        <MetricTile label="Instructor backlog" value="43" tone="yellow" />
        <MetricTile label="Certification pass" value="72%" tone="green" />
        <MetricTile label="Courses under review" value="2" tone="blue" />
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_.8fr]">
        <PortalCard title="Clinical Governance Alerts">
          <div className="space-y-3">
            {safetyEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="rounded-2xl border p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-black">{event.event}</div>
                  <Badge tone={event.severity}>{event.status}</Badge>
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-600">{event.learner} · {event.evidence}</div>
              </div>
            ))}
          </div>
        </PortalCard>
        <PortalCard title="Instructor Calibration">
          <Table>
            <thead><tr><Th>Instructor</Th><Th>Agreement</Th><Th>Risk</Th></tr></thead>
            <tbody>{instructors.map((instructor) => <tr key={instructor.id}><Td>{instructor.name}</Td><Td>{instructor.agreementWithXr}%</Td><Td><Badge tone={instructor.calibrationRisk === "high" ? "critical" : "pass"}>{instructor.calibrationRisk}</Badge></Td></tr>)}</tbody>
          </Table>
        </PortalCard>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <PortalCard title="Course Quality Review">
          <div className="space-y-2">
            {courses.filter((course) => course.status === "active").map((course) => (
              <div key={course.code} className="rounded-2xl border p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-black">{course.name}</div>
                  <Badge tone={course.criticalFailureRate > 7 ? "critical" : "borderline"}>{course.criticalFailureRate}% critical</Badge>
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-600">{course.weakestDomain}</div>
              </div>
            ))}
          </div>
        </PortalCard>
        <PortalCard title="Director Actions">
          <div className="space-y-3">
            <Link href="/" className="block rounded-2xl bg-[#4F83DF] p-4 text-sm font-black text-white">Open full Command Center</Link>
            <div className="rounded-2xl border p-4 text-sm font-bold text-slate-700">Approve course version update</div>
            <div className="rounded-2xl border p-4 text-sm font-bold text-slate-700">Review borderline certification cases</div>
            <div className="rounded-2xl border p-4 text-sm font-bold text-slate-700">Export quality and research report</div>
          </div>
        </PortalCard>
      </div>
    </PortalFrame>
  );
}
