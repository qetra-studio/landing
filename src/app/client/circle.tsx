import clsx from "clsx";

interface Props {
    visible: boolean;
}

export default function Circle({visible}: Props) {
    return <div className={clsx('rounded-full w-1 h-1', {
        'bg-white': visible
    })} />
}
