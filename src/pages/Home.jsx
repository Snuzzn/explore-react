import React from "react";
import styled from "styled-components";
import CategoryCont from "../components/CategoryCont";
import DemoCont from "../components/DemoCont";
import Feature from "../components/Feature";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
function Home() {
  const [currSection, setCurrSection] = React.useState("");

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
        <CategoryCont borderText="Fundamentals" id="fundamentals">
          <FlexContainer>
            <Feature title="useState" route="useState" />
            <Feature title="useEffect" route="useEffect" />
            <Feature
              title="Conditional Rendering"
              route="conditional-rendering"
            />
            <Feature title="Passing State" route="passing-state" />
            <Feature title="useInput" route="useInput" />
            <Feature title="Styled Components" route="styled-components" />
          </FlexContainer>
        </CategoryCont>

        <CategoryCont borderText="Common features" id="common-features">
          <FlexContainer>
            <Feature title="Fetch with Skeleton" route="loading-skeleton" />
            <Feature title="Recursive Menu" route="menu" />
            <Feature title="Search Debounce" route="search-debounce" />
            <Feature title="Search Filter" route="search-filter" />
          </FlexContainer>
        </CategoryCont>

        <CategoryCont borderText="Mini projects" id="mini-projects">
          <FlexContainer>
            <Feature title="Typescript IMDB" route="typescript" />
            <Feature title="Todo List" route="todo-list" />
            <Feature title="Pokemon Redux" route="pokemon-redux" />
          </FlexContainer>
        </CategoryCont>
      </ContentsWrapper>
      <TableOfContents>
        <TocTitle>Table of Contents</TocTitle>
        <TocItem
          to="fundamentals"
          smooth
          offset={-30}
          onClick={() => setCurrSection("Fundamentals")}
          isSelected={"Fundamentals" === currSection}
        >
          Fundamentals
        </TocItem>
        <TocItem
          to="common-features"
          smooth
          offset={-30}
          onClick={() => setCurrSection("Common features")}
          isSelected={"Common features" === currSection}
        >
          Common features
        </TocItem>
        <TocItem
          to="mini-projects"
          smooth
          offset={-30}
          onClick={() => setCurrSection("Mini projects")}
          isSelected={"Mini projects" === currSection}
        >
          Mini projects
        </TocItem>
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

const TableOfContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 150px;
  font-size: 1.3rem;
  height: 100%;
`;

const TocTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

const TocItem = styled(Link)`
  cursor: pointer;
  color: ${(p) => (p.isSelected ? "#5773FE" : "white")};
  transition: color 100ms ease;
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
