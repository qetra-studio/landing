import { ElementType, PropsWithChildren } from 'react';

import { LayoutComponentProps, StyleProps } from '@/components/layout/types';
import composeClassName from '@/utils/compose-class-name';

export type CardBodyProps<T extends StyleProps> = LayoutComponentProps<T>;

export default function CardBody<T extends StyleProps>({
	component = 'div',
	className,
	children,
	...props
}: PropsWithChildren<CardBodyProps<T>>) {
	const C = component as ElementType;
	return (
		<C className={composeClassName('card-body', className)} {...props}>
			{children}
		</C>
	);
}
