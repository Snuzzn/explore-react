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
      <UnstyledBtn>
        <MinusIcon size="3em" onClick={decrementCount} />
      </UnstyledBtn>
      <div>{count}</div>
      <UnstyledBtn>
        <PlusIcon
          size="3em"
          onClick={() => {
            setCount(count + 1);
          }}
        />
      </UnstyledBtn>
    </CounterContainer>
  );
}

export default Counter;
