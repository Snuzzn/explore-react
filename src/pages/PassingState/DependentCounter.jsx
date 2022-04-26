import React from "react";
import {
  CounterContainer,
  MinusIcon,
  PlusIcon,
} from "../../components/styles/Counter.styled";
import { UnstyledBtn } from "../../components/styles/Styles";

function DependentCounter({ count, setCount }) {
  const decrementCount = () => {
    if (count - 1 >= 0) setCount(count - 1);
  };

  return (
    <div>
      <CounterContainer>
        <UnstyledBtn>
          <MinusIcon size="2em" onClick={decrementCount} />
        </UnstyledBtn>
        {count}
        <UnstyledBtn>
          <PlusIcon
            size="2em"
            onClick={() => {
              if (count < 10) setCount(count + 1);
            }}
          />
        </UnstyledBtn>
      </CounterContainer>
    </div>
  );
}

export default DependentCounter;
