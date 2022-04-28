import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { atkOpponent, reduceAtk, switchTurn } from "./actions/gameActions";
import { growlMove, scratchMove } from "./moves";
import scratchSfx from "../../sounds/scratch.mp3";
import useUiSound from "../../hooks/useUiSound";

function PlayerDialog() {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state);
  const { play } = useUiSound(scratchSfx, 1);

  return (
    <>
      <div>
        What will <b>Charmander</b> do?
      </div>
      <MovesCont>
        <Move
          onClick={() => {
            scratchMove("enemy", dispatch, play);
          }}
        >
          Scratch
        </Move>
        <Move
          onClick={() => {
            growlMove("enemy", dispatch);
          }}
        >
          Growl
        </Move>
      </MovesCont>
    </>
  );
}

export default PlayerDialog;

const MovesCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Move = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: 15px;
  border: 2px solid #313944;
  border-radius: 10px;
  font-size: 13pt;
  cursor: pointer;
  &:hover {
    color: #5773ff;
    border-color: #5773ff;
  }
`;
