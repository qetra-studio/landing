import {PropsWithChildren} from "react";

interface SuccessBadgeTextProps {
    className?: string
}

export default function SuccessBadgeText({className, children}: PropsWithChildren<SuccessBadgeTextProps>) {
    return <span
        className={`${className} bg-qetra-success text-black border-qetra-success-border border-2 rounded-full text-center text-xl p-3 align-middle`}>
                {children}
            </span>
}
