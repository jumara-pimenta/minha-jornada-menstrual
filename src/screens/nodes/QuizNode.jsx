import { useState } from "react";
import { useGame } from "../../context/GameContext";
import SceneCard from "../../components/SceneCard";
import "./nodes.css";

export default function QuizNode({ chapter }) {
  const { advanceTo } = useGame();
  const [selected, setSelected] = useState(null);

  const handleAnswer = (opt) => {
    if (selected !== null) return;
    setSelected(opt);
  };

  return (
    <SceneCard illustration="🧠" title={chapter.title} text={chapter.question}>
      <div className="choices">
        {chapter.options.map((opt, i) => {
          let cls = "btn btn-choice";
          if (selected) {
            if (selected === opt) {
              cls += opt.correct ? " correct" : opt.neutral ? " neutral" : " wrong";
            } else {
              cls += " dimmed";
            }
          }
          return (
            <button key={i} className={cls} onClick={() => handleAnswer(opt)}>
              {opt.label}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className={`quiz-feedback ${selected.correct ? "correct" : selected.neutral ? "neutral" : "wrong"}`}>
          <p>{selected.feedback}</p>
          <button className="btn btn-primary" onClick={() => advanceTo(chapter.next)}>
            Continuar →
          </button>
        </div>
      )}
    </SceneCard>
  );
}
