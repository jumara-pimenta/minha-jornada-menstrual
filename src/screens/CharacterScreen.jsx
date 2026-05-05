import { useState } from "react";
import { useGame } from "../context/GameContext";
import { AVATARS } from "../data/avatars";
import "./CharacterScreen.css";

export default function CharacterScreen() {
  const { startGame, setScreen } = useGame();
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const [selected, setSelected] = useState(AVATARS[0]);

  const trimmedName = name.trim();
  const hasError = touched && trimmedName === "";

  const handleStart = () => {
    if (trimmedName === "") {
      setTouched(true);
      return;
    }
    startGame(trimmedName, selected);
  };

  return (
    <div className="character-screen">
      <div className="character-page">
        <button className="btn-back" onClick={() => setScreen("start")}>
          ← Voltar
        </button>

        <h2 className="character-page-title">Escolha sua personagem 🌸</h2>

        <div className="avatar-grid">
          {AVATARS.map((av) => (
            <button
              key={av.id}
              className={`avatar-card ${selected.id === av.id ? "selected" : ""}`}
              style={{ "--card-bg": av.bg }}
              onClick={() => setSelected(av)}
              aria-label={`Escolher avatar ${av.id}`}
            >
              <div className="avatar-img-wrap">
                <img
                  src={av.image}
                  alt=""
                  className="avatar-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <div className="avatar-img-placeholder" style={{ display: "none" }}>
                  🌸
                </div>
              </div>
              {selected.id === av.id && (
                <span className="avatar-check" aria-hidden="true">✓</span>
              )}
            </button>
          ))}
        </div>

        <div className="character-preview">
          <div className="preview-img-wrap" style={{ background: selected.bg }}>
            <img
              src={selected.image}
              alt="avatar selecionado"
              className="preview-img"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <div className="preview-info">
            <div className="form-group">
              <label htmlFor="player-name">Qual é o seu nome?</label>
              <input
                id="player-name"
                type="text"
                placeholder="Digite seu nome..."
                value={name}
                maxLength={20}
                onChange={(e) => { setName(e.target.value); setTouched(true); }}
                className={`name-input ${hasError ? "name-input-error" : ""}`}
              />
              {hasError && (
                <span className="name-error">Por favor, digite seu nome 💛</span>
              )}
            </div>
            <button className="btn btn-primary btn-large" onClick={handleStart}>
              Começar a jornada →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
