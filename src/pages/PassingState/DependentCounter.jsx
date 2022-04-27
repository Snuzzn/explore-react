import React, { useContext } from "react";
import {
  CounterContainer,
  MinusIcon,
  PlusIcon,
} from "../../components/styles/Counter.styled";
import { UnstyledBtn } from "../../components/styles/Styles";
import useUiSound from "../../hooks/useUiSound";
import plup from "../../sounds/plup.mp3";
import { ThemeContext } from "../../ThemeProvider";

function DependentCounter({ count, setCount }) {
  const { play } = useUiSound(plup, 1);

  const decrementCount = () => {
    if (count - 1 >= 0) {
      setCount(count - 1);
      play();
    }
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
              if (count < 10) {
                setCount(count + 1);
                play();
              }
            }}
          />
        </UnstyledBtn>
      </CounterContainer>
    </div>
  );
}

export default DependentCounter;
