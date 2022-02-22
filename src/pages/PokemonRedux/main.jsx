import React from "react";
import styled from "styled-components";
import { Provider, useDispatch } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Game from "./Game";

function PokemonRedux() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default PokemonRedux;
