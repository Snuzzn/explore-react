import React from "react";
import styled from "styled-components";

function DemoCont({ children }) {
  return (
    <Wrapper>
      <DemoTxt>DEMO</DemoTxt>
      {children}
    </Wrapper>
  );
}

export default DemoCont;

const Wrapper = styled.div`
  min-width: 600px;
  box-sizing: border-box;
  border: 1px solid #313944;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 20px;
  position: relative;
`;

const DemoTxt = styled.div`
  position: absolute;
  top: -14px;
  left: 35px;
  background-color: #181819;
  padding: 0 8px;
  color: #313944;
  font-size: 15pt;
  font-weight: 600;
`;
