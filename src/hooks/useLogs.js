import React from "react";

const useLogs = () => {
  const [logs, setLogs] = React.useState([]);

  const updateLogs = React.useCallback((newEntry) => {
    console.log(newEntry);
    setLogs((logs) => [...logs, newEntry]);
  }, []);

  return {
    logs,
    updateLogs,
  };
};

export default useLogs;
