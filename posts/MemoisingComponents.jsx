import Codeblock from "components/Codeblock";
import DemoCont, { BorderText } from "components/DemoCont";
import InfoCard from "components/InfoCard";
import {
  fadeInOutAnimation,
  Hyperlink,
  InlineCode,
  openInNewTab,
} from "components/styles/Styles";
import WarningCard from "components/WarningCard";
import { motion } from "framer-motion";
import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { MiniDemoWrapper } from "./UseMemoDemo/UseMemoDemo";

const MemoisingComponents = () => {
  return (
    <>
      <DemoCont>
        <Wrapper>
          <LightGridDemo isMemoised={false} />
          <LightGridDemo isMemoised={true} />
        </Wrapper>
      </DemoCont>
      <InfoCard>
        <p>
          By default, if a parent rerenders, all of its children will also
          rerender. By memoising each dot light, it will only rerender if its
          props change.
        </p>
        <p>
          Note that we have to wrap the parent&apos;s toggle function using the
          <InlineCode>useCallback</InlineCode> hook. Otherwise, the anonymous
          function will always get a new reference on each render, and will then
          be considered as a changed prop that&apos;s passed to the child.
        </p>
        <p>
          You can learn about this in more detail in
          <Hyperlink
            href="https://alexsidorenko.com/blog/react-list-rerender/"
            {...openInNewTab}
          >
            Alex Sidorenko&apos;s blog post.
          </Hyperlink>
        </p>
      </InfoCard>
      <WarningCard>
        This perfomance optimisation doesn&apos;t always need to be applied.
        Only use it for very long lists or when the children components are
        expensive to rerender.
      </WarningCard>
      <Codeblock codeFiles={codeFiles} />
    </>
  );
};

export default MemoisingComponents;

const LightGridDemo = ({ isMemoised }) => {
  const [lights, setLights] = useState(Array(100).fill(false));

  const toggle = useCallback((ind) => {
    setLights((lights) => {
      const lightsClone = [...lights];
      lightsClone[ind] = !lightsClone[ind];
      return lightsClone;
    });
  }, []);

  const numOn = lights.reduce((acc, light) => (light ? (acc += 1) : acc), 0);

  return (
    <MiniDemoWrapper>
      <BorderText style={{ color: "#676c74" }}>
        {isMemoised ? "with" : "without"} memoisation
      </BorderText>
      {numOn} light{numOn !== 1 && "s"} on
      <Grid>
        {lights.map((isOn, ind) => (
          <>
            {isMemoised ? (
              <MemoizedDotLight
                toggle={toggle}
                key={ind}
                ind={ind}
                isOn={isOn}
              />
            ) : (
              <DotLight toggle={toggle} key={ind} ind={ind} isOn={isOn} />
            )}
          </>
        ))}
      </Grid>
    </MiniDemoWrapper>
  );
};

const DotLight = ({ isOn, ind, toggle }) => {
  console.log("rerender");
  return (
    <Dot key={Math.random() + isOn} isOn={isOn} onClick={() => toggle(ind)} />
  );
};

const MemoizedDotLight = memo(DotLight);

const pulse = keyframes`
  0% {
    background-color: #313944;
    outline: none;
  }
  50% {
    background-color: #ff149134;
  }
`;

const Dot = styled.div`
  background-color: ${(p) => (p.isOn ? "deeppink" : "#313944")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  animation: ${pulse} 750ms ease-out;
  animation-iteration-count: 1;
  transition: background-color 200ms ease-out;
`;

const Grid = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(10, 1fr);
`;

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const codeFiles = [
  {
    name: "MemoisingComponentsDemo",
    lang: "jsx",
    code: `const MemoisingComponents = () => {
  return (
    <Wrapper>
      <LightGridDemo isMemoised={false} />
      <LightGridDemo isMemoised={true} />
    </Wrapper>
  );
};
`,
  },
  {
    name: "LightGrid",
    lang: "jsx",
    code: `const LightGrid = ({ isMemoised }) => {
  const [lights, setLights] = useState(Array(100).fill(false));

  const toggle = useCallback((ind) => {
    setLights((lights) => {
      const lightsClone = [...lights];
      lightsClone[ind] = !lightsClone[ind];
      return lightsClone;
    });
  }, []);

  const numOn = lights.reduce((acc, light) => (light ? (acc += 1) : acc), 0);

  return (
    <MiniDemoWrapper>
      {numOn} lights on
      <Grid>
        {lights.map((isOn, ind) => (
          <>
            {isMemoised ? (
              <MemoisedDotLight
                toggle={toggle}
                key={ind}
                ind={ind}
                isOn={isOn}
              />
            ) : (
              <DotLight toggle={toggle} key={ind} ind={ind} isOn={isOn} />
            )}
          </>
        ))}
      </Grid>
    </MiniDemoWrapper>
  );
};`,
  },
  {
    name: "DotLight",
    lang: "jsx",
    code: `const DotLight = ({ isOn, ind, toggle }) => {
  console.log("rerender");
  return (
    <Dot isOn={isOn} onClick={() => toggle(ind)} />
  );
};

const MemoisedDotLight = memo(DotLight);
  `,
  },
];
