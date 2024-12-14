import { PropsWithChildren } from 'react';

import clsx from 'clsx/lite';

interface QetraCardProps {
	className?: string;
}

export default async function QetraCard({ className, children }: PropsWithChildren<QetraCardProps>) {
	return <div className={clsx('bg-qetra-card p-8 rounded-md', className)}>{children}</div>;
}
