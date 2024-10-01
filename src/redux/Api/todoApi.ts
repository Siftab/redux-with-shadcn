import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const todoApi = createApi({
    reducerPath:"todoApi",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    tagTypes:['todo'],
    endpoints:(builder)=>({
        getTodos: builder.query({
            
            query:(priority)=>{
                console.log( 'from redux',priority)
                
                return {
                    url:`/tasks/?priority=`,
            method:"GET"
                }
            // ,params:{priority}
            },
        
            providesTags:['todo']
        })
        ,addTodo: builder.mutation({
            query:(data)=>({
                url:'/task',
            method:"POST",
            body: data
            }),
            invalidatesTags:['todo']
        })
    })
})

export const {useGetTodosQuery,useAddTodoMutation}=todoApi