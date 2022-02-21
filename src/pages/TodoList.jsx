import React from "react";
import styled from "styled-components";
import {
  MixedCheckbox,
  CustomCheckbox,
  CustomCheckboxContainer,
  CustomCheckboxInput,
} from "@reach/checkbox";
import "@reach/checkbox/styles.css";

function TodoList() {
  const [todos, setTodos] = React.useState([
    "Check off this task",
    "Add a todo",
  ]);

  const [checked, setChecked] = React.useState(true);

  return (
    <TodoCont>
      {todos.map((todo) => (
        <Todo>
          <label htmlFor="">
            <CustomCheckbox
              checked={true}
              style={{
                border: "2px solid white",
              }}
              onChange={() => setChecked(!checked)}
            />
          </label>

          {todo}
        </Todo>
      ))}
    </TodoCont>
  );
}

export default TodoList;

const TodoCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Todo = styled.div`
  background-color: #282844;
  padding: 20px 30px;
  width: 400px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;
