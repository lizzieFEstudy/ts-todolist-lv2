import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodoModel, UpdateTodoModel } from "../../model/todo";
import axios from "axios";

export interface TodosState {
  todos: TodoModel[];
  isLoading: boolean;
  isError: boolean;
  error: any;
}

const initialState: TodosState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null
};

// const Axios = axios.create({
//     baseURL: `${process.env.REACT_APP_SERVER_URL}/todos`
//   });

export const __getTodos = createAsyncThunk("getTodos", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/todos`
    );
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async ({ title, contents }: UpdateTodoModel, thunkAPI) => {
    try {
      const newTodo = {
        title: title,
        contents: contents,
        isDone: false
      };

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/todos`,
        newTodo
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload: string, thunkAPI) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/todos/${payload}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __toggleStatusTodo = createAsyncThunk(
  "todos/toggleStatusTodo",
  async ({ id, isDone }: { id: string; isDone: boolean }, thunkAPI) => {
    try {
      await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, {
        isDone: !isDone
      });
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(__getTodos.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    });
    builder.addCase(__getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });

    builder.addCase(__addTodo.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos.push(action.payload);
    });
    builder.addCase(__addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });

    builder.addCase(__deleteTodo.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    });
    builder.addCase(__deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });

    builder.addCase(__toggleStatusTodo.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__toggleStatusTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = state.todos.map(todo => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    });
    builder.addCase(__toggleStatusTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  }
});

// export default reducer
export default todosSlice.reducer;
