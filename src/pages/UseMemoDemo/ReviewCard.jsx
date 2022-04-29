import React from "react";
import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";
import { Star } from "../../components/styles/Styles";

const ReviewCard = ({ review }) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= review.rating) stars.push(true);
    else stars.push(false);
  }

  return (
    <Review>
      <Header>
        <UserWrapper>
          <UserAvatar letter={review.name[0]} />
          <Name>{review.name}</Name>
        </UserWrapper>

        <RatingWrapper>
          {stars.map((isFilled) => (
            <SmallStar isFilled={isFilled} />
          ))}
        </RatingWrapper>
      </Header>
      <Description>{review.desc}</Description>
    </Review>
  );
};

export default ReviewCard;

const RatingWrapper = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

const SmallStar = styled(Star)`
  width: 1.2rem;
  height: 1.2rem;
  filter: none;
  color: ${(p) => (p.isFilled ? "gold" : "grey")};
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Review = styled.div`
  background-color: #302e3e;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Description = styled.div`
  font-size: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

const UserAvatar = ({ letter }) => {
  return (
    <StyledAvatar>
      <Avatar.Image />
      <StyledFallback>{letter}</StyledFallback>
    </StyledAvatar>
  );
};

const StyledAvatar = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

const StyledFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: deeppink;
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
`;
