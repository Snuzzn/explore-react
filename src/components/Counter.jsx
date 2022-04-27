import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CounterContainer, MinusIcon, PlusIcon } from "./styles/Counter.styled";
import { UnstyledBtn } from "./styles/Styles";
import increaseSfx from "../sounds/increase.ogg";
import decreaseSfx from "../sounds/decrease.ogg";
import { ThemeContext } from "../ThemeProvider";
import useSound from "use-sound";

function Counter({ updateLogs }) {
  const [count, setCount] = React.useState(0);

  const [increaseRate, setIncreaseRate] = React.useState(0.75);
  const [decreaseRate, setDecreaseRate] = React.useState(0.75);

  const { isSoundEnabled } = useContext(ThemeContext);
  const [playIncrease, { stopIncrease }] = useSound(increaseSfx, {
    playbackRate: increaseRate,
    soundEnabled: isSoundEnabled,
  });

  const [playDecrease, { stopDecrease }] = useSound(decreaseSfx, {
    playbackRate: decreaseRate,
    soundEnabled: isSoundEnabled,
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
  }, [count]);

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
