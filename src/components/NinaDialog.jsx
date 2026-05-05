import "./NinaDialog.css";

export default function NinaDialog({ text, onContinue, onLearnMore }) {
  return (
    <div className="nina-dialog">
      <div className="nina-header">
        <span className="nina-avatar">🤖</span>
        <span className="nina-name">Nina</span>
      </div>
      <p className="nina-text">{text}</p>
      <div className="nina-actions">
        {onLearnMore && (
          <button className="btn btn-secondary" onClick={onLearnMore}>
            Quero saber mais
          </button>
        )}
        <button className="btn btn-primary" onClick={onContinue}>
          Entendi 💛
        </button>
      </div>
    </div>
  );
}
