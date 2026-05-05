import { useGame } from "../../context/GameContext";
import SceneCard from "../../components/SceneCard";
import "./nodes.css";

export default function StoryNode({ chapter }) {
  const { applyStats, advanceTo } = useGame();

  const handleChoice = (choice) => {
    applyStats(choice.emotion || 0, choice.body || 0);
    setTimeout(() => advanceTo(choice.next), 300);
  };

  return (
    <SceneCard
      illustration={chapter.illustration}
      title={chapter.title}
      subtitle={chapter.subtitle}
      text={chapter.text}
    >
      <div className="choices">
        {chapter.choices.map((choice, i) => (
          <button
            key={i}
            className="btn btn-choice"
            onClick={() => handleChoice(choice)}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </SceneCard>
  );
}
