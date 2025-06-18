import DetailsColumn from '@/app/(public)/components/details-column';
import WelcomeColumn from '@/app/(public)/components/welcome-column';
import Grid from '@/components/layout/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

export default function HomePage() {
	return (
		<Grid className="grid-cols-1 md:grid-cols-2 gap-4 h-full">
			<WelcomeColumn />
			<DetailsColumn />
		</Grid>
	);
}
