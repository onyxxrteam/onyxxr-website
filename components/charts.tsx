"use client";

import { Bar, BarChart, CartesianGrid, Cell, Funnel, FunnelChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function SimpleBarChart({ data, dataKey, nameKey }: { data: Record<string, string | number>[]; dataKey: string; nameKey: string }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={nameKey} tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey={dataKey} radius={[6, 6, 0, 0]} fill="#2f6fdc" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CriticalTrendChart({ data }: { data: { month: string; events: number }[] }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Line type="monotone" dataKey="events" stroke="#bd2431" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CertificationFunnel({ data }: { data: { stage: string; value: number }[] }) {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          <Tooltip />
          <Funnel dataKey="value" data={data} nameKey="stage">
            {data.map((_, index) => (
              <Cell key={index} fill={["#0b2f68", "#245fc1", "#2f6fdc", "#d39a18", "#a66e00", "#15834a", "#0f6b3d"][index] ?? "#2f6fdc"} />
            ))}
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}
