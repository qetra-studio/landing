import { ElementType, PropsWithChildren } from 'react';

import { LayoutComponentProps, StyleProps } from '@/components/layout/types';
import composeClassName from '@/utils/compose-class-name';

export type GridItemProps<T extends StyleProps> = LayoutComponentProps<T>;

export default function GridItem<T extends StyleProps>({
	component = 'div',
	className,
	children,
	...props
}: PropsWithChildren<GridItemProps<T>>) {
	const C = component as ElementType;
	return (
		<C className={composeClassName('grid', className)} {...props}>
			{children}
		</C>
	);
}
