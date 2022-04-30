import React, { useEffect, useRef } from "react";
import DemoCont from "../components/DemoCont";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import switchImg from "../images/switch.svg";

const ManagingBooleanState = () => {
  const ref = useRef();
  const line = useRef(0);

  useEffect(() => {
    let c = ref.current.getContext("2d");
    console.log(c);
    c.beginPath();
    c.moveTo(35, 0);
    c.lineTo(35, 100);
    c.strokeStyle = "#323944";
    c.lineWidth = 4;
    c.stroke();
    line.current = c;
  }, []);

  const handleDrag = (event, info) => {
    console.log(info.point.x, info.point.y);
    line.current.lineTo(35, info.point.y);
    line.current.stroke();
  };

  return (
    <DemoCont>
      <div>
        <div style={{ height: "100px" }}>
          <ChainCanvas ref={ref} width={200} height={200} />
        </div>
        <UnstyledBtn>
          <SwitchChain
            src={switchImg}
            drag="y"
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            onDrag={handleDrag}
          />
        </UnstyledBtn>
      </div>
    </DemoCont>
  );
};

export default ManagingBooleanState;

const SwitchChain = styled(motion.img)`
  height: 100px;
  touch-action: none;
`;

const ChainCanvas = styled.canvas`
  position: absolute;
  z-index: -1;
`;

const UnstyledBtn = styled(motion.button)`
  border: none;
  background: none;
  cursor: pointer;
`;
