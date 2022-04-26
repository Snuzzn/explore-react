import React from "react";
import styled from "styled-components";
var Scroll = require("react-scroll");

const Console = ({ logs }) => {
  React.useEffect(() => {
    Scroll.animateScroll.scrollToBottom({
      containerId: "console",
      smooth: true,
      duration: 250,
    });
  }, [logs]);

  return (
    <Wrapper>
      <Header>Console</Header>
      <ConsoleContent style={{ padding: "5px 15px 0px 15px" }} id="console">
        {logs.map((log) => (
          <div>{log}</div>
        ))}
      </ConsoleContent>
    </Wrapper>
  );
};

export default Console;

const Wrapper = styled.div`
  height: 200px;
  max-width: 700px;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #0d0f14;
  position: relative;
  font-size: 14pt;
  margin-top: 10px;
`;

const ConsoleContent = styled.div`
  height: 140px;
  overflow: auto;
  scrollbar-color: #3e55cb #0d0f14;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #0d0f14;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3e55cb;
    border-radius: 5px;
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #1c1e27;
  width: 100%;
  display: flex;
  padding: 10px;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 12pt;
  border-radius: 10px 10px 0 0;
`;
