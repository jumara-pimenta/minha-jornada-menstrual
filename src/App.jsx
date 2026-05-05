import { GameProvider, useGame } from "./context/GameContext";
import StartScreen from "./screens/StartScreen";
import CharacterScreen from "./screens/CharacterScreen";
import GameScreen from "./screens/GameScreen";
import EndingScreen from "./screens/EndingScreen";
import AboutScreen from "./screens/AboutScreen";

function Router() {
  const { screen } = useGame();

  switch (screen) {
    case "start":     return <StartScreen />;
    case "about":     return <AboutScreen />;
    case "character": return <CharacterScreen />;
    case "game":      return <GameScreen />;
    case "ending":    return <EndingScreen />;
    default:          return <StartScreen />;
  }
}

export default function App() {
  return (
    <GameProvider>
      <Router />
    </GameProvider>
  );
}
