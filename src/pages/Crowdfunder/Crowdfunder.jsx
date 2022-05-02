import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Codeblock from "../../components/Codeblock";
import DemoCont from "../../components/DemoCont";
import LampImg from "../../images/genieLamp.jpg";
import { codeSnippets } from "./codeSnippets";
import Post from "./Post";

const Crowdfunder = () => {
  return (
    <>
      <DemoCont>
        <Post
          title="Genie's Lamp"
          content="An oil lamp that holds a genie. Once released, you will be granted 3 wishes!"
          raisedSoFar={400}
          target={1000}
          img={LampImg}
        />
      </DemoCont>
      <Codeblock codeFiles={codeSnippets} />
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
