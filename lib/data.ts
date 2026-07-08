import type { AuditEvent, Course, Instructor, Learner, Organization, RemediationPlan, SafetyEvent, XrSession } from "@/lib/types";

export const organizations: Organization[] = [
  { id: "org-nmtc", name: "Naval Medical Training Center", type: "Military Medical", activeLearners: 126, completionRate: 81, certificationRate: 73, criticalFailureRate: 5.4, revenue: 612000, renewalRisk: "low" },
  { id: "org-siriraj", name: "Siriraj Simulation Center", type: "Medical School", activeLearners: 88, completionRate: 74, certificationRate: 64, criticalFailureRate: 8.8, revenue: 438000, renewalRisk: "moderate" },
  { id: "org-bems", name: "Bangkok EMS Academy", type: "EMS Academy", activeLearners: 92, completionRate: 86, certificationRate: 79, criticalFailureRate: 4.2, revenue: 326000, renewalRisk: "low" },
  { id: "org-rth", name: "Regional Trauma Hospital", type: "Hospital", activeLearners: 47, completionRate: 68, certificationRate: 58, criticalFailureRate: 7.9, revenue: 221000, renewalRisk: "moderate" }
];

export const instructors: Instructor[] = [
  { id: "ins-kanya", name: "Lt. Cmdr. Kanya V.", role: "ACLS Instructor", assessments: 64, passRate: 76, agreementWithXr: 91, calibrationRisk: "low" },
  { id: "ins-narong", name: "Dr. Narong P.", role: "Medical Director", assessments: 85, passRate: 92, agreementWithXr: 61, calibrationRisk: "high" },
  { id: "ins-arun", name: "Paramedic Chief Arun T.", role: "BLS Instructor", assessments: 72, passRate: 81, agreementWithXr: 84, calibrationRisk: "low" }
];

export const courses: Course[] = [
  { code: "BLS", name: "Basic Life Support", status: "active", enrollments: 418, completionRate: 84, xrPassRate: 82, instructorPassRate: 78, remediationRate: 16, criticalFailureRate: 4.1, revenue: 642000, weakestDomain: "AED sequence under time pressure" },
  { code: "ACLS", name: "Advanced Cardiac Life Support", status: "active", enrollments: 246, completionRate: 69, xrPassRate: 66, instructorPassRate: 61, remediationRate: 28, criticalFailureRate: 8.9, revenue: 713000, weakestDomain: "VF/pVT recognition and defibrillation timing" },
  { code: "FIRST_AID", name: "First Aid Training", status: "pilot", enrollments: 64, completionRate: 51, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 92000, weakestDomain: "Pilot content validation" },
  { code: "DISASTER_LIFE_SUPPORT", name: "Disaster Life Support", status: "locked", enrollments: 0, completionRate: 0, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 0, weakestDomain: "Roadmap locked" },
  { code: "TRAUMA_LIFE_SUPPORT", name: "Trauma Life Support", status: "locked", enrollments: 0, completionRate: 0, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 0, weakestDomain: "Roadmap locked" },
  { code: "TOXICOLOGY_LIFE_SUPPORT", name: "Toxicology Life Support", status: "locked", enrollments: 0, completionRate: 0, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 0, weakestDomain: "Roadmap locked" },
  { code: "PREHOSPITAL_LIFE_SUPPORT", name: "Prehospital Life Support", status: "locked", enrollments: 0, completionRate: 0, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 0, weakestDomain: "Roadmap locked" },
  { code: "TACTICAL_MEDICAL_LIFE_SUPPORT", name: "Tactical Medical Life Support", status: "locked", enrollments: 0, completionRate: 0, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 0, weakestDomain: "Military roadmap locked" },
  { code: "OBGYN_EMERGENCY", name: "OB/GYNE Emergency Procedure", status: "locked", enrollments: 0, completionRate: 0, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 0, weakestDomain: "Roadmap locked" },
  { code: "GERIATRIC_NURSING_SKILLS", name: "Geriatric Nursing Skill Training", status: "locked", enrollments: 0, completionRate: 0, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 0, weakestDomain: "Roadmap locked" },
  { code: "OSCE_TUTORIALS", name: "National OSCE Exam Tutorials", status: "locked", enrollments: 0, completionRate: 0, xrPassRate: 0, instructorPassRate: 0, remediationRate: 0, criticalFailureRate: 0, revenue: 0, weakestDomain: "Roadmap locked" }
];

