import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo() {
    const [todos, setTodos] = useState([{ id: 1, value: 'Sample todo' }]);

    return (
        <div className="space-y-10">
            <div className="rounded-lg border-b border-gray-200 bg-gray-100 px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Todo List</h3>
                    </div>
                </div>
                <TodoInput setTodos={setTodos} />
            </div>

            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}
