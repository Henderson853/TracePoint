import { useEffect, useState } from "react";
import { getSuspects, submitInvestigation } from "../api/api";
import { useInvestigation } from "../context/InvestigationContext";
import InvestigationForm from "../components/InvestigationForm";

const CASE_ID = 1;

export default function InvestigationPage() {
  const [suspects, setSuspects] = useState([]);
  const [loadError, setLoadError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { selectedSuspect, setSelectedSuspect, conclusion, setConclusion } =
    useInvestigation();

  useEffect(() => {
    let isMounted = true;

    getSuspects()
      .then((data) => {
        if (isMounted) setSuspects(data);
      })
      .catch((err) => {
        if (isMounted) setLoadError(err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  function handleSuspectChange(suspectId) {
    const suspect = suspects.find((s) => String(s.suspectId) === String(suspectId));
    setSelectedSuspect(suspect || null);
  }

  async function handleSubmit() {
    setSubmitError("");
    setIsSubmitting(true);
    try {
      await submitInvestigation({
        caseId: CASE_ID,
        suspectId: selectedSuspect.suspectId,
        conclusion,
        dateStarted: new Date().toISOString(),
      });
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        <div className="rounded-panel border border-primary/20 bg-primary-soft p-8 shadow-panel">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">Investigation Submitted</h2>
              <p className="mt-2 text-neutral-700">Your investigation has been successfully recorded by TracePoint Investigations.</p>
              <p className="mt-4 text-sm font-medium text-success">Suspect: {selectedSuspect?.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 mb-2">Final Phase</p>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Submit Investigation</h1>
        <p className="mt-2 text-neutral-600">Review your findings and confirm the suspect before submitting.</p>
      </div>

      {loadError && (
        <div className="rounded-dashboard border border-danger/20 bg-danger-soft p-4">
          <p className="text-danger font-semibold">Error</p>
          <p className="mt-1 text-sm text-neutral-700">{loadError}</p>
        </div>
      )}

      <InvestigationForm
        suspects={suspects}
        suspectId={selectedSuspect?.suspectId ?? ""}
        onSuspectChange={handleSuspectChange}
        conclusion={conclusion}
        onConclusionChange={setConclusion}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />

      {submitError && (
        <div className="rounded-dashboard border border-danger/20 bg-danger-soft p-4">
          <p className="text-danger font-semibold">Submission Error</p>
          <p className="mt-1 text-sm text-neutral-700">{submitError}</p>
        </div>
      )}
    </div>
  );
}
