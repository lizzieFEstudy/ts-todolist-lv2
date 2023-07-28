import React, { useState } from "react";
import Input from "../components/Input";
import TodoList from "../components/TodoList";
import { TodoModel } from "../model/todo";

const Todo: React.FC = () => {
  let [todos, setTodos] = useState<TodoModel[]>([]);

  return (
    <>
      <Input todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
      <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
    </>
  );
};

export default Todo;
