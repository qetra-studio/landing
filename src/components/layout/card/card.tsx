import { ElementType, PropsWithChildren } from 'react';

import { LayoutComponentProps, StyleProps } from '@/components/layout/types';
import composeClassName from '@/utils/compose-class-name';

export type CardProps<T extends StyleProps> = LayoutComponentProps<T>;

export default function Card<T extends StyleProps>({
	component = 'div',
	className,
	children,
	...props
}: PropsWithChildren<CardProps<T>>) {
	const C = component as ElementType;
	return (
		<C className={composeClassName('card', className)} {...props}>
			{children}
		</C>
	);
}
