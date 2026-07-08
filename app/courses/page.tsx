import { Lock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Td, Th } from "@/components/ui/table";
import { courses } from "@/lib/data";
import { formatTHB } from "@/lib/utils";

export default function CoursesPage() {
  return (
    <>
      <PageHeader title="Courses" description="Active BLS and ACLS courses plus locked roadmap courses planned for Onyx Simulation expansion." />
      <Card>
        <CardHeader><div><CardTitle>Course Portfolio</CardTitle><CardDescription>Only active/pilot courses should be sold or certified. Locked courses are roadmap visibility, not current delivery.</CardDescription></div></CardHeader>
        <CardContent>
          <div className="clinical-scrollbar overflow-x-auto rounded-lg border">
            <Table>
              <thead><tr><Th>Course</Th><Th>Status</Th><Th>Enrollments</Th><Th>Completion</Th><Th>XR pass</Th><Th>Instructor pass</Th><Th>Remediation</Th><Th>Critical failure</Th><Th>Revenue</Th><Th>Weakest domain</Th></tr></thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.code}>
                    <Td className="min-w-[240px] font-bold">{course.name}</Td>
                    <Td><Badge tone={course.status === "active" ? "pass" : course.status === "pilot" ? "progress" : "neutral"}>{course.status === "locked" ? <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3" /> locked</span> : course.status}</Badge></Td>
                    <Td>{course.enrollments}</Td><Td>{course.completionRate}%</Td><Td>{course.xrPassRate}%</Td><Td>{course.instructorPassRate}%</Td><Td>{course.remediationRate}%</Td><Td>{course.criticalFailureRate}%</Td><Td>{formatTHB(course.revenue)}</Td><Td className="min-w-[260px]">{course.weakestDomain}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
