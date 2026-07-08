"use client";

import dynamic from "next/dynamic";

export const CertificationFunnel = dynamic(
  () => import("@/components/charts").then((m) => m.CertificationFunnel),
  { ssr: false, loading: () => <div className="h-72 animate-pulse rounded-lg bg-slate-100" /> }
);

export const CriticalTrendChart = dynamic(
  () => import("@/components/charts").then((m) => m.CriticalTrendChart),
  { ssr: false, loading: () => <div className="h-64 animate-pulse rounded-lg bg-slate-100" /> }
);

export const SimpleBarChart = dynamic(
  () => import("@/components/charts").then((m) => m.SimpleBarChart),
  { ssr: false, loading: () => <div className="h-64 animate-pulse rounded-lg bg-slate-100" /> }
);
