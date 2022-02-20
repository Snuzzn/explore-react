import React from "react";
import { MiniLayout } from "../../components/styles/Styles";
import styled from "styled-components";
import Prisms from "./Prisms";
import DependentCounter from "./DependentCounter";
import DemoCont from "../../components/DemoCont";
import Codeblock from "../../components/Codeblock";
import InfoCard from "../../components/InfoCard";

function PassingState() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <DemoCont>
        <Title>Parent Component</Title>
        <Cont>
          <div>
            <Title>Child Component</Title>
            <Box>
              <DependentCounter count={count} setCount={setCount} />
            </Box>
          </div>
          <div>
            <Title>Child Component</Title>
            <Box>
              <Prisms count={count} />
            </Box>
          </div>
        </Cont>
      </DemoCont>
      <InfoCard>
        You can pass state between sibilings by creating the state inside the
        parent to begin with, then passing the state to the children so they can
        both access it.
      </InfoCard>
      <Codeblock code={codeblock} lang="JS" />
    </>
  );
}

export default PassingState;

const Box = styled.div`
  width: 400px;
  height: 400px;
  background-color: #2a2e33;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Cont = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  outline: 2px solid #262930;
  border-radius: 5px;
  /* background-color: #364dbd; */
`;

const Title = styled.p`
  text-align: center;
`;

const codeblock = `function PassingStateDemo() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Counter count={count} setCount={setCount} />
      <Prisms count={count} />
    </>
  );
}

function Counter({ count, setCount }) {
  const decrementCount = () => {
    if (count - 1 >= 0) setCount(count - 1);
  };
  return (
    <div>
      <MinusIcon onClick={decrementCount} />
      {count}
      <PlusIcon
        onClick={() => {
          if (count < 10) setCount(count + 1);
        }}
      />
    </div>
  );
}


function Prisms({ count }) {
  return (
    <>
      {[...Array(count)].map((val, ind) => (
        <img src={prism} alt="prism" key={ind} />
      ))}
    </>
  );
}
`;
