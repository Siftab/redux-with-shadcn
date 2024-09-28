import React from 'react';

const TodoCard = () => {
    return (
        <div className='flex bg-yellow-200 p-3 justify-between items-center rounded-lg'>
                    <input type="checkbox" />
                    <p className='font-semibold'>todo title </p>
                    <p>time </p>
                    <p>description</p>
                    <div className='space-x-5'>
                        <button >del</button>
                        <button>edit</button>
                    </div>
                </div>
    );
};

export default TodoCard;