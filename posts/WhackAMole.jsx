import DemoCont from "components/DemoCont";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useUiSound from "hooks/useUiSound";
import { whack } from "helper/sounds";
import Codeblock from "components/Codeblock";

// const grid = Array(3).fill(Array(3).fill(false));
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const WhackAMole = () => {
  const [score, setScore] = useState(0);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { play } = useUiSound(whack);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCoordinates((coord) => {
        let newCoords = generateRand();
        // generate unique random coordinates
        while (newCoords[0] === coord[0] && newCoords[1] === coord[1])
          newCoords = generateRand();

        return newCoords;
      });
    }, 580);

    return () => clearInterval(intervalId);
  }, []);

  const handleWhack = (rowI, colI) => {
    // check if correct coordinates are hit
    console.log(rowI + ":" + colI);
    if (rowI === coordinates[0] && colI === coordinates[1]) {
      play();
      setScore((score) => score + 1);
    }
  };

  return (
    <>
      <DemoCont>
        {grid.map((row, rowI) => (
          <GridCont key={row}>
            {row.map((col, colI) => (
              <Hole
                key={col}
                onMouseDown={() => handleWhack(rowI, colI)}
                whileTap={{ scale: 0.3 }}
              >
                {rowI === coordinates[0] && colI === coordinates[1] && (
                  <Mole {...animateMole} key={rowI + "-" + colI} />
                )}
              </Hole>
            ))}
          </GridCont>
        ))}
        <p>Score: {score}</p>
      </DemoCont>
      <Codeblock
        codeFiles={[{ name: "WhackAMole", lang: "jsx", code: codeSnippet }]}
      />
    </>
  );
};

export default WhackAMole;

const generateRand = () => {
  const randRow = Math.floor(Math.random() * 3);
  const randCol = Math.floor(Math.random() * 3);
  return [randRow, randCol];
};

const animateMole = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  // exit: {
  //   opacity: 0,
  //   y: 20,
  // },
};

const GridCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;

const Hole = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #2b2a33;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Mole = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50% 50% 2px 2px;
  background-color: #5773ff;
`;

const codeSnippet = `const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const WhackAMole = () => {
  const [score, setScore] = useState(0);
  const [coordinates, setCoordinates] = useState([0, 0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCoordinates((coord) => {
        let newCoords = generateRand();
        // generate unique random coordinates
        while (newCoords[0] === coord[0] && newCoords[1] === coord[1]) 
          newCoords = generateRand();

        return newCoords;
      });
    }, 580);

    return () => clearInterval(intervalId);
  }, []);

  const handleWhack = (rowI, colI) => {
    // check if correct coordinates are hit
    console.log(rowI + ":" + colI);
    if (rowI === coordinates[0] && colI === coordinates[1]) {
      play();
      setScore((score) => score + 1);
    }
  };

  return (
    <>
      {grid.map((row, rowI) => (
        <GridCont key={row}>
          {row.map((col, colI) => (
            <Hole
              key={col}
              onMouseDown={() => handleWhack(rowI, colI)}
            >
              {rowI === coordinates[0] && colI === coordinates[1] && (
                <Mole key={row + "-" + col} />
              )}
            </Hole>
          ))}
        </GridCont>
      ))}
      <p>Score: {score}</p>
    </>
  );
};

export default WhackAMole;

const generateRand = () => {
  const randRow = Math.floor(Math.random() * 3);
  const randCol = Math.floor(Math.random() * 3);
  return [randRow, randCol];
};
`;
