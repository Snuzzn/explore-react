import React from "react";
import styled, { keyframes } from "styled-components";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import SearchBar from "../components/SearchBar";
import { Spinner, TextCont } from "../components/styles/Styles";

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
      }, 200);
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
              {results.map((meal) => {
                // TODO: bolden the result match
                // console.log(meal.toLowerCase().search("app"));
                return (
                  <Result
                    href={`https://www.google.com/search?q=${meal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {meal}
                  </Result>
                );
              })}
            </ResultsCont>
          )}
        </TextCont>
      </DemoCont>

      <InfoCard>
        With debouncing, the goal is to only run the desired function once per
        use case. In this demo, we want to avoid making an API call per
        character entered. Instead, we make the call after the user finishes
        typing (currently set to 200ms).
      </InfoCard>
    </>
  );
}

export default SearchDebounce;

const ResultsCont = styled.div`
  background-color: #2a2e33;
  padding: 10px;
  border-radius: 10px;
`;

const Result = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: #202327;
  }
`;