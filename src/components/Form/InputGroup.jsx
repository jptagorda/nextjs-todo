import clsx from 'clsx';

export default function InputGroup({ className, children }) {
    return <div className={clsx('space-y-2', className)}>{children}</div>;
}
