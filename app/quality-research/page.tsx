import { CriticalTrendChart, SimpleBarChart } from "@/components/charts";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Td, Th } from "@/components/ui/table";
import { courses, criticalTrend, instructors, organizations } from "@/lib/data";

export default function QualityResearchPage() {
  return (
    <>
      <PageHeader title="Quality and Research" description="Medical director view for cohort comparison, instructor calibration, certification integrity, critical event trends, course weakness analysis, institution performance, and research export." action={<Button>Export research dataset</Button>} />
      <div className="grid gap-4 xl:grid-cols-2">
        <Card><CardHeader><div><CardTitle>Critical Event Trends</CardTitle><CardDescription>Track safety event trend before scaling cohorts.</CardDescription></div></CardHeader><CardContent><CriticalTrendChart data={criticalTrend} /></CardContent></Card>
        <Card><CardHeader><div><CardTitle>Cohort Comparison</CardTitle><CardDescription>Competency conversion by active course.</CardDescription></div></CardHeader><CardContent><SimpleBarChart data={courses.filter(c => c.status === "active").map((c) => ({ name: c.name.split(" ")[0], value: c.instructorPassRate }))} dataKey="value" nameKey="name" /></CardContent></Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card><CardHeader><div><CardTitle>Instructor Calibration</CardTitle><CardDescription>Assessment reliability compared with XR evidence and director review.</CardDescription></div></CardHeader><CardContent><Table><thead><tr><Th>Instructor</Th><Th>Role</Th><Th>Assessments</Th><Th>Pass rate</Th><Th>Agreement with XR</Th><Th>Calibration risk</Th></tr></thead><tbody>{instructors.map((i) => <tr key={i.id}><Td>{i.name}</Td><Td>{i.role}</Td><Td>{i.assessments}</Td><Td>{i.passRate}%</Td><Td>{i.agreementWithXr}%</Td><Td><Badge tone={i.calibrationRisk === "low" ? "pass" : i.calibrationRisk === "moderate" ? "borderline" : "critical"}>{i.calibrationRisk}</Badge></Td></tr>)}</tbody></Table></CardContent></Card>
        <Card><CardHeader><div><CardTitle>Course Weakness Analysis</CardTitle><CardDescription>Ranked by clinical risk and frequency.</CardDescription></div></CardHeader><CardContent className="space-y-2">{courses.filter(c => c.status === "active").map((c) => <div key={c.code} className="rounded-lg border p-3"><div className="flex items-center justify-between gap-2"><div className="text-sm font-black">{c.name}</div><Badge tone={c.criticalFailureRate > 7 ? "critical" : "borderline"}>{c.criticalFailureRate}% critical</Badge></div><div className="mt-1 text-xs font-semibold text-slate-600">{c.weakestDomain}</div></div>)}</CardContent></Card>
      </div>
      <Card className="mt-4"><CardHeader><div><CardTitle>Institution Performance</CardTitle><CardDescription>Research and governance comparison across sites.</CardDescription></div></CardHeader><CardContent><Table><thead><tr><Th>Institution</Th><Th>Completion</Th><Th>Certification</Th><Th>Critical failure</Th><Th>Interpretation</Th></tr></thead><tbody>{organizations.map((org) => <tr key={org.id}><Td>{org.name}</Td><Td>{org.completionRate}%</Td><Td>{org.certificationRate}%</Td><Td>{org.criticalFailureRate}%</Td><Td>{org.criticalFailureRate > 7 ? "Needs director review before expansion" : "Operationally acceptable"}</Td></tr>)}</tbody></Table></CardContent></Card>
    </>
  );
}
