import * as actions from "../actions/gameActions";

export const initialState = {
  player: {
    currHealth: 100,
    totalHealth: 100,
    baseAtk: 10,
  },
  enemy: {
    currHealth: 100,
    totalHealth: 100,
    baseAtk: 10,
  },
  playerTurn: "player",
};

export default function gameReducer(state = initialState, action) {
  let cpy, charName, finalState, target;
  let { curr, opponent } = getPlayerAndEnemy(state);

  switch (action.type) {
    case "ATK_OPPONENT":
      cpy = Object.assign({}, opponent);
      cpy.currHealth -= action.payload.dmg + curr.baseAtk;
      if (cpy.currHealth < 0) cpy.currHealth = 0;
      finalState = { ...state, playerTurn: switchTurn(state.playerTurn) };
      finalState[getOpponentName(state.playerTurn)] = cpy;
      return finalState;
    case "REDUCE_ATK":
      target = action.payload.target;
      cpy = Object.assign({}, state[target]);
      cpy.baseAtk -= action.payload.atkReduction;
      if (cpy.baseAtk < 0) cpy.baseAtk = 0;
      finalState = { ...state, playerTurn: switchTurn(state.playerTurn) };
      finalState[target] = cpy;
      return finalState;
    case "SWITCH_TURN":
      return { ...state, playerTurn: switchTurn(state.playerTurn) };
    default:
      return state;
  }
}

const switchTurn = (currTurn) => {
  if (currTurn === "player") return "enemy";
  else if (currTurn === "enemy") return "waiting";
  else if (currTurn === "waiting") return "player";
};

const getPlayerAndEnemy = (state) => {
  if (state.playerTurn === "player")
    return { curr: state.player, opponent: state.enemy };
  else return { curr: state.enemy, opponent: state.player };
};

const getOpponentName = (playerTurn) => {
  if (playerTurn === "player") return "enemy";
  else return "player";
};
