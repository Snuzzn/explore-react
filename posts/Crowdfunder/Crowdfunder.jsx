import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Codeblock from "../../components/Codeblock";
import DemoCont from "../../components/DemoCont";
import { codeSnippets, testingCodeSnippets } from "./codeSnippets";
import Post from "./Post";
import { LayoutGroup } from "framer-motion";
import InfoCard from "../../components/InfoCard";
import WarningCard from "../../components/WarningCard";

const Crowdfunder = () => {
  return (
    <>
      <DemoCont>
        <Post
          title="Genie's Lamp"
          content="An oil lamp that holds a genie. Once released, you will be granted 3 wishes!"
          raisedSoFar={400}
          target={1000}
          img={"/images/genieLamp.jpg"}
        />
      </DemoCont>

      <LayoutGroup id="codeblock1">
        <Codeblock codeFiles={codeSnippets} />
      </LayoutGroup>
      <InfoCard>
        Writing unit and integrations tests are important to catch bugs and
        increase confidence in the application.
      </InfoCard>
      <WarningCard>
        With React Testing Library, avoid including implementation details of
        the component e.g. state. Instead, test for changes in the UI.
      </WarningCard>
      <LayoutGroup id="codeblock2">
        <Codeblock codeFiles={testingCodeSnippets} />
      </LayoutGroup>
    </>
  );
};
export default Crowdfunder;

const Backers = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.3rem;
`;
