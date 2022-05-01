import { OverviewItem } from "./../components/OverviewItem";
import React from "react";
import styled from "styled-components";
import CategoryCont from "../components/CategoryCont";
import Feature from "../components/Feature";
import { motion } from "framer-motion/dist/framer-motion";
import { toKebabCase } from "../helper/general";
import { Link } from "react-scroll";
import MuteButton from "../components/MuteButton";

const linkData = [
  {
    title: "Fundamentals",
    features: [
      "useState",
      "useEffect",
      "List Rendering",
      "Managing Boolean State",
      "Managing Array State",
      "Managing Object State",
      "Passing State",
      "Conditional Rendering",
      "Styled Components",
    ],
  },
  {
    title: "Intermediate Features",
    features: [
      "Fetch with Loading State",
      "useInput",
      "useMemo",
      "Managing interval with useRef",
      "Storing previous state with useRef",
      "Recursive Menu",
      "Search Debounce",
      "Search Filter",
    ],
  },
  {
    title: "Mini Projects",
    features: [
      "Typescript IMDB",
      "Todo List",
      "Pokemon Redux",
      "Music Player",
      "Countdown Timer",
    ],
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = React.useState("");

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
        <TocTitle smooth>Overview</TocTitle>
        {linkData.map((category) => (
          <OverviewItem
            category={category}
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
