import React from "react";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import { Input } from "../components/styles/Styles";
import useInput from "../hooks/useInput";

const UseInputDemo = () => {
  const exampleInput = useInput("");
  console.log(exampleInput);
  return (
    <>
      <DemoCont>
        <Input placeholder="Enter your name..." {...exampleInput} />
      </DemoCont>
      <Codeblock lang="JS" code={code} />
    </>
  );
};

export default UseInputDemo;

const code = `// useInput.js
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

export default useInput;


// useInputDemo.jsx
const UseInputDemo = () => {
  const exampleInput = useInput("");
  console.log(exampleInput);
  return (
    <Input placeholder="Enter your name..." {...exampleInput} />
  );
};
`;
