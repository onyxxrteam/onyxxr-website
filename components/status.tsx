import { Badge } from "@/components/ui/badge";
import type { CertificationStatus, ClinicalStatus, RiskLevel, ValidationStatus } from "@/lib/types";

export function clinicalToneFromRisk(risk: RiskLevel): ClinicalStatus {
  if (risk === "low") return "pass";
  if (risk === "moderate") return "borderline";
  return "critical";
}

export function toneFromCertification(status: CertificationStatus): ClinicalStatus {
  if (status === "certified") return "pass";
  if (status === "blocked" || status === "expired") return "critical";
  if (status === "remediation") return "borderline";
  return "progress";
}

export function toneFromValidation(status: ValidationStatus): ClinicalStatus {
  if (status === "passed") return "pass";
  if (status === "failed" || status === "not_eligible") return "critical";
  if (status === "scheduled" || status === "queued") return "progress";
  return "neutral";
}

export function StatusBadge({ label, tone }: { label: string; tone: ClinicalStatus }) {
  return <Badge tone={tone}>{label}</Badge>;
}
