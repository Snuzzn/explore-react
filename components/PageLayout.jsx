import React, { useContext } from "react";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import { IconBtn } from "./styles/Styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import { bubbleClick } from "../helper/sounds";
import useUiSound from "../hooks/useUiSound";

function PageLayout({ children, title }) {
  const { play } = useUiSound(bubbleClick);

  return (
    <>
      <Header>
        <Breadcrumbs>
          <Link href="/" passHref>
            <IconBtn>
              <IoArrowBackSharp size="1em" />
            </IconBtn>
          </Link>

          <h3>{title}</h3>
        </Breadcrumbs>
        {/* {children === <MusicPlayer /> && <MuteButton />} */}
      </Header>
      <ContentsWrapper>{children}</ContentsWrapper>
    </>
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
