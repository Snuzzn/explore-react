import React from "react";

const useInput = () => {
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

export default useInput;
