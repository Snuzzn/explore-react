import React from "react";
import styled from "styled-components";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BsPlusLg } from "react-icons/bs";
import { Input, UnstyledBtn } from "../components/styles/Styles";

function TodoList() {
  const [todos, setTodos] = React.useState([
    "Check off this task",
    "Add a todo",
    "Do stuff",
  ]);

  const [newTodo, setNewTodo] = React.useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo) => {
    // delay removal todo from list to show strikethrough momentarily
    // setTimeout(() => {
    //   setTodos((todos) => todos.filter((item) => item !== todo));
    // }, 1000);
    setTodos((todos) => todos.filter((item) => item !== todo));
  };

  return (
    <>
      <form onSubmit={addNewTodo}>
        <AddTodoCont>
          <Input
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            placeholder="Add todo..."
            style={{ width: "400px" }}
          />
          <UnstyledBtn>
            <AddTodoIcon />
          </UnstyledBtn>
        </AddTodoCont>
      </form>

      <TodoCont>
        {todos.map((todo) => (
          <Todo todo={todo} removeTodo={removeTodo} />
        ))}
      </TodoCont>
    </>
  );
}

export default TodoList;

function Todo({ todo, removeTodo }) {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <TodoWrapper>
      <CheckboxWrapper
        onClick={() => {
          setIsChecked(!isChecked);
          // if (!isChecked) removeTodo(todo);
        }}
      >
        {isChecked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </CheckboxWrapper>
      <TodoText isChecked={isChecked}>{todo}</TodoText>
    </TodoWrapper>
  );
}

const TodoCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoWrapper = styled.div`
  background-color: #282844;
  padding: 20px 30px;
  width: 400px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CheckboxWrapper = styled.div`
  color: #44446a;
  display: flex;
  align-items: center;
`;

const TodoText = styled.div`
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "")};
`;

const AddTodoCont = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const AddTodoIcon = styled(BsPlusLg)`
  color: #5773ff;
  width: 2em;
  height: 2em;
  &:hover {
    color: #3650d2;
  }
`;
