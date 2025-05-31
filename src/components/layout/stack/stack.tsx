import { ElementType, PropsWithChildren } from 'react';

import { LayoutComponentProps, StyleProps } from '@/components/layout/types';
import composeClassName from '@/utils/compose-class-name';

export type StackProps<T extends StyleProps> = LayoutComponentProps<T>;

export default function Stack<T extends StyleProps>({
	component = 'div',
	className,
	children,
	...props
}: PropsWithChildren<StackProps<T>>) {
	const C = component as ElementType;
	return (
		<C className={composeClassName('flex', className)} {...props}>
			{children}
		</C>
	);
}
