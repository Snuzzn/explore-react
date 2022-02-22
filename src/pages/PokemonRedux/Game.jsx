import React from "react";
import styled from "styled-components";
import Squirtle from "../../images/squirtle.gif";
import Charmander from "../../images/charmander.gif";
import { useDispatch, useSelector } from "react-redux";
import HealthBar from "./HealthBar";
import Dialog from "./Dialog";

function Game() {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state);

  return (
    <GameCont>
      {game && (
        <>
          <CharacterCont>
            <HealthBar character="enemy" />
            <img src={Squirtle} alt="" width="160px" />
          </CharacterCont>
          <CharacterCont>
            <img src={Charmander} alt="" width="180px" />
            <HealthBar character="player" />
          </CharacterCont>
          <Dialog />
        </>
      )}
    </GameCont>
  );
}

export default Game;

const GameCont = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 16pt;
`;

const CharacterCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
