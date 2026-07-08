import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Td, Th } from "@/components/ui/table";
import { remediationPlans } from "@/lib/data";

export default function RemediationPage() {
  return (
    <>
      <PageHeader title="Remediation" description="Targeted remediation based on failed competencies and critical safety evidence, not generic repeat training." />
      <Card><CardHeader><div><CardTitle>Active Remediation Plans</CardTitle><CardDescription>Certification remains locked until assigned remediation evidence is complete.</CardDescription></div><Badge tone="borderline">86 active plans</Badge></CardHeader><CardContent><Table><thead><tr><Th>Learner</Th><Th>Course</Th><Th>Root cause</Th><Th>Required action</Th><Th>Status</Th><Th>Owner</Th><Th>Retest</Th></tr></thead><tbody>{remediationPlans.map((plan) => <tr key={plan.id}><Td>{plan.learner}</Td><Td>{plan.course}</Td><Td>{plan.rootCause}</Td><Td className="min-w-[320px]">{plan.requiredAction}</Td><Td><Badge tone={plan.status}>{plan.status}</Badge></Td><Td>{plan.owner}</Td><Td>{plan.retest}</Td></tr>)}</tbody></Table></CardContent></Card>
    </>
  );
}
