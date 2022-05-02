import React, { useEffect } from "react";
import Codeblock from "../components/Codeblock";
import Console from "../components/Console";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import { Input } from "../components/styles/Styles";
import useInput from "../hooks/useInput";
import useLogs from "../hooks/useLogs";

const UseInputDemo = () => {
  const name = useInput("");
  console.log(name);

  const { logs, updateLogs } = useLogs();
  useEffect(() => {
    // console.log(name.input);
    updateLogs(`name: "${name.input}"`);
  }, [name.input, updateLogs]);

  return (
    <>
      <DemoCont>
        <Input placeholder="Enter your name..." {...name} />
      </DemoCont>
      <Console logs={logs} />
      <InfoCard>
        This a custom hook that allows us to succinctly capture form inputs.
        This is particuarly useful when building long forms.
      </InfoCard>
      <Codeblock
        codeFiles={[{ code: code, name: "useInputDemo", lang: "jsx" }]}
      />
    </>
  );
};

export default UseInputDemo;

const code = `// useInputDemo.jsx
const UseInputDemo = () => {
  const name = useInput("");
  console.log(\`name: \"\${name.input}\"\`);
  return (
    <Input placeholder="Enter your name..." {...name} />
  );
};

// useInput.js
const useInput = () => {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return {
    input,
    onChange: handleChange,
  };
};

export default useInput;`;
