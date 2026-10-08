import { useEffect, useState } from "react";
import { getEvidence } from "../api/api";
import { useInvestigation } from "../context/InvestigationContext";
import EvidenceCard from "../components/EvidenceCard";

export default function EvidencePage() {
  const [evidence, setEvidence] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [examinedIds, setExaminedIds] = useState(new Set());
  const { selectedEvidence, setSelectedEvidence } = useInvestigation();

  useEffect(() => {
    let isMounted = true;

    getEvidence()
      .then((data) => {
        if (isMounted) setEvidence(data);
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

  function handleExamine(item) {
    // Mark as examined when opened
    setExaminedIds((prev) => new Set(prev).add(item.evidenceId));
    
    // Toggle selection
    setSelectedEvidence((current) =>
      current?.evidenceId === item.evidenceId ? null : item
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-neutral-500">Loading evidence…</p>
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

  const examinedCount = examinedIds.size;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 mb-2">Evidence Chain</p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Examine Evidence</h1>
        <p className="mt-2 text-neutral-600">Click on evidence items to review details and build your case.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-panel border border-border bg-surface p-4 shadow-card">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">Total Items</p>
          <p className="mt-2 text-2xl font-bold text-neutral-900">{evidence.length}</p>
        </div>
        <div className="rounded-panel border border-border bg-surface p-4 shadow-card">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">Examined</p>
          <p className="mt-2 text-2xl font-bold text-success">{examinedCount}</p>
        </div>
      </div>

      <div className="card-grid">
        {evidence.map((item) => (
          <EvidenceCard
            key={item.evidenceId}
            evidence={item}
            isExamined={selectedEvidence?.evidenceId === item.evidenceId}
            isMarkedExamined={examinedIds.has(item.evidenceId)}
            onExamine={handleExamine}
          />
        ))}
      </div>
    </div>
  );
}
