import React from "react";
import styled from "styled-components";
import Feature from "../components/Feature";

function Home() {
  return (
    <>
      <Title>React Toolkit</Title>

      <GridContainer>
        <Feature title="useState" route="useState" />
        <Feature title="useEffect" route="useEffect" />
        <Feature title="Conditional Rendering" route="conditional-rendering" />
        <Feature title="Loading Skeleton" route="loading-skeleton" />
        <Feature title="Passing State" route="passing-state" />
        <Feature title="Recursive Menu" route="menu" />
        <Feature title="Typescript IMDB" route="typescript" />
        <Feature title="Search Debounce" route="search-debounce" />
        <Feature title="Search Filter" route="search-filter" />
        <Feature title="Todo List" route="todo-list" />
      </GridContainer>
    </>
  );
}

export default Home;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  width: 100%;
`;

const Title = styled.h2`
  line-height: 0px;
  align-self: flex-start;
`;
