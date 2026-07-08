import type { AuditEvent, Course, Instructor, Learner, LearnerCourseProgress, Organization, RemediationPlan, SafetyEvent, XrSession } from "@/lib/types";

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

export const eLearningProgressRecords: LearnerCourseProgress[] = [
  {
    id: "elp-narin-bls",
    learnerName: "Narin S.",
    role: "Paramedic Student",
    courseName: "BLS Provider",
    courseType: "BLS",
    overallProgress: 62,
    preTest: {
      id: "test-narin-pre",
      title: "BLS Provider Pre-test",
      courseType: "BLS",
      kind: "pre-test",
      questions: 25,
      passingScore: 70,
      timeLimitMin: 25,
      attemptNumber: 1,
      score: 62,
      status: "completed",
      startTime: "2026-07-07 08:10",
      submitTime: "2026-07-07 08:29",
      timeUsedMin: 19,
      weakTopicAreas: ["AED safety sequence", "Abnormal breathing recognition"],
      recommendedModules: ["AED Operation and Safety Check", "Recognition of Cardiac Arrest"]
    },
    postTest: {
      id: "test-narin-post",
      title: "BLS Provider Post-test",
      courseType: "BLS",
      kind: "post-test",
      questions: 30,
      passingScore: 84,
      timeLimitMin: 30,
      attemptNumber: 0,
      score: null,
      status: "locked",
      startTime: null,
      submitTime: null,
      timeUsedMin: null,
      weakTopicAreas: [],
      recommendedModules: []
    },
    videoProgress: 74,
    moduleCompletion: 58,
    checkpointAverage: 82,
    totalTimeSpentMin: 109,
    estimatedRemainingMin: 64,
    lastActivityAt: "2026-07-07 15:20",
    xrEligibility: "locked",
    instructorValidationStatus: "locked",
    certificationReadiness: "locked",
    nextAction: "Continue AED Operation and Safety Check module",
    lockedReason: "Post-test and XR scenario unlock after all required video modules and checkpoint quizzes are complete.",
    sectionProgress: [
      { section: "Pre-test", weight: 10, progress: 100, status: "completed" },
      { section: "Video modules", weight: 35, progress: 74, status: "in_progress" },
      { section: "Checkpoint quizzes", weight: 15, progress: 80, status: "in_progress" },
      { section: "Post-test", weight: 15, progress: 0, status: "locked" },
      { section: "XR scenario", weight: 15, progress: 0, status: "locked" },
      { section: "Instructor validation", weight: 10, progress: 0, status: "locked" }
    ],
    modules: [
      {
        id: "bls-scene-assessment",
        courseCode: "BLS",
        courseName: "BLS Provider",
        title: "Scene Safety and Initial Assessment",
        progress: 100,
        status: "completed",
        timeSpentMin: 21,
        estimatedRemainingMin: 0,
        objectives: ["Confirm scene safety", "Assess responsiveness", "Activate emergency response"],
        keyClinicalPoints: ["Do not delay CPR once cardiac arrest is recognized", "Call for help and request AED early"],
        criticalSafetyErrors: ["Failure to activate emergency response", "Delayed CPR initiation"],
        relatedXrScenario: "Adult BLS witnessed arrest",
        completionCriteria: ["Watch at least 90% of video", "Complete checkpoint quiz", "Spend at least 10 minutes"],
        lessons: [
          {
            id: "vid-scene-1",
            title: "Initial Assessment Sequence",
            durationMin: 14,
            watchedMin: 14,
            watchedPercent: 100,
            requiredWatchThreshold: 90,
            canSkip: false,
            checkpointRequired: true,
            status: "completed",
            lastWatchedAt: "2026-07-07 09:12",
            chapters: [
              { id: "chap-1", title: "Scene safety", durationMin: 3, watchedPercent: 100, checkpointStatus: "completed" },
              { id: "chap-2", title: "Responsiveness check", durationMin: 4, watchedPercent: 100, checkpointStatus: "completed" },
              { id: "chap-3", title: "Emergency activation", durationMin: 7, watchedPercent: 100, checkpointStatus: "completed" }
            ]
          }
        ],
        checkpoints: [
          { id: "chk-scene-1", title: "Initial Assessment Checkpoint", triggerPercent: 100, questions: 3, attempts: 1, score: 100, passingScore: 80, timeUsedMin: 2, weakTopics: [], status: "passed" }
        ]
      },
      {
        id: "bls-aed-safety",
        courseCode: "BLS",
        courseName: "BLS Provider",
        title: "AED Operation and Safety Check",
        progress: 46,
        status: "in_progress",
        timeSpentMin: 18,
        estimatedRemainingMin: 22,
        objectives: ["Apply AED pads correctly", "Clear patient before analysis and shock", "Resume CPR immediately after shock"],
        keyClinicalPoints: ["Hands-off time must be minimized", "Shock safety behavior is mandatory"],
        criticalSafetyErrors: ["Unsafe shock delivery", "Failure to resume CPR after shock", "No AED use in cardiac arrest"],
        relatedXrScenario: "BLS AED shock safety",
        completionCriteria: ["Watch at least 90% of video", "Complete 2 checkpoint quizzes", "Score at least 80%", "Spend at least 10 minutes"],
        lessons: [
          {
            id: "vid-aed-1",
            title: "AED Operation and Safety Check",
            durationMin: 24,
            watchedMin: 11,
            watchedPercent: 46,
            requiredWatchThreshold: 90,
            canSkip: false,
            checkpointRequired: true,
            status: "in_progress",
            lastWatchedAt: "2026-07-07 15:20",
            chapters: [
              { id: "aed-chap-1", title: "AED pad placement", durationMin: 5, watchedPercent: 100, checkpointStatus: "passed" },
              { id: "aed-chap-2", title: "Rhythm analysis safety", durationMin: 6, watchedPercent: 72, checkpointStatus: "in_progress" },
              { id: "aed-chap-3", title: "Clear before shock", durationMin: 5, watchedPercent: 0, checkpointStatus: "locked" },
              { id: "aed-chap-4", title: "Immediate CPR restart", durationMin: 8, watchedPercent: 0, checkpointStatus: "locked" }
            ]
          }
        ],
        checkpoints: [
          { id: "chk-aed-25", title: "AED Pad Placement", triggerPercent: 25, questions: 2, attempts: 1, score: 100, passingScore: 80, timeUsedMin: 2, weakTopics: [], status: "passed" },
          { id: "chk-aed-50", title: "AED Shock Safety", triggerPercent: 50, questions: 4, attempts: 0, score: 0, passingScore: 80, timeUsedMin: 0, weakTopics: ["Shock safety"], status: "locked" }
        ]
      }
    ],
    remediation: {
      required: false,
      reason: "No remediation assigned.",
      assignedModule: "",
      completion: 0,
      reassessmentLocked: false
    }
  },
  {
    id: "elp-preecha-acls",
    learnerName: "Dr. Preecha T.",
    role: "Emergency Medicine Resident",
    courseName: "ACLS Provider",
    courseType: "ACLS",
    overallProgress: 84,
    preTest: {
      id: "test-preecha-pre",
      title: "ACLS Provider Pre-test",
      courseType: "ACLS",
      kind: "pre-test",
      questions: 35,
      passingScore: 70,
      timeLimitMin: 35,
      attemptNumber: 1,
      score: 68,
      status: "completed",
      startTime: "2026-07-06 10:00",
      submitTime: "2026-07-06 10:27",
      timeUsedMin: 27,
      weakTopicAreas: ["Defibrillation timing", "Post-ROSC care"],
      recommendedModules: ["Defibrillation and Cardioversion", "Post-Cardiac Arrest Care"]
    },
    postTest: {
      id: "test-preecha-post",
      title: "ACLS Provider Post-test",
      courseType: "ACLS",
      kind: "post-test",
      questions: 40,
      passingScore: 84,
      timeLimitMin: 40,
      attemptNumber: 1,
      score: 84,
      status: "passed",
      startTime: "2026-07-07 11:10",
      submitTime: "2026-07-07 11:43",
      timeUsedMin: 33,
      weakTopicAreas: ["Defibrillation timing"],
      recommendedModules: ["Defibrillation Timing Remediation"]
    },
    videoProgress: 100,
    moduleCompletion: 100,
    checkpointAverage: 88,
    totalTimeSpentMin: 238,
    estimatedRemainingMin: 35,
    lastActivityAt: "2026-07-07 14:40",
    xrEligibility: "completed",
    instructorValidationStatus: "locked",
    certificationReadiness: "remediation_required",
    nextAction: "Complete remediation for defibrillation timing",
    lockedReason: "Instructor validation is locked until remediation is completed after XR critical safety event.",
    sectionProgress: [
      { section: "Pre-test", weight: 10, progress: 100, status: "completed" },
      { section: "Video modules", weight: 35, progress: 100, status: "completed" },
      { section: "Checkpoint quizzes", weight: 15, progress: 100, status: "completed" },
      { section: "Post-test", weight: 15, progress: 100, status: "passed" },
      { section: "XR scenario", weight: 15, progress: 100, status: "completed" },
      { section: "Instructor validation", weight: 10, progress: 0, status: "locked" }
    ],
    modules: [
      {
        id: "acls-defib-cardio",
        courseCode: "ACLS",
        courseName: "ACLS Provider",
        title: "Defibrillation and Cardioversion",
        progress: 100,
        status: "completed",
        timeSpentMin: 34,
        estimatedRemainingMin: 0,
        objectives: ["Differentiate shockable rhythms", "Deliver timely defibrillation", "Minimize CPR interruptions"],
        keyClinicalPoints: ["VF/pVT requires immediate defibrillation", "Resume CPR immediately after shock"],
        criticalSafetyErrors: ["Delayed shock in VF/pVT", "Shock for non-shockable rhythm", "Unsafe defibrillation"],
        relatedXrScenario: "ACLS VF/pVT cardiac arrest",
        completionCriteria: ["Watch at least 90%", "Complete checkpoint quiz", "Pass rhythm decision check"],
        lessons: [
          {
            id: "vid-acls-defib-1",
            title: "Defibrillation Timing in Shockable Arrest",
            durationMin: 28,
            watchedMin: 28,
            watchedPercent: 100,
            requiredWatchThreshold: 90,
            canSkip: false,
            checkpointRequired: true,
            status: "completed",
            lastWatchedAt: "2026-07-07 10:12",
            chapters: [
              { id: "defib-chap-1", title: "Shockable rhythm recognition", durationMin: 7, watchedPercent: 100, checkpointStatus: "passed" },
              { id: "defib-chap-2", title: "Energy selection", durationMin: 5, watchedPercent: 100, checkpointStatus: "passed" },
              { id: "defib-chap-3", title: "Clear and shock", durationMin: 7, watchedPercent: 100, checkpointStatus: "passed" },
              { id: "defib-chap-4", title: "CPR restart", durationMin: 9, watchedPercent: 100, checkpointStatus: "passed" }
            ]
          }
        ],
        checkpoints: [
          { id: "chk-defib-1", title: "Shockable Rhythm Decision", triggerPercent: 50, questions: 4, attempts: 1, score: 75, passingScore: 80, timeUsedMin: 4, weakTopics: ["VF/pVT decision speed"], status: "failed" }
        ]
      },
      {
        id: "acls-defib-remediation",
        courseCode: "ACLS",
        courseName: "ACLS Provider",
        title: "Defibrillation Timing Remediation",
        progress: 35,
        status: "remediation_required",
        timeSpentMin: 12,
        estimatedRemainingMin: 23,
        objectives: ["Reduce time to first shock", "Confirm VF/pVT without delay", "Maintain CPR fraction"],
        keyClinicalPoints: ["Target first shock within scenario threshold", "Do not extend rhythm checks"],
        criticalSafetyErrors: ["Defibrillation delay > 120 seconds", "Pulse/rhythm check over 10 seconds"],
        relatedXrScenario: "Repeat ACLS VF/pVT cardiac arrest",
        completionCriteria: ["Rewatch timing video", "Complete defibrillation checkpoint", "Repeat XR shockable rhythm scenario", "Instructor reassessment required"],
        lessons: [
          {
            id: "vid-remed-defib-1",
            title: "Rapid Defibrillation Drill",
            durationMin: 18,
            watchedMin: 6,
            watchedPercent: 33,
            requiredWatchThreshold: 90,
            canSkip: false,
            checkpointRequired: true,
            status: "in_progress",
            lastWatchedAt: "2026-07-07 14:40",
            chapters: [
              { id: "remed-chap-1", title: "Immediate rhythm confirmation", durationMin: 5, watchedPercent: 100, checkpointStatus: "passed" },
              { id: "remed-chap-2", title: "Shock preparation workflow", durationMin: 6, watchedPercent: 18, checkpointStatus: "in_progress" },
              { id: "remed-chap-3", title: "Post-shock CPR restart", durationMin: 7, watchedPercent: 0, checkpointStatus: "locked" }
            ]
          }
        ],
        checkpoints: [
          { id: "chk-remed-defib", title: "Defibrillation Timing Check", triggerPercent: 50, questions: 5, attempts: 0, score: 0, passingScore: 80, timeUsedMin: 0, weakTopics: ["Shock timing"], status: "locked" }
        ]
      }
    ],
    remediation: {
      required: true,
      reason: "XR critical safety event: defibrillation delay > 120 seconds.",
      assignedModule: "Defibrillation Timing Remediation",
      completion: 35,
      reassessmentLocked: true
    }
  }
];
