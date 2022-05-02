import React from "react";
import styled, { keyframes } from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import { Spinner } from "../components/styles/Styles";

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
        {isLoading ? (
          <LoadingCont>
            <Spinner />
            <p>Loading</p>
          </LoadingCont>
        ) : (
          <p>Done</p>
        )}
      </DemoCont>

      <Codeblock codeFiles={[{ code: code, name: "useEffectDemo" }]} />
    </>
  );
}

export default ConditionalRendering;

const LoadingCont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
