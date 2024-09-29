import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice'
import { todoApi } from "./Api/todoApi";




export const reduxStore = configureStore({
    reducer:{
        [todoApi.reducerPath]:todoApi.reducer
        ,
        todo: todoReducer

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(todoApi.middleware)
})



// tyeps
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch


