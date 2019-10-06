import React from 'react';

import { H2 } from '../styled';
import { useGameStateContext } from '../useGameContext';

const PlayerProgress = ({ round, playerTurn, dieOne, dieTwo }) => {
  return (
    <>
      Target: {round} <br />
      Player {playerTurn} rolled <span>{dieOne + dieTwo}</span>
    </>
  );
};

const Winner = ({ playerAScore, playerBScore }) => {
  return playerAScore > playerBScore ? (
    <>
      Winner is <span>Player A</span>!{" "}
    </>
  ) : playerBScore > playerAScore ? (
    <>
      Winner is <span>Player B</span>!
    </>
  ) : (
    <>
      It's a tie. You are all losers.{" "}
      <span role="img" aria-label="ROFL">
        🤣
      </span>
    </>
  );
};

const GameProgress = () => {
  const {
    round,
    playerTurn,
    dieOne,
    dieTwo,
    gameEnded,
    playerAScore,
    playerBScore
  } = useGameStateContext();
  if (round === 1) {
    return <H2>Welcome to Chicago Dice</H2>;
  }
  if (round > 1) {
    return (
      <H2>
        {gameEnded ? (
          <div>
            <Winner {...{ playerAScore, playerBScore }} />
          </div>
        ) : null}
        <PlayerProgress {...{ round, playerTurn, dieOne, dieTwo }} />
      </H2>
    );
  }
};

export default GameProgress;
