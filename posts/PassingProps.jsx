import Codeblock from "components/Codeblock";
import DemoCont from "components/DemoCont";
import InfoCard from "components/InfoCard";
import QuoteCard from "components/QuoteCard";
import React from "react";
import styled from "styled-components";

const PassingProps = () => {
  return (
    <>
      <DemoCont>
        <QuotesWrapper>
          {quotes.map((quote) => (
            <QuoteCard key={quote.id} {...quote} />
          ))}
          <FadedBot />
        </QuotesWrapper>
      </DemoCont>
      <InfoCard>
        We can pass props (properties) to a child component. This lets us break
        our application down into reusable components. The above example
        involves reusing a stateful component.
      </InfoCard>
      <Codeblock codeFiles={codeFiles} />
    </>
  );
};

export default PassingProps;

const QuotesWrapper = styled.div`
  height: 450px;
  overflow: auto;
  position: relative;
  /* display: flex;
  flex-direction: column; */

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #373a3f;
    border-radius: 5px;
  }

  scrollbar-color: #373a3f transparent;
  scrollbar-width: thin;
`;

const FadedBot = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  height: 100px;
  pointer-events: none;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), #181819cd);
`;

const quotes = [
  {
    content:
      "Everything can be taken from a man but one thing: the last of the human freedoms - to choose one’s attitude in any given set of circumstances, to choose one’s own way.",
    author: "Victor E. Frankl",
    title: "Man's Search for Meaning",
    img: "/images/bookCovers/frankl-cover.jpg",
    id: 1,
    likes: 87,
    year: 1946,
  },
  {
    content:
      "A journey will have pain and failure... But if we stop, if we accept the person we are when we fail, the journey ends. That failure becomes our  destination.",
    author: "Brandon Sanderson",
    title: "Oathbringer",
    img: "/images/bookCovers/sanderson-cover.jpg",
    id: 2,
    likes: 76,
    year: 2017,
  },
  {
    content:
      "It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers.",
    author: "Patrick Rothfuss",
    title: "The Wise Man's Fear",
    img: "/images/bookCovers/rothfuss-cover.jpg",
    id: 3,
    likes: 65,
    year: 2011,
  },
];

const codeFiles = [
  {
    name: "PassingProps",
    lang: "jsx",
    code: `const PassingProps = () => {
  return (
    <>
      <QuotesWrapper>
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} {...quote} />
        ))}
      </QuotesWrapper>
    </>
  );
};
    
export default PassingProps;

const quotes = [
  {
    content:
      "Everything can be taken from a man but one thing: the last of the human freedoms - to choose one’s attitude in any given set of circumstances, to choose one’s own way.",
    author: "Victor E. Frankl",
    title: "Man's Search for Meaning",
    img: "/images/bookCovers/frankl-cover.jpg",
    id: 1,
    likes: 87,
    year: 1946,
  },
  {
    content:
      "A journey will have pain and failure... But if we stop, if we accept the person we are when we fail, the journey ends. That failure becomes our  destination.",
    author: "Brandon Sanderson",
    title: "Oathbringer",
    img: "/images/bookCovers/sanderson-cover.jpg",
    id: 2,
    likes: 76,
    year: 2017,
  },
  {
    content:
      "It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers.",
    author: "Patrick Rothfuss",
    title: "The Wise Man's Fear",
    img: "/images/bookCovers/rothfuss-cover.jpg",
    id: 3,
    likes: 65,
    year: 2011,
  },
];`,
  },
  {
    name: "QuoteCard",
    lang: "jsx",
    code: `const QuoteCard = ({ content, author, title, img, likes, year }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(likes);

  const handleLike = () => {
    if (isLiked) setNumLikes((numLikes) => numLikes - 1);
    else setNumLikes((numLikes) => numLikes + 1);
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

export default QuoteCard;`,
  },
];
