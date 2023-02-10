import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import TodoEditInput from './TodoEditInput';

export default function TodoItem({ todo, setTodos }) {
    const [editing, setEditing] = useState(false);

    return (
        <li key={todo.id} className="flex items-center justify-between py-6">
            {editing ? (
                <>
                    <TodoEditInput todo={todo} setTodos={setTodos} setEditingTodo={setEditing} />
                    <button
                        type="button"
                        onClick={() => setEditing(false)}
                        className="ml-24 inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <XCircleIcon className="h-5 w-5" />
                    </button>
                </>
            ) : (
                <>
                    <p className="ml-3 text-sm font-medium text-gray-900">{todo.value}</p>

                    <div className="space-x-3">
                        <button
                            type="button"
                            onClick={() => setEditing(true)}
                            className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <PencilSquareIcon className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setTodos(prev => prev.filter(model => model.id != todo.id))}
                            className="inline-flex items-center rounded-full border border-transparent bg-red-600 p-2 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            <XCircleIcon className="h-5 w-5" />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}
