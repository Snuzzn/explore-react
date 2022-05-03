import Head from "next/head";
import Image from "next/image";
import OverviewItem from "../components/OverviewItem";
import CategoryCont from "../components/CategoryCont";
import Feature from "../components/Feature";
import MuteButton from "../components/MuteButton";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import { toKebabCase } from "../helper/general";
import { postsData } from "../helper/postsData";

function Home() {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <HomeWrapper
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <ContentsWrapper>
        <HeaderBar>
          <Title>Explore React</Title>
          <MuteButton />
        </HeaderBar>
        {Object.keys(postsData).map((category) => (
          <CategoryCont
            key={category}
            borderText={category.charAt(0).toUpperCase() + category.slice(1)}
            id={toKebabCase(category)}
          >
            <FlexContainer>
              {Object.entries(postsData[category]).map((feature) => (
                <Feature
                  key={feature[0]}
                  title={feature[1].title || feature[0]}
                  route={toKebabCase(feature[0])}
                  category={category}
                />
              ))}
            </FlexContainer>
          </CategoryCont>
        ))}
      </ContentsWrapper>

      <TableOfContents>
        <TocTitle smooth>Overview</TocTitle>
        {Object.keys(postsData).map((category) => (
          <OverviewItem
            key={category}
            category={category.charAt(0).toUpperCase() + category.slice(1)}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        ))}
        <TocDivider />
      </TableOfContents>
    </HomeWrapper>
  );
}

export default Home;

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeWrapper = styled(motion.div)`
  display: flex;
  gap: 90px;
  height: 100%;
  align-items: flex-start;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TableOfContents = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 150px;
  width: 200px;
`;

const TocTitle = styled.h1`
  font-size: 1.35rem;
  font-weight: bold;
  cursor: pointer;
  line-height: 0;
`;

const TocDivider = styled.hr`
  width: 100%;
  height: 2px;
  border: none;
  background-color: #323944;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 26pt;
  align-self: flex-start;
  margin-bottom: 0;
  color: white;
`;
