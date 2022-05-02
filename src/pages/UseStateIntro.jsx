import React, { useState } from "react";
import { MiniLayout } from "../components/styles/Styles";
import Counter from "../components/Counter";
import InfoCard from "../components/InfoCard";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import Console from "../components/Console";
import useLogs from "../hooks/useLogs";

function UseStateIntro() {
  const { logs, updateLogs } = useLogs();

  return (
    <>
      <DemoCont>
        <Counter updateLogs={updateLogs} />
      </DemoCont>
      <Console logs={logs} />
      <InfoCard>
        Every time a state changes, the component in which the state is located,
        as well as all its children components are re-rendered.
      </InfoCard>
      <Codeblock
        codeFiles={[
          { code: codeblock, name: "useState.jsx" },
          { code: "console.log(hello world!)", name: "new_thing.jsx" },
        ]}
        lang="JS"
      />
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
  console.log(\`New count: \${count}\`)

  const decrementCount = () => {
    if (count > 0) setCount(count => count - 1);
  };

  return (
    <>
      <MinusBtn  onClick={decrementCount} />
      <div>{count}</div>
      <PlusBtn onClick={() => {
          setCount(count => count + 1);
        }}
      />
    </>
  );
};`;
