import CommunicationRow from '@/app/(public)/components/details-column/components/communication-row';
import RecentWorkRow from '@/app/(public)/components/details-column/components/recent-work-row';
import ServicesRow from '@/app/(public)/components/details-column/components/services-row';
import Grid from '@/components/layout/grid';

export default function DetailsColumn() {
	return (
		<Grid className="grid-flow-col grid-rows-9 gap-4 ">
			<ServicesRow />
			<RecentWorkRow />
			<CommunicationRow />
		</Grid>
	);
}
