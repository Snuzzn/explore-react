import React from "react";
import styled from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import SearchBar from "../components/SearchBar";
import {
  fadeInOutAnimation,
  Result,
  ResultsCont,
} from "../components/styles/Styles";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

function SearchDebounce() {
  const [results, setResults] = React.useState([]);

  const handleChange = async (val) => {
    if (val === "") {
      setResults([]);
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
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const optimisedFunc = React.useCallback(debounce(handleChange), []);

  return (
    <>
      <DemoCont>
        <DebounceDemoWrapper>
          <SearchBar
            onChange={(e) => {
              optimisedFunc(e.target.value);
            }}
            placeholder="Search for a recipe..."
          />
          <>
            {results.length !== 0 && (
              <ResultsCont>
                <>
                  {results.map((meal) => (
                    <AnimatePresence key={meal}>
                      <Result
                        layout
                        key={meal}
                        href={`https://www.google.com/search?q=${meal}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...fadeInOutAnimation}
                      >
                        {meal}
                      </Result>
                    </AnimatePresence>
                  ))}
                </>
              </ResultsCont>
            )}
          </>
        </DebounceDemoWrapper>
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

const DebounceDemoWrapper = styled.div`
  min-height: 370px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 10px;
`;

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
