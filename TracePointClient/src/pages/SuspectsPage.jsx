import { useEffect, useState } from "react";
import { getSuspects } from "../api/api";
import { useInvestigation } from "../context/InvestigationContext";
import SuspectCard from "../components/SuspectCard";

export default function SuspectsPage() {
  const [suspects, setSuspects] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { selectedSuspect, setSelectedSuspect } = useInvestigation();

  useEffect(() => {
    let isMounted = true;

    getSuspects()
      .then((data) => {
        if (isMounted) setSuspects(data);
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
        <p className="text-neutral-500">Loading suspects…</p>
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

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 mb-2">Investigation Phase</p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Review Suspects</h1>
        <p className="mt-2 text-neutral-600">Examine each suspect's profile and select the most likely candidate.</p>
      </div>

      {selectedSuspect && (
        <div className="rounded-panel border border-primary/20 bg-primary-soft p-4 shadow-card">
          <p className="text-sm font-semibold text-success">Selected Suspect</p>
          <p className="mt-1 text-lg font-bold text-neutral-900">{selectedSuspect.name}</p>
        </div>
      )}

      <div className="card-grid">
        {suspects.map((suspect) => (
          <SuspectCard
            key={suspect.suspectId}
            suspect={suspect}
            isSelected={selectedSuspect?.suspectId === suspect.suspectId}
            onSelect={(suspect) => {
              if (suspect && selectedSuspect?.suspectId === suspect.suspectId) {
                setSelectedSuspect(null);
              } else {
                setSelectedSuspect(suspect);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
