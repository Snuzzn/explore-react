import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import draculaTheme from "../helper/draculaTheme";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "./styles/Styles";

function Codeblock({ codeFiles, naturalHeight }) {
  const [curr, setCurr] = useState(0);
  // let currCode = codeList;
  // if (typeof code === "object") currCode = code[0]?.code;
  let isNaturalHeight = true;
  if (codeFiles.length > 1) isNaturalHeight = false;
  if (naturalHeight !== null) isNaturalHeight = naturalHeight;

  return (
    <Wrapper>
      <Header>
        {codeFiles.map((file, ind) => (
          <div style={{ position: "relative" }} key={file.name}>
            <HeaderItem isSelected={curr === ind} onClick={() => setCurr(ind)}>
              {file.name}.{codeFiles[curr].lang}
            </HeaderItem>
            {curr === ind && <CurrTabLine layoutId="currFile" />}
          </div>
        ))}
      </Header>
      {/* <motion.div layout> */}
      <CodeWrapper
        language={codeFiles[curr].lang}
        style={{ ...draculaTheme, height: "600px !important" }}
        isnaturalheight={isNaturalHeight}
      >
        {codeFiles[curr].code}
      </CodeWrapper>
      {/* </motion.div> */}

      {/* <Language lang={lang}>{lang}</Language> */}
    </Wrapper>
  );
}

export default Codeblock;

const Language = styled.div`
  position: absolute;
  top: 8px;
  right: 0px;
  font-weight: 600;
  color: #282a36;
  padding: 8px;
  background-color: ${(props) => (props.lang === "JS" ? "#d9e181" : "#415ce1")};
  border-radius: 0 0 0 10px;
`;

const Wrapper = styled.div`
  width: 700px;
  font-size: 12pt;
  position: relative;
  /* border: 1px solid #3d4248; */
  border-radius: 11px;
  margin: 10px 0;
`;

const CodeWrapper = styled(SyntaxHighlighter)`
  &::-webkit-scrollbar {
    height: 0px;
  }
  border-radius: 0 0 10px 10px !important;
  margin-bottom: 0 !important;
  margin-top: 0 !important;

  @media ${device.laptop} {
    height: ${(p) => !p.isnaturalheight && "500px"};
  }

  @media ${device.laptopL} {
    height: ${(p) => !p.isnaturalheight && "600px"};
  }

  @media ${device.desktop} {
    height: ${(p) => !p.isnaturalheight && "700px"};
  }

  // Scrollbar

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #474551;
    border-radius: 5px;
  }

  scrollbar-color: #474551 transparent;
  scrollbar-width: thin;
`;

const Header = styled.div`
  display: flex;
  background-color: #282a36;
  border-bottom: 1px solid #3d4248;
  /* border-radiuss: 10px 10px 0 0; */
`;

const HeaderItem = styled.div`
  color: ${(p) => (p.isSelected ? "#6180fa" : "#707e8e")};
  font-weight: 500;
  background-color: ${(p) => (p.isSelected ? "#1C1E27" : "none")};
  padding: 10px;
  /* border-bottom: ${(p) => (p.isSelected ? "2px solid #6180fa" : "none")}; */
  cursor: pointer;
  position: relative;
`;

const CurrTabLine = styled(motion.hr)`
  position: absolute;
  bottom: -10px;
  width: 100%;
  border: 1px solid #6180fa;
`;
