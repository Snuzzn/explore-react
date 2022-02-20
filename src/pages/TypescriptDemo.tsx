import React from "react";
import styled, { keyframes } from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import SearchBar from "../components/SearchBar";
import NoDataImg from "../images/noMovie.svg";

interface Movie {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
}

const searchMovie = async (query: string) => {
  // if query is empty, replace with a letter to give the 'too many results' error
  const res = await fetch(
    `https://www.omdbapi.com/?s=${query ? query : "s"}&apikey=${
      process.env.REACT_APP_OMDB_API_KEY
    }`
  );
  const data = await res.json();
  return data;
};

function TypescriptDemo() {
  const [movie, setMovie] = React.useState<Movie | null>(null);
  const [query, setQuery] = React.useState("");
  const [error, setError] = React.useState("");

  const defaultMovies = [
    "tt1160419",
    "tt4633694",
    "tt2953050",
    "tt5180504",
    "tt0266543",
    "tt8398600",
    "tt0110357",
  ];
  // get a number from 0 to final index of movies array
  const randMov = Math.floor(Math.random() * defaultMovies.length);

  React.useEffect(() => {
    // fetch a random movie from the defaultMovies list
    const fetchMovieById = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${defaultMovies[randMov]}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      const data = await res.json();
      setMovie({
        title: data.Title,
        year: data.Year,
        poster: data.Poster,
        imdbID: data.imdbID,
      });
    };

    try {
      fetchMovieById();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setMovie(null);
    try {
      const data = await searchMovie(query);
      if (data.Response === "True") {
        const firstResult = data.Search[0];
        setMovie({
          title: firstResult.Title,
          year: firstResult.Year,
          poster: firstResult.Poster,
          imdbID: firstResult.imdbID,
        });
      } else {
        setError(data.Error);
        setMovie(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderContent = () => {
    if (error !== "")
      return (
        <ErrorCont>
          <img src={NoDataImg} alt="" width="200px" />
          <p>{error}</p>
        </ErrorCont>
      );
    else if (movie === null)
      return (
        <>
          <SkeletonCard />
          <SkeletonInfo />
        </>
      );
    else
      return (
        <Cont>
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Poster src={movie.poster} />
          </a>
          <InfoBar>
            <div>{movie.title}</div>
            <YearWrapper>{movie.year}</YearWrapper>
          </InfoBar>
        </Cont>
      );
  };

  return (
    <>
      <DemoCont>
        {renderContent()}
        <form action="" onSubmit={handleSearch}>
          <SearchBar
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(event.currentTarget.value);
            }}
          />
        </form>
      </DemoCont>
      <Codeblock code={codeblock} lang="TS" />
    </>
  );
}

export default TypescriptDemo;

const Cont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 350px;
`;

const Poster = styled.img`
  border-radius: 20px;
  box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.25);
  );
  width: 100%;

`;

const InfoBar = styled.div`
  padding: 10px;
  font-size: 15pt;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const YearWrapper = styled.div`
  color: #4e4d59;
  font-size: 13pt;
`;

const loadSkeleton = keyframes`
  0% {
    background-color: #3a4249;
  }
  100% {
    background-color: #181819;
  }
`;

const SkeletonCard = styled.div`
  width: 200px;
  height: 296px;
  border-radius: 20px;
  background-color: #808080;
  animation: ${loadSkeleton} 1s linear infinite alternate;
`;

const SkeletonInfo = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 15px;
  background-color: #808080;
  animation: ${loadSkeleton} 1s linear infinite alternate;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const ErrorCont = styled.div`
  height: 380px;
  color: #4e4d59;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const codeblock = `// TypescriptDemo.tsx
interface Movie {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
}

function TypescriptDemo() {
  const [movie, setMovie] = React.useState<Movie | null>(null);
  const [query, setQuery] = React.useState("");
  const [error, setError] = React.useState("");

  const defaultMovies = [
    "tt1160419",
    "tt4633694",
    "tt2953050",
    "tt5180504",
    "tt0266543",
    "tt8398600",
    "tt0110357",
  ];
  // get a number from 0 to final index of movies array
  const randMov = Math.floor(Math.random() * defaultMovies.length);

  React.useEffect(() => {
    // fetch a random movie from the defaultMovies list
    const fetchMovieById = async () => {
      const res = await fetch(
        \`http://www.omdbapi.com/?i=\${defaultMovies[randMov]}&apikey=\${process.env.REACT_APP_OMDB_API_KEY}\`
      );
      const data = await res.json();
      setMovie({
        title: data.Title,
        year: data.Year,
        poster: data.Poster,
        imdbID: data.imdbID,
      });
    };

    try {
      fetchMovieById();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setMovie(null);
    try {
      const data = await searchMovie(query);
      if (data.Response === "True") {
        const firstResult = data.Search[0];
        setMovie({
          title: firstResult.Title,
          year: firstResult.Year,
          poster: firstResult.Poster,
          imdbID: firstResult.imdbID,
        });
      } else {
        setError(data.Error);
        setMovie(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderContent = () => {
    if (error !== "")
      return (
        <ErrorCont>
          <img src={NoDataImg} alt="" width="200px" />
          <p>{error}</p>
        </ErrorCont>
      );
    else if (movie === null)
      return (
        <>
          <SkeletonCard />
          <SkeletonInfo />
        </>
      );
    else
      return (
        <a
          href={\`https://www.imdb.com/title/\${movie.imdbID}/\`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Poster src={movie.poster} />
        </a>
        <InfoBar>
          <div>{movie.title}</div>
          <YearWrapper>{movie.year}</YearWrapper>
        </InfoBar>
      );
  };

  return (
    <>
      {renderContent()}
      <form action="" onSubmit={handleSearch}>
        <SearchBar
          value={query}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(event.currentTarget.value);
          }}
        />
      </form>
    </>
  );
}

const searchMovie = async (query: string) => {
  // if query is empty, replace with a letter to give the
  // 'too many results' error
  const res = await fetch(
    \`http://www.omdbapi.com/?s=\${query ? query : "s"}&apikey=\${
      process.env.REACT_APP_OMDB_API_KEY
    }\`
  );
  const data = await res.json();
  return data;
};


// SearchBar.tsx
interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <>
      <SearchIcon value={value} />
      <SearchInput
        placeholder="Search now..."
        value={value}
        onChange={onChange}
      />
    </>
  );
};
`;
