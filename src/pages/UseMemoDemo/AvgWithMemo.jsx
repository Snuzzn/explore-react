import React, { useEffect, useMemo, useState } from "react";
import { BorderText } from "../../components/DemoCont";
import { Input } from "../../components/styles/Styles";
import useInput from "../../hooks/useInput";
import reviewData from "./reviewData.json";
import { MiniDemoWrapper, Average } from "./useMemoDemo";

const AvgRatingWithMemo = () => {
  const name = useInput();
  const [reviews, setReviews] = useState(reviewData);
  const average = useMemo(
    () =>
      reviews.reduce((acc, review) => {
        for (let i = 0; i < 40000000; i += 1) {
          // artifically making this calculation take longer
        }
        return acc + review.rating;
      }, 0) / reviews.length,
    [reviews]
  );

  // const [average, setAverage] = useState(0);
  // useEffect(() => {
  //   const calculate = async () => {
  //     const avg =
  //       reviews.reduce((acc, review) => {
  //         for (let i = 0; i < 400000000; i += 1) {
  //           // artifically making this calculation take longer
  //         }
  //         return acc + review.rating;
  //       }, 0) / reviews.length;
  //     setAverage(avg);
  //   };
  //   calculate();
  // }, [reviews]);

  console.log(average);

  return (
    <MiniDemoWrapper>
      <BorderText style={{ color: "#676c74" }}>with useMemo</BorderText>
      <Average average={average} />
      <Input
        {...name}
        placeholder="Enter your name"
        style={{ width: "250px" }}
      />
    </MiniDemoWrapper>
  );
};

export default AvgRatingWithMemo;
