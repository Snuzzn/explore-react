import React from "react";
import styled from "styled-components";
import { BorderText, Wrapper } from "./DemoCont";

const CategoryCont = ({ children, borderText }) => {
  return (
    <CategoryWrapper>
      <BorderText>{borderText}</BorderText>
      {children}
    </CategoryWrapper>
  );
};

export default CategoryCont;

const CategoryWrapper = styled(Wrapper)`
  width: 100%;
  padding: 40px 30px;
  margin-bottom: 20px;
`;
