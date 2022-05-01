import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";
import pokeBall from "../images/pokeball.png";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { fadeInOutAnimation } from "../components/styles/Styles";
import pokeballSfx from "../sounds/pokeballOpening.mp3";
import useUiSound from "../hooks/useUiSound";

const StorePreviousStateUseRef = () => {
  const [currPokemon, setCurrPokemon] = useState({ img: null, name: "" });
  const pokeHistory = useRef([]);
  const { play } = useUiSound(pokeballSfx, { volume: 0.03 });

  const fetchRandomPokemon = async () => {
    const rand = Math.floor(Math.random() * 480) + 1;
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
    const data = await resp.json();
    console.log(data);
    setCurrPokemon({
      img: data.sprites.other["official-artwork"].front_default,
      name: data.name,
    });
    play();
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  useEffect(() => {
    pokeHistory.current.unshift(currPokemon);
    if (pokeHistory.current.length > 3) {
      pokeHistory.current.pop();
    }
    console.log(pokeHistory.current);
  }, [currPokemon]);

  return (
    <>
      <DemoCont>
        <MainPokemon>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={currPokemon.img}
              src={currPokemon.img}
              width="180px"
              {...fadeInOutAnimation}
            />
            <PokemonName {...fadeInOutAnimation} key={currPokemon.name}>
              {currPokemon.name.charAt(0).toUpperCase() +
                currPokemon.name.slice(1)}
            </PokemonName>
          </AnimatePresence>
        </MainPokemon>
        <UnstyledBtn onClick={fetchRandomPokemon}>
          <img src={pokeBall} width="60px" />
        </UnstyledBtn>
        <History>
          {[...Array(3).keys()].map((key) => {
            console.log(key);
            return (
              <MiniPokemon>
                <motion.img
                  src={pokeHistory.current[key]?.img}
                  key={pokeHistory.current[key]?.img}
                  {...fadeInOutAnimation}
                />
              </MiniPokemon>
            );
          })}
        </History>
      </DemoCont>
    </>
  );
};

export default StorePreviousStateUseRef;

const MainPokemon = styled.div`
  width: 300px;
  height: 300px;
  padding: 25px;
  background-color: #2b2a33;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const PokemonName = styled(motion.h2)`
  line-height: 0;
`;

const UnstyledBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const History = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const MiniPokemon = styled(MainPokemon)`
  width: 80px;
  height: 80px;
`;
