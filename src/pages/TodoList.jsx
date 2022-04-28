import React from "react";
import styled from "styled-components";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BsPlusLg } from "react-icons/bs";
import { Input, UnstyledBtn } from "../components/styles/Styles";
import { motion } from "framer-motion/dist/framer-motion";
import DemoCont from "../components/DemoCont";
import Codeblock from "../components/Codeblock";
import useUiSound from "../hooks/useUiSound";
import bubbleSfx from "../sounds/bubble.mp3";

function TodoList() {
  const [todos, setTodos] = React.useState([
    { task: "Check off this task", isCompleted: false },
    { task: "Add new task", isCompleted: false },
    { task: "Look at code for this demo", isCompleted: false },
    { task: "Do stuff", isCompleted: false },
  ]);

  const [newTodo, setNewTodo] = React.useState("");
  const { play } = useUiSound(bubbleSfx, 1);

  const addNewTodo = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { task: newTodo, isCompleted: false }]);
    setNewTodo("");
  };

  const completeTask = (task) => {
    play();
    // check off todo
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
      <DemoCont style={{ minHeight: "700px" }}>
        <Form onSubmit={addNewTodo}>
          <AddTodoCont>
            <Input
              value={newTodo}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              placeholder="Add todo..."
              style={{ width: "100%" }}
            />
            <UnstyledBtn>
              <AddTodoIcon />
            </UnstyledBtn>
          </AddTodoCont>
        </Form>
        <TodoCont>
          {todos.map((todo) => (
            <TodoWrapper
              layout
              key={todo.task}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
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
      </DemoCont>

      <Codeblock lang="JS" code={code} />
    </>
  );
}

export default TodoList;

const Form = styled.form`
  align-self: stretch;
`;

const TodoCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-self: stretch;
  min-height: 300px;
`;

const TodoWrapper = styled(motion.div)`
  background-color: #282844;
  padding: 20px 30px;
  width: 100%;
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
  width: 1.5em;
  height: 1.5em;
  &:hover {
    color: #3650d2;
  }
`;

const code = `
function TodoList() {
  const [todos, setTodos] = React.useState([
    { task: "Check off this task", isCompleted: false },
    { task: "Add new task", isCompleted: false },
    { task: "Do stuff", isCompleted: false },
  ]);
  const [newTodo, setNewTodo] = React.useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { task: newTodo, isCompleted: false }]);
    setNewTodo("");
  };

  const completeTask = (task) => {
    // check off todo
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
          <TodoWrapper
            layout
            key={todo.task}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
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
`;
