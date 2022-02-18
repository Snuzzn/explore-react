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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  &:hover {
    background-color: #2c2b35;
  }
`;

const Title = styled.div`
  font-weight: 500;
  padding: 10pt;
`;
