import { PropsWithChildren } from 'react';

export default function SectionTitle({ children }: PropsWithChildren) {
	return <h2 className="font-semibold text-center text-6xl">{children}</h2>;
}
