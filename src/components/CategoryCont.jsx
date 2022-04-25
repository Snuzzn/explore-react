import React from "react";
import styled from "styled-components";
import { BorderText, Wrapper } from "./DemoCont";

const CategoryCont = ({ children, borderText }) => {
  return (
    <CategoryWrapper>
      <CategoryText>{borderText}</CategoryText>
      {children}
    </CategoryWrapper>
  );
};

export default CategoryCont;

const CategoryWrapper = styled(Wrapper)`
  width: 100%;
  padding: 50px 30px;
  margin-bottom: 20px;
`;

const CategoryText = styled(BorderText)`
  color: #666e7a;
  font-size: 18pt;
  font-weight: 600;
`;
