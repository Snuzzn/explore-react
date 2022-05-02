import React from "react";
import styled from "styled-components";
import { AiFillInfoCircle } from "react-icons/ai";

function InfoCard({ children }) {
  return (
    <CardContainer>
      <Icon color="#5773FF" size="2em" />
      {children}
    </CardContainer>
  );
}

export default InfoCard;

export const CardContainer = styled.div`
  font-size: 14pt;
  margin-top: 10px;
  padding: 25px;
  background-color: #292e33;
  border-radius: 0 9px 9px 0;
  border-left: 3px solid #5773ff;
  position: relative;
  width: 700px;
  box-sizing: border-box;
`;

const Icon = styled(AiFillInfoCircle)`
  background-color: #181819;
  border-radius: 20px;
  position: absolute;
  top: -8px;
  left: -10px;
  padding: 4px;
`;
