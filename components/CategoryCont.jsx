import React from "react";
import styled from "styled-components";
import { BorderText, DemoWrapper } from "./DemoCont";

const CategoryCont = ({ children, borderText, id }) => {
  return (
    <CategoryWrapper id={id}>
      <CategoryText>{borderText}</CategoryText>
      {children}
    </CategoryWrapper>
  );
};

export default CategoryCont;

const CategoryWrapper = styled(DemoWrapper)`
  padding: 50px 30px;
`;

const CategoryText = styled(BorderText)`
  color: #d7d7d7;
  font-size: 18pt;
  font-weight: 600;
`;
