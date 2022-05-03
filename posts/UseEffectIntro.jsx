import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import Codeblock from "../components/Codeblock";
import Console from "../components/Console";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import { Input, List, ListItem, ListNumber } from "../components/styles/Styles";
import useLogs from "../hooks/useLogs";

// === COMPONENT LIFECYCLE ===
// 1. Mount - Component is added to DOM
// 2. Update - Component rerenders due to a change in props or state
// 3. Unmount - Component is removed from DOM

// Note: useEffect runs after rendering.

function UseEffectIntro() {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");

  const { logs, updateLogs } = useLogs();

  React.useEffect(() => {
    // only happens once (commonly used to fetch data)
    updateLogs("component mounted");

    // optional clean-up function
    return () => {
      // e.g. when you go back to the home page
      updateLogs("component about to unmount");
    };
  }, []);

  React.useEffect(() => {
    updateLogs("component updated");
  }, [name]);

  React.useEffect(() => {
    // runs every time the example state is updated
    updateLogs(`Your address :  "${address}"`);
    updateLogs("component updated");
  }, [address]);

  return (
    <>
      <DemoCont>
        <Input
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Enter address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </DemoCont>
      <Console logs={logs} />
      <InfoCard>
        There are 3 main stages in a component's lifecycle:
        <List>
          <ListItem>
            <ListNumber>1.&nbsp;</ListNumber>
            <div>
              <b>Mount</b> - Component is added to DOM
            </div>
          </ListItem>
          <ListItem>
            <ListNumber>2.</ListNumber>
            <div>
              <b>Update</b> - Component rerenders due to a change in props or
              state
            </div>
          </ListItem>
          <ListItem>
            <ListNumber>3.</ListNumber>
            <div>
              <b>Unmount</b> - Component is removed from DOM{" "}
            </div>
          </ListItem>
        </List>
        <p>
          Use to console above to understand the behaviour of useEffect in these
          different stages.
        </p>
        <p>
          The useEffect hook's callback will always run <strong>after</strong>{" "}
          the first render, and <strong>after</strong> every update (unless
          dependency array is empty).
        </p>
      </InfoCard>
      <Codeblock
        codeFiles={[{ code: codeblock, name: "UseEffectDemo", lang: "jsx" }]}
      />
    </>
  );
}

export default UseEffectIntro;

const codeblock = `function UseEffectDemo() {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");

  React.useEffect(() => {
    // only happens once (commonly used to fetch data)
    console.log("component mounted");

    // optional clean-up function
    return () => {
      // e.g. when you go back to the home page
      console.log("component about to unmount");
    };
  }, []);

  React.useEffect(() => {
    console.log("component updated");
  });

  React.useEffect(() => {
    // runs every time the example1 state is updated
    console.log(\`Your address: \${address}\`);
  }, [address]);

  return (
    <>
      <Input
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Enter address..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </>
  );
}`;
