import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <section className="hero">
        <p className="hero__eyebrow">TracePoint Investigations</p>
        <h1 className="hero__title">The Missing Prototype</h1>
        <p className="hero__body">
          A prototype has disappeared from a secure research laboratory. Review the chain of evidence,
          confirm the lead, and determine the most likely suspect before the next briefing.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="hero__cta" onClick={() => navigate("/case")}>
            Start Investigation
          </button>
          <button type="button" className="btn-secondary" onClick={() => navigate("/evidence")}>
            Review Evidence
          </button>
        </div>
      </section>

      <section className="rounded-panel border border-border bg-surface p-5 shadow-panel">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">Latest activity</p>
            <h3 className="mt-1 text-xl font-bold text-neutral-900">Case updates</h3>
          </div>
          <button type="button" className="btn-secondary">View all</button>
        </div>

        <div className="overflow-hidden rounded-dashboard border border-border">
          <table className="min-w-full text-left">
            <thead className="bg-surface-alt">
              <tr className="text-[11px] uppercase tracking-[0.1em] text-neutral-500">
                <th className="px-4 py-3 font-semibold">Case</th>
                <th className="px-4 py-3 font-semibold">Location</th>
                <th className="px-4 py-3 font-semibold">Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {[
                ["Prototype theft", "Research lab B", "Verified"],
                ["Security logs", "Control room", "Pending"],
                ["Warehouse access", "Loading dock", "Issue"],
              ].map(([name, location, status]) => (
                <tr key={name} className="hover:bg-surface-alt">
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">{name}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{location}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${
                      status === "Verified"
                        ? "bg-success-soft text-success"
                        : status === "Pending"
                          ? "bg-warning-soft text-warning"
                          : "bg-danger-soft text-danger"
                    }`}>
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
