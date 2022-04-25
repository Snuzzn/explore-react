import React from "react";
import styled from "styled-components";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BsPlusLg } from "react-icons/bs";
import { Input, UnstyledBtn } from "../components/styles/Styles";
import { motion } from "framer-motion/dist/framer-motion";

function TodoList() {
  const [todos, setTodos] = React.useState([
    { task: "Check off this task", isCompleted: false },
    { task: "Add new task", isCompleted: false },
    { task: "Do stuff", isCompleted: false },
  ]);

  const [newTodo, setNewTodo] = React.useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { task: newTodo, isCompleted: false }]);
  };

  const completeTask = (task) => {
    const newTodos = todos.map((item) => {
      if (task === item.task) item.isCompleted = !item.isCompleted;
      return item;
    });
    setTodos(newTodos);

    // make task disappear after a delay
    setTimeout(() => {
      setTodos((todos) => todos.filter((item) => item.task !== task));
    }, 1000);
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
          <TodoWrapper layout key={todo.task}>
            <CheckboxWrapper
              onClick={() => {
                completeTask(todo.task);
              }}
            >
              {todo.isCompleted ? (
                <ImCheckboxChecked />
              ) : (
                <ImCheckboxUnchecked />
              )}
            </CheckboxWrapper>
            <TodoText isChecked={todo.isCompleted}>{todo.task}</TodoText>
          </TodoWrapper>
        ))}
      </TodoCont>
    </>
  );
}

export default TodoList;

const TodoCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoWrapper = styled(motion.div)`
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
