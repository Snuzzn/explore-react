import { fadeInOutAnimation } from "components/styles/Styles";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "posts/StyledComponents";
import React from "react";
import styled from "styled-components";

const Custom404 = () => {
  return (
    <ErrorPageWrapper {...fadeInOutAnimation}>
      <div>404: This page could not be found</div>
      <Link href="/">
        <Button>Take me home!</Button>
      </Link>
    </ErrorPageWrapper>
  );
};

export default Custom404;

export const ErrorPageWrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;
