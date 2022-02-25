import React from "react";
import styled from "styled-components";
import { Provider, useDispatch } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Game from "./Game";
import DemoCont from "../../components/DemoCont";

function PokemonRedux() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <>
      <DemoCont>
        <Provider store={store}>
          <Game />
        </Provider>
      </DemoCont>
    </>
  );
}

export default PokemonRedux;
