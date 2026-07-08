import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, Td, Th } from "@/components/ui/table";
import { learners } from "@/lib/data";
import { toneFromCertification, toneFromValidation } from "@/components/status";

export default function CertificationPage() {
  return (
    <>
      <PageHeader title="Certification" description="Certification integrity register with evidence traceability, instructor sign-off, blocked records, and credential status." />
      <Card><CardHeader><div><CardTitle>Certification Integrity Register</CardTitle><CardDescription>No certificate is issued with unresolved critical safety failure or missing instructor validation.</CardDescription></div></CardHeader><CardContent><div className="overflow-x-auto rounded-lg border"><Table><thead><tr><Th>Learner</Th><Th>Course</Th><Th>E-learning</Th><Th>Knowledge</Th><Th>XR</Th><Th>Critical failure</Th><Th>Instructor</Th><Th>Certificate</Th><Th>Credential ID</Th></tr></thead><tbody>{learners.map((l) => <tr key={l.id}><Td>{l.name}</Td><Td>{l.course}</Td><Td><Badge tone={l.learningProgress === 100 ? "pass" : "progress"}>{l.learningProgress}%</Badge></Td><Td>{l.postTest}%</Td><Td>{l.xrScore}%</Td><Td><Badge tone={l.criticalFailure}>{l.criticalFailure}</Badge></Td><Td><Badge tone={toneFromValidation(l.validation)}>{l.validation}</Badge></Td><Td><Badge tone={toneFromCertification(l.certification)}>{l.certification}</Badge></Td><Td>{l.certification === "certified" ? `OSIM-${l.courseCode}-26-${l.id.slice(-4).toUpperCase()}` : "Locked"}</Td></tr>)}</tbody></Table></div></CardContent></Card>
    </>
  );
}
