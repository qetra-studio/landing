import WelcomeSection from '@/app/(public)/components/welcome-section';
import Grid, { GridItem } from '@/components/layout/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

export default function HomePage() {
	return (
		<Grid>
			<GridItem>
				<WelcomeSection />
			</GridItem>
		</Grid>
	);
}
