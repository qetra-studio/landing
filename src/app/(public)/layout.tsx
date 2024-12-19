import { PropsWithChildren } from 'react';

import QetraSiteHeader from '@/components/meta/QetraSiteHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: { template: '%s | Qetra', absolute: 'Qetra' },
	keywords: ['qetra', 'it', 'healthcare', 'management', 'development'],
	alternates: {
		canonical: 'https://qetra.studio/',
	},
	openGraph: {
		url: 'https://qetra.studio/',
		title: 'Qetra Studio',
		description: 'Qetra - the outstanding provider of IT services.',
		// todo
	}, // todo seo optimization
};

export default function PublicPagesLayout({ children }: PropsWithChildren) {
	return (
		<>
			<QetraSiteHeader withNavigationBar />
			<main className="w-full h-full pt-12 lg:pt-34">{children}</main>
		</>
	);
}
