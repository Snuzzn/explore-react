import React, { useEffect, useRef, useState } from "react";
import DemoCont from "../components/DemoCont";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import useUiSound from "../hooks/useUiSound";
import InfoCard from "../components/InfoCard";
import Codeblock from "../components/Codeblock";
import { confirmationSfx } from "../helper/sounds";

const ManagingIntervalWithUseRef = () => {
  const [progress, setProgress] = React.useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const { play } = useUiSound(confirmationSfx, { volume: 0.3 });

  const timerRef = useRef();

  useEffect(() => {
    if (isMouseDown) {
      // cumulatively increase progress every 100ms
      let i = 0;
      timerRef.current = setInterval(() => {
        i += 3;
        setProgress((progress) => {
          if (progress + i >= 100) return 100;
          else return progress + i;
        });
      }, 100);
    } else {
      // keep the bar full if progress is at 100
      setProgress((progress) => (progress >= 100 ? 100 : 0));
      // clear timer if progress didn't hit 100
      clearInterval(timerRef.current);
    }

    // clean-up timer on unmount
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isMouseDown]);

  // reset the button
  useEffect(() => {
    if (isMouseDown && progress === 100) setProgress(0);
  }, [isMouseDown]);

  useEffect(() => {
    if (progress === 100) play();
  }, [progress, play]);

  return (
    <>
      <DemoCont>
        <StyledProgress
          onMouseDown={() => setIsMouseDown(true)}
          onMouseUp={() => setIsMouseDown(false)}
        >
          <StyledIndicator
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
          <ProgressText>
            {progress === 100 ? (
              <motion.div {...animation}>
                <AiFillCheckCircle size="1.5em" color="white" />
              </motion.div>
            ) : (
              <>Hold to Confirm</>
            )}
          </ProgressText>
        </StyledProgress>
      </DemoCont>
      <InfoCard>
        setInterval (and setTimeout) is a side effect, so it shouldn&apos;t be tied
        to a component&apos;s render method. Instead, it should be in a
        useEffect. If we want to clear it with an event handler, we can access
        the interval with useRef.
      </InfoCard>
      <Codeblock
        codeFiles={[{ code: code, name: "HoldToConfirm", lang: "jsx" }]}
      />
    </>
  );
};

export default ManagingIntervalWithUseRef;

const StyledProgress = styled(ProgressPrimitive.Root)`
  position: relative;
  overflow: hidden;
  background: #23222a;
  border-radius: 20px;
  width: 260px;
  height: 60px;
  cursor: pointer;
`;

const StyledIndicator = styled(ProgressPrimitive.Indicator)`
  background-color: #5773ff;
  width: 100%;
  height: 100%;
  /* transition: transform 300ms cubic-bezier(0.65, 0, 0.35, 1); */
  transition: transform 300ms ease-out;
`;

const ProgressText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const animation = {
  initial: {
    opacity: 0,
    rotate: -270,
    scale: 0.4,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
  },
};

const code = `const ManagingIntervalWithUseRef = () => {
  const [progress, setProgress] = React.useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const timerRef = useRef();

  useEffect(() => {
    if (isMouseDown) {
      // cumulatively increase progress every 100ms
      let i = 0;
      timerRef.current = setInterval(() => {
        i += 3;
        setProgress((progress) => {
          if (progress + i >= 100) return 100;
          else return progress + i;
        });
      }, 100);
    } else {
      // keep the bar full if progress is at 100
      setProgress((progress) => (progress >= 100 ? 100 : 0));
      // clear timer if progress didn't hit 100
      clearInterval(timerRef.current);
    }

    // clean-up timer on unmount
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isMouseDown]);

  // reset the button
  useEffect(() => {
    if (isMouseDown && progress === 100) setProgress(0);
  }, [isMouseDown]);

  return (
    <>
      <Progress
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
      >
        <Indicator
          style={{ transform: \`translateX(-\${100 - progress}%)\` }}
        />
        <ProgressText>
          {progress === 100 ? (
            <CheckIcon/>
          ) : (
            <>Hold to Confirm</>
          )}
        </ProgressText>
      </Progress>
    </>
  );
}; `;
