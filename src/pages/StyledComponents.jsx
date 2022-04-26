import React from "react";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";

const StyledComponents = () => {
  return (
    <>
      <DemoCont>
        <Button>Button</Button>
        <OutlineBtn>Button</OutlineBtn>
        <GhostBtn>Button</GhostBtn>
      </DemoCont>
    </>
  );
};

export default StyledComponents;

const Button = styled.button`
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14pt;
  border: 2px solid transparent;
  background-color: #2f48c8;
  transition: 200ms background-color ease;
  cursor: pointer;
  &:hover {
    background-color: #253791;
  }
  &:focus {
    outline: 2px solid #4760dc;
    outline-offset: 2px;
  }
`;

const OutlineBtn = styled(Button)`
  background: none;
  color: #5773ff;
  border: 2px solid #2f48c8;
  &:hover {
    background-color: #2f48c843;
  }
`;

const GhostBtn = styled(OutlineBtn)`
  border-color: transparent;
`;
