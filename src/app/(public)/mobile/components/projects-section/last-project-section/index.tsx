import Grid, { GridItem } from '@/components/layout/grid';
import { CircleArrow } from '@/components/ui/CircleArrow';
import Stack from '@/components/layout/stack';

export default function LastProjectSection() {
	return (
		<Grid className="m-4 grid-flow-row grid-rows-5">
			<div className="badge badge-lg badge-outline absolute top-[-10] rounded-[40px]">Recent</div>
			<GridItem className="row-span-2 justify-end">
				<CircleArrow rotate={45} arrowSize={30} size={40} />
			</GridItem>
			<GridItem className="row-span-3 ml-8 leading-[1.12]">
				<span className="text-lg font-semibold">Compass EHR</span>
				<br />
				<span>
					Streamlined care for clinics with complex <br />
					needs.
				</span>
				<br />
				<Stack className="gap-2">
					<div className="badge badge-outline">healthcare</div>
					<div className="badge badge-outline">usa</div>
				</Stack>
			</GridItem>
		</Grid>
	);
}
