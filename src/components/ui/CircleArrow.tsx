import { ArrowRight, ArrowUp, Circle } from 'lucide-react';
import composeClassName from '@/utils/compose-class-name';

interface CircleArrowProps {
	size?: number;
	arrowSize?: number;
	className?: string;
	rotate?: number;
}

export const CircleArrow = ({ size = 40, arrowSize = 16, rotate, className }: CircleArrowProps) => {
	return (
		<div
			className={composeClassName('relative inline-flex items-center justify-center', className)}
			style={{ width: size, height: size }}
		>
			<Circle size={size} strokeWidth={1} />
			<ArrowUp
				size={arrowSize}
				strokeWidth={1}
				className="absolute"
				style={{
					rotate: `${rotate}deg`,
				}}
			/>
		</div>
	);
};
