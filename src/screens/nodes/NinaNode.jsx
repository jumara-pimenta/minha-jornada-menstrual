import { useGame } from "../../context/GameContext";
import NinaDialog from "../../components/NinaDialog";
import "./nodes.css";

export default function NinaNode({ chapter }) {
  const { advanceTo } = useGame();

  return (
    <div className="node-wrapper">
      <NinaDialog
        text={chapter.text}
        onContinue={() => advanceTo(chapter.next)}
      />
    </div>
  );
}
