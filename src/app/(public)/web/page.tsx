import Grid, { GridItem } from '@/components/layout/grid';
import { Metadata } from 'next';
import BackgroundImage from '@/app/(public)/web/components/BackgroundImage';
import NavBarSection from '@/app/(public)/web/components/nav-bar-section';
import WelcomeSection from '@/app/(public)/web/components/welcome-section';
import ResponsibilitiesAndProjectsSection from '@/app/(public)/web/components/responsibilities-and-projects-section';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

export default function HomePage() {
	return (
		<Grid className="size-full grid-flow-col grid-rows-10 gap-8">
			<BackgroundImage />
			<GridItem className="row-span-1">
				<NavBarSection />
			</GridItem>
			<GridItem className="row-span-3">
				<WelcomeSection />
			</GridItem>
			<GridItem className="row-span-6">
				<ResponsibilitiesAndProjectsSection />
			</GridItem>
		</Grid>
	);
}
