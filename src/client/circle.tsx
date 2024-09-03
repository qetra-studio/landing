'use client'

import clsx from "clsx";

interface Props {
    visible: boolean;
}

export default function Circle({visible}: Props) {
    return <div className={clsx('rounded-full w-2 h-2 bg-white', {
        'hidden': !visible
    })} />
}
