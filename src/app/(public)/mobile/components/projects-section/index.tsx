import Grid, { GridItem } from '@/components/layout/grid';
import Link from 'next/link';
import CaseStudiesSection from './case-studies-section';
import LastProjectSection from './last-project-section';
import ProjectsInfoSection from './info-section';

export default function AboutProjects() {
	return (
		<Grid>
			<GridItem className="relative">
				<ProjectsInfoSection />
			</GridItem>
			<GridItem className="card bg-card-dark m-5 rounded-[40px] text-white" component={Link} href="/ehr">
				<LastProjectSection />
			</GridItem>
			<GridItem
				className="card card-border m-4 flex content-between rounded-[40px] border-1 border-white bg-transparent"
				component={Link}
				href="case-studies"
			>
				<CaseStudiesSection />
			</GridItem>
		</Grid>
	);
}
