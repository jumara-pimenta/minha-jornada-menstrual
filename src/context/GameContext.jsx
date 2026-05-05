import { createContext, useContext, useState, useCallback } from "react";
import { CHAPTERS } from "../data/gameData";
import { AVATARS } from "../data/avatars";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [screen, setScreen] = useState("start"); // start | character | game | ending
  const [playerName, setPlayerName] = useState("Lia");
  const [avatar, setAvatar] = useState(AVATARS[0]); // full avatar object
  const [emotion, setEmotion] = useState(5);
  const [body, setBody] = useState(5);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [pendingStats, setPendingStats] = useState(null); // shown briefly after choice

  const currentChapter = CHAPTERS[chapterIndex];

  const applyStats = useCallback((emotionDelta, bodyDelta) => {
    if (emotionDelta !== 0 || bodyDelta !== 0) {
      setPendingStats({ emotion: emotionDelta, body: bodyDelta });
      setEmotion((e) => Math.max(0, Math.min(10, e + emotionDelta)));
      setBody((b) => Math.max(0, Math.min(10, b + bodyDelta)));
      setTimeout(() => setPendingStats(null), 1800);
    }
  }, []);

  const advanceTo = useCallback(
    (nextId) => {
      if (nextId === "ending") {
        setScreen("ending");
        return;
      }
      const idx = CHAPTERS.findIndex((c) => c.id === nextId);
      if (idx !== -1) setChapterIndex(idx);
    },
    []
  );

  const startGame = useCallback((name, av) => {
    setPlayerName(name || av?.name || "Lia");
    setAvatar(av || AVATARS[0]);
    setEmotion(5);
    setBody(5);
    setChapterIndex(0);
    setScreen("game");
  }, []);

  const restartGame = useCallback(() => {
    setScreen("start");
    setChapterIndex(0);
    setEmotion(5);
    setBody(5);
    setPendingStats(null);
  }, []);

  return (
    <GameContext.Provider
      value={{
        screen,
        setScreen,
        playerName,
        avatar,
        emotion,
        body,
        currentChapter,
        pendingStats,
        applyStats,
        advanceTo,
        startGame,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
