import React from "react";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import SearchBar from "../components/SearchBar";
import {
  Result,
  ResultsCont,
  SearchWrapper,
} from "../components/styles/Styles";

function SearchFilter() {
  const [results, setResults] = React.useState([]);
  const [origResults, setOrigResults] = React.useState([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://dummyjson.com/todos/");
      const data = await res.json();
      setOrigResults(data.todos);
      setResults(data.todos);
    };

    fetchTodos();
  }, []);

  const handleSearch = (e) => {
    const newResults = origResults.filter((result) =>
      result.todo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQuery(e.target.value);
    setResults(newResults);
  };

  return (
    <>
      <DemoCont>
        <SearchWrapper>
          <SearchBar
            value={query}
            placeholder="Search for a todo"
            onChange={handleSearch}
          />
          {results.length > 0 && query !== "" && (
            <ResultsCont>
              {results.map((result) => {
                const todo = result.todo;
                if (query === "")
                  return <Result key={result.id}>{todo}</Result>;
                else {
                  // bold the matching text
                  const qLen = query.length;
                  const firstPos = todo.search(new RegExp(query, "i"));
                  const pre = todo.substring(0, firstPos);
                  const match = todo.substring(firstPos, firstPos + qLen);
                  const post = todo.substring(firstPos + qLen, todo.length);
                  return (
                    <Result key={result.id}>
                      <span style={{ whiteSpace: "pre-wrap" }}>{pre}</span>
                      <b style={{ whiteSpace: "pre-wrap" }}>{match}</b>
                      <span style={{ whiteSpace: "pre-wrap" }}>{post}</span>
                    </Result>
                  );
                }
              })}
            </ResultsCont>
          )}
        </SearchWrapper>
      </DemoCont>
      <Codeblock
        codeFiles={[{ code: code, name: "SearchFilter", lang: "jsx" }]}
      />
    </>
  );
}

const code = `function SearchFilter() {
  const [results, setResults] = React.useState([]);
  const [origResults, setOrigResults] = React.useState([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://dummyjson.com/todos/");
      const data = await res.json();
      setOrigResults(data.todos);
      setResults(data.todos);
    };

    fetchTodos();
  }, []);

  const handleSearch = (e) => {
    const newResults = origResults.filter((result) =>
      result.todo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQuery(e.target.value);
    setResults(newResults);
  };

  return (
    <div>
      <DemoCont>
        <SearchBar
          value={query}
          placeholder="Search for a todo"
          onChange={handleSearch}
        />
        {results.length > 0 && (
          <ResultsCont>
            {results.map((result) => {
              const todo = result.todo;
              if (query === "") return <Result key={result.id}>{todo}</Result>;
              else {
                // bold the matching text
                const qLen = query.length;
                const firstPos = todo.search(new RegExp(query, "i"));
                const pre = todo.substring(0, firstPos);
                const match = todo.substring(firstPos, firstPos + qLen);
                const post = todo.substring(firstPos + qLen, todo.length);
                return (
                  <Result key={result.id}>
                    <span style={{ whiteSpace: "pre-wrap" }}>{pre}</span>
                    <b style={{ whiteSpace: "pre-wrap" }}>{match}</b>
                    <span style={{ whiteSpace: "pre-wrap" }}>{post}</span>
                  </Result>
                );
              }
            })}
          </ResultsCont>
        )}
      </DemoCont>
    </div>
  );
}
`;

export default SearchFilter;
