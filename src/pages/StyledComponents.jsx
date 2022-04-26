import React from "react";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";

const COLORS = {
  blue: {
    "--defaultColor": "#2f48c8",
    "--textColor": "#5773ff",
    "--hoverColor": "#2f48c85f",
    "--focusColor": "#4760dc",
  },
  pink: {
    "--defaultColor": "#DB2777",
    "--textColor": "#c25586",
    "--hoverColor": "#db277865",
    "--focusColor": "#f676b4",
  },
};

const StyledComponents = () => {
  return (
    <>
      <DemoCont>
        <ButtonsWrapper>
          <Flex>
            <Button>Button</Button>
            <Button variant="outline">Button</Button>
            <Button variant="ghost">Button</Button>
          </Flex>
          <Flex>
            <Button color="pink">Button</Button>
            <Button variant="outline" color="pink">
              Button
            </Button>
            <Button variant="ghost" color="pink">
              Button
            </Button>
          </Flex>
        </ButtonsWrapper>
      </DemoCont>
    </>
  );
};

export default StyledComponents;

const Button = ({ variant, color, children }) => {
  let styles = COLORS[color];
  if (!styles) styles = COLORS["blue"];

  let Component;
  if (variant === "outline") Component = OutlineBtn;
  else if (variant === "ghost") Component = GhostBtn;
  else Component = BaseBtn;

  return <Component style={styles}>{children}</Component>;
};

const BaseBtn = styled.button`
  background-color: var(--defaultColor);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14pt;
  border: 2px solid transparent;
  transition: 200ms background-color ease;
  cursor: pointer;
  &:hover {
    background-color: var(--hoverColor);
  }
  &:focus {
    outline: 2px solid var(--focusColor);
    outline-offset: 2px;
  }
`;

const OutlineBtn = styled(BaseBtn)`
  color: var(--textColor);
  border: 2px solid var(--defaultColor);
  background: none;
  &:hover {
    background-color: var(--hoverColor);
    /* opacity: 30%; */
  }
`;

const GhostBtn = styled(OutlineBtn)`
  border-color: transparent;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
