import React from "react";
import useSound from "use-sound";
import {
  CounterContainer,
  MinusIcon,
  PlusIcon,
} from "../../components/styles/Counter.styled";
import { UnstyledBtn } from "../../components/styles/Styles";
import plup from "../../sounds/plup.mp3";

function DependentCounter({ count, setCount }) {
  const [play, { stop }] = useSound(plup);

  const decrementCount = () => {
    if (count - 1 >= 0) {
      play();
      setCount(count - 1);
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
              play();
              if (count < 10) setCount(count + 1);
            }}
          />
        </UnstyledBtn>
      </CounterContainer>
    </div>
  );
}

export default DependentCounter;
