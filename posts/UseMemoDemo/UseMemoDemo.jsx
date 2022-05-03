import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import DemoCont, { DemoWrapper } from "../../components/DemoCont";
import { Star } from "../../components/styles/Styles";
import reviewData from "./reviewData.json";
import { HiStar } from "react-icons/hi";
import ReviewCard from "./ReviewCard";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import InfoCard from "../../components/InfoCard";
import Codeblock from "../../components/Codeblock";
import Console from "../../components/Console";
import useLogs from "../../hooks/useLogs";
import AvgRatingWithoutMemo from "./AvgWithoutMemo";
import AvgRatingWithMemo from "./AvgWithMemo";

const WithoutMemo = lazy(() => import("./AvgWithoutMemo"));
const WithMemo = lazy(() => import("./AvgWithMemo"));

const UseMemoDemo = () => {
  const { logs, updateLogs } = useLogs();
  return (
    <>
      <DemoCont>
        {/* <WithUseEffectAndState /> */}
        {/* <WithUseMemo /> */}
        <ReviewsWrapper>
          {reviewData.slice(0, 2).map((review) => (
            <ReviewCard review={review} key={review.name} />
          ))}
          <IoEllipsisVerticalSharp color="#59576b" />
        </ReviewsWrapper>
        <DemosWrapper>
          {/* <Suspense fallback={"Loading"}>
            <WithMemo />
          </Suspense> */}
          <AvgRatingWithoutMemo />
          <AvgRatingWithMemo />
        </DemosWrapper>
      </DemoCont>
      <InfoCard>
        useMemo is a hook that optimises performance. It allows us to only run a
        costly calculation when its dependencies change rather than every
        render.
        <br />
        <br />
        In the above example, we don&apos;t need to recalculate the average
        rating each time we enter a character into the input box. Thus, we
        memoise the rating.
      </InfoCard>
      {/* <Console /> */}
      <Codeblock
        codeFiles={[codeWithoutMemo, codeWithMemo]}
        naturalHeight={true}
      />
    </>
  );
};

export default UseMemoDemo;

const DemosWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const MiniDemoWrapper = styled(DemoWrapper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: auto;
  padding: 20px;
  padding-top: 30px;
  border-style: dashed;
`;

const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
`;

export const AvgRatingWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;
`;

export const Average = ({ average }) => {
  return (
    <AvgRatingWrapper>
      <span style={{ fontSize: "1.3rem" }}>Average:</span>
      <Star />
      {average.toFixed(1)}
    </AvgRatingWrapper>
  );
};

const codeWithoutMemo = {
  name: "WithoutMemo",
  lang: "jsx",
  code: `const WithoutUseMemo = () => {
  const name = useInput();
  const [reviews, setReviews] = useState(reviewData);

  // expensive calculation
  const average = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
  console.log(average);

  return (
    <>
      <Average average={average} />
      <Input {...name} placeholder="Enter your name" />
    </>
  );
};

export default WithoutUseMemo;`,
};

const codeWithMemo = {
  name: "WithUseMemo",
  lang: "jsx",
  code: `const WithUseMemo = () => {
  const name = useInput();
  const [reviews, setReviews] = useState(reviewData);

  // expensive calculation
  const average = useMemo(
    () => reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
    [reviews]
  );
  console.log(average);

  return (
    <>
      <Average average={average} />
      <Input {...name} placeholder="Enter your name" />
    </>
  );
};
`,
};

const WithUseEffectAndState = () => {
  const [result, setResult] = useState(0);
  const [numInput, setNumInput] = useState(0);

  useEffect(() => {
    setResult(1 + numInput);
  }, [numInput]);

  console.log(result);
  return <div>With useEffect and useState: {result}</div>;
};

const WithUseMemo = () => {
  const [numInput, setNumInput] = useState(0);
  const result = useMemo(() => 1 + numInput, [numInput]);

  console.log(result);
  return <div>With useMemo: {result}</div>;
};
