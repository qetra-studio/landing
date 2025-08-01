import Grid, { GridItem } from '@/components/layout/grid';
import { Metadata } from 'next';
import AboutProjects from '@/app/(public)/components/projects-section';
import ResponsibilitiesSection from '@/app/(public)/components/responsibilities';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

export default function HomePage() {
	return (
		<Grid className="gap-10">
			{/*<GridItem>*/}
			{/*	<WelcomeSection />*/}
			{/*</GridItem>*/}
			<GridItem>
				<AboutProjects />
			</GridItem>
			<GridItem>
				<ResponsibilitiesSection />
			</GridItem>
		</Grid>
	);
}
