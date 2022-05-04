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

const Post = () => {
  const router = useRouter();
  const { category, slug } = router.query;

  const title =
    postsData[category]?.[toSentenceCase(slug)]?.title || toSentenceCase(slug);

  const PostComponent = postsData[category]?.[toSentenceCase(slug)]?.component;

  // if component not found, navigate user to 404 page
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!PostComponent) router.push("/404");
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      {PostComponent && <PageLayout title={title}>{PostComponent}</PageLayout>}
    </>
  );
};

export default Post;
