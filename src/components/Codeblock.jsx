import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import draculaTheme from "../helper/draculaTheme";
import styled from "styled-components";

function Codeblock({ code, lang }) {
  return (
    <Wrapper>
      <CodeWrapper
        language={lang === "JS" ? "jsx" : "tsx"}
        style={{ ...draculaTheme, height: "600px !important" }}
      >
        {code}
      </CodeWrapper>
      <Language lang={lang}>{lang}</Language>
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
`;

const CodeWrapper = styled(SyntaxHighlighter)`
  &::-webkit-scrollbar {
    height: 0px;
  }
`;
