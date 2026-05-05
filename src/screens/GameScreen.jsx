import { useGame } from "../context/GameContext";
import { useState } from "react";
import StatsBar from "../components/StatsBar";
import StoryNode from "./nodes/StoryNode";
import NinaNode from "./nodes/NinaNode";
import QuizNode from "./nodes/QuizNode";
import MiniGameNode from "./nodes/MiniGameNode";
import CycleNode from "./nodes/CycleNode";

export default function GameScreen() {
  const { currentChapter, avatar, playerName, setScreen } = useGame();
  const [confirmBack, setConfirmBack] = useState(false);

  if (!currentChapter) return null;

  const renderNode = () => {
    switch (currentChapter.type) {
      case "story":   return <StoryNode chapter={currentChapter} />;
      case "nina":    return <NinaNode chapter={currentChapter} />;
      case "quiz":    return <QuizNode chapter={currentChapter} />;
      case "minigame":return <MiniGameNode chapter={currentChapter} />;
      case "cycle":   return <CycleNode chapter={currentChapter} />;
      default:        return null;
    }
  };

  return (
    <div className="game-screen">
      <StatsBar />
      <div className="game-player-tag">
        <button
          onClick={() => setConfirmBack(true)}
          title="Trocar avatar"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#9f15d1",
            fontSize: "2rem",
            fontWeight: 500,
            padding: "0 0.2rem",
            lineHeight: 1,
            fontFamily: "inherit",
          }}
        >
          ←
        </button>
        <img
          src={avatar?.image}
          alt=""
          width={32}
          height={32}
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top center",
            flexShrink: 0,
            background: avatar?.bg,
          }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <span>{playerName}</span>
      </div>

      {confirmBack && (
        <div className="game-confirm-overlay">
          <div className="game-confirm-box">
            <p>Quer voltar para trocar o avatar?<br /><small>Seu progresso será perdido.</small></p>
            <div className="game-confirm-actions">
              <button className="btn btn-secondary" onClick={() => setConfirmBack(false)}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={() => setScreen("character")}>
                Sim, voltar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="game-content">{renderNode()}</div>
    </div>
  );
}
