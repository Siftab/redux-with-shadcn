import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice'




export const reduxStore = configureStore({
    reducer:{
        todo: todoReducer

    }
})



// tyeps
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch


