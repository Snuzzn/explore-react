import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import {
  IconBtnLink,
  IconButton,
  MiniLayout,
  StyledLink,
} from "./styles/Styles";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { ThemeContext } from "../ThemeProvider";
import useSound from "use-sound";
import bubbleClick from "../sounds/bubbleClick.mp3";

function PageLayout({ children, title }) {
  const { isSoundEnabled } = useContext(ThemeContext);
  const [play, { stop }] = useSound(bubbleClick, {
    soundEnabled: isSoundEnabled,
  });

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <Header>
        <IconBtnLink
          to="/"
          //  onClick={() => play()}
        >
          <IoArrowBackSharp size="1em" />
        </IconBtnLink>
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
