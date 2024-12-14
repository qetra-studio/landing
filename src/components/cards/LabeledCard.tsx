import { PropsWithChildren, ReactNode } from 'react';

import QetraCard from '@/components/cards/index';
import clsx from 'clsx/lite';

interface LabeledCardProps {
	label: ReactNode;
	slotProps?: {
		label?: {
			className?: string;
		};
		card?: {
			className?: string;
		};
	};
}

export default function LabeledCard({ label, slotProps, children }: PropsWithChildren<LabeledCardProps>) {
	return (
		<div className="flex flex-col items-center">
			<div
				className={clsx(
					'border-qetra-success-border border-2 rounded-full w-max p-4 uppercase text-qetra-success relative top-4',
					slotProps?.label?.className
				)}
			>
				{label}
			</div>
			<QetraCard className={slotProps?.card?.className}>{children}</QetraCard>
		</div>
	);
}
