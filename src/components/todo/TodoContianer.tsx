import React from "react";
import TodoCard from "./TodoCard";
import AddToDo from "./AddToDo";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "@/redux/Hook";
import { useGetTodosQuery } from "@/redux/Api/todoApi";
import { TTodo } from "@/redux/features/todoSlice";
import { setPriority } from "os";

const TodoContianer = () => {
  // const { todos } = useAppSelector((state) => state.todo);
  // console.log("this is con", typeof todos.length);
  const [priority, setPriority] = React.useState('')


  const {data:todos,isError,isLoading} = useGetTodosQuery(priority)
  console.log( "this  form todos==>",todos,priority)


  if (isLoading)
    return <div>loading</div>

  return (
    <div className="">
      <div className=" flex justify-between  px-2  border ">
        <AddToDo />
        <TodoFilter props={{priority ,setPriority}} />
      </div>
      <div className=" bg-primary-gradient p-5 rounded-xl  mx-3">
        {/* <div className='text-center font-bold bg-white p-5 rounded-lg'>there is no task pending </div> */}
        <div className="bg-white bg-opacity-70 h-full space-y-3 p-10 rounded-md">
          {todos?.data?.length ? (
            todos?.data?.map((item:TTodo, idx:number) => <TodoCard key={idx} item={item}  />)
          ) : (
            <div className="text-center font-bold bg-teal-500 p-5 rounded-lg">
              there is no task pending
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContianer;
