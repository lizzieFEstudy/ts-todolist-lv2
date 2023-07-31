export type TodoModel = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type UpdateTodoModel = Pick<TodoModel, "title" | "contents">;
