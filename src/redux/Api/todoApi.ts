import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const todoApi = createApi({
    reducerPath:"todoApi",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/tasks'}),
    endpoints:(builder)=>({
        getTodos: builder.query({
            query:()=>({
                url:'/tasks',
            method:"GET"
            })
        })
    })
})

export const {useGetTodosQuery}=todoApi