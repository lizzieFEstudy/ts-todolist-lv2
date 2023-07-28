import React, { useState } from "react";
import Input from "../components/Input";
import { TodoModel } from "../model/todo";

const Todo: React.FC = () => {
  let [todos, setTodos] = useState<TodoModel[]>([]);

  return (
    <>
      <Input todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Todo;
