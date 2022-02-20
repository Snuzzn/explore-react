import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

function Codeblock({ code, lang }) {
  return (
    <div
      style={{
        width: "700px",
        fontSize: "12pt",
        position: "relative",
      }}
    >
      <SyntaxHighlighter
        language={lang === "JS" ? "jsx" : "tsx"}
        style={{ ...dracula, height: "600px !important" }}
      >
        {code}
      </SyntaxHighlighter>
      <Language lang={lang}>{lang}</Language>
    </div>
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
