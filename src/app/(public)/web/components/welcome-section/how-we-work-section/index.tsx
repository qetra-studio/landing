import Grid, { GridItem } from '@/components/layout/grid';
import { CircleArrow } from '@/components/ui/CircleArrow';
import Stack from '@/components/layout/stack';

export default function HowWeWorkSection() {
	return (
		<Grid className="card grid-cols-2 rounded-[41px] bg-[rgba(255,255,255,0.13)] p-10">
			<GridItem className="col-span-2 row-span-1">
				<Stack className="justify-between">
					<span className="text-2xl font-bold text-white">
						How we <br />
						work?
					</span>
					<CircleArrow rotate={45} size={55} arrowSize={45} className="bg-card-dark rounded-[41px]" />
				</Stack>
			</GridItem>
			<GridItem className="row-span-1">
				<span>fdsf</span>
			</GridItem>
		</Grid>
	);
}
