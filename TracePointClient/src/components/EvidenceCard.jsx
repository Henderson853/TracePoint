export default function EvidenceCard({ evidence, isExamined, isMarkedExamined, onExamine }) {
  const { evidenceId, title, description, location } = evidence;

  return (
    <article
      className={
        isExamined ? "file-card file-card--evidence is-selected" : "file-card file-card--evidence"
      }
    >
      <span className="file-card__tag">{isMarkedExamined && "✓ "}EVIDENCE {String(evidenceId).padStart(2, "0")}</span>
      <h3 className="file-card__title">{title}</h3>
      <p className="file-card__meta">Location: {location}</p>

      {isExamined && <p className="file-card__body">{description}</p>}

      <button type="button" onClick={() => onExamine(evidence)}>
        {isExamined ? "Hide Details" : "Examine Evidence"}
      </button>
    </article>
  );
}