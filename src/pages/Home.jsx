import React from "react";
import styled from "styled-components";
import CategoryCont from "../components/CategoryCont";
import DemoCont from "../components/DemoCont";
import Feature from "../components/Feature";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-scroll";

const linkData = [
  {
    title: "Fundamentals",
    features: [
      "useState",
      "useEffect",
      "Passing State",
      "Conditional Rendering",
      "List Rendering",
      "Styled Components",
    ],
  },
  {
    title: "Common features",
    features: [
      "Fetch with Skeleton",
      "useInput",
      "Recursive Menu",
      "Search Debounce",
      "Search Filter",
    ],
  },
  {
    title: "Mini Projects",
    features: ["Typescript IMDB", "Todo List", "Pokemon Redux"],
  },
];

const toKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

function Home() {
  return (
    <HomeWrapper
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
      id="home"
    >
      <ContentsWrapper>
        <Title>Explore React</Title>
        {linkData.map((category) => (
          <CategoryCont
            borderText={category.title}
            id={toKebabCase(category.title)}
          >
            <FlexContainer>
              {category.features.map((feature) => (
                <Feature title={feature} route={toKebabCase(feature)} />
              ))}
            </FlexContainer>
          </CategoryCont>
        ))}
      </ContentsWrapper>

      <TableOfContents>
        <TocTitle to="home" smooth>
          Overview
        </TocTitle>
        {linkData.map((category) => (
          <TocItem
            to={toKebabCase(category.title)}
            smooth
            offset={-50}
            spy={true}
            duration={700}
          >
            {category.title}
          </TocItem>
        ))}
        <TocDivider />
      </TableOfContents>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled(motion.div)`
  display: flex;
  gap: 90px;
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
  height: 100%;
  width: 200px;
`;

const TocTitle = styled(Link)`
  font-size: 1.35rem;
  font-weight: bold;
  cursor: pointer;
`;

const TocItem = styled(Link)`
  cursor: pointer;
  transition: all 100ms ease-out;
  font-size: 1.2rem;
  margin-left: 18px;
  color: #82878f;
  display: flex;
  align-items: center;

  &.active {
    margin-left: 0px;
    /* padding-left: 18px; */
    /* background-color: #3345ac4e; */
    border-radius: 5px;
    color: #5773fe;
    ::before {
      content: "︱";
      margin-right: 8px;
    }
  }
`;

const TocDivider = styled.hr`
  width: 100%;
  height: 2px;
  border: none;
  background-color: #323944;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  width: 100%;
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
`;
