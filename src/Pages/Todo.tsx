import TodoContianer from '@/components/todo/TodoContianer';
import Container from '@/components/ui/Container';
import React from 'react';

const Todo = () => {
    return (
        <div>
           <Container>
           {/* <h1>this is todoPage  =///  </h1> */}
           <TodoContianer/>
           </Container>
        </div>
    );
};

export default Todo;