import { CheckCircleIcon, PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import TextInput from '../Form/TextInput';

export default function TodoItem({ todo, setTodos }) {
    const [editing, setEditing] = useState(false);
    const [newTodo, setNewTodo] = useState(todo.value);

    const updateTodo = event => {
        event.preventDefault();

        setTodos(prevTodos => {
            const todoIndex = prevTodos.findIndex(prev => prev.id === todo.id);
            prevTodos[todoIndex].value = newTodo;
            return prevTodos;
        });

        setEditing(false);
    };

    return (
        <li key={todo.id} className="flex items-center justify-between py-6">
            {editing ? (
                <>
                    <form onSubmit={updateTodo} className="w-full">
                        <TextInput
                            id="update-todo"
                            name="update-todo"
                            value={newTodo}
                            type="update-todo"
                            className="w-full !border-indigo-500 !py-1.5"
                            autoComplete="update-todo"
                            handleChange={e => setNewTodo(e.target.value)}
                            required
                            isFocused
                            placeholder="+ Add task and Press Enter to save."
                        />
                    </form>

                    <div className="ml-24 flex items-center space-x-3">
                        <button
                            type="button"
                            onClick={updateTodo}
                            className="inline-flex items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            <CheckCircleIcon className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditing(false)}
                            className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <XCircleIcon className="h-5 w-5" />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <p className="ml-3 text-lg font-medium text-gray-900">{todo.value}</p>

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
