import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import HealthBar from "./HealthBar";
import Dialog from "./Dialog";
import Character from "./Character";
import useUiSound from "../../hooks/useUiSound";

function Game() {
  const dispatch = useDispatch();

  const { play, stop, sound } = useUiSound("/sounds/battleMusic.mp3", {
    volume: 0.3,
  });

  useEffect(() => {
    if (sound) sound._loop = true;
    play();
    return () => {
      stop();
    };
  }, [play, stop]);

  return (
    <GameCont>
      <>
        <CharacterCont>
          <HealthBar character="enemy" />
          <Character src={"/images/squirtle.gif"} height="170px" type="enemy" />
        </CharacterCont>
        <CharacterCont>
          <Character src={"/images/charmander.gif"} type="player" />
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
