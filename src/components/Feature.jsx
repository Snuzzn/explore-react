import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "./styles/Styles";

function Feature({ title, route }) {
  return (
    <StyledLink to={`/${route}`}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </StyledLink>
  );
}

export default Feature;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 15px;
  background-color: #23222a;
  cursor: pointer;
  &:hover {
    background-color: #2c2b35;
  }
`;

const Title = styled.div`
  font-weight: 500;
  padding: 10pt;
`;
