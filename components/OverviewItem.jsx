import React, { useRef } from "react";
import styled from "styled-components";
import { toKebabCase } from "../helper/general";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { postsData } from "helper/postsData";

function OverviewItem({ category, activeCategory, setActiveCategory }) {
  return (
    <TocItem
      to={toKebabCase(category)}
      smooth
      offset={-50}
      spy={true}
      duration={700}
      key={category.title}
      onSetActive={(e) => setActiveCategory(e)}
    >
      {/* {activeCategory === toKebabCase(category.title) && (
        <TocVertRule layout layoutId="vertrule" />
      )} */}
      <div>{category}</div>
    </TocItem>
  );
}

export default OverviewItem;

const TocItem = styled(Link)`
  cursor: pointer;
  transition: all 100ms ease-out;
  font-size: 1.2rem;
  color: #82878f;

  /* padding-left: 18px; */
  gap: 20px;
  &.active {
    border-radius: 5px;
    color: #5773fe;
    /* background-color: #5773fe12; */
  }
`;

const TocVertRule = styled(motion.div)`
  height: 25px;
  width: 2px;
  border: none;
  background-color: #5773fe;
  /* visibility: hidden; */
  position: absolute;
  left: 0px;
  .active & {
    visibility: visible;
  }
`;
