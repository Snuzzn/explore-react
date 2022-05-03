import React from "react";
import styled, { keyframes } from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import { fadeInOutAnimation, Spinner } from "../components/styles/Styles";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

function ConditionalRendering() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderLoadingStatus = () => {
    if (isLoading) {
      return <p>Loading</p>;
    } else {
      return <p>Ready</p>;
    }
  };

  return (
    <>
      <DemoCont>
        {/* {renderLoadingStatus()} */}
        <AnimatePresence exitBeforeEnter>
          {isLoading ? (
            <LoadingCont {...fadeInOutAnimation} key="loading">
              <Spinner />
              <p>Loading</p>
            </LoadingCont>
          ) : (
            <DoneContainer {...fadeInOutAnimation} key="done">
              <AiOutlineCheckCircle />
              <p>Done</p>
            </DoneContainer>
          )}
        </AnimatePresence>
      </DemoCont>

      <Codeblock
        codeFiles={[{ code: code, name: "ConditionalRendering", lang: "jsx" }]}
      />
    </>
  );
}

export default ConditionalRendering;

const LoadingCont = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DoneContainer = styled(motion.div)`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const code = `function ConditionalRenderingDemo() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <Spinner />
          <p>Loading</p>
        </div>
      ) : (
        <p>Done</p>
      )}
    </>
  );
}  

const spin = keyframes\`
  0% {
    transform: rotate(0deg);
  }  
  100% {
    transform: rotate(360deg)
  }
\`;

const Spinner = styled(ImSpinner2)\`
  animation: \${spin} 1.5s linear infinite;
\`;`;
