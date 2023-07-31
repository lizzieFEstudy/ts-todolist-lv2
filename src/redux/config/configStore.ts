import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";

// 개발환경"development"일때만 devTools가 활성화
const isDev = process.env.NODE_ENV === "development";

export const store = configureStore({
  reducer: {
    todos
  },
  devTools: isDev
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
