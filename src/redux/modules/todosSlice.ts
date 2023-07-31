import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoModel, UpdateTodoModel } from "../../model/todo";
import { v4 as uuid } from "uuid";

export interface TodosState {
  todos: TodoModel[];
  todo:
    | TodoModel
    | {
        [key: string]: undefined | null;
      };
}

const initialState: TodosState = {
  todos: [
    {
      id: uuid(),
      title: "리액트 공부하기✏️",
      contents: "리액트를 공부해봅시다.",
      isDone: false
    },
    {
      id: uuid(),
      title: "폰 게임 30분만 하기🎲",
      contents: "하루 30분 초과 금지",
      isDone: true
    }
  ],
  todo: {}
};

const todosSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<UpdateTodoModel>) => {
      state.todos.push({
        id: uuid(),
        title: action.payload.title,
        contents: action.payload.contents,
        isDone: false
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleStatusTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    }
  }
});

// export action creator
export const { addTodo, deleteTodo, toggleStatusTodo } = todosSlice.actions;

// export default reducer
export default todosSlice.reducer;
