import React from "react";
import styled from "styled-components";
import CategoryCont from "../components/CategoryCont";
import DemoCont from "../components/DemoCont";
import Feature from "../components/Feature";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function Home() {
  return (
    <HomeWrapper
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <Title>React Grove</Title>
      <CategoryCont borderText="Fundamentals">
        <GridContainer>
          <Feature title="useState" route="useState" />
          <Feature title="useEffect" route="useEffect" />
          <Feature
            title="Conditional Rendering"
            route="conditional-rendering"
          />
          <Feature title="Passing State" route="passing-state" />
          <Feature title="useInput" route="useInput" />
          <Feature title="Styled Components" route="styled-components" />
        </GridContainer>
      </CategoryCont>

      <CategoryCont borderText="Common features">
        <GridContainer>
          <Feature title="Fetch with Skeleton" route="loading-skeleton" />
          <Feature title="Recursive Menu" route="menu" />
          <Feature title="Search Debounce" route="search-debounce" />
          <Feature title="Search Filter" route="search-filter" />
        </GridContainer>
      </CategoryCont>

      <CategoryCont borderText="Mini demos">
        <GridContainer>
          <Feature title="Typescript IMDB" route="typescript" />
          <Feature title="Todo List" route="todo-list" />
          <Feature title="Pokemon Redux" route="pokemon-redux" />
        </GridContainer>
      </CategoryCont>
    </HomeWrapper>
  );
}

export default Home;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 26pt;
  align-self: flex-start;
  margin-bottom: 0;
`;

const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
