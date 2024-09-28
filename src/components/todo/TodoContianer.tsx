import React from 'react';
import TodoCard from './TodoCard';

const TodoContianer = () => {
    return (
        <div className=''>
            <div>
                <button>Add to do </button>
                <button>Filter</button>
            </div>
            <div className=' bg-green-400 p-5 rounded-xl space-y-3 mx-3'>
                {/* <div className='text-center font-bold bg-white p-5 rounded-lg'>there is no task pending </div> */}
            </div>
        </div>
    );
};

export default TodoContianer;