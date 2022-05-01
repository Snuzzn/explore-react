import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { IconBtnLink } from "./styles/Styles";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import bubbleClick from "../sounds/bubbleClick.mp3";
import useUiSound from "../hooks/useUiSound";
import MuteButton from "./MuteButton";
import MusicPlayer from "../pages/MusicPlayer";

function PageLayout({ children, title }) {
  const { play } = useUiSound(bubbleClick);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <Header>
        <Breadcrumbs>
          <IconBtnLink
            to="/"
            //  onClick={() => play()}
          >
            <IoArrowBackSharp size="1em" />
          </IconBtnLink>
          <h3>{title}</h3>
        </Breadcrumbs>
        {/* {children === <MusicPlayer /> && <MuteButton />} */}
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
  margin-bottom: 20px;
  justify-content: space-between;
`;

const ContentsWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
`;

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: flex-start;
`;
