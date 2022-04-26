import React, { useEffect } from "react";
import styled from "styled-components";
import { CounterContainer, MinusIcon, PlusIcon } from "./styles/Counter.styled";
import { UnstyledBtn } from "./styles/Styles";

function Counter({ updateLogs }) {
  const [count, setCount] = React.useState(0);

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
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
        }}
      >
        <PlusIcon size="2em" />
      </UnstyledBtn>
    </CounterContainer>
  );
}

export default Counter;
