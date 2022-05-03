import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CounterContainer, MinusIcon, PlusIcon } from "./styles/Counter.styled";
import { UnstyledBtn } from "./styles/Styles";
import { increaseSfx, decreaseSfx } from "../helper/sounds";
import useUiSound from "../hooks/useUiSound";

function Counter({ updateLogs }) {
  const [count, setCount] = React.useState(0);

  const [increaseRate, setIncreaseRate] = React.useState(0.75);
  const [decreaseRate, setDecreaseRate] = React.useState(0.75);

  const { play: playIncrease } = useUiSound(increaseSfx, {
    rate: increaseRate,
    volume: 0.3,
  });
  const { play: playDecrease } = useUiSound(decreaseSfx, {
    rate: decreaseRate,
    volume: 0.3,
  });

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setDecreaseRate(decreaseRate - 0.02);
      setIncreaseRate(0.75);
      playDecrease();
    }
  };

  useEffect(() => {
    updateLogs(`New count: ${count}`);
  }, [count, updateLogs]);

  return (
    <CounterContainer>
      <UnstyledBtn onClick={decrementCount}>
        <MinusIcon size="2em" />
      </UnstyledBtn>
      <div>{count}</div>
      <UnstyledBtn
        onClick={() => {
          setCount(count + 1);
          setIncreaseRate(increaseRate + 0.05);
          setDecreaseRate(0.75);
          playIncrease();
        }}
      >
        <PlusIcon size="2em" />
      </UnstyledBtn>
    </CounterContainer>
  );
}

export default Counter;
