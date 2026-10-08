import { useState } from "react";

/**
 * Fully controlled form: the parent owns suspectId/conclusion state and
 * passes them in as props, which keeps this component easy to unit test
 * without needing the API or router context.
 */
export default function InvestigationForm({
  suspects,
  suspectId,
  onSuspectChange,
  conclusion,
  onConclusionChange,
  onSubmit,
  isSubmitting,
}) {
  const [error, setError] = useState("");

  function validate() {
    if (!suspectId) return "Select a suspect before submitting your investigation.";
    if (!conclusion.trim()) return "Enter a conclusion before submitting your investigation.";
    return "";
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    onSubmit();
  }

  return (
    <form className="investigation-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="suspect">Suspect</label>
        <select
          id="suspect"
          value={suspectId || ""}
          onChange={(event) => onSuspectChange(event.target.value)}
        >
          <option value="">Select a suspect…</option>
          {suspects.map((suspect) => (
            <option key={suspect.suspectId} value={suspect.suspectId}>
              {suspect.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="conclusion">Conclusion</label>
        <textarea
          id="conclusion"
          rows={5}
          value={conclusion}
          onChange={(event) => onConclusionChange(event.target.value)}
          placeholder="Explain which suspect is most likely responsible and why…"
        />
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit Investigation"}
      </button>
    </form>
  );
}