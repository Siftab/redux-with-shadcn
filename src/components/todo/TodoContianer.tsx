import React from 'react';
import TodoCard from './TodoCard';
import AddToDo from './AddToDo';
import TodoFilter from './TodoFilter';

const TodoContianer = () => {
    return (
        <div className=''>
            <div className=' flex justify-between  px-8  border '>
                <AddToDo/>
                <TodoFilter/>   
            </div>
            <div className=' bg-primary-gradient p-5 rounded-xl space-y-3 mx-3'>
                {/* <div className='text-center font-bold bg-white p-5 rounded-lg'>there is no task pending </div> */}
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
            </div>
        </div>
    );
};

export default TodoContianer;