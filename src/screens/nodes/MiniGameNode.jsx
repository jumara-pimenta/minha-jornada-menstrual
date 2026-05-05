import { useState } from "react";
import { useGame } from "../../context/GameContext";
import SceneCard from "../../components/SceneCard";
import "./nodes.css";

export default function MiniGameNode({ chapter }) {
  const { advanceTo, applyStats } = useGame();
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const toggle = (id) => {
    if (submitted) return;
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const confirm = () => {
    if (submitted) return;
    setSubmitted(true);

    const correct = chapter.items.filter((i) => i.correct);
    const correctSelected = correct.filter((i) => selected.includes(i.id));
    const wrongSelected = chapter.items.filter(
      (i) => !i.correct && !i.neutral && selected.includes(i.id)
    );

    const score = correctSelected.length - wrongSelected.length;
    const ratio = score / correct.length;

    let fb;
    if (ratio >= 0.7) {
      fb = { emoji: "✔️", text: "Perfeito! Você está preparada 💛", type: "good" };
      applyStats(0, 1);
    } else if (ratio >= 0.4) {
      fb = { emoji: "⚠️", text: "Bom começo! Dá pra melhorar 😊", type: "ok" };
    } else {
      fb = { emoji: "💛", text: "Tudo bem, vamos aprender juntas 💛", type: "ok" };
    }
    setFeedback(fb);
  };

  return (
    <SceneCard illustration="🎒" title={chapter.title} text={chapter.description}>
      <div className="kit-grid">
        {chapter.items.map((item) => {
          const isSelected = selected.includes(item.id);
          let statusClass = "";
          if (submitted) {
            if (item.correct && isSelected) statusClass = "item-correct";
            else if (!item.correct && !item.neutral && isSelected) statusClass = "item-wrong";
            else if (item.correct && !isSelected) statusClass = "item-missed";
          }
          return (
            <button
              key={item.id}
              className={`kit-item ${isSelected ? "selected" : ""} ${statusClass}`}
              onClick={() => toggle(item.id)}
            >
              {item.label}
              {isSelected && !submitted && <span className="kit-check">✓</span>}
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          className="btn btn-primary"
          onClick={confirm}
          disabled={selected.length === 0}
          style={{ marginTop: "1rem" }}
        >
          Confirmar 🎒
        </button>
      ) : (
        <div className={`quiz-feedback ${feedback?.type}`}>
          <p>
            {feedback?.emoji} {feedback?.text}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => advanceTo(chapter.next)}
          >
            Continuar →
          </button>
        </div>
      )}
    </SceneCard>
  );
}
