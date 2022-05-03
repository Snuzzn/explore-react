import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Codeblock from "../components/Codeblock";
import Console from "../components/Console";
import DemoCont from "../components/DemoCont";
import { fadeInOutAnimation, Hint } from "../components/styles/Styles";
import useLogs from "../hooks/useLogs";

const HandlingEvents = () => {
  const circleRef = useRef();

  const [isHintOn, setIsHintOn] = useState(true);

  const handleDrag = () => {
    circleRef.current.style.width = "150px";
    circleRef.current.style.height = "150px";
    setIsHintOn(false);
  };

  const handleDragEnd = () => {
    circleRef.current.style.width = "100px";
    circleRef.current.style.height = "100px";
    updateLogs("Dragging finished!");
    setIsHintOn(true);
  };

  const handleClick = () => {
    updateLogs("Clicked!");
    const currBgColor = circleRef.current.style.backgroundColor;
    if (currBgColor === "rgb(87, 115, 255)" || currBgColor === "")
      circleRef.current.style.backgroundColor = "#FF1493";
    else circleRef.current.style.backgroundColor = "#5773FF";
  };

  const { logs, updateLogs } = useLogs();

  return (
    <>
      <DemoCont>
        <DraggingCont>
          <Circle
            onClick={handleClick}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            ref={circleRef}
            drag
            // dragConstraints={{ left: 100, right: 100, top: 100, bottom: 100 }}
            dragSnapToOrigin={true}
            initial={{ y: 0 }}
            animate={{ y: -30 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
          />
        </DraggingCont>
        <AnimatePresence>
          {isHintOn && (
            <Hint {...fadeInOutAnimation} style={{ top: "50px" }}>
              Drag me around!
            </Hint>
          )}
        </AnimatePresence>
      </DemoCont>
      <Console logs={logs} />
      <Codeblock codeFiles={codeSnippets} />
    </>
  );
};

export default HandlingEvents;

const DraggingCont = styled.div`
  width: 300px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const bounce = keyframes`
  0% {
    margin-bottom: 0px;
  }
  50% {
    margin-bottom: 20px;
  }
  100% {
    margin-bottom: 0px;
  }
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #5773ff;
  transition: all 300ms ease-out;
  cursor: pointer;
  z-index: 2;
  /* animation: ${bounce} 1s ease-in-out infinite; */
`;

const codeSnippets = [
  {
    name: "DraggableCircle.jsx",
    lang: "jsx",
    code: `const HandlingEvents = () => {
  
  const handleClick = () => {
    console.log("Clicked!")
  };

  const handleDragEnd = () => {
    console.log("Dragging finished!");
  };


  return (
    <DemoContainer>
      <Hint>Drag me around!</Hint>
      <Circle
        onClick={handleClick}
        onDragEnd={handleDragEnd}
      />
    </DemoContainer>
  );
};

export default HandlingEvents;
    `,
  },
];
