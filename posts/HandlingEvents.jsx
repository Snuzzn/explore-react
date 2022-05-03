import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import Codeblock from "../components/Codeblock";
import Console from "../components/Console";
import DemoCont from "../components/DemoCont";
import useLogs from "../hooks/useLogs";

const HandlingEvents = () => {
  const circleRef = useRef();

  const handleDrag = () => {
    circleRef.current.style.width = "175px";
    circleRef.current.style.height = "175px";
  };

  const handleDragEnd = () => {
    circleRef.current.style.width = "100px";
    circleRef.current.style.height = "100px";
    updateLogs("Dragging finished!");
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
          />
        </DraggingCont>
      </DemoCont>
      <Console logs={logs} />
      <Codeblock codeFiles={codeSnippets} />
    </>
  );
};

export default HandlingEvents;

const DraggingCont = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #5773ff;
  transition: all 300ms ease-out;
  cursor: pointer;
  z-index: 2;
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
