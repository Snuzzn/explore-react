import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { fadeInOutAnimation, UnstyledBtn } from "./styles/Styles";
import { AnimatePresence, motion } from "framer-motion";
import useInput from "hooks/useInput";
import { postsData } from "helper/postsData";
import { MdOutlineClear } from "react-icons/md";

const ToggleableSearchBar = ({
  posts,
  setPosts,
  toggleSearch,
  setToggleSearch,
}) => {
  const query = useInput();
  const handleSearch = (e) => {
    console.log(query.input);

    e.preventDefault();
    console.log(posts);
    const newPostsData = {};
    for (const category in postsData) {
      let catResults = {};
      for (const item in postsData[category]) {
        if (item.toLowerCase().includes(query.input.toLowerCase())) {
          catResults[item] = postsData[category][item];
        }
      }
      newPostsData[category] = catResults;
      // const titles = Object.entries(posts[category]);
      // const results = titles.filter(([item, val]) =>
      //   item.toLowerCase().includes(query.input.toLowerCase())
      // );
      // console.log(results);
      // newPostsData[category] = results;
    }
    setPosts(newPostsData);
  };
  console.log(query);

  return (
    <AnimatePresence exitBeforeEnter>
      {!toggleSearch && (
        <UnstyledBtn
          key="searchBtn"
          {...fadeInOutAnimation}
          onClick={() => setToggleSearch(true)}
        >
          <FiSearch />
        </UnstyledBtn>
      )}
      {toggleSearch && (
        <BarWrapperForm
          onSubmit={handleSearch}
          {...fadeInOutAnimation}
          key="searchForm"
        >
          <Bar autoFocus value={query.input} onChange={query.onChange} />
          <UnstyledBtn
            type="button"
            onClick={() => {
              console.log("hello");
              query.reset();
              setPosts(postsData);
              setToggleSearch(false);
            }}
          >
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
