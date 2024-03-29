import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
import { ImSpinner2 } from "react-icons/im";
import { HiStar } from "react-icons/hi";
import { motion } from "framer-motion";

export const deviceSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1800px",
};

export const device = {
  mobileS: `(min-width: ${deviceSize.mobileS})`,
  mobileM: `(min-width: ${deviceSize.mobileM})`,
  mobileL: `(min-width: ${deviceSize.mobileL})`,
  tablet: `(min-width: ${deviceSize.tablet})`,
  laptop: `(min-width: ${deviceSize.laptop})`,
  laptopL: `(min-width: ${deviceSize.laptopL})`,
  desktop: `(min-width: ${deviceSize.desktop})`,
  desktopL: `(min-width: ${deviceSize.desktop})`,
};

export const Layout = styled.div`
  display: flex;
  gap: 25px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const StyledLink = styled(Link)`
  color: #bdbdbd;
  text-decoration: none;
`;

const baseIconBtn = css`
  border: none;
  background-color: #2b2a33;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #373641;
    color: white;
  }
  &:focus {
    outline-offset: 2px;
    outline: 2px solid #393842;
  }
`;

export const IconBtn = styled.a`
  ${baseIconBtn}
  padding: 10px;
`;

export const IconButton = styled.button`
  border: none;
  padding: 10px;
  ${baseIconBtn}
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 1.4rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  background-color: #2c2e33;
  border-radius: 12px;
  color: white;
  font-size: 16pt;
  box-sizing: border-box;
  /* border: 1px solid #444e5e; */
  border: 2px solid transparent;
  ::placeholder {
    color: #7d899c;
  }
  &:focus {
    border: 2px solid #3e55cb;
  }
`;

export const MiniLayout = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  min-width: 450px;
`;

export const TextCont = styled.div`
  width: 700px;
  font-size: 14pt;
`;

export const List = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const ListNumber = styled.span`
  color: #5773ff;
  font-weight: bold;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const UnstyledBtn = styled(motion.button)`
  border: none;
  text-decoration: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }  
  100% {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled(ImSpinner2)`
  animation: ${spin} 1.5s linear infinite;
`;

export const SearchWrapper = styled.div`
  min-height: 370px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 10px;
`;

export const ResultsCont = styled(motion.div)`
  background-color: #2a2e33;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  max-height: 300px;
  overflow: auto;
  transition: all 200ms ease-out;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3e55cb;
    border-radius: 5px;
  }
`;

export const Result = styled(motion.a)`
  max-width: 580px;
  text-decoration: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: block;
  &:hover {
    background-color: #202327;
  }
  &:focus {
    outline: 2px solid #5773ff;
  }
`;

export const fadeInOutAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

export const InlineCode = styled.code`
  background-color: #1d2024;
  padding: 0px 7px;
  margin: 0 3px;
  border-radius: 4px;
  outline: 1px solid #323944;
  font-family: "Fira Mono", monospace;
  font-size: 1.1rem;
`;

export const Hyperlink = styled.a`
  /* background-color: #1d2024; */
  padding: 0px 7px;
  margin: 0 1px;
  color: #5773ff;
  transition: all 200ms ease-out;
  text-decoration: none;
  text-underline-offset: 3px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const openInNewTab = { target: "_blank", rel: "noopener noreferrer" };

export const Star = styled(HiStar)`
  color: gold;
  background: none;
  width: 3rem;
  height: 3rem;
  filter: drop-shadow(0px 0px 4px gold);
`;

export const Hint = styled(motion.div)`
  font-family: Indie Flower;
  font-size: 2rem;
  position: absolute;
`;
