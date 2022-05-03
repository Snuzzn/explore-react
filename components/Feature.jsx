import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { StyledLink } from "./styles/Styles";
import { ThemeContext } from "../context/ThemeProvider";
import useUiSound from "../hooks/useUiSound";
const bubbleClickSfx = "/sounds/bubbleClick.mp3";

const Feature = ({ title, route, category }) => {
  const { play } = useUiSound(bubbleClickSfx);

  return (
    <Link href={`/${category.toLowerCase()}/${route}`} passHref>
      <Container onClick={() => play()}>
        <Title>{title}</Title>
      </Container>
    </Link>
  );
};

export default Feature;

const Container = styled.div`
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
  color: #e7e7e7;
`;
