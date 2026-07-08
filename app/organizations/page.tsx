import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Td, Th } from "@/components/ui/table";
import { organizations } from "@/lib/data";
import { formatTHB } from "@/lib/utils";
import { clinicalToneFromRisk } from "@/components/status";

export default function OrganizationsPage() {
  return (
    <>
      <PageHeader title="Organizations" description="Institution-level adoption, compliance, competency outcomes, renewal risk, and revenue." />
      <Card><CardHeader><div><CardTitle>Institution Performance</CardTitle><CardDescription>Useful for hospital, EMS, military, and medical school reporting.</CardDescription></div><Badge tone="progress">14 active</Badge></CardHeader><CardContent><div className="overflow-x-auto rounded-lg border"><Table><thead><tr><Th>Organization</Th><Th>Type</Th><Th>Active learners</Th><Th>Completion</Th><Th>Certification</Th><Th>Critical failure</Th><Th>Revenue</Th><Th>Renewal risk</Th></tr></thead><tbody>{organizations.map((org) => <tr key={org.id}><Td className="font-bold">{org.name}</Td><Td>{org.type}</Td><Td>{org.activeLearners}</Td><Td>{org.completionRate}%</Td><Td>{org.certificationRate}%</Td><Td>{org.criticalFailureRate}%</Td><Td>{formatTHB(org.revenue)}</Td><Td><Badge tone={clinicalToneFromRisk(org.renewalRisk)}>{org.renewalRisk}</Badge></Td></tr>)}</tbody></Table></div></CardContent></Card>
    </>
  );
}
