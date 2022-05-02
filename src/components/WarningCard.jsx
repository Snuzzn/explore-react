import React from "react";
import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri";
import { CardContainer } from "./InfoCard";

function WarningCard({ children }) {
  return (
    <WarningContainer>
      <Icon color="#FFA33F" size="2em" />
      {children}
    </WarningContainer>
  );
}

export default WarningCard;

const Icon = styled(RiErrorWarningFill)`
  background-color: #181819;
  border-radius: 20px;
  position: absolute;
  top: -8px;
  left: -10px;
  padding: 4px;
`;

const WarningContainer = styled(CardContainer)`
  border-left: 3px solid #ffa33f;
`;