export const learners: Learner[] = [
  { id: "lrn-jirawat", name: "Lt. Jirawat S.", profession: "Military Medic", courseCode: "ACLS", course: "ACLS Provider", organization: "Naval Medical Training Center", cohort: "ACLS-MIL-03", instructor: "Lt. Cmdr. Kanya V.", preTest: 58, postTest: 86, xrScore: 76, learningProgress: 100, criticalFailure: "borderline", risk: "moderate", validation: "scheduled", certification: "pending", readiness: 78, lastActivity: "2026-07-07", nextAction: "Validate rhythm recognition and team leadership" },
  { id: "lrn-piyada", name: "Nurse Piyada K.", profession: "Nurse", courseCode: "ACLS", course: "ACLS Renewal", organization: "Siriraj Simulation Center", cohort: "ACLS-RN-07", instructor: "Lt. Cmdr. Kanya V.", preTest: 64, postTest: 82, xrScore: 68, learningProgress: 100, criticalFailure: "critical", risk: "high", validation: "not_eligible", certification: "blocked", readiness: 62, lastActivity: "2026-07-07", nextAction: "Repeat VF/pVT module and defibrillation timing drill" },
  { id: "lrn-anan", name: "Paramedic Anan C.", profession: "Paramedic", courseCode: "BLS", course: "BLS Provider", organization: "Bangkok EMS Academy", cohort: "BLS-EMS-12", instructor: "Paramedic Chief Arun T.", preTest: 72, postTest: 94, xrScore: 91, learningProgress: 100, criticalFailure: "pass", risk: "low", validation: "passed", certification: "certified", readiness: 94, lastActivity: "2026-07-06", nextAction: "No action; renewal due July 2028" },
  { id: "lrn-mira", name: "Med Student Mira T.", profession: "Medical Student", courseCode: "BLS", course: "BLS Provider", organization: "Chulalongkorn Medicine", cohort: "BLS-MED-05", instructor: "Dr. Narong P.", preTest: 55, postTest: 78, xrScore: 72, learningProgress: 92, criticalFailure: "borderline", risk: "moderate", validation: "queued", certification: "pending", readiness: 74, lastActivity: "2026-07-05", nextAction: "Assess AED sequence and compression interruptions" },
  { id: "lrn-saran", name: "Dr. Saran V.", profession: "Emergency Physician", courseCode: "ACLS", course: "ACLS Provider", organization: "Regional Trauma Hospital", cohort: "ACLS-MD-02", instructor: "Dr. Narong P.", preTest: 81, postTest: 92, xrScore: 88, learningProgress: 100, criticalFailure: "pass", risk: "low", validation: "passed", certification: "certified", readiness: 90, lastActivity: "2026-07-04", nextAction: "Eligible for team leader advanced scenario" },
  { id: "lrn-nattapol", name: "HM2 Nattapol R.", profession: "Navy Corpsman", courseCode: "BLS", course: "BLS Renewal", organization: "Naval Medical Training Center", cohort: "BLS-MIL-09", instructor: "Paramedic Chief Arun T.", preTest: 67, postTest: 83, xrScore: 61, learningProgress: 100, criticalFailure: "critical", risk: "high", validation: "failed", certification: "remediation", readiness: 54, lastActivity: "2026-07-07", nextAction: "Correct AED safety pause and compression depth" },
  { id: "lrn-warisa", name: "Nurse Warisa L.", profession: "Nurse", courseCode: "ACLS", course: "ACLS Provider", organization: "Bangkok Heart Center", cohort: "ACLS-RN-06", instructor: "Lt. Cmdr. Kanya V.", preTest: 69, postTest: 88, xrScore: 82, learningProgress: 100, criticalFailure: "pass", risk: "low", validation: "queued", certification: "pending", readiness: 84, lastActivity: "2026-07-07", nextAction: "Final practical validation" }
];

