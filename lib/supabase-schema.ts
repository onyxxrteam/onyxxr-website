export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      organizations: {
        Row: { id: string; name: string; type: string; created_at: string };
        Insert: { id?: string; name: string; type: string; created_at?: string };
        Update: { id?: string; name?: string; type?: string; created_at?: string };
      };
      profiles: {
        Row: {
          id: string;
          organization_id: string | null;
          role: "learner" | "instructor" | "admin" | "medical_director";
          full_name: string;
          profession: string | null;
          created_at: string;
          last_active_at: string | null;
        };
        Insert: {
          id?: string;
          organization_id?: string | null;
          role: "learner" | "instructor" | "admin" | "medical_director";
          full_name: string;
          profession?: string | null;
          created_at?: string;
          last_active_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      courses: {
        Row: { id: string; code: string; name: string; status: "active" | "locked" | "pilot"; version: string; validity_months: number };
        Insert: { id?: string; code: string; name: string; status: "active" | "locked" | "pilot"; version: string; validity_months: number };
        Update: Partial<Database["public"]["Tables"]["courses"]["Insert"]>;
      };
      enrollments: {
        Row: {
          id: string;
          learner_id: string;
          course_id: string;
          cohort: string;
          status: string;
          learning_progress: number;
          certification_status: string;
          created_at: string;
          completed_at: string | null;
        };
        Insert: {
          id?: string;
          learner_id: string;
          course_id: string;
          cohort: string;
          status: string;
          learning_progress?: number;
          certification_status?: string;
          created_at?: string;
          completed_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["enrollments"]["Insert"]>;
      };
      knowledge_tests: {
        Row: { id: string; enrollment_id: string; kind: "pre" | "post"; score: number; topic_scores: Json; attempted_at: string };
        Insert: { id?: string; enrollment_id: string; kind: "pre" | "post"; score: number; topic_scores?: Json; attempted_at?: string };
        Update: Partial<Database["public"]["Tables"]["knowledge_tests"]["Insert"]>;
      };
      xr_sessions: {
        Row: { id: string; enrollment_id: string; scenario_id: string; attempt: number; score: number; metrics: Json; critical_failure_count: number; completed_at: string };
        Insert: { id?: string; enrollment_id: string; scenario_id: string; attempt: number; score: number; metrics?: Json; critical_failure_count?: number; completed_at?: string };
        Update: Partial<Database["public"]["Tables"]["xr_sessions"]["Insert"]>;
      };
      instructor_assessments: {
        Row: { id: string; enrollment_id: string; instructor_id: string; checklist: Json; decision: string; notes: string | null; assessed_at: string };
        Insert: { id?: string; enrollment_id: string; instructor_id: string; checklist?: Json; decision: string; notes?: string | null; assessed_at?: string };
        Update: Partial<Database["public"]["Tables"]["instructor_assessments"]["Insert"]>;
      };
      remediation_plans: {
        Row: { id: string; enrollment_id: string; root_cause: string; required_action: string; status: string; owner_id: string; retest_at: string | null };
        Insert: { id?: string; enrollment_id: string; root_cause: string; required_action: string; status: string; owner_id: string; retest_at?: string | null };
        Update: Partial<Database["public"]["Tables"]["remediation_plans"]["Insert"]>;
      };
      certificates: {
        Row: { id: string; enrollment_id: string; credential_id: string; status: string; issued_at: string | null; expires_at: string | null };
        Insert: { id?: string; enrollment_id: string; credential_id: string; status: string; issued_at?: string | null; expires_at?: string | null };
        Update: Partial<Database["public"]["Tables"]["certificates"]["Insert"]>;
      };
    };
  };
}
