import React, { useEffect, useState } from "react";

const usePersistentState = (initialVal, key) => {
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
