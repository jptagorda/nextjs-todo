import { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {

    return (
        <ul role="list" className="divide-y divide-gray-200">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
            ))}
        </ul>
    );
}
