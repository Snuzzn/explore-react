import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DemoCont from "../components/DemoCont";
import pokeBall from "../images/pokeball.png";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import { fadeInOutAnimation } from "../components/styles/Styles";
import pokeballSfx from "../sounds/intuition.mp3";
import useUiSound from "../hooks/useUiSound";
import InfoCard from "../components/InfoCard";
import Codeblock from "../components/Codeblock";

const StorePreviousStateUseRef = () => {
  const [currPokemon, setCurrPokemon] = useState(null);
  const pokeHistory = useRef([]);
  const { play } = useUiSound(pokeballSfx, { volume: 0.5 });

  const fetchPokemon = useCallback(
    async (id) => {
      const num = id || Math.floor(Math.random() * 300) + 1;
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
      const data = await resp.json();
      setCurrPokemon({
        img: data.sprites.other["official-artwork"].front_default,
        name: data.name,
      });
      play();
    },
    [play]
  );

  useEffect(() => {
    fetchPokemon(7);
  }, []);

  useEffect(() => {
    // add the current pokemon to array stored in the ref
    pokeHistory.current.unshift(currPokemon);
    // only allow 3 items in this 'history' array
    if (pokeHistory.current.length > 3) {
      pokeHistory.current.pop();
    }
    // note that the ref object will include the current pokemon
    // but since it doesn't cause rerender, it won't show up
  }, [currPokemon]);

  return (
    <>
      <DemoCont>
        <MainPokemon>
          {currPokemon && (
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
          )}
        </MainPokemon>
        <UnstyledBtn onClick={() => fetchPokemon()}>
          <img src={pokeBall} width="60px" />
        </UnstyledBtn>
        <History>
          {[...Array(3).keys()].map((key) => (
            <MiniPokemon>
              <motion.img
                src={pokeHistory.current[key]?.img}
                key={pokeHistory.current[key]?.img}
                {...fadeInOutAnimation}
              />
            </MiniPokemon>
          ))}
        </History>
      </DemoCont>
      <InfoCard>
        The useRef hook gives us a mutable ref object that lasts the full
        lifetime of the component but never causes a rerender. In this use case,
        we store the previous pokemon state/s without having to rerender.
      </InfoCard>
      <Codeblock codeFiles={[{ code: code, name: "Pokedex", lang: "jsx" }]} />
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
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
`;

const code = `const StorePreviousStateUseRef = () => {
  const [currPokemon, setCurrPokemon] = useState(null);
  const pokeHistory = useRef([]);

  const fetchPokemon = useCallback(
    async (id) => {
      const num = id || Math.floor(Math.random() * 300) + 1;
      const resp = await fetch(\`https://pokeapi.co/api/v2/pokemon/\${num}\`);
      const data = await resp.json();
      setCurrPokemon({
        img: data.sprites.other["official-artwork"].front_default,
        name: data.name,
      });
    },
    []
  );

  useEffect(() => {
    fetchPokemon(151);
  }, []);

  useEffect(() => {
    // add the current pokemon to array stored in the ref
    pokeHistory.current.unshift(currPokemon);
    // only allow 3 items in this 'history' array
    if (pokeHistory.current.length > 3) {
      pokeHistory.current.pop();
    }
    // note that the ref object will include the current pokemon
    // but since it doesn't cause rerender, it won't show up
  }, [currPokemon]);

  return (
    <>
      <MainPokemon>
        {currPokemon && (
          <>
            <img src={currPokemon.img} />
            <PokemonName>
              {currPokemon.name.charAt(0).toUpperCase() +
                currPokemon.name.slice(1)}
            </PokemonName>
          </>
        )}
      </MainPokemon>
      <PokeballBtn onClick={() => fetchPokemon()}>
        <img src={pokeBall} />
      </PokeballBtn>
      <History>
        {[...Array(3).keys()].map((key) => (
          <MiniPokemon>
            <img src={pokeHistory.current[key]?.img} />
          </MiniPokemon>
        ))}
      </History>
    </>
  );
};
`;
