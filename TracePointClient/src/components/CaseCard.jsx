export default function CaseCard({ caseData }) {
  if (!caseData) return null;

  const { caseName, description, status } = caseData;

  return (
    <article className="rounded-panel border border-border bg-surface p-6 shadow-panel">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Active Case</p>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900">{caseName}</h2>
        </div>
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${
          status === "Open" || status === "Active"
            ? "bg-success-soft text-success"
            : status === "Pending"
              ? "bg-warning-soft text-warning"
              : "bg-info-soft text-info"
        }`}>
          {status}
        </span>
      </div>

      <p className="mt-4 text-neutral-600 leading-relaxed">{description}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-dashboard border border-border bg-surface-alt p-3">
          <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 font-semibold">Status</p>
          <p className="mt-1 text-lg font-bold text-neutral-900">{status}</p>
        </div>
        <div className="rounded-dashboard border border-border bg-surface-alt p-3">
          <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 font-semibold">Case ID</p>
          <p className="mt-1 text-lg font-bold text-neutral-900">#001</p>
        </div>
        <div className="rounded-dashboard border border-border bg-surface-alt p-3">
          <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 font-semibold">Priority</p>
          <p className="mt-1 text-lg font-bold text-danger">High</p>
        </div>
      </div>
    </article>
  );
}
