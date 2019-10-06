import React from "react";
import { useImmer } from "use-immer";

const defaultState = {
  dieOne: 0,
  dieTwo: 0,
  round: 1,
  playerAScore: 0,
  playerBScore: 0,
  playerTurn: null,
  rollingDice: false,
  gameEnded: false
};

const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [state, dispatch] = useImmer({ ...defaultState });
  // alternatively without Immer:  const [state, dispatch] = useState({});

  return (
    <GameContext.Provider value={[state, dispatch]}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
