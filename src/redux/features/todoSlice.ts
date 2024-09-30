import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type TTodo = {
  // taskid: string
  _id: string
  title: string;
  description: string;
  isCompleted?: boolean;
  priority:'high'|'medium'|'low'
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

      state.todos= [
        ...state.todos.filter(item=> !item.isCompleted),
        ...state.todos.filter(item=> item.isCompleted)
    ]
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (item) => item.taskid !== action.payload
      );
    },
    toogleComplete:(state,action:PayloadAction<string>)=>{

        const task = state.todos.find(item=>item.taskid === action.payload)

        task!.isCompleted = !task?.isCompleted


        state.todos= [
            ...state.todos.filter(item=> !item.isCompleted),
            ...state.todos.filter(item=> item.isCompleted)
        ]

    }
  },
});

export const { addTodo, removeTodo ,toogleComplete} = todoSlice.actions;
export default todoSlice.reducer;
