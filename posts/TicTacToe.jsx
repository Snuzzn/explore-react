import DemoCont from "components/DemoCont";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./StyledComponents";
import { VscDebugRestart } from "react-icons/vsc";
import { fadeInOutAnimation, UnstyledBtn } from "components/styles/Styles";
import { MdClear, MdOutlineCircle } from "react-icons/md";
import { motion } from "framer-motion";
import Modal from "components/Modal";
import ReachModal from "components/ReachModal";

const TicTacToe = () => {
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

    if (hasWon) {
      setWinner(playerTurn === "p2" ? "p1" : "p2");
      // setOpen(true);
    }
  }, [board, playerTurn]);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setWinner("");
    setPlayerTurn("p1");
  };

  const renderMark = (tile) => {
    if (board[tile] === "p1")
      return (
        <motion.div {...fadeInOutAnimation}>
          <MdClear size="1.5em" color="deeppink" />
        </motion.div>
      );
    else if (board[tile] === "p2")
      return (
        <motion.div {...fadeInOutAnimation}>
          <MdOutlineCircle size="1.5em" color="#5773FF" />
        </motion.div>
      );
  };

  const [open, setOpen] = React.useState(false);
  // const modalProps = {
  //   open,
  //   setOpen,
  //   content: "Nothing",
  //   title: "P1 has won!",
  //   // trigger: <Button>Open modal!!</Button>,
  // };

  return (
    <>
      <DemoCont>
        {winner && (
          <WinWrapper>
            {winner.toUpperCase()} has won!
            <UnstyledBtn whileHover={{ scale: 0.8 }} onClick={restart}>
              <VscDebugRestart size="1.5em" />
            </UnstyledBtn>
          </WinWrapper>
        )}
        <Grid>
          {board.map((tile, ind) => (
            <Tile key={ind} status={board[ind]} onClick={() => takeTurn(ind)}>
              {renderMark(ind)}
            </Tile>
          ))}
        </Grid>
        {/* <Modal {...modalProps} /> */}
      </DemoCont>
    </>
  );
};

export default TicTacToe;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 70px 70px;
  grid-template-rows: 70px 70px 70px;
`;

const Tile = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 100%;
  /* background: ${(p) => {
    if (p.status === "p1") return "deeppink";
    else if (p.status === "p2") return "blue";
    else return "none";
  }}; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WinWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
`;
