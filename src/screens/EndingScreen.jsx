import { useGame } from "../context/GameContext";
import { getEnding, LEARNED_TOPICS } from "../data/gameData";
import Footer from "../components/Footer";
import "./EndingScreen.css";

export default function EndingScreen() {
  const { emotion, body, avatar, playerName, restartGame } = useGame();
  const ending = getEnding(emotion, body);

  return (
    <div className="ending-screen" style={{ "--ending-color": ending.color }}>
      <div className="ending-card">
        <div className="ending-emoji">{ending.emoji}</div>
        <p className="ending-subtitle">{ending.subtitle}</p>
        <h2 className="ending-title">{ending.title}</h2>

        <div className="ending-avatar-name">
          <div
            className="ending-avatar-img-wrap"
            style={{ background: avatar?.bg }}
          >
            <img
              src={avatar?.image}
              alt={avatar?.name}
              className="ending-avatar-img"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <span>{playerName}</span>
        </div>

        <p className="ending-message">{ending.message}</p>

        <div className="ending-stats">
          <div className="ending-stat">
            <span>💛 Emoção</span>
            <strong>{emotion}/10</strong>
          </div>
          <div className="ending-stat">
            <span>🩺 Corpo</span>
            <strong>{body}/10</strong>
          </div>
        </div>

        <div className="learned-section">
          <h3>Você aprendeu sobre:</h3>
          <ul>
            {LEARNED_TOPICS.map((t) => (
              <li key={t}>✅ {t}</li>
            ))}
          </ul>
        </div>

        <p className="ending-heart">💛 Você não está sozinha</p>

        <button className="btn btn-primary btn-large" onClick={restartGame}>
          🔄 Jogar novamente
        </button>
      </div>
      <Footer />
    </div>
  );
}
