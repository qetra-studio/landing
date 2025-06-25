import CaseStudiesCell from '@/app/(public)/components/details-column/components/recent-work-row/components/case-studies-cell';
import LastProjectCell from '@/app/(public)/components/details-column/components/recent-work-row/components/last-project-cell';
import Grid, { GridItem } from '@/components/layout/grid';

export default function RecentWorkRow() {
	return (
		<GridItem className="row-span-3">
			<Grid className="grid-flow-row grid-cols-3 gap-4 justify-items-stretch">
				<LastProjectCell />
				<CaseStudiesCell />
			</Grid>
		</GridItem>
	);
}
