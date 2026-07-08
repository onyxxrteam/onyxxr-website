export type CourseCode =
  | "BLS"
  | "ACLS"
  | "FIRST_AID"
  | "DISASTER_LIFE_SUPPORT"
  | "TRAUMA_LIFE_SUPPORT"
  | "TOXICOLOGY_LIFE_SUPPORT"
  | "PREHOSPITAL_LIFE_SUPPORT"
  | "TACTICAL_MEDICAL_LIFE_SUPPORT"
  | "OBGYN_EMERGENCY"
  | "GERIATRIC_NURSING_SKILLS"
  | "HISTORY_AND_EXAM"
  | "MEDICAL_NURSING_PROCEDURES"
  | "OSCE_TUTORIALS"
  | "EMT_EDUCATION";

export type CourseStatus = "active" | "locked" | "pilot";
export type RiskLevel = "low" | "moderate" | "high";
export type ClinicalStatus = "pass" | "borderline" | "critical" | "progress" | "neutral";
export type CertificationStatus = "certified" | "pending" | "blocked" | "remediation" | "expired";
export type ValidationStatus = "passed" | "queued" | "scheduled" | "failed" | "not_eligible";

export interface Organization {
  id: string;
  name: string;
  type: "Hospital" | "EMS Academy" | "Military Medical" | "Medical School" | "Training Center";
  activeLearners: number;
  completionRate: number;
  certificationRate: number;
  criticalFailureRate: number;
  revenue: number;
  renewalRisk: RiskLevel;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  assessments: number;
  passRate: number;
  agreementWithXr: number;
  calibrationRisk: RiskLevel;
}

export interface Course {
  code: CourseCode;
  name: string;
  status: CourseStatus;
  enrollments: number;
  completionRate: number;
  xrPassRate: number;
  instructorPassRate: number;
  remediationRate: number;
  criticalFailureRate: number;
  revenue: number;
  weakestDomain: string;
}

export interface Learner {
  id: string;
  name: string;
  profession: string;
  courseCode: CourseCode;
  course: string;
  organization: string;
  cohort: string;
  instructor: string;
  preTest: number;
  postTest: number;
  xrScore: number;
  learningProgress: number;
  criticalFailure: ClinicalStatus;
  risk: RiskLevel;
  validation: ValidationStatus;
  certification: CertificationStatus;
  readiness: number;
  lastActivity: string;
  nextAction: string;
}

export interface XrSession {
  id: string;
  learnerId: string;
  learner: string;
  scenario: string;
  course: string;
  attempt: number;
  score: number;
  criticalFailures: number;
  timeToCprSec?: number;
  timeToShockSec?: number;
  cprFraction?: number;
  notes: string;
}

export interface SafetyEvent {
  id: string;
  learner: string;
  course: string;
  event: string;
  severity: ClinicalStatus;
  evidence: string;
  status: "active" | "resolved";
}

export interface RemediationPlan {
  id: string;
  learner: string;
  course: string;
  rootCause: string;
  requiredAction: string;
  status: ClinicalStatus;
  owner: string;
  retest: string;
}

export interface AuditEvent {
  timestamp: string;
  event: string;
}

export type LearningStatus = "not_started" | "in_progress" | "completed" | "locked" | "failed" | "passed" | "remediation_required";

export interface VideoChapter {
  id: string;
  title: string;
  durationMin: number;
  watchedPercent: number;
  checkpointStatus: LearningStatus;
}

export interface VideoLesson {
  id: string;
  title: string;
  durationMin: number;
  watchedMin: number;
  watchedPercent: number;
  requiredWatchThreshold: number;
  canSkip: boolean;
  checkpointRequired: boolean;
  status: LearningStatus;
  lastWatchedAt: string;
  chapters: VideoChapter[];
}

export interface CheckpointQuiz {
  id: string;
  title: string;
  triggerPercent: number;
  questions: number;
  attempts: number;
  score: number;
  passingScore: number;
  timeUsedMin: number;
  weakTopics: string[];
  status: LearningStatus;
}

export interface ELearningModule {
  id: string;
  courseCode: CourseCode;
  courseName: string;
  title: string;
  progress: number;
  status: LearningStatus;
  timeSpentMin: number;
  estimatedRemainingMin: number;
  objectives: string[];
  keyClinicalPoints: string[];
  criticalSafetyErrors: string[];
  relatedXrScenario: string;
  completionCriteria: string[];
  lessons: VideoLesson[];
  checkpoints: CheckpointQuiz[];
}

export interface TestAttempt {
  id: string;
  title: string;
  courseType: "BLS" | "ACLS";
  kind: "pre-test" | "post-test" | "checkpoint";
  questions: number;
  passingScore: number;
  timeLimitMin: number;
  attemptNumber: number;
  score: number | null;
  status: LearningStatus;
  startTime: string | null;
  submitTime: string | null;
  timeUsedMin: number | null;
  weakTopicAreas: string[];
  recommendedModules: string[];
}

export interface LearnerCourseProgress {
  id: string;
  learnerName: string;
  role: string;
  courseName: string;
  courseType: "BLS" | "ACLS";
  overallProgress: number;
  preTest: TestAttempt;
  postTest: TestAttempt;
  videoProgress: number;
  moduleCompletion: number;
  checkpointAverage: number;
  totalTimeSpentMin: number;
  estimatedRemainingMin: number;
  lastActivityAt: string;
  xrEligibility: LearningStatus;
  instructorValidationStatus: LearningStatus;
  certificationReadiness: LearningStatus;
  nextAction: string;
  lockedReason: string | null;
  sectionProgress: Array<{ section: string; weight: number; progress: number; status: LearningStatus }>;
  modules: ELearningModule[];
  remediation: {
    required: boolean;
    reason: string;
    assignedModule: string;
    completion: number;
    reassessmentLocked: boolean;
  };
}
