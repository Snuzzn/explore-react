import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "./styles/Styles";
import useSound from "use-sound";
import bubbleClick from "../sounds/bubbleClick.mp3";
import { ThemeContext } from "../ThemeProvider";

function Feature({ title, route }) {
  const { isSoundEnabled } = React.useContext(ThemeContext);

  const [play, { stop }] = useSound(bubbleClick, {
    soundEnabled: isSoundEnabled,
  });

  return (
    <Container to={`/${route}`} onClick={() => play()}>
      <Title>{title}</Title>
    </Container>
  );
}

export default Feature;

const Container = styled(StyledLink)`
  display: flex;
  border-radius: 10px;
  align-items: center;
  padding: 15px;
  background-color: #23222a;
  cursor: pointer;
  transition: 150ms all ease;
  &:hover {
    background-color: #2c2b35;
  }
  &:focus {
    outline: 2px solid #403f4b;
    outline-offset: 2px;
  }
  hyphens: auto;
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 15pt;
  padding: 13px;
  width: 100%;
  hyphens: auto;
`;
