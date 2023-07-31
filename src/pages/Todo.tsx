import React from "react";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

const Todo: React.FC = () => {
  return (
    <>
      <Input />

      <TodoList listIsDone={false} />
      <TodoList listIsDone={true} />
    </>
  );
};

export default Todo;
