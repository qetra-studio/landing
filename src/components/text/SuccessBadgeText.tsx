import { PropsWithChildren } from 'react';

import clsx from 'clsx/lite';

interface SuccessBadgeTextProps {
	className?: string;
}

export default function SuccessBadgeText({ className = '', children }: PropsWithChildren<SuccessBadgeTextProps>) {
	return (
		<span
			className={clsx(
				'bg-qetra-success text-black border-qetra-success-border border-2 rounded-full uppercase text-center text-sm lg:text-xl p-1 lg:p-3 align-middle text-nowrap',
				className
			)}
		>
			{children}
		</span>
	);
}
