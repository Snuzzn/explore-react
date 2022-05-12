import React, { useEffect } from "react";
import PageLayout from "../../components/PageLayout";
import UseStateIntro from "../../posts/UseStateIntro";
import UseEffectIntro from "../../posts/UseEffectIntro";
import ManagingArrayState from "../../posts/ManagingArrayState";
import ManagingBooleanState from "../../posts/ManagingBooleanState";
import { useRouter } from "next/router";
import { toSentenceCase } from "../../helper/general";
import { postsData } from "../../helper/postsData";
import { ErrorPageWrapper } from "../404";
import useTimeout from "hooks/useTimeout";
import { motion } from "framer-motion";

const Post = ({ category, slug, ssr }) => {
  const title = postsData[category]?.[slug]?.title || toSentenceCase(slug);

  const PostComponent = postsData[category]?.[slug]?.component;

  return (
    <motion.div
      initial={!ssr && { y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <PageLayout title={title}>{PostComponent}</PageLayout>
    </motion.div>
  );
};

export default Post;

export async function getStaticPaths() {
  let paths = [];
  for (const category in postsData) {
    for (const slug in postsData[category]) {
      paths.push({ params: { category: category, slug: slug } });
    }
  }

  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const category = context.params.category;
  const slug = context.params.slug;

  return {
    props: {
      category: category,
      slug: slug,
    },
  };
};
