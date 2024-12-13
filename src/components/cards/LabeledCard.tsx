import { PropsWithChildren, ReactNode } from 'react';

interface LabeledCardProps {
	label: ReactNode;
	slotProps?: {
		label?: {
			className?: string;
		};
	};
}

export default function LabeledCard({ label, slotProps, children }: PropsWithChildren<LabeledCardProps>) {
	return (
		<div className="flex flex-col items-center">
			<div
				className={`border-qetra-success-border border-2 rounded-full w-max p-4 uppercase text-qetra-success relative top-4 ${slotProps?.label?.className ?? ''}`}
			>
				{label}
			</div>
			<div className="bg-qetra-card p-8 rounded-md text-3xl">{children}</div>
		</div>
	);
}
