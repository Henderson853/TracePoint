import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCases } from "../api/api";
import CaseCard from "../components/CaseCard";

export default function CasePage() {
  const [caseData, setCaseData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    getCases()
      .then((cases) => {
        if (isMounted) setCaseData(cases[0] ?? null);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-neutral-500">Loading case file…</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="rounded-dashboard border border-danger/20 bg-danger-soft p-4">
        <p className="text-danger font-semibold">Error</p>
        <p className="mt-1 text-sm text-neutral-700">{error}</p>
      </div>
    );
  }
  if (!caseData) {
    return (
      <div className="rounded-panel border border-border bg-surface p-8 text-center shadow-card">
        <p className="text-neutral-500">No case is currently on file.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 mb-2">Active Case</p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Case Details</h1>
      </div>

      <CaseCard caseData={caseData} />

      <div className="rounded-panel border border-border bg-surface p-6 shadow-panel">
        <h2 className="text-lg font-bold text-neutral-900 mb-4">Next Steps</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate("/suspects")}
            className="btn-primary"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            View Suspects
          </button>
          <button
            type="button"
            onClick={() => navigate("/evidence")}
            className="btn-secondary"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            View Evidence
          </button>
        </div>
      </div>
    </div>
  );
}
