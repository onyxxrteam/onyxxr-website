import { LearnersTable } from "@/components/learners-table";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { learners } from "@/lib/data";

export default function LearnersPage() {
  return (
    <>
      <PageHeader title="Learners" description="Filterable learner registry with risk state, scores, instructor validation, certification status, and next action." />
      <Card>
        <CardHeader><div><CardTitle>Learner Registry</CardTitle><CardDescription>Filters include course, organization, risk level, certification status, instructor, cohort, and activity search.</CardDescription></div></CardHeader>
        <CardContent><LearnersTable data={learners} /></CardContent>
      </Card>
    </>
  );
}
