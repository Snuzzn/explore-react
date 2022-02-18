import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

function Codeblock({ code }) {
  return (
    <div
      style={{
        width: "600px",
        fontSize: "12pt",
        position: "relative",
      }}
    >
      <SyntaxHighlighter language="jsx" style={dracula}>
        {code}
      </SyntaxHighlighter>
      <Language>JS</Language>
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
  background-color: #d9e181;
  border-radius: 0 0 0 10px;
`;
