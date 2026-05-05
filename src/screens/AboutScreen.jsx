import { useGame } from "../context/GameContext";
import "./AboutScreen.css";

export default function AboutScreen() {
  const { setScreen } = useGame();

  return (
    <div className="about-screen">
      <div className="about-card">
        <button className="btn-back" onClick={() => setScreen("start")}>
          ← Voltar
        </button>
        <div className="about-icon">🌸</div>
        <h2>Sobre o Jogo</h2>
        <p>
          <strong>Minha Jornada Menstrual</strong> é um jogo educativo criado
          para ajudar adolescentes a entenderem a menstruação, conhecerem seu corpo
          e se sentirem preparadas para as situações do dia a dia.
        </p>
        <p>
          Acompanhada pela guia <strong>Nina</strong> 🤖, você tomará decisões,
          aprenderá sobre o ciclo menstrual e descobrirá que cuidar de si é
          algo natural e importante.
        </p>
        <p>
          💛 Aqui não existem respostas "erradas", só aprendizado.
        </p>
        <button
          className="btn btn-primary btn-large"
          onClick={() => setScreen("character")}
        >
          Começar a Jornada
        </button>
      </div>
    </div>
  );
}
