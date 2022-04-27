import React, { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);
  return (
    <ThemeContext.Provider value={{ isSoundEnabled, setIsSoundEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
