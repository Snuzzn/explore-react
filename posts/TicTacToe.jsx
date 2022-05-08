import DemoCont from "components/DemoCont";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./StyledComponents";
import { VscDebugRestart } from "react-icons/vsc";
import { fadeInOutAnimation, UnstyledBtn } from "components/styles/Styles";
import { MdClear, MdOutlineCircle } from "react-icons/md";
import { motion } from "framer-motion";
import Codeblock from "components/Codeblock";
import useUiSound from "hooks/useUiSound";
import { happyRing, minimalClick } from "helper/sounds";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("p1");
  const [winner, setWinner] = useState(null);
  const { play: playClick } = useUiSound(minimalClick);
  const { play: end } = useUiSound(happyRing);

  const takeTurn = (ind) => {
    if (winner) return;
    if (board[ind]) return;
    playClick();
    const clonedBoard = [...board];
    clonedBoard[ind] = playerTurn;
    setBoard(clonedBoard);
    setPlayerTurn((playerTurn) => (playerTurn === "p1" ? "p2" : "p1"));
  };

  useEffect(() => {
    // check for horizontal wins
    let hasWon = false;
    for (const i = 0; i < board.length; i++) {
      if (i % 3 === 0) {
        if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2])
          hasWon = true;
      }
    }
    // check for vertical wins
    for (const i = 0; i < board.length; i++) {
      if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6])
        hasWon = true;
    }
    // check for diagonal wins
    if (board[0] && board[0] === board[4] && board[0] === board[8])
      hasWon = true;
    if (board[2] && board[2] === board[4] && board[2] === board[6])
      hasWon = true;

    if (hasWon) {
      setWinner(playerTurn === "p2" ? "p1" : "p2");
      end();
    } else {
      const numEmpty = board.reduce((acc, tile) => (!tile ? acc + 1 : acc), 0);
      if (numEmpty === 0) setWinner("No one");
    }
  }, [board, playerTurn]);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setWinner("");
    setPlayerTurn("p1");
  };

  const renderMark = (ind) => {
    switch (board[ind]) {
      case "p1":
        return (
          <motion.div {...fadeInOutAnimation}>
            <MdClear size="1.5em" color="deeppink" />
          </motion.div>
        );
      case "p2":
        return (
          <motion.div {...fadeInOutAnimation}>
            <MdOutlineCircle size="1.5em" color="#5773FF" />
          </motion.div>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <DemoCont>
        <GameWrapper>
          {winner && (
            <WinWrapper {...fadeInOutAnimation}>
              {winner.charAt(0).toUpperCase() + winner.slice(1)} has won!
              <UnstyledBtn whileHover={{ scale: 0.8 }} onClick={restart}>
                <VscDebugRestart size="1.5em" />
              </UnstyledBtn>
            </WinWrapper>
          )}
          <Grid layout>
            {board.map((tile, ind) => (
              <Tile key={ind} status={board[ind]} onClick={() => takeTurn(ind)}>
                {renderMark(ind)}
              </Tile>
            ))}
          </Grid>
        </GameWrapper>
      </DemoCont>
      <Codeblock codeFiles={codeSnippet} />
    </>
  );
};

export default TicTacToe;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 80px 80px 80px;
  grid-template-rows: 80px 80px 80px;
`;

const Tile = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WinWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const GameWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;

const codeSnippet = [
  {
    name: "TicTacToe",
    lang: "jsx",
    code: `const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("p1");
  const [winner, setWinner] = useState(null);

  const takeTurn = (ind) => {
    if (winner) return;
    if (board[ind]) return;
    const clonedBoard = [...board];
    clonedBoard[ind] = playerTurn;
    setBoard(clonedBoard);
    setPlayerTurn((playerTurn) => (playerTurn === "p1" ? "p2" : "p1"));
  };

  useEffect(() => {
    // check for horizontal wins
    let hasWon = false;
    for (const i = 0; i < board.length; i++) {
      if (i % 3 === 0) {
        if (board[i] && board[i] === board[i + 1] && board[i] === board[i + 2])
          hasWon = true;
      }
    }
    // check for vertical wins
    for (const i = 0; i < board.length; i++) {
      if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6])
        hasWon = true;
    }
    // check for diagonal wins
    if (board[0] && board[0] === board[4] && board[0] === board[8])
      hasWon = true;
    if (board[2] && board[2] === board[4] && board[2] === board[6])
      hasWon = true;

    if (hasWon) setWinner(playerTurn === "p2" ? "p1" : "p2");
    const numEmpty = board.reduce((acc, tile) => (!tile ? acc + 1 : acc), 0);
    if (numEmpty === 0) setWinner("No one");
  }, [board, playerTurn]);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setWinner("");
    setPlayerTurn("p1");
  };

  const renderMark = (ind) => {
    switch (board[ind]) {
      case "p1":
        return <CrossIcon />
      case "p2":
        return <CircleIcon />
      default:
        return <></>;
    }
  };

  return (
    <>
      <DemoCont>
        <GameWrapper>
          {winner && (
            <WinWrapper>
              {winner.charAt(0).toUpperCase() + winner.slice(1)} has won!
              <RestartBtn onClick={restart}/>
            </WinWrapper>
          )}
          <Grid>
            {board.map((tile, ind) => (
              <Tile key={ind} status={board[ind]} onClick={() => takeTurn(ind)}>
                {renderMark(ind)}
              </Tile>
            ))}
          </Grid>
        </GameWrapper>
      </DemoCont>
    </>
  );
};

export default TicTacToe;
`,
  },
];
