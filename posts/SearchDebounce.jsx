import React from "react";
import styled from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import SearchBar from "../components/SearchBar.tsx";
import {
  fadeInOutAnimation,
  Result,
  ResultsCont,
  SearchWrapper,
} from "../components/styles/Styles";
import { AnimatePresence } from "framer-motion";
import { Button } from "./StyledComponents";

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

function SearchDebounce() {
  const [results, setResults] = React.useState([]);

  const handleChange = async (val) => {
    if (val === "") return setResults([]);
    // search meal db
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

  return (
    <>
      <DemoCont>
        <SearchWrapper>
          <SearchBar
            onChange={debounce((e) => handleChange(e.target.value))}
            placeholder="Search for a recipe..."
          />
          {results.length !== 0 && (
            <ResultsCont>
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
            </ResultsCont>
          )}
        </SearchWrapper>
      </DemoCont>
      <InfoCard>
        The debounce strategy is to wait for some time before triggering an
        event. Here, we want to avoid making an API call per character entered.
        Instead, we make the call after the user finishes typing.
      </InfoCard>
      <Codeblock
        codeFiles={[{ code: codeblock, name: "SearchDebounce", lang: "jsx" }]}
      />
    </>
  );
}

export default SearchDebounce;

const codeblock = `const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

function SearchDebounce() {
  const [results, setResults] = React.useState([]);

  const handleChange = async (val) => {
    if (val === "") {
      setResults([]);
      return;
    }
    // search meal db
    const res = await fetch(
      \`https://www.themealdb.com/api/json/v1/1/search.php?s=\${val}\`
    );
    const data = await res.json();
    if (data.meals !== null) {
      const mealObjs = data.meals;
      const meals = mealObjs.map((meal) => meal.strMeal);
      setResults(meals);
    } else setResults([]);
  };

  return (
    <SearchWrapper>
      <SearchBar
        onChange={debounce((e) => handleChange(e.target.value))}
        placeholder="Search for a recipe..."
      />
      {results.length !== 0 && (
        <ResultsCont>
          {results.map((meal) => (
            <Result
              key={meal}
              href={\`https://www.google.com/search?q=\${meal}\`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {meal}
            </Result>
          ))}
        </ResultsCont>
      )}
    </SearchWrapper>
  );
}
`;
