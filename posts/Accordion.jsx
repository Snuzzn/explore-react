import DemoCont from "components/DemoCont";
import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { fadeInOutAnimation, Layout } from "components/styles/Styles";

const Accordion = () => {
  return (
    <>
      <DemoCont>
        <DemoWrapper>
          <LayoutGroup>
            <LayoutGroup id="1">
              <AccordionItem label="Content 1">
                This is hidden content.
              </AccordionItem>
            </LayoutGroup>

            <LayoutGroup id="2">
              <AccordionItem label="Content 2">
                This is hidden content.
              </AccordionItem>
            </LayoutGroup>
          </LayoutGroup>

          {/* <AccordionItem label="Click mee">
            This is hidden content.
          </AccordionItem> */}
        </DemoWrapper>
      </DemoCont>
    </>
  );
};

export default Accordion;

const AccordionItem = ({ label, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AccordionItemWrapper>
      <Header layout onClick={() => setIsVisible(!isVisible)}>
        {label}
      </Header>
      {!isVisible && <Rule layoutId="rule" />}
      {isVisible && (
        <>
          <AccordionContent
            layout
            {...variants}
            transition={{ type: "spring", duration: 0.3 }}
          >
            {children}
          </AccordionContent>
          <Rule layoutId="rule" />
        </>
      )}
    </AccordionItemWrapper>
  );
};

const AccordionItemWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  width: 300px;
  gap: 10px;
  padding: 0 10px;
`;

const Rule = styled(motion.hr)`
  width: 100%;
  color: #313944;
  margin-top: 0;
`;

const Header = styled(motion.div)`
  cursor: pointer;
`;

const variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

const DemoWrapper = styled(motion.div)`
  height: 400px;
`;

const AccordionContent = styled(motion.div)`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;
