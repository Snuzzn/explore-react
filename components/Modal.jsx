import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "styled-components";
import { Button } from "posts/StyledComponents";
import { keyframes } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInOutAnimation, UnstyledBtn } from "./styles/Styles";
import { IoMdClose } from "react-icons/io";
import { animateModalInOut } from "posts/ModalDemo";

const Modal = ({ open, setOpen, trigger, title, content }) => {
  return (
    <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <AnimatePresence>
        {open && (
          <DialogContent>
            {/* <DialogDescription>Make changes here.</DialogDescription> */}
            <Header>
              <DialogTitle>{title}</DialogTitle>
              <DialogClose asChild>
                <UnstyledBtn>
                  <IoMdClose />
                </UnstyledBtn>
              </DialogClose>
            </Header>
            {content}
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default Modal;

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal forceMount>
      <motion.div
        {...fadeInOutAnimation}
        transition={{ type: "spring", duration: 0.5 }}
        id="modal-content"
        asChild
      >
        <StyledOverlay forceMount />
        <StyledContent {...props} forceMount>
          {children}
        </StyledContent>
      </motion.div>
    </DialogPrimitive.Portal>
  );
}

const StyledOverlay = styled(DialogPrimitive.Overlay)`
  background-color: #0909095a;
  position: fixed;
  inset: 0;
`;

const StyledContent = styled(DialogPrimitive.Content)`
  border: none;
  width: 600px;
  height: 300px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  position: absolute;
  background-color: #212426;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  z-index: 2;
  border-radius: 20px;
`;

const StyledTitle = styled(DialogPrimitive.Title)`
  margin: 0;
  font-weight: 500;
  font-size: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

// const StyledDescription = styled(DialogPrimitive.Description)`
//   margin: 10px 0 20px;
//   /* color: mauve.mauve11, */
//   font-size: 1.1rem;
//   line-height: 1.5;
// `;

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
// export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;
