import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type TTodo = {
  taskid: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TinitialState = {
  todos: TTodo[];
};

const initialState: TinitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({
        ...action.payload,
        isCompleted: false,
        taskid: uuidv4(),
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (item) => item.taskid !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
