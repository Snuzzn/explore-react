import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { atkOpponent, reduceAtk, switchTurn } from "./actions/gameActions";

function PlayerDialog({ updateMoveTxt }) {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state);

  const scratchMove = (opponent) => {
    dispatch(atkOpponent({ char: opponent, dmg: 7 }));
    updateMoveTxt(opponent, "scratch");
  };

  const growlMove = (opponent) => {
    dispatch(reduceAtk({ target: opponent, atkReduction: 3 }));
    updateMoveTxt(opponent, "growl");
  };

  React.useEffect(() => {
    if (game.playerTurn === "enemy")
      setTimeout(() => {
        scratchMove("player");
      }, 1000);

    if (game.playerTurn === "waiting")
      setTimeout(() => {
        dispatch(switchTurn());
      }, 1000);
  }, [game.playerTurn]);

  return (
    <>
      <div>
        What will <b>Charmander</b> do?
      </div>
      <MovesCont>
        <Move
          onClick={() => {
            scratchMove("enemy");
          }}
        >
          Scratch
        </Move>
        <Move
          onClick={() => {
            growlMove("enemy");
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
