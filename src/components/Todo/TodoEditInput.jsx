import { useState } from 'react';
import TextInput from '../Form/TextInput';

export default function TodoEditInput({ todo, setTodos, setEditingTodo }) {
    const [newTodo, setNewTodo] = useState(todo.value);

    const updateTodo = event => {
        event.preventDefault();

        setTodos(prevTodos => {
            const todoIndex = prevTodos.findIndex(prev => prev.id === todo.id);
            prevTodos[todoIndex].value = newTodo;
            return prevTodos;
        });
        setEditingTodo(null);
    };
    return (
        <form onSubmit={updateTodo} className="w-full">
            <TextInput
                id="update-todo"
                name="update-todo"
                value={newTodo}
                type="update-todo"
                className="!py-1/2 w-full !border-indigo-500"
                autoComplete="update-todo"
                handleChange={e => setNewTodo(e.target.value)}
                required
                isFocused
                placeholder="+ Add task and Press Enter to save."
            />
        </form>
    );
}
