import React, { useEffect, useState } from "react";
import useUiSound from "../../hooks/useUiSound";
import BackProject from "./BackProject";
import ProgressStats from "./ProgressStats";
import styled from "styled-components";
import { paySfx } from "../../helper/sounds";
import useSwr from "swr";
import { useSWRConfig } from "swr";

const Post = ({ title, content, raisedSoFar, target, img }) => {
  const { play } = useUiSound(paySfx, { volume: 0.1 });

  const { mutate } = useSWRConfig();
  const handlePay = async (e, backingAmount, setIsBacking) => {
    const val = backingAmount.input;
    e?.preventDefault();
    if (isNaN(val) || val < 0) return;
    if (val === "") {
      setIsBacking(false);
      return;
    }
    try {
      await fetch("/api/crowdfunder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ backingAmount: parseInt(val) }),
      });
    } catch {
      console.error("Could not back this project");
    }

    mutate("/api/crowdfunder");

    setIsBacking(false);
    backingAmount.reset();
    play();
  };

  return (
    <PostWrapper>
      <div style={{ position: "relative" }}>
        <PostImage src={img} />
        {/* <Backers>4 backers</Backers> */}
      </div>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostText>{content}</PostText>

        <ProgressStats currRaised={raisedSoFar} target={target} />
        <BackProject handlePay={handlePay} />
      </PostDetails>
    </PostWrapper>
  );
};

export default Post;

const PostWrapper = styled.div`
  border: 2px solid #313944;
  width: 350px;
  border-radius: 40px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  /* background-color: #23222a; */
`;

const PostImage = styled.img`
  width: 350px;
  height: 200px;
  border-radius: 40px 40px 0 0;
  object-fit: cover;
  object-position: 0 -50px;
`;

const PostDetails = styled.div`
  padding: 25px;
`;

const PostTitle = styled.h2`
  margin-top: 0px;
  margin-bottom: -5px;
  font-size: 1.6rem;
`;

const PostText = styled.p`
  font-size: 1rem;
  color: grey;
  margin-bottom: 20px;
`;
