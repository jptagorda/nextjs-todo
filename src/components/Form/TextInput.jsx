import clsx from 'clsx';
import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange, fullWidth = false, placeholder = '' },
    ref,
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                className={clsx(
                    'block rounded-md border py-2 px-4 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:focus:border-zinc-600 dark:focus:ring-zinc-600',
                    fullWidth && 'w-full',
                    className,
                )}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={e => handleChange(e)}
            />
        </div>
    );
});
