import React from "react";
import styled from "styled-components";
import Codeblock from "../components/Codeblock";
import DemoCont from "../components/DemoCont";
import InfoCard from "../components/InfoCard";
import {
  Input,
  Layout,
  List,
  ListItem,
  ListNumber,
  MiniLayout,
  TextCont,
} from "../components/styles/Styles";

// === COMPONENT LIFECYCLE ===
// 1. Mount - Component is added to DOM
// 2. Update - Component rerenders due to a change in props or state
// 3. Unmount - Component is removed from DOM

// Note: useEffect runs after rendering.

function UseEffectIntro() {
  const [example1, setExample1] = React.useState("");
  const [example2, setExample2] = React.useState("");

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
    // runs every time the example state is updated
    console.log(`example1 :  ${example1}`);
  }, [example1]);

  return (
    <>
      <DemoCont>
        <Input
          placeholder="Example 1..."
          value={example1}
          onChange={(e) => setExample1(e.target.value)}
        />
        <Input
          placeholder="Example 2..."
          value={example2}
          onChange={(e) => setExample2(e.target.value)}
        />
      </DemoCont>

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
        Open your browser's console to study the behaviour of useEffect in these
        different stages.
      </InfoCard>
      <Codeblock code={codeblock} lang="JS" />
    </>
  );
}

export default UseEffectIntro;

const codeblock = `function UseEffectDemo() {
  const [example1, setExample1] = React.useState("");
  const [example2, setExample2] = React.useState("");

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
    // runs every time the example state is updated
    console.log(\`example1: \${example1}\`);
  }, [example1]);

  return (
    <> 
      <Input
        placeholder="Example 1..."
        value={example1}
        onChange={(e) => setExample1(e.target.value)}
      />
      <Input
        placeholder="Example 2..."
        value={example2}
        onChange={(e) => setExample2(e.target.value)}
      />
    </>
  );
}`;
