import React from "react";

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
