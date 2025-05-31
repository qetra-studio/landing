import { ElementType, PropsWithChildren } from 'react';

export interface StyleProps {
	className?: string;
}

export type LayoutComponentProps<T extends StyleProps> = T & {
	className?: string;
	component?: ElementType<PropsWithChildren<T>>;
};
