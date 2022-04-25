import React from "react";
import styled from "styled-components";
import CategoryCont from "../components/CategoryCont";
import DemoCont from "../components/DemoCont";
import Feature from "../components/Feature";

function Home() {
  return (
    <>
      <Title>React Handbook</Title>
      <CategoryCont borderText="Fundamentals">
        <GridContainer>
          <Feature title="useState" route="useState" />
          <Feature title="useEffect" route="useEffect" />
          <Feature
            title="Conditional Rendering"
            route="conditional-rendering"
          />
          <Feature title="Passing State" route="passing-state" />
        </GridContainer>
      </CategoryCont>

      <CategoryCont borderText="Common features">
        <GridContainer>
          <Feature title="Loading Skeleton" route="loading-skeleton" />
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
    </>
  );
}

export default Home;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  width: 100%;
`;

const Title = styled.h2`
  line-height: 0px;
  align-self: flex-start;
`;
