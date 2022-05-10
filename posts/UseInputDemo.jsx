import React, { useEffect } from "react";
import Codeblock from "../components/Codeblock";
import Console from "../components/Console";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import { Input, Label } from "../components/styles/Styles";
import useInput from "../hooks/useInput";
import useLogs from "../hooks/useLogs";

const UseInputDemo = () => {
  const name = useInput("");
  console.log(name);

  const { logs, updateLogs } = useLogs();
  useEffect(() => {
    updateLogs(`name: "${name.value}"`);
  }, [name.value, updateLogs]);

  return (
    <>
      <DemoCont>
        <Label>
          Name
          <Input placeholder="Enter your name..." {...name} />
        </Label>
      </DemoCont>
      <Console logs={logs} />
      <InfoCard>
        This a custom hook that allows us to succinctly capture form inputs.
        This is particuarly useful when building long forms.
      </InfoCard>
      <Codeblock
        codeFiles={[
          { code: codeDemo, name: "UseInputDemo", lang: "jsx" },
          { code: codeHook, name: "useInput", lang: "jsx" },
        ]}
        naturalHeight={true}
      />
    </>
  );
};

export default UseInputDemo;

const codeHook = `const useInput = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    reset: reset,
  };
};

export default useInput;`;

const codeDemo = `const UseInputDemo = () => {
  const name = useInput("");
  console.log(name);

  return (
    <Input placeholder="Enter your name..." {...name} />
  );
};

export default UseInputDemo;`;
