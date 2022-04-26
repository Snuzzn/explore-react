import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "./styles/Styles";

function Feature({ title, route }) {
  return (
    <div style={{ position: "relative" }}>
      <Container to={`/${route}`}>
        <Title>{title}</Title>
      </Container>
    </div>
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
`;

const Title = styled.div`
  font-weight: 400;
  padding: 13px;
`;
