import Link from "next/link";
import { BadgeCheck, BookOpenCheck, MonitorDot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PortalCard, PortalFrame, MetricTile } from "@/components/portal-frame";

export default function StudentPortalPage() {
  return (
    <PortalFrame role="Student Portal" description="Focused view for assigned courses, learning progress, XR practice, remediation, and certification readiness.">
      <div className="grid gap-4 xl:grid-cols-3">
        <MetricTile label="Learning progress" value="82%" tone="blue" />
        <MetricTile label="Best XR score" value="78%" tone="yellow" />
        <MetricTile label="Certification readiness" value="Pending" tone="yellow" />
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_.8fr]">
        <PortalCard title="Assigned Course">
          <div className="rounded-2xl border p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-lg font-black">ACLS Provider</div>
                <div className="mt-1 text-sm font-semibold text-slate-600">Cohort ACLS-RN-07 · Due 18 Jul 2026</div>
              </div>
              <Badge tone="progress">In progress</Badge>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <Link href="/e-learning" className="rounded-xl bg-[#F0F3F8] p-4 transition hover:bg-[#E8F0FF]"><BookOpenCheck className="h-6 w-6 text-[#4F83DF]" /><div className="mt-2 font-black">E-learning</div><div className="text-sm font-semibold text-slate-600">Complete modules</div></Link>
              <div className="rounded-xl bg-[#F0F3F8] p-4"><MonitorDot className="h-6 w-6 text-[#4F83DF]" /><div className="mt-2 font-black">XR Practice</div><div className="text-sm font-semibold text-slate-600">Repeat scenarios</div></div>
              <div className="rounded-xl bg-[#F0F3F8] p-4"><BadgeCheck className="h-6 w-6 text-[#15834a]" /><div className="mt-2 font-black">Validation</div><div className="text-sm font-semibold text-slate-600">Instructor sign-off</div></div>
            </div>
          </div>
        </PortalCard>
        <PortalCard title="Next Action">
          <div className="space-y-3 text-sm font-semibold leading-6 text-slate-700">
            <p>Repeat VF/pVT rhythm recognition micro-drill before instructor validation.</p>
            <p>Target: identify shockable rhythm and prepare defibrillation within the scenario threshold.</p>
            <Badge tone="borderline">Remediation recommended</Badge>
          </div>
        </PortalCard>
      </div>
    </PortalFrame>
  );
}
