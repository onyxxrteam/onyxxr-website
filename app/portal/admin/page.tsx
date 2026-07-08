import { Badge } from "@/components/ui/badge";
import { Table, Td, Th } from "@/components/ui/table";
import { PortalCard, PortalFrame, MetricTile } from "@/components/portal-frame";
import { organizations, courses } from "@/lib/data";
import { formatTHB } from "@/lib/utils";

export default function AdminPortalPage() {
  return (
    <PortalFrame role="Admin / Manager Portal" description="Training center operations view for organizations, cohorts, users, devices, schedules, course access, and institutional reporting.">
      <div className="grid gap-4 xl:grid-cols-4">
        <MetricTile label="Active organizations" value="14" tone="blue" />
        <MetricTile label="Active learners" value="428" tone="blue" />
        <MetricTile label="Validation backlog" value="43" tone="yellow" />
        <MetricTile label="Renewal risk" value="Moderate" tone="yellow" />
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_.8fr]">
        <PortalCard title="Organization Operations">
          <div className="overflow-x-auto rounded-lg border">
            <Table><thead><tr><Th>Organization</Th><Th>Type</Th><Th>Learners</Th><Th>Completion</Th><Th>Revenue</Th></tr></thead><tbody>{organizations.map((org) => <tr key={org.id}><Td>{org.name}</Td><Td>{org.type}</Td><Td>{org.activeLearners}</Td><Td>{org.completionRate}%</Td><Td>{formatTHB(org.revenue)}</Td></tr>)}</tbody></Table>
          </div>
        </PortalCard>
        <PortalCard title="Course Access Control">
          <div className="space-y-2">
            {courses.slice(0, 8).map((course) => (
              <div key={course.code} className="flex items-center justify-between gap-3 rounded-2xl border p-3 text-sm font-bold">
                <span>{course.name}</span>
                <Badge tone={course.status === "active" ? "pass" : course.status === "pilot" ? "progress" : "neutral"}>{course.status}</Badge>
              </div>
            ))}
          </div>
        </PortalCard>
      </div>
    </PortalFrame>
  );
}
