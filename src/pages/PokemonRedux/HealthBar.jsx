import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function HealthBar({ character }) {
  const { game } = useSelector((state) => state);
  let char;
  if (character === "player") char = game.player;
  else char = game.enemy;

  return (
    <div>
      {char && (
        <>
          <HP>
            {char.currHealth} / {char.totalHealth}
          </HP>
          <HealthBarWrapper>
            <Bar currHealth={char.currHealth} />
          </HealthBarWrapper>
        </>
      )}
    </div>
  );
}

export default HealthBar;

const Bar = styled.div`
  background-color: #5773ff;
  width: ${(props) => `${props.currHealth}%`};
  height: 100%;
  border-radius: 5px;
`;

const HealthBarWrapper = styled.div`
  width: 200px;
  height: 10px;
  border-radius: 10px;
  background-color: #24252f;
  padding: 6px;
  position: relative;
`;

const HP = styled.div`
  color: #8a94a0;
  margin-bottom: 3px;
  font-size: 14pt;
`;
