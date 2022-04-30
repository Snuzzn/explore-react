import React, { useEffect, useRef } from "react";
import DemoCont from "../components/DemoCont";
import {
  motion,
  AnimatePresence,
  useDragControls,
} from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import switchImg from "../images/switch.svg";
import useUiSound from "../hooks/useUiSound";
import switchOnSfx from "../sounds/switchOn.ogg";
import switchOffSfx from "../sounds/switchOff.ogg";

const ManagingBooleanState = () => {
  const [isLampOn, setIsLampOn] = React.useState(false);

  const { play: playOn } = useUiSound(switchOnSfx);
  const { play: playOff } = useUiSound(switchOffSfx);

  const handleDrag = (event, info) => {
    console.log(info.point.y);
    if (info.point.y >= 830) {
      if (!isLampOn) playOn();
      else playOff();
      setIsLampOn(!isLampOn);
      dragControls.componentControls.forEach((entry) => {
        entry.stop(event, info);
      });
    }
  };

  const dragControls = useDragControls();

  return (
    <DemoCont>
      <LampSwitchWrapper>
        <div style={{ position: "relative" }}>
          <Lamp isLampOn={isLampOn} />
          <GlowingLamp isLampOn={isLampOn} />
        </div>
        <ChainWrapper style={{ height: "100px", width: "100px" }}>
          <Chain />
        </ChainWrapper>
        <UnstyledBtn>
          <SwitchChain
            src={switchImg}
            drag="y"
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            onDrag={handleDrag}
            dragControls={dragControls}
            dragElastic={0.2}
          />
        </UnstyledBtn>
      </LampSwitchWrapper>
    </DemoCont>
  );
};

export default ManagingBooleanState;

const Lamp = styled.div`
  height: 300px;
  width: 300px;
  transition: all 300ms ease-out;
  background-color: ${(p) => (p.isLampOn ? "transparent" : "#363540")};
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 30px;
  background-image: ${(p) =>
    p.isLampOn ? "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)" : "none"};
`;

const GlowingLamp = styled(Lamp)`
  position: absolute;
  filter: blur(40px);
  z-index: -1;
  top: 0;
  left: 0;
`;

const SwitchChain = styled(motion.img)`
  height: 100px;
  touch-action: none;
`;

const UnstyledBtn = styled(motion.button)`
  border: none;
  background: none;
  cursor: pointer;
`;

const Chain = styled.div`
  top: 0;
  height: 200px;
  width: 5px;
  background-color: #323944;
  position: absolute;
  z-index: -1;
`;

const LampSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const ChainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
