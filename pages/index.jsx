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
import SearchBar from "components/SearchBar.tsx";
import ToggleableSearchBar from "components/ToggleableSearchBar";
import useInput from "hooks/useInput";

function Home({ ssr }) {
  const [activeCategory, setActiveCategory] = useState("");

  const [posts, setPosts] = useState(postsData);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <HomeWrapper
      initial={!ssr && { opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <ContentsWrapper layout="position">
        <HeaderBar>
          <Title>Explore React</Title>
          {/* <SearchBar /> */}
          <Flex>
            <ToggleableSearchBar
              setPosts={setPosts}
              toggleSearch={toggleSearch}
              setToggleSearch={setToggleSearch}
            />
            <MuteButton />
          </Flex>
        </HeaderBar>
        {Object.keys(posts).map((category) => {
          if (Object.entries(posts[category]).length === 0) return <></>;
          return (
            <CategoryCont
              key={category}
              borderText={category.charAt(0).toUpperCase() + category.slice(1)}
              id={toKebabCase(category)}
            >
              <FlexContainer>
                {Object.entries(posts[category]).map((feature) => (
                  <Feature
                    key={feature[0]}
                    title={feature[1].title || feature[0]}
                    route={feature[0]}
                    category={category}
                  />
                ))}
              </FlexContainer>
            </CategoryCont>
          );
        })}
      </ContentsWrapper>
      {!toggleSearch && (
        <TableOfContents layout>
          <TocTitle smooth>Overview</TocTitle>
          {Object.keys(posts).map((category) => (
            <OverviewItem
              key={category}
              category={category.charAt(0).toUpperCase() + category.slice(1)}
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
              setPosts={setPosts}
            />
          ))}
          <TocDivider />
        </TableOfContents>
      )}
    </HomeWrapper>
  );
}

export default Home;

const Flex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

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
  padding-top: 20px;
`;

const ContentsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 700px;
`;

const TableOfContents = styled(motion.aside)`
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
  margin-bottom: 0;
  color: white;
  margin-top: 0;
`;
