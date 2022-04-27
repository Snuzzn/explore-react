import React from "react";
import styled, { keyframes } from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import SearchBar from "../components/SearchBar";
import { Result, ResultsCont, Spinner } from "../components/styles/Styles";

function SearchDebounce() {
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = async (val) => {
    if (val === "") {
      setResults([]);
      setIsLoading(false);
      return;
    }
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );
    const data = await res.json();
    if (data.meals !== null) {
      const mealObjs = data.meals;
      const meals = mealObjs.map((meal) => meal.strMeal);
      setResults(meals);
    } else setResults([]);
    setIsLoading(false);
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      setIsLoading(true);
      setResults([]);

      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 100);
    };
  };

  const optimisedFunc = React.useCallback(debounce(handleChange), []);

  return (
    <>
      <DemoCont>
        <SearchBar
          onChange={(e) => {
            optimisedFunc(e.target.value);
          }}
          placeholder="Search for a recipe..."
        />
        <>
          {isLoading && (
            <ResultsCont>
              <Result style={loadingStyles}>
                <Spinner />
                Loading
              </Result>
            </ResultsCont>
          )}
          {results.length > 0 && (
            <ResultsCont>
              {results.map((meal) => (
                <Result
                  href={`https://www.google.com/search?q=${meal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {meal}
                </Result>
              ))}
            </ResultsCont>
          )}
        </>
      </DemoCont>

      <InfoCard>
        With debouncing, the goal is to only run the desired function once per
        use case. In this demo, we want to avoid making an API call per
        character entered. Instead, we make the call after the user finishes
        typing (currently set to 200ms).
      </InfoCard>

      <Codeblock code={codeblock} lang="JS" />
    </>
  );
}

export default SearchDebounce;

const loadingStyles = { display: "flex", alignItems: "center", gap: "10px" };

const codeblock = `function SearchDebounce() {
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = async (val) => {
    if (val === "") {
      setResults([]);
      setIsLoading(false);
      return;
    }
    const res = await fetch(
      \`https://www.themealdb.com/api/json/v1/1/search.php?s=\${val}\`
    );
    const data = await res.json();
    if (data.meals !== null) {
      const mealObjs = data.meals;
      const meals = mealObjs.map((meal) => meal.strMeal);
      setResults(meals);
    } else setResults([]);
    setIsLoading(false);
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      setIsLoading(true);
      setResults([]);

      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 200);
    };
  };

  const optimisedFunc = React.useCallback(debounce(handleChange), []);

  return (
    <>
      <SearchBar
        onChange={(e) => {
          optimisedFunc(e.target.value);
        }}
        placeholder="Search for a recipe..."
      />
      <TextCont>
        {isLoading && (
          <ResultsCont>
            <Result>
              <Spinner />
              Loading
            </Result>
          </ResultsCont>
        )}
        {results.length > 0 && (
          <ResultsCont>
            {results.map((meal) => (
              <Result
                href={\`https://www.google.com/search?q=\${meal}\`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {meal}
              </Result>
            ))}
          </ResultsCont>
        )}
      </TextCont>
    </>
  );
}
`;
