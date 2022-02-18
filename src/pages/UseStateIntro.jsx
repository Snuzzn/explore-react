import React from "react";
import { MiniLayout } from "../components/styles/Styles";
import Counter from "../components/Counter";
import InfoCard from "../components/InfoCard";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";

function UseStateIntro() {
  return (
    <>
      <DemoCont>
        <Counter />
      </DemoCont>
      <InfoCard>
        Every time a state changes, the component in which the state is located,
        as well as all its children components are re-rendered.
      </InfoCard>
      <Codeblock code={codeblock} />
      <InfoCard>
        If you need the previous value to update the state, you should pass a
        function that receives the previous value and returns the new value.
      </InfoCard>
    </>
  );
}

export default UseStateIntro;

const codeblock = `function CounterDemo() {
  const [count, setCount] = React.useState(0);

  const decrementCount = () => {
    if (count > 0) setCount(count => count - 1);
  };

  return (
    <>
      <MinusIcon  onClick={decrementCount} />
      <div>{count}</div>
      <PlusIcon onClick={() => {
          setCount(count => count + 1);
        }}
      />
    </>
  );
};`;
