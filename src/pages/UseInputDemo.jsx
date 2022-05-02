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
        codeFiles={[
          { code: codeHook, name: "useInput", lang: "jsx" },
          { code: codeDemo, name: "UseInputDemo", lang: "jsx" },
        ]}
        naturalHeight={true}
      />
    </>
  );
};

export default UseInputDemo;

const codeHook = `const useInput = () => {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setInput("");
  };

  return {
    input,
    onChange: handleChange,
    reset: reset,
  };
};

export default useInput;`;

const codeDemo = `const UseInputDemo = () => {
  const name = useInput("");
  console.log(\`name: \"\${name.input}\"\`);
  return (
    <Input placeholder="Enter your name..." {...name} />
  );
};

export default UseInputDemo;`;
