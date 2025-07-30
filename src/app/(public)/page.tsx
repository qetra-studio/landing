import WelcomeSection from '@/app/(public)/components/welcome-section';
import Grid, { GridItem } from '@/components/layout/grid';
import { Metadata } from 'next';
import BelieveSection from '@/app/(public)/components/believe-section';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

export default function HomePage() {
	return (
		<Grid>
			<GridItem>
				<WelcomeSection />
			</GridItem>
			<GridItem>
				<BelieveSection />
			</GridItem>
		</Grid>
	);
}
