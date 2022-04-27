import React from "react";
import prism from "../../images/darkBox.svg";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function Prisms({ count }) {
  return (
    <Cont>
      {[...Array(count)].map((val, ind) => (
        <motion.img
          src={prism}
          width="200px"
          alt="prism"
          style={{ marginBottom: "-10px", zIndex: count - ind }}
          key={ind}
          layout
        />
      ))}
    </Cont>
  );
}

export default Prisms;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
