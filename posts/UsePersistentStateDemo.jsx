import Codeblock from "components/Codeblock";
import DemoCont from "components/DemoCont";
import usePersistentState from "hooks/usePersistentState";
import React, { useEffect } from "react";

const UsePersistentStateDemo = () => {
  const [numVisits, setVisits] = usePersistentState(0, "numVisits");

  useEffect(() => {
    setVisits((numVisits) => parseInt(numVisits) + 1);
  }, [setVisits]);

  return (
    <>
      <DemoCont>
        <div>
          <span>You have visited this page </span>
          <strong onClick={() => setVisits(numVisits + 1)}>{numVisits}</strong>
          <span> time{numVisits > 1 && "s"}</span>
        </div>
      </DemoCont>
      <Codeblock codeFiles={codeFiles} />
    </>
  );
};

export default UsePersistentStateDemo;

const codeFiles = [
  {
    name: "Demo",
    lang: "jsx",
    code: `const Demo = () => {
  const [numVisits, setVisits] = usePersistentState(0, "numVisits");

  useEffect(() => {
    setVisits((numVisits) => parseInt(numVisits) + 1);
  }, [setVisits]);

  return (
    <div>
      <span>You have visited this page </span>
      <strong onClick=\{() => setVisits(numVisits + 1)\}>\{numVisits\}</strong>
      <span> time{numVisits > 1 && "s"}</span>
    </div>
  );
};
export default Demo;`,
  },
  {
    name: "usePersistentState",
    lang: "jsx",
    code: `const usePersistentState = (initialVal, key) => {
  const [value, setValue] = useState(initialVal);

  useEffect(() => {
    setValue(() => {
      const storedItem = window.localStorage.getItem(key);
      return storedItem !== null ? JSON.parse(storedItem) : initialVal;
    });
  }, [initialVal, key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default usePersistentState;
`,
  },
];
