import React from "react";
import styled from "styled-components";
import { atkOpponent, reduceAtk, switchTurn } from "./actions/gameActions";
import { useDispatch, useSelector } from "react-redux";

function Dialog() {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state);
  const [playerMove, setPlayerMove] = React.useState("");
  const [enemyMove, setEnemyMove] = React.useState("");

  const scratchMove = (opponent) => {
    dispatch(atkOpponent({ char: opponent, dmg: 7 }));
    updateMoveTxt(opponent, "scratch");
  };

  const growlMove = (opponent) => {
    dispatch(reduceAtk({ target: opponent, atkReduction: 3 }));
    updateMoveTxt(opponent, "growl");
  };

  const updateMoveTxt = (opponent, move) => {
    if (opponent === "enemy") setPlayerMove(move);
    else setEnemyMove(move);
  };

  const renderDialog = () => {
    switch (game.playerTurn) {
      case "player":
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
      default:
        return <></>;
    }
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

  return <DialogBox>{renderDialog()}</DialogBox>;
}

export default Dialog;

const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 110px;
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
