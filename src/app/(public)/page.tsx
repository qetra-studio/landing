import { Metadata } from 'next';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

export default async function HomePage() {
	return (
		<div data-theme="dark">
			<p>Some text</p>
		</div>
	);
}
