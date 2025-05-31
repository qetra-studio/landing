import { ElementType, PropsWithChildren } from 'react';

import { LayoutComponentProps, StyleProps } from '@/components/layout/types';
import composeClassName from '@/utils/compose-class-name';

export type GridProps<T extends StyleProps> = LayoutComponentProps<T>;

export default function Grid<T extends StyleProps>({
	className,
	component = 'div',
	children,
	...props
}: PropsWithChildren<GridProps<T>>) {
	const C = component as ElementType;
	return (
		<C className={composeClassName('grid', className)} {...props}>
			{children}
		</C>
	);
}