export const xrSessions: XrSession[] = [
  { id: "xr-1", learnerId: "lrn-piyada", learner: "Nurse Piyada K.", scenario: "VF/pVT cardiac arrest", course: "ACLS", attempt: 2, score: 68, criticalFailures: 2, timeToShockSec: 168, cprFraction: 74, notes: "Delayed defibrillation and excessive pulse check interruption." },
  { id: "xr-2", learnerId: "lrn-anan", learner: "Paramedic Anan C.", scenario: "Adult BLS witnessed arrest", course: "BLS", attempt: 3, score: 91, criticalFailures: 0, timeToCprSec: 22, cprFraction: 88, notes: "Safe AED sequence and rapid CPR restart." },
  { id: "xr-3", learnerId: "lrn-nattapol", learner: "HM2 Nattapol R.", scenario: "BLS AED shock safety", course: "BLS", attempt: 1, score: 61, criticalFailures: 1, timeToCprSec: 48, cprFraction: 62, notes: "Unsafe AED pause and shallow compression trend." },
  { id: "xr-4", learnerId: "lrn-jirawat", learner: "Lt. Jirawat S.", scenario: "ACLS team leader shockable rhythm", course: "ACLS", attempt: 2, score: 76, criticalFailures: 0, timeToShockSec: 112, cprFraction: 79, notes: "Borderline leadership during first two minutes." }
];

export const safetyEvents: SafetyEvent[] = [
  { id: "evt-1", learner: "Nurse Piyada K.", course: "ACLS", event: "Delayed defibrillation in VF", severity: "critical", evidence: "First shock delivered at 168 seconds; threshold is under 120 seconds.", status: "active" },
  { id: "evt-2", learner: "Nurse Piyada K.", course: "ACLS", event: "Excessive pulse check interruption", severity: "critical", evidence: "Pulse/rhythm pause measured at 18 seconds.", status: "active" },
  { id: "evt-3", learner: "HM2 Nattapol R.", course: "BLS", event: "AED shock safety sequence failure", severity: "critical", evidence: "Clear command and CPR restart were not completed to standard.", status: "active" },
  { id: "evt-4", learner: "Lt. Jirawat S.", course: "ACLS", event: "Borderline team leadership", severity: "borderline", evidence: "Delayed role assignment during first arrest cycle.", status: "resolved" }
];

export const remediationPlans: RemediationPlan[] = [
  { id: "rem-1", learner: "Nurse Piyada K.", course: "ACLS", rootCause: "Delayed VF recognition", requiredAction: "Rhythm recognition module plus defibrillation timing XR drill", status: "progress", owner: "Lt. Cmdr. Kanya V.", retest: "Not scheduled" },
  { id: "rem-2", learner: "HM2 Nattapol R.", course: "BLS", rootCause: "AED safety sequence", requiredAction: "AED safety practical station and compression depth drill", status: "critical", owner: "Paramedic Chief Arun T.", retest: "2026-07-08" },
  { id: "rem-3", learner: "EMT Krit P.", course: "BLS", rootCause: "Pulse and breathing assessment timing", requiredAction: "Assessment timing micro-drill", status: "pass", owner: "Dr. Narong P.", retest: "2026-07-09" }
];

export const auditTrail: AuditEvent[] = [
  { timestamp: "2026-07-07 14:20", event: "XR attempt 2 completed; score 68%; delayed defibrillation remains active." },
  { timestamp: "2026-07-07 13:45", event: "Remediation assigned by Lt. Cmdr. Kanya V." },
  { timestamp: "2026-07-06 16:12", event: "Post-test attempt 2 passed at 82%." },
  { timestamp: "2026-07-06 15:04", event: "XR attempt 1 failed; unsafe shock behavior detected." },
  { timestamp: "2026-07-05 09:30", event: "Enrolled in ACLS Renewal cohort ACLS-RN-07." }
];

export const funnel = [
  { stage: "Enrolled", value: 1000 },
  { stage: "Started e-learning", value: 880 },
  { stage: "Completed e-learning", value: 780 },
  { stage: "Passed knowledge", value: 710 },
  { stage: "Completed XR", value: 630 },
  { stage: "Instructor validated", value: 520 },
  { stage: "Certified", value: 490 }
];

export const criticalTrend = [
  { month: "Jan", events: 5.1 },
  { month: "Feb", events: 4.7 },
  { month: "Mar", events: 5.8 },
  { month: "Apr", events: 4.3 },
  { month: "May", events: 5.9 },
  { month: "Jun", events: 6.1 },
  { month: "Jul", events: 6.8 }
];

export const kpis = {
  activeLearners: 428,
  completionRate: 78,
  certificationPassRate: 72,
  remediationRequired: 86,
  criticalSafetyFailureRate: 6.8,
  averagePreTest: 61,
  averagePostTest: 84,
  averageXrScore: 79,
  instructorBacklog: 43,
  institutionalGrowth: 14,
  revenueThisMonth: 1840000,
  alerts: 7,
  newUsers: 173,
  activeUsers: 612,
  xrSessions: 1469,
  renewalRate: 68
};
