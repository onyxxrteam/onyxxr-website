"use client";

import { useMemo, useState } from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Table, Td, Th } from "@/components/ui/table";
import { clinicalToneFromRisk, toneFromCertification, toneFromValidation } from "@/components/status";
import type { Learner } from "@/lib/types";

const columns: ColumnDef<Learner>[] = [
  { accessorKey: "name", header: "Learner" },
  { accessorKey: "course", header: "Course" },
  { accessorKey: "organization", header: "Organization" },
  { accessorKey: "preTest", header: "Pre-test", cell: ({ row }) => `${row.original.preTest}%` },
  { accessorKey: "postTest", header: "Post-test", cell: ({ row }) => `${row.original.postTest}%` },
  { accessorKey: "xrScore", header: "XR score", cell: ({ row }) => `${row.original.xrScore}%` },
  { accessorKey: "criticalFailure", header: "Critical failure", cell: ({ row }) => <Badge tone={row.original.criticalFailure}>{row.original.criticalFailure === "pass" ? "None" : row.original.criticalFailure}</Badge> },
  { accessorKey: "validation", header: "Instructor validation", cell: ({ row }) => <Badge tone={toneFromValidation(row.original.validation)}>{row.original.validation.replace("_", " ")}</Badge> },
  { accessorKey: "certification", header: "Certification status", cell: ({ row }) => <Badge tone={toneFromCertification(row.original.certification)}>{row.original.certification}</Badge> },
  { accessorKey: "nextAction", header: "Next action" }
];

export function LearnersTable({ data }: { data: Learner[] }) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [course, setCourse] = useState("all");
  const [risk, setRisk] = useState("all");
  const [certification, setCertification] = useState("all");
  const [organization, setOrganization] = useState("all");
  const [instructor, setInstructor] = useState("all");
  const [cohort, setCohort] = useState("all");
  const [lastActivity, setLastActivity] = useState("all");

  const filtered = useMemo(() => {
    return data.filter((learner) => {
      return (
        (course === "all" || learner.courseCode === course) &&
        (risk === "all" || learner.risk === risk) &&
        (certification === "all" || learner.certification === certification) &&
        (organization === "all" || learner.organization === organization) &&
        (instructor === "all" || learner.instructor === instructor) &&
        (cohort === "all" || learner.cohort === cohort) &&
        (lastActivity === "all" || learner.lastActivity === lastActivity)
      );
    });
  }, [data, course, risk, certification, organization, instructor, cohort, lastActivity]);

  const table = useReactTable({
    data: filtered,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  const unique = (key: keyof Learner) => Array.from(new Set(data.map((item) => String(item[key]))));

  return (
    <div className="space-y-3">
      <div className="grid gap-2 md:grid-cols-4 xl:grid-cols-8">
        <input className="rounded-md border bg-white px-3 py-2 text-xs font-semibold" placeholder="Search learner or action" value={globalFilter} onChange={(event) => setGlobalFilter(event.target.value)} />
        <select className="rounded-md border bg-white px-3 py-2 text-xs font-semibold" value={course} onChange={(event) => setCourse(event.target.value)}>
          <option value="all">All courses</option><option value="BLS">BLS</option><option value="ACLS">ACLS</option>
        </select>
        <select className="rounded-md border bg-white px-3 py-2 text-xs font-semibold" value={organization} onChange={(event) => setOrganization(event.target.value)}>
          <option value="all">All organizations</option>{unique("organization").map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="rounded-md border bg-white px-3 py-2 text-xs font-semibold" value={risk} onChange={(event) => setRisk(event.target.value)}>
          <option value="all">All risk</option><option value="low">Low</option><option value="moderate">Moderate</option><option value="high">High</option>
        </select>
        <select className="rounded-md border bg-white px-3 py-2 text-xs font-semibold" value={certification} onChange={(event) => setCertification(event.target.value)}>
          <option value="all">All certification</option><option value="certified">Certified</option><option value="pending">Pending</option><option value="blocked">Blocked</option><option value="remediation">Remediation</option>
        </select>
        <select className="rounded-md border bg-white px-3 py-2 text-xs font-semibold" value={instructor} onChange={(event) => setInstructor(event.target.value)}>
          <option value="all">All instructors</option>{unique("instructor").map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="rounded-md border bg-white px-3 py-2 text-xs font-semibold" value={cohort} onChange={(event) => setCohort(event.target.value)}>
          <option value="all">All cohorts</option>{unique("cohort").map((item) => <option key={item}>{item}</option>)}
        </select>
        <select className="rounded-md border bg-white px-3 py-2 text-xs font-semibold" value={lastActivity} onChange={(event) => setLastActivity(event.target.value)}>
          <option value="all">All activity</option>{unique("lastActivity").map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <div className="clinical-scrollbar overflow-x-auto rounded-lg border bg-white">
        <Table>
          <thead>{table.getHeaderGroups().map((group) => <tr key={group.id}>{group.headers.map((header) => <Th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</Th>)}</tr>)}</thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50">
                {row.getVisibleCells().map((cell) => <Td key={cell.id} className={cell.column.id === "nextAction" ? "min-w-[260px]" : "whitespace-nowrap"}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>)}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="text-xs font-semibold text-slate-500">{table.getRowModel().rows.length} learners shown · Risk colors are operational, not decorative.</div>
    </div>
  );
}
