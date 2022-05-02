import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DemoCont from "../../components/DemoCont";
import LampImg from "../../images/genieLamp.jpg";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Button } from "../StyledComponents";
import { Input } from "../../components/styles/Styles";
import useInput from "../../hooks/useInput";
import paySfx from "../../sounds/cashConfirm.ogg";
import useUiSound from "../../hooks/useUiSound";

const Crowdfunder = () => {
  return (
    <>
      <DemoCont>
        <Post
          title="Genie's Lamp"
          content="An oil lamp that holds a genie. Once released, you will be granted 3 wishes!"
          raisedSoFar={400}
          target={1000}
          img={LampImg}
        />
      </DemoCont>
    </>
  );
};
export default Crowdfunder;

export const Post = ({ title, content, raisedSoFar, target, img }) => {
  const [currRaised, setCurrRaised] = useState(raisedSoFar);

  const { play } = useUiSound(paySfx, { volume: 0.1 });

  const handlePay = (e, backingAmount, setIsBacking) => {
    e?.preventDefault();
    if (isNaN(backingAmount)) return;
    if (backingAmount < 0) return;
    setCurrRaised(currRaised + parseInt(backingAmount));
    setIsBacking(false);
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

        <ProgressStats currRaised={currRaised} target={target} />
        <BackProject handlePay={handlePay} />
      </PostDetails>
    </PostWrapper>
  );
};

export const ProgressStats = ({ currRaised, target }) => {
  const currProgress = (currRaised / target) * 100;

  return (
    <>
      <ProgressDetails>
        <div>${currRaised} raised</div>
        <div>{((currRaised / target) * 100).toFixed(1)}%</div>
      </ProgressDetails>
      <ProgressWrapper>
        <Indicator
          style={{
            transform: `translateX(-${
              100 - (currProgress > 100 ? 100 : currProgress)
            }%)`,
          }}
          title="progressIndicator"
        />
      </ProgressWrapper>
    </>
  );
};

export const BackProject = ({ handlePay }) => {
  const [isBacking, setIsBacking] = useState(false);
  const backingAmount = useInput();

  return (
    <>
      <Button
        onClick={() => {
          if (isBacking) handlePay(null, backingAmount.input, setIsBacking);
          else setIsBacking(true);
        }}
      >
        Back this project
      </Button>
      {isBacking && (
        <form
          style={{ marginTop: "20px" }}
          onSubmit={(e) => handlePay(e, backingAmount.input, setIsBacking)}
        >
          <Input
            {...backingAmount}
            placeholder="Enter amount in dollars"
            autoFocus
            type="number"
          />
        </form>
      )}
    </>
  );
};

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

const ProgressWrapper = styled(ProgressPrimitive.Root)`
  position: relative;
  overflow: hidden;
  background: #23222a;
  border-radius: 20px;
  width: 100%;
  height: 12px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Indicator = styled(ProgressPrimitive.Indicator)`
  background-color: #5773ff;
  width: 100%;
  height: 100%;
  transition: transform 300ms ease-out;
  border-radius: 20px;
`;

const ProgressDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  margin: 0 auto;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Backers = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.3rem;
`;
