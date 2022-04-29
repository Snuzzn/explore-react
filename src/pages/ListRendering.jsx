import React from "react";
import styled from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import { InlineCode } from "../components/styles/Styles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const popularPosts = [
  {
    title: "The untold history of podiums",
    img: "https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg",
    category: "Culture",
  },
  {
    title: "Why you should never go upstairs",
    img: "https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg",
    category: "Education",
  },
  {
    title: "Up, up and away! Say goodbye to gift-giving",
    img: "https://img.freepik.com/free-photo/3d-balloons-present-box_23-2148993002.jpg",
    category: "Holiday",
  },
];

const animationProps = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    ease: "easeOut",
    default: { duration: 0.5 },
  },
};

const ListRendering = () => {
  return (
    <>
      <DemoCont>
        <Title {...animationProps}>Popular Articles</Title>
        {popularPosts.map((post) => (
          <Post key={post.title} {...animationProps}>
            <Thumbnail src={post.img} alt="" />
            <div>
              <Category>{post.category.toUpperCase()}</Category>
              <PostTitle>{post.title}</PostTitle>
            </div>
          </Post>
        ))}
      </DemoCont>
      <InfoCard>
        We use the <InlineCode>map</InlineCode> array method to render a list.
        Make sure to include a unique key for each item, to give it a stable
        identity. This is especially important if the array is updated.
      </InfoCard>
      <Codeblock code={code} lang="JS" />
    </>
  );
};

export default ListRendering;

const Post = styled(motion.div)`
  display: flex;
  width: 100%;
  gap: 30px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const Title = styled(motion.h1)`
  font-size: 1.7rem;
  align-self: flex-start;
  margin-top: 0px;
`;

const Category = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: grey;
  line-height: 1;
`;

const PostTitle = styled.h3`
  font-size: 1.3rem;
  line-height: 1;
`;

const code = `
const popularPosts = [
  {
    title: "The untold history of podiums",
    img: "https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg",
    category: "Culture",
  },
  {
    title: "Why you should never go upstairs",
    img: "https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg",
    category: "Education",
  },
  {
    title: "Up, up and away! Say goodbye to gift-giving",
    img: "https://img.freepik.com/free-photo/3d-balloons-present-box_23-2148993002.jpg",
    category: "Holiday",
  },
];

const ListRendering = () => {
  return (
    <>
      <DemoCont>
        <Title>Popular Articles</Title>
        {popularPosts.map((post) => (
          <Post key={post.title}>
            <Thumbnail src={post.img} alt="" />
            <div>
              <Category>{post.category.toUpperCase()}</Category>
              <PostTitle>{post.title}</PostTitle>
            </div>
          </Post>
        ))}
      </DemoCont>
    </>
  );
};  

`;
