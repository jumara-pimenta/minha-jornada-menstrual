import { useState } from "react";
import { useGame } from "../../context/GameContext";
import { CYCLE_PHASES } from "../../data/gameData";
import "./nodes.css";

export default function CycleNode({ chapter }) {
  const { advanceTo, applyStats } = useGame();
  const [activePhase, setActivePhase] = useState(null);
  const [phasesDone, setPhasesDone] = useState([]);
  const [phaseFeedback, setPhaseFeedback] = useState(null);

  const selectPhase = (phase) => {
    setActivePhase(phase);
    setPhaseFeedback(null);
  };

  const makeChoice = (choice) => {
    applyStats(choice.emotion || 0, choice.body || 0);
    setPhaseFeedback(choice.feedback);
    setPhasesDone((prev) =>
      prev.includes(activePhase.id) ? prev : [...prev, activePhase.id]
    );
  };

  const canContinue = phasesDone.length >= CYCLE_PHASES.length;

  return (
    <div className="cycle-screen node-wrapper">
      <h2 className="cycle-title">🌸 Seu Ciclo</h2>
      <p className="cycle-subtitle">Toque em cada fase para descobrir!</p>

      <div className="cycle-phases">
        {CYCLE_PHASES.map((phase) => (
          <button
            key={phase.id}
            className={`phase-btn ${activePhase?.id === phase.id ? "active" : ""} ${phasesDone.includes(phase.id) ? "done" : ""}`}
            style={{ "--phase-color": phase.color }}
            onClick={() => selectPhase(phase)}
          >
            <span className="phase-emoji">{phase.emoji}</span>
            <span className="phase-name">{phase.name}</span>
            {phasesDone.includes(phase.id) && (
              <span className="phase-check">✓</span>
            )}
          </button>
        ))}
      </div>

      {activePhase && (
        <div className="phase-detail" style={{ borderColor: activePhase.color }}>
          <h3>
            {activePhase.emoji} {activePhase.name}
          </h3>
          <p>{activePhase.description}</p>
          <div className="phase-symptoms">
            {activePhase.symptoms.map((s) => (
              <span key={s} className="symptom-tag">
                {s}
              </span>
            ))}
          </div>
          <p className="phase-tip">💡 {activePhase.tip}</p>

          {!phaseFeedback ? (
            <div className="choices">
              {activePhase.choices.map((c, i) => (
                <button
                  key={i}
                  className="btn btn-choice"
                  onClick={() => makeChoice(c)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="quiz-feedback good">
              <p>{phaseFeedback}</p>
            </div>
          )}
        </div>
      )}

      {canContinue && (
        <button
          className="btn btn-primary"
          style={{ margin: "1.2rem auto", display: "block" }}
          onClick={() => advanceTo(chapter.next)}
        >
          Próximo Capítulo →
        </button>
      )}

      {!canContinue && (
        <p className="cycle-hint">
          Explore todas as {CYCLE_PHASES.length} fases para continuar!
        </p>
      )}
    </div>
  );
}
