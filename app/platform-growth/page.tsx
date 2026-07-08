import { CertificationFunnel, SimpleBarChart } from "@/components/charts";
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { courses, funnel, kpis, organizations } from "@/lib/data";
import { formatTHB } from "@/lib/utils";

export default function PlatformGrowthPage() {
  const activeCourses = courses.filter((course) => course.status !== "locked");
  return (
    <>
      <PageHeader title="Platform Growth" description="Business and adoption view: users, enrollments, XR sessions, institution adoption, revenue, renewal, and certification funnel." />
      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        <KpiCard label="New users" value={kpis.newUsers} note="Last 30 days" tone="progress" />
        <KpiCard label="Active users" value={kpis.activeUsers} note="Learners, instructors, admins" tone="progress" />
        <KpiCard label="Course enrollment" value={activeCourses.reduce((sum, c) => sum + c.enrollments, 0)} note="Active and pilot courses" tone="pass" />
        <KpiCard label="Completion rate" value={`${kpis.completionRate}%`} note="Across BLS and ACLS" tone="pass" />
        <KpiCard label="XR sessions" value={kpis.xrSessions} note="2.3 per active learner" tone="progress" />
        <KpiCard label="Renewal rate" value={`${kpis.renewalRate}%`} note="Early institutional accounts" tone="borderline" />
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card><CardHeader><div><CardTitle>Enrollment to Certification Funnel</CardTitle></div></CardHeader><CardContent><CertificationFunnel data={funnel} /></CardContent></Card>
        <Card><CardHeader><div><CardTitle>Revenue by Course</CardTitle><CardDescription>Locked roadmap courses are excluded from current revenue.</CardDescription></div><Badge tone="pass">{formatTHB(kpis.revenueThisMonth)}</Badge></CardHeader><CardContent><SimpleBarChart data={activeCourses.map((c) => ({ name: c.name.replace(" Life Support", ""), value: c.revenue }))} dataKey="value" nameKey="name" /></CardContent></Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card><CardHeader><div><CardTitle>Institutional Adoption</CardTitle></div></CardHeader><CardContent><SimpleBarChart data={organizations.map((o) => ({ name: o.name.split(" ")[0], value: o.activeLearners }))} dataKey="value" nameKey="name" /></CardContent></Card>
        <Card><CardHeader><div><CardTitle>Roadmap Discipline</CardTitle><CardDescription>Planned courses should be visible but closed until clinical content, instructors, and validation rules are ready.</CardDescription></div></CardHeader><CardContent className="space-y-2">{courses.filter((course) => course.status === "locked").slice(0, 7).map((course) => <div key={course.code} className="flex items-center justify-between rounded-lg border p-3 text-xs font-bold"><span>{course.name}</span><Badge tone="neutral">locked</Badge></div>)}</CardContent></Card>
      </div>
    </>
  );
}
