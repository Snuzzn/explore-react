import React from "react";
import styled from "styled-components";

const Custom404 = () => {
  return <ErrorPageWrapper>404: This page could not be found</ErrorPageWrapper>;
};

export default Custom404;

export const ErrorPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
