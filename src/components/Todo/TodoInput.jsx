import { useState } from 'react';
import InputGroup from '../Form/InputGroup';
import TextInput from '../Form/TextInput';

export default function TodoInput({ setTodos }) {
    const [newTodo, setNewTodo] = useState('');

    const createTodo = event => {
        event.preventDefault();
        setTodos(prev => [...prev, { id: prev.length + 1, value: newTodo }]);
        setNewTodo('');
    };
    return (
        <InputGroup className="mt-5">
            <form onSubmit={createTodo}>
                <TextInput
                    id="task"
                    name="task"
                    value={newTodo}
                    fullWidth
                    type="task"
                    className="block w-full"
                    autoComplete="task"
                    handleChange={e => setNewTodo(e.target.value)}
                    required
                    placeholder="+ Add task and Press Enter to save."
                />
            </form>
        </InputGroup>
    );
}
