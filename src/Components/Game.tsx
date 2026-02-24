import React from "react";
import { styled } from "styled-components";
import GameMedia from "./GameMedia";
import { Game as GameInterface } from "../types";
import GameInfo from "./GameInfo";
import { Row } from "../Styles/StyledComponents";

interface GameProps {
  game: GameInterface;
}

const GameContainer = styled(Row)`
  align-items: flex-start;
  
  gap: 100px;
  padding: 20px;
  background-color: #003a5587;
  border-radius: 20px;
  backdrop-filter: blur(10px);

  & > * {
    flex: 1;
    max-width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px; /* Adjusted gap for vertical mobile */
  & > * {
    flex: 1;
    max-width: 100%;
  }
    
`;

const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <GameContainer>
      <GameInfo game={game} />
      <GameMedia media={game.media} />
    </GameContainer>
  );
};

export default Game;
