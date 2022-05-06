import DemoCont from "components/DemoCont";
import {
  fadeInOutAnimation,
  Hyperlink,
  openInNewTab,
} from "components/styles/Styles";
import WarningCard from "components/WarningCard";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./StyledComponents";
import { AnimatePresence, motion } from "framer-motion";
import Codeblock from "components/Codeblock";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DemoCont>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <div>Hello World!</div>
        </Modal>
      </DemoCont>
      <WarningCard>
        <p>
          Although it&apos;s fairly simply to build a modal like this using
          React, we should avoid doing it manually in projects as there are many
          accessibility concerns e.g. trapping focus, keyboard navigation etc.
        </p>

        <p>
          It is easier to use a UI component library like
          <Hyperlink href="https://www.radix-ui.com/" {...openInNewTab}>
            Radix
          </Hyperlink>
          or
          <Hyperlink href="https://reach.tech/" {...openInNewTab}>
            Reach UI
          </Hyperlink>
          that provide primitives like this which are built with acccessbility
          in mind.
        </p>
      </WarningCard>
      <Codeblock codeFiles={codeFiles} />
    </>
  );
};

export default ModalDemo;

const Modal = ({ children, isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <ModalWrapper {...animateModalInOut}>{children}</ModalWrapper>
          <ModalOverlay
            onClick={() => setIsOpen(false)}
            {...fadeInOutAnimation}
            animate={{ opacity: 0.7 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

const animateModalInOut = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
};

const ModalWrapper = styled(motion.dialog)`
  border: none;
  width: 600px;
  height: 600px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: #212426;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  z-index: 2;
  border-radius: 20px;
`;

const ModalOverlay = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: #090909;
  top: 0;
  position: fixed;
  z-index: 1;
`;

const codeFiles = [
  {
    name: "ModalDemo",
    lang: "jsx",
    code: `const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>Hello World!</div>
      </Modal>
    </>
  );
};

export default ModalDemo;
`,
  },
  {
    name: "Modal",
    lang: "jsx",
    code: `import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ children, isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <ModalWrapper {...animateModalInOut}>{children}</ModalWrapper>
          <ModalOverlay
            onClick={() => setIsOpen(false)}
            {...fadeInOut}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

const animateModalInOut = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
};

const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 0.7 },
  exit: { opacity: 0 }
}

const ModalWrapper = styled(motion.dialog)\`
  border: none;
  width: 600px;
  height: 600px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: #212426;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  z-index: 2;
  border-radius: 20px;
\`;

const ModalOverlay = styled(motion.div)\`
  width: 100%;
  height: 100vh;
  background-color: #090909;
  top: 0;
  position: fixed;
  z-index: 1;
\`;
    `,
  },
];
