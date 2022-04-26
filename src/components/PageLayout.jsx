import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { IconButton, MiniLayout, StyledLink } from "./styles/Styles";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
function PageLayout({ children, title }) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <Header>
        <IconButton to="/">
          <IoArrowBackSharp size="1em" />
        </IconButton>
        <h3>{title}</h3>
      </Header>
      <ContentsWrapper>{children}</ContentsWrapper>
    </motion.div>
  );
}

export default PageLayout;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: flex-start;
  margin-bottom: 20px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
`;
