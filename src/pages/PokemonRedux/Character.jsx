import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Charmander from "../../images/charmander.gif";

function Character({ src, type }) {
  const game = useSelector((state) => state.game);
  const char = game[type];

  const [hasTakenDmg, setHasTakenDmg] = React.useState(false);

  React.useEffect(() => {
    if (char.currHealth === 100) return;
    setHasTakenDmg(true);

    setTimeout(() => {
      setHasTakenDmg(false);
    }, 300);
  }, [char]);

  return (
    <CharacterImg
      src={src}
      hasTakenDmg={hasTakenDmg}
      health={char.currHealth}
    />
  );
}

export default Character;

const CharacterImg = styled.img`
  width: 180px;
  filter: ${(props) => props.hasTakenDmg && `sepia(100%)`};
  opacity: ${(props) => props.health <= 0 && `0`};
  transition: all 750ms ease;
`;
