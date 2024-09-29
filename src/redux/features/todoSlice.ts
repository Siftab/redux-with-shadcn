import { createSlice,  } from "@reduxjs/toolkit";



type TTodo = {
    title:string,
    description:string,
    isCompleted?:boolean
}

type TinitialState = {
    todos: TTodo[]
}

const initialState :TinitialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{

        addTodo:(state,action)=>{
            state.todos.push({...action.payload,isCompeted:false} )
        }

    }

})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer