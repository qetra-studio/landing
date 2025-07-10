import { PropsWithChildren } from 'react';

import Providers from '@/app/Providers';
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
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body
				className={`${inter.className} dark:bg-qetra-dark min-h-screen max-w-screen antialiased`}
				suppressHydrationWarning
			>
				{children}
				<Providers />
			</body>
		</html>
	);
}
