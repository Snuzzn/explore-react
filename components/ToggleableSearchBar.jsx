import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { fadeInOutAnimation, UnstyledBtn } from "./styles/Styles";
import { AnimatePresence, motion } from "framer-motion";
import useInput from "hooks/useInput";
import { postsData } from "helper/postsData";
import { MdOutlineClear } from "react-icons/md";

const ToggleableSearchBar = ({ setPosts, toggleSearch, setToggleSearch }) => {
  const query = useInput();
  const handleSearch = (e) => {
    e.preventDefault();
    const newPostsData = {};
    for (const category in postsData) {
      let catResults = {};
      for (const item in postsData[category]) {
        if (item.toLowerCase().includes(query.input.toLowerCase())) {
          catResults[item] = postsData[category][item];
        }
      }
      newPostsData[category] = catResults;
    }
    setPosts(newPostsData);
  };

  const handleClear = () => {
    query.reset();
    setPosts(postsData);
    setToggleSearch(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape") handleClear();
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {!toggleSearch && (
        <UnstyledBtn
          key="searchBtn"
          {...fadeInOutAnimation}
          transition={{ ease: "easeOut", duration: 0.2 }}
          onClick={() => setToggleSearch(true)}
        >
          <FiSearch />
        </UnstyledBtn>
      )}
      {toggleSearch && (
        <BarWrapperForm
          onSubmit={handleSearch}
          {...fadeInOutAnimation}
          transition={{ ease: "easeOut", duration: 0.2 }}
          key="searchForm"
        >
          <Bar
            autoFocus
            value={query.input}
            onChange={query.onChange}
            onKeyDown={handleKeyPress}
          />
          <UnstyledBtn type="button" onClick={handleClear}>
            <MdOutlineClear />
          </UnstyledBtn>
        </BarWrapperForm>
      )}
    </AnimatePresence>
  );
};

export default ToggleableSearchBar;

const BarWrapperForm = styled(motion.form)`
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 20px;
  border: 1px solid #313944;
  &:focus-within {
    border: 2px solid #758cff;
    border-radius: 50px;
  }
`;

const Bar = styled(motion.input)`
  border: none;
  background: none;
  font-size: 1.2rem;
  padding: 5px 15px;
  &:focus {
    border: none;
    box-shadow: none;
  }
`;
