export default function SuspectCard({ suspect, isSelected, onSelect }) {
  const { suspectId, name, occupation, description } = suspect;

  return (
    <article
      className={
        isSelected ? "file-card file-card--suspect is-selected" : "file-card file-card--suspect"
      }
    >
      <span className="file-card__tag">SUSPECT {String(suspectId).padStart(2, "0")}</span>
      <h3 className="file-card__title">{name}</h3>
      <p className="file-card__meta">{occupation}</p>
      {isSelected && <p className="file-card__body">{description}</p>}
      <button type="button" onClick={() => onSelect(isSelected ? null : suspect)}>
        {isSelected ? "Deselect" : "Select Suspect"}
      </button>
    </article>
  );
}