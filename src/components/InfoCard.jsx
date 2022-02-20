import React from "react";
import styled from "styled-components";
import { AiFillInfoCircle } from "react-icons/ai";

function InfoCard({ children }) {
  return (
    <Container>
      <Icon color="#5773FF" size="1.5em" />
      {children}
    </Container>
  );
}

export default InfoCard;

const Container = styled.div`
  font-size: 13pt;
  margin-top: 20px;
  padding: 25px;
  background-color: #292e33;
  border-radius: 0 9px 9px 0;
  border-left: 3px solid #5773ff;
  color: ;
  position: relative;
  width: 700px;
  box-sizing: border-box;
`;

const Icon = styled(AiFillInfoCircle)`
  background-color: #181819;
  border-radius: 15px;
  position: absolute;
  top: -8px;
  left: -10px;
  padding: 4px;
`;
