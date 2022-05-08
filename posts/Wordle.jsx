import DemoCont from "components/DemoCont";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import wordleList from "../helper/wordleList";

const Wordle = () => {
  const currLetter = useRef(-1);
  const [board, setBoard] = useState(Array(25).fill(""));

  const handleKeyPress = (e) => {
    setBoard((board) => {
      const clone = [...board];
      clone[currLetter.current] = e.key;
      return clone;
    });
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    let shouldIncr = true;
    const startWordInd = currLetter.current - (currLetter.current % 5);
    const endWordInd = currLetter.current;
    if (currLetter.current % 5 === 4) {
      if (
        wordleList.includes(board.slice(startWordInd, endWordInd + 1).join(""))
      )
        console.log("hello");
      else shouldIncr = false;
    }
    if (shouldIncr) currLetter.current += 1;
    else {
      const boardClone = [...board];
      boardClone.splice(startWordInd, 5, ...["", "", "", "", ""]);
      setBoard(boardClone);
      currLetter.current -= 5;
    }
  }, [board]);

  return (
    <>
      <DemoCont>
        <Grid>
          {board.map((item, ind) => (
            <Letter key={ind}>{item}</Letter>
          ))}
        </Grid>
      </DemoCont>
    </>
  );
};

export default Wordle;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const Word = styled.div`
  display: flex;
  gap: 10px;
`;

const Letter = styled.div`
  border: 2px solid #313944;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
