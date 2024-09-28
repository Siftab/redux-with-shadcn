import React, { ReactNode } from 'react';


type TContianerProps ={
    children:ReactNode
}

const Container  = ({children}:TContianerProps) => {
    return (
        <div className='h-screen border border-purple-600 max-w-7xl mx-auto'>
            <h1 className='text-center text-3xl font-bold'>my todos</h1>
            {children}
        </div>
    );
};

export default Container;