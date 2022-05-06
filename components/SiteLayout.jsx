import React from "react";
import styled from "styled-components";

const SiteLayout = ({ children }) => {
  return (
    <PageContainer>
      <Layout>{children}</Layout>
      <Footer>
        <FooterContent>
          Note: Code snippets do not include styling details to keep things
          concise.
        </FooterContent>
        <FooterContent>Copyright © 2022 Explore React</FooterContent>
      </Footer>
    </PageContainer>
  );
};

export default SiteLayout;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Layout = styled.div`
  display: flex;
  gap: 25px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  flex-grow: 1;
  /* height: 100%; */
`;

const Footer = styled.div`
  margin-top: 70px;
  border-top: 1px solid #313944;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 60px 30px;
  font-size: 1.1rem;
  color: #6b7380;
  /* flex-direction: column; */
  justify-content: space-between;
`;

const FooterContent = styled.p`
  margin: 4px;
  /* max-width: 450px; */
`;
