import React from "react";
import styled from "styled-components";
import { atkOpponent, reduceAtk, switchTurn } from "./actions/gameActions";
import { useDispatch, useSelector } from "react-redux";
import { growlMove, scratchMove } from "./moves";
import PlayerDialog from "./PlayerDialog";
import useUiSound from "../../hooks/useUiSound";

function Dialog() {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state);
  const { playerMove, enemyMove, player } = game;

  const { play } = useUiSound("/sounds/scratch.mp3");

  const renderDialog = () => {
    switch (game.playerTurn) {
      case "player":
        return <PlayerDialog />;
      case "enemy":
        return (
          <div>
            You used <b>{playerMove}</b>!
          </div>
        );
      case "waiting":
        return (
          <div>
            Enemy used <b>{enemyMove}</b>!
          </div>
        );
      case "end":
        if (player.currHealth <= 0)
          return <div>Defeat! Your pokemon fainted.</div>;
        else return <div>Victory! The enemy fainted.</div>;
      default:
        return <></>;
    }
  };

  React.useEffect(() => {
    if (game.playerTurn === "enemy")
      setTimeout(() => {
        if (Math.floor(Math.random() * 2) === 0) growlMove("player", dispatch);
        else scratchMove("player", dispatch, play);
      }, 1000);

    if (game.playerTurn === "waiting")
      setTimeout(() => {
        dispatch(switchTurn());
      }, 1000);
  }, [game.playerTurn]);

  return <DialogBox>{renderDialog()}</DialogBox>;
}

export default Dialog;

const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 150px;
  background-color: #252a2d;
  border-radius: 20px;
  padding: 20px;
`;

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
