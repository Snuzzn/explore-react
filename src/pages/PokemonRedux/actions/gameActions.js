export const setPlayerMove = (move) => ({
  type: "SET_PLAYER_MOVE",
  payload: move,
});

export const setEnemyMove = (move) => ({
  type: "SET_ENEMY_MOVE",
  payload: move,
});

export const atkOpponent = (payload) => ({
  type: "ATK_OPPONENT",
  payload: payload,
});

export const switchTurn = () => ({
  type: "SWITCH_TURN",
});

export const reduceAtk = (payload) => ({
  type: "REDUCE_ATK",
  payload: payload,
});
