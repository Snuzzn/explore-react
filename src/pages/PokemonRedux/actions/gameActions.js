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
