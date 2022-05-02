import React from "react";
import styled from "styled-components";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const ProgressStats = ({ currRaised, target }) => {
  const currProgress = (currRaised / target) * 100;

  return (
    <>
      <ProgressDetails>
        <div>${currRaised} raised</div>
        <div>{((currRaised / target) * 100).toFixed(1)}%</div>
      </ProgressDetails>
      <ProgressWrapper>
        <Indicator
          style={{
            transform: `translateX(-${
              100 - (currProgress > 100 ? 100 : currProgress)
            }%)`,
          }}
          title="progressIndicator"
        />
      </ProgressWrapper>
    </>
  );
};

export default ProgressStats;

const ProgressWrapper = styled(ProgressPrimitive.Root)`
  position: relative;
  overflow: hidden;
  background: #23222a;
  border-radius: 20px;
  width: 100%;
  height: 12px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Indicator = styled(ProgressPrimitive.Indicator)`
  background-color: #5773ff;
  width: 100%;
  height: 100%;
  transition: transform 300ms ease-out;
  border-radius: 20px;
`;

const ProgressDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  margin: 0 auto;
  margin-bottom: 10px;
  font-weight: 500;
`;
