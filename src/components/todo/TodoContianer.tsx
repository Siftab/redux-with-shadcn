import React from "react";
import TodoCard from "./TodoCard";
import AddToDo from "./AddToDo";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "@/redux/Hook";

const TodoContianer = () => {
  const { todos } = useAppSelector((state) => state.todo);
  console.log("this is con", typeof todos.length);

  return (
    <div className="">
      <div className=" flex justify-between  px-2  border ">
        <AddToDo />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient p-5 rounded-xl  mx-3">
        {/* <div className='text-center font-bold bg-white p-5 rounded-lg'>there is no task pending </div> */}
        <div className="bg-white h-full space-y-3 p-10 rounded-md">
          {todos.length ? (
            todos.map((item, idx) => <TodoCard key={idx} item={item} />)
          ) : (
            <div className="text-center font-bold bg-white p-5 rounded-lg">
              there is no task pending
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContianer;
