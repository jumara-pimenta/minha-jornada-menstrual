import "./SceneCard.css";

export default function SceneCard({ illustration, title, subtitle, text, children }) {
  return (
    <div className="scene-card">
      {illustration && (
        <div className="scene-illustration">{illustration}</div>
      )}
      {title && <h2 className="scene-title">{title}</h2>}
      {subtitle && <p className="scene-subtitle">{subtitle}</p>}
      {text && <p className="scene-text">{text}</p>}
      {children}
    </div>
  );
}
