export function PageHeader({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="mb-5 flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-slate-950 lg:text-3xl">{title}</h1>
        <p className="mt-1 max-w-3xl text-sm font-medium leading-6 text-slate-600">{description}</p>
      </div>
      {action}
    </div>
  );
}
