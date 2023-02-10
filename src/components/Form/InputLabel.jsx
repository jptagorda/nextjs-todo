import clsx from 'clsx';

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={clsx('block text-sm font-medium text-zinc-700 dark:text-zinc-300', className)}>
            {value ? value : children}
        </label>
    );
}
