import { useGame } from "../context/GameContext";
import Footer from "../components/Footer";
import "./StartScreen.css";

export default function StartScreen() {
  const { setScreen } = useGame();

  return (
    <div className="start-screen">
      <div className="start-bg-circles" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="start-content">
        <div className="start-logo">🌸</div>
        <h1 className="start-game-title">Minha Jornada<br />Menstrual</h1>
        <p className="start-tagline">💛 Um jogo para aprender sobre você</p>

        <div className="start-buttons">
          <button
            className="btn btn-primary btn-large"
            onClick={() => setScreen("character")}
          >
            ▶ Começar
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => setScreen("about")}
          >
            ℹ️ Sobre o jogo
          </button>
        </div>

        <p className="start-note">
          Para adolescentes que estão conhecendo o próprio corpo 🌸
        </p>
      </div>
      <Footer />
    </div>
  );
}
