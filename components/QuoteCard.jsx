import { modernOff, modernOn } from "helper/sounds";
import useUiSound from "hooks/useUiSound";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill, BsHeartFill } from "react-icons/bs";
import styled from "styled-components";
import { UnstyledBtn } from "./styles/Styles";

const QuoteCard = ({ content, author, title, img, likes, year }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(likes);

  const { play: playOn } = useUiSound(modernOn);
  const { play: playOff } = useUiSound(modernOff);

  const handleLike = () => {
    if (isLiked) {
      setNumLikes((numLikes) => numLikes - 1);
      // playOff();
    } else {
      setNumLikes((numLikes) => numLikes + 1);
      // playOn();
    }
    setIsLiked(!isLiked);
  };

  return (
    <Wrapper>
      <Quote>{content}</Quote>
      <BookWrapper>
        <BookCover src={img} />
        <BookDetails>
          <Author>{author}</Author>
          <strong>{title}</strong>
          <Year>{year}</Year>
        </BookDetails>
      </BookWrapper>

      <ActionsWrapper>
        <Like isLiked={isLiked} onClick={handleLike} whileTap={{ scale: 0.7 }}>
          <BsHeartFill size="1.1em" />
          {numLikes}
        </Like>
        <Bookmark
          isBookmarked={isBookmarked}
          onClick={() => setIsBookmarked(!isBookmarked)}
          whileTap={{ scale: 0.7 }}
        >
          <BsFillBookmarkFill size="1.1em" />
        </Bookmark>
      </ActionsWrapper>
    </Wrapper>
  );
};

export default QuoteCard;

const Wrapper = styled.figure`
  background-color: #202326;
  border-radius: 15px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 550px;
  gap: 20px;
`;

const Quote = styled.blockquote`
  margin: 0;
  font-size: 1.3rem;
  &::before {
    content: "“";
  }
  &::after {
    content: "”";
  }
`;

const BookCover = styled.img`
  width: 70px;
`;

const BookWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Like = styled(UnstyledBtn)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(p) => (p.isLiked ? "#e63d78" : "#47505a")};
`;

const Bookmark = styled(UnstyledBtn)`
  color: ${(p) => (p.isBookmarked ? "#5773FF" : "#47505a")};
`;

const Author = styled.div`
  font-size: 1.1rem;
`;

const Year = styled.div`
  font-size: 1rem;
`;
