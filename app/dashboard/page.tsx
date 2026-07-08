import { AlertTriangle, FileDown } from "lucide-react";
import { CertificationFunnel, CriticalTrendChart, SimpleBarChart } from "@/components/charts-lazy";
import { KpiCard } from "@/components/kpi-card";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { criticalTrend, funnel, kpis, organizations, safetyEvents } from "@/lib/data";
import { formatTHB } from "@/lib/utils";

export default function CommandCenterPage() {
  return (
    <>
      <PageHeader
        title="Command Center"
        description="Medical director overview for competency, safety, instructor validation, certification integrity, and platform growth."
        action={<Button><FileDown className="mr-2 h-4 w-4" /> Export director report</Button>}
      />
      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        <KpiCard label="Active learners" value={kpis.activeLearners} note="+18% vs prior month" tone="progress" />
        <KpiCard label="Course completion rate" value={`${kpis.completionRate}%`} note="BLS 84%, ACLS 69%" tone="pass" />
        <KpiCard label="Certification pass rate" value={`${kpis.certificationPassRate}%`} note="Instructor validated only" tone="pass" />
        <KpiCard label="Remediation required" value={kpis.remediationRequired} note="20% of active learners" tone="borderline" />
        <KpiCard label="Critical safety failure rate" value={`${kpis.criticalSafetyFailureRate}%`} note="+1.1% needs review" tone="critical" />
        <KpiCard label="Instructor validation backlog" value={kpis.instructorBacklog} note="Median wait 3.2 days" tone="borderline" />
        <KpiCard label="Average pre-test score" value={`${kpis.averagePreTest}%`} note="Baseline knowledge" />
        <KpiCard label="Average post-test score" value={`${kpis.averagePostTest}%`} note="+23 points improvement" tone="pass" />
        <KpiCard label="Average XR score" value={`${kpis.averageXrScore}%`} note="Scenario weighted" tone="progress" />
        <KpiCard label="Institutional growth" value={kpis.institutionalGrowth} note="+3 active organizations" tone="progress" />
        <KpiCard label="Revenue this month" value={formatTHB(kpis.revenueThisMonth)} note="ACLS 58%, BLS 42%" tone="pass" />
        <KpiCard label="Alerts" value={kpis.alerts} note="Critical and operational" tone="critical" />
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
        <Card>
          <CardHeader>
            <div><CardTitle>Enrollment to Certification Funnel</CardTitle><CardDescription>Loss points from enrollment to instructor-validated certification.</CardDescription></div>
            <Badge tone="progress">Current quarter</Badge>
          </CardHeader>
          <CardContent><CertificationFunnel data={funnel} /></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div><CardTitle>Clinical Alerts</CardTitle><CardDescription>Events requiring director or instructor action.</CardDescription></div>
            <Badge tone="critical">7 critical</Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            {safetyEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="rounded-lg border p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 text-clinical-critical" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-950">{event.event}</div>
                    <div className="mt-1 text-xs text-slate-600">{event.learner} · {event.evidence}</div>
                  </div>
                  <Badge tone={event.severity}>{event.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader><div><CardTitle>Critical Event Trend</CardTitle><CardDescription>Critical failures per 100 XR sessions.</CardDescription></div></CardHeader>
          <CardContent><CriticalTrendChart data={criticalTrend} /></CardContent>
        </Card>
        <Card>
          <CardHeader><div><CardTitle>Institution Performance</CardTitle><CardDescription>Completion rate by active customer site.</CardDescription></div></CardHeader>
          <CardContent><SimpleBarChart data={organizations.map((org) => ({ name: org.name.split(" ")[0], value: org.completionRate }))} dataKey="value" nameKey="name" /></CardContent>
        </Card>
      </div>
    </>
  );
}
