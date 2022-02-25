import React from "react";
import styled from "styled-components";
import Squirtle from "../../images/squirtle.gif";
import Charmander from "../../images/charmander.gif";
import { useDispatch, useSelector } from "react-redux";
import HealthBar from "./HealthBar";
import Dialog from "./Dialog";
import Character from "./Character";

function Game() {
  const dispatch = useDispatch();

  return (
    <GameCont>
      <>
        <CharacterCont>
          <HealthBar character="enemy" />
          <Character src={Squirtle} type="enemy" />
        </CharacterCont>
        <CharacterCont>
          <Character src={Charmander} type="player" />
          <HealthBar character="player" />
        </CharacterCont>
        <Dialog />
      </>
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
