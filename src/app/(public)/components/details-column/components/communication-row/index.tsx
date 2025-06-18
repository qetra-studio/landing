import ContactUsCell from '@/app/(public)/components/details-column/components/communication-row/components/contact-us-cell';
import ScheduleMeetingCell from '@/app/(public)/components/details-column/components/communication-row/components/schedule-meeting-cell';
import Grid, { GridItem } from '@/components/layout/grid';

export default function CommunicationRow() {
	return (
		<GridItem className="row-span-2">
			<Grid className="grid-flow-col grid-cols-5 gap-4">
				<ContactUsCell />
				<ScheduleMeetingCell />
			</Grid>
		</GridItem>
	);
}
