import React from "react";
import styled, { keyframes, css } from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import { MiniLayout } from "../components/styles/Styles";

function LoadingSkeleton() {
  // PREREQ: conditional rendering

  const [comment, setComment] = React.useState(null);

  const seed = Math.floor(Math.random() * 98);

  // Note: useEffect runs after rendering.
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${seed}`
      );
      const data = await res.json();
      setComment(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <DemoCont>
        <Cont>
          {!comment ? (
            <>
              <SkeletonProfileImg />
              <TextCont>
                <SkeletonTitle />
                <SkeletonText />
              </TextCont>
            </>
          ) : (
            <>
              <ProfileImg
                src={`https://avatars.dicebear.com/api/bottts/74.svg`}
              />
              <TextCont>
                <div>{comment.title}</div>
                <CommentBody>{comment.body}</CommentBody>
              </TextCont>
            </>
          )}
        </Cont>
      </DemoCont>

      <InfoCard>
        If this loads too quickly for you to see the loading skeleton, try
        refreshing or throttling the network in your browser's DevTools.
      </InfoCard>

      <Codeblock code={codeblock} lang="JS" />
    </>
  );
}

export default LoadingSkeleton;

const loadSkeleton = keyframes`
  0% {
    background-color: #3a4249;
  }
  100% {
    background-color: #181819;
  }
`;

const Cont = styled.div`
  display: flex;
  gap: 20px;
  background-color: #202326;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 500px;
  padding: 25px;
  box-sizing: border-box;
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

const CommentBody = styled.div`
  font-size: 12pt;
  color: grey;
`;

const ProfileImg = styled.img`
  min-width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #3a4249;
`;

const SkeletonProfileImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #808080;
  animation: ${loadSkeleton} 1s linear infinite alternate;
`;

const SkeletonTitle = styled.div`
  animation: ${loadSkeleton} 1s linear infinite alternate;
  width: 270px;
  height: 40px;
`;

const SkeletonText = styled.div`
  animation: ${loadSkeleton} 1s linear infinite alternate;
  width: 350px;
  height: 110px;
`;

const codeblock = `function LoadingSkeletonDemo() {
  // PREREQ: Conditional Rendering

  const [comment, setComment] = React.useState(null);
  const seed = Math.floor(Math.random() * 98);

  // Note: useEffect runs after rendering.
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        \`https://jsonplaceholder.typicode.com/posts/\${seed}\`
      );
      const data = await res.json();
      setComment(data);
    };
    fetchData();
  }, []);

  return (
    <Cont>
      {!comment ? (
        <>
          <SkeletonProfileImg />
          <TextCont>
            <SkeletonTitle />
            <SkeletonText />
          </TextCont>
        </>
      ) : (
        <>
          <ProfileImg
            src={\`https://avatars.dicebear.com/api/bottts/74.svg\`}
          />
          <TextCont>
            <div>{comment.title}</div>
            <div>{comment.body}</div>
          </TextCont>
        </>
      )}
    </Cont>
  );
}

const loadSkeleton = keyframes\`
  0% {
    background-color: #3a4249;
  }
  100% {
    background-color: #181819;
  }
\`;

const Cont = styled.div\`
  display: flex;
  gap: 20px;
  background-color: #202326;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 500px;
  padding: 25px;
  box-sizing: border-box;
\`;

const TextCont = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
\`;

const ProfileImg = styled.img\`
  min-width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #3a4249;
\`;

const SkeletonProfileImg = styled.div\`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #808080;
  animation: \${loadSkeleton} 1s linear infinite alternate;
\`;

const SkeletonTitle = styled.div\`
  animation: \${loadSkeleton} 1s linear infinite alternate;
  width: 270px;
  height: 30px;
\`;

const SkeletonText = styled.div\`
  animation: \${loadSkeleton} 1s linear infinite alternate;
  width: 350px;
  height: 110px;
\`;
`;
