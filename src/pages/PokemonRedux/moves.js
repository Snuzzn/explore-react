import {
  atkOpponent,
  reduceAtk,
  setEnemyMove,
  setPlayerMove,
} from "./actions/gameActions";

export const scratchMove = (opponent, dispatch) => {
  dispatch(atkOpponent({ char: opponent, dmg: 7 }));
  updateMoveTxt(opponent, dispatch, "scratch");
};

export const growlMove = (opponent, dispatch) => {
  dispatch(reduceAtk({ target: opponent, atkReduction: 3 }));
  updateMoveTxt(opponent, dispatch, "growl");
};

const updateMoveTxt = (opponent, dispatch, move) => {
  if (opponent === "enemy") dispatch(setPlayerMove(move));
  else dispatch(setEnemyMove(move));
};
