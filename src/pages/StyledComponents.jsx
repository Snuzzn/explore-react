import React from "react";
import styled from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";

const StyledComponents = () => {
  return (
    <>
      <DemoCont>
        <BtnsWrapper>
          <NormalBtnsWrapper>
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
          </NormalBtnsWrapper>
          <GradientBtn>Gradient</GradientBtn>
        </BtnsWrapper>
      </DemoCont>
      <InfoCard>
        Styled components are visual primitives that allow flexible styling.
        Each component has a unique class name, eliminating duplication and
        overlap issues. It also removes unused styles.
      </InfoCard>
      <Codeblock
        codeFiles={[{ code: code, name: "StyledComponents", lang: "jsx" }]}
        naturalHeight={false}
      />
    </>
  );
};

export default StyledComponents;

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

// core options are provided via props
export const Button = ({ variant, color, children, ...htmlAttr }) => {
  let styles = COLORS[color];
  if (!styles) styles = COLORS["blue"];

  let Component;
  // using composition for this as there are more than 2 variants
  // which could get verbose if using only one styled component/
  if (variant === "outline") Component = OutlineBtn;
  else if (variant === "ghost") Component = GhostBtn;
  else Component = BaseBtn;

  return (
    <Component style={styles} {...htmlAttr}>
      {children}
    </Component>
  );
};

const BaseBtn = styled.button`
  width: 100%;
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
`;

const GhostBtn = styled(OutlineBtn)`
  border-color: transparent;
`;

// one-off component like this uses composition
const GradientBtn = styled(BaseBtn)`
  background: linear-gradient(-45deg, #8a2387, #e94057, #f27121, #f2d621);
  background-size: 800% 800%;
  animation: gradient 3s ease infinite;
  font-weight: bold;
  width: 100%;

  &:focus {
    outline: 2px solid white;
    outline: 1px offset;
  }

  @keyframes gradient {
    0% {
      background-position: 5% 50%;
      box-shadow: 0px 0px 22px 0px #f2d621;
    }

    17% {
      box-shadow: 0px 0px 22px 0px #f27121;
    }

    34% {
      box-shadow: 0px 0px 22px 0px #e94057;
    }

    50% {
      background-position: 95% 50%;
      box-shadow: 0px 0px 22px 0px #8a2387;
    }

    67% {
      box-shadow: 0px 0px 22px 0px #e94057;
    }

    83% {
      box-shadow: 0px 0px 22px 0px #f27121;
    }

    100% {
      background-position: 5% 50%;
      box-shadow: 0px 0px 22px 0px #f2d621;
    }
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NormalBtnsWrapper = styled.div`
  display: flex;
  gap: 25px;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const code = `import styled from "styled-components";

const StyledComponents = () => {
  return (
    <>
      <BtnsWrapper>
        <NormalBtnsWrapper>
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
        </NormalBtnsWrapper>
        <GradientBtn>Gradient</GradientBtn>
      </BtnsWrapper>
    </>
  );
};

export default StyledComponents;

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

// core options are provided via props
const Button = ({ variant, color, children }) => {
  let styles = COLORS[color];
  if (!styles) styles = COLORS["blue"];

  let Component;
  // using composition for this as there are more than 2 variants
  // which could get verbose if using only one styled component
  if (variant === "outline") Component = OutlineBtn;
  else if (variant === "ghost") Component = GhostBtn;
  else Component = BaseBtn;

  return <Component style={styles}>{children}</Component>;
};

const BaseBtn = styled.button\`
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
\`;

const OutlineBtn = styled(BaseBtn)\`
  color: var(--textColor);
  border: 2px solid var(--defaultColor);
  background: none;
  &:hover {
    background-color: var(--hoverColor);
  }
\`;

const GhostBtn = styled(OutlineBtn)\`
  border-color: transparent;
\`;

// one-off component like this uses composition
const GradientBtn = styled(BaseBtn)\`
  background: linear-gradient(-45deg, #8a2387, #e94057, #f27121, #f2d621);
  background-size: 800% 800%;
  animation: gradient 3s ease infinite;
  font-weight: bold;
  width: 100%;

  @keyframes gradient {
    0% {
      background-position: 5% 50%;
      box-shadow: 0px 0px 22px 0px #f2d621;
    }

    17% {
      box-shadow: 0px 0px 22px 0px #f27121;
    }

    34% {
      box-shadow: 0px 0px 22px 0px #e94057;
    }

    50% {
      background-position: 95% 50%;
      box-shadow: 0px 0px 22px 0px #8a2387;
    }

    67% {
      box-shadow: 0px 0px 22px 0px #e94057;
    }

    83% {
      box-shadow: 0px 0px 22px 0px #f27121;
    }

    100% {
      background-position: 5% 50%;
      box-shadow: 0px 0px 22px 0px #f2d621;
    }
  }
\`;

const BtnsWrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 20px;
\`;

const NormalBtnsWrapper = styled.div\`
  display: flex;
  gap: 25px;
\`;
const Flex = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 15px;
\`; 
`;
