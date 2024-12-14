import { PropsWithChildren, ReactNode } from 'react';

import Providers from '@/app/Providers';
import QetraSiteFooter from '@/components/meta/QetraSiteFooter';
import env from '@/environment';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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

export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased w-full h-screen`}>
				{children}
				<Providers />
			</body>
		</html>
	);
}
