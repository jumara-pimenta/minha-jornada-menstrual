import { useGame } from "../context/GameContext";
import "./StatsBar.css";

export default function StatsBar() {
  const { emotion, body, pendingStats } = useGame();

  return (
    <div className="stats-bar">
      <StatItem
        icon="💛"
        label="Emoção"
        value={emotion}
        delta={pendingStats?.emotion}
        color="#f9c74f"
      />
      <StatItem
        icon="🩺"
        label="Corpo"
        value={body}
        delta={pendingStats?.body}
        color="#f08080"
      />
    </div>
  );
}

function StatItem({ icon, label, value, delta, color }) {
  return (
    <div className="stat-item">
      <span className="stat-label">
        {icon} {label}
      </span>
      <div className="stat-bar-track">
        <div
          className="stat-bar-fill"
          style={{ width: `${value * 10}%`, background: color }}
        />
      </div>
      {delta !== undefined && delta !== 0 && (
        <span className={`stat-delta ${delta > 0 ? "positive" : "negative"}`}>
          {delta > 0 ? `+${delta}` : delta}
        </span>
      )}
    </div>
  );
}
