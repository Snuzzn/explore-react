import React, { useContext } from "react";
import useSound from "use-sound";
import {
  CounterContainer,
  MinusIcon,
  PlusIcon,
} from "../../components/styles/Counter.styled";
import { UnstyledBtn } from "../../components/styles/Styles";
import plup from "../../sounds/plup.mp3";
import { ThemeContext } from "../../ThemeProvider";

function DependentCounter({ count, setCount }) {
  const { isSoundEnabled } = useContext(ThemeContext);
  const [play, { stop }] = useSound(plup, { soundEnabled: isSoundEnabled });

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
