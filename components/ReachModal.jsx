import React from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeInOutAnimation } from "./styles/Styles";
import { animateModalInOut } from "posts/ModalDemo";

const ReachModal = ({ showDialog, setShowDialog }) => {
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <Wrapper {...animateModalInOut}>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <Content>
          <button className="close-button" onClick={close}>
            Close
          </button>
          <p>Hello there. I am a dialog</p>
        </Content>
      </Dialog>
    </Wrapper>
  );
};

export default ReachModal;

const Wrapper = styled(motion.div)`
  display: flex;
`;

const Content = styled(motion.div)`
  background-color: #212426;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  width: 600px;
  height: 600px;
`;
