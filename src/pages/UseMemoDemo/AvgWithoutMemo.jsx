import { useState } from "react";
import { BorderText } from "../../components/DemoCont";
import { Input } from "../../components/styles/Styles";
import useInput from "../../hooks/useInput";
import { Average, MiniDemoWrapper } from "./useMemoDemo";
import reviewData from "./reviewData.json";

const AvgRatingWithoutMemo = () => {
  const name = useInput();
  const [reviews, setReviews] = useState(reviewData);
  const average =
    reviews.reduce((acc, review) => {
      for (let i = 0; i < 40000000; i += 1) {
        // artifically making this calculation take longer
      }
      return acc + review.rating;
    }, 0) / reviews.length;

  console.log(average);

  return (
    <MiniDemoWrapper>
      <BorderText style={{ color: "#676c74" }}>without useMemo</BorderText>
      <Average average={average} />
      <Input
        {...name}
        placeholder="Enter your name"
        style={{ width: "250px" }}
      />
    </MiniDemoWrapper>
  );
};

export default AvgRatingWithoutMemo;
