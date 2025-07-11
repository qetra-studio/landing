import Grid, { GridItem } from '@/components/layout/grid';
import BottomGlassFigure from '@/app/(public)/components/welcome-section/BottomGlassFigure';
import WelcomeTopInfoRow from '@/app/(public)/components/welcome-section/top-info-row';
import WelcomeBottomInfoRow from '@/app/(public)/components/welcome-section/bottom-info-row';

export default function WelcomeColumn() {
	return (
		<Grid className="grid-flow-row grid-rows-17">
			<GridItem className="relative row-span-10">
				<WelcomeTopInfoRow />
			</GridItem>
			<GridItem className="row-span-1">
				<span className="text-4xl leading-[1.08] font-medium text-white">development</span>
			</GridItem>
			<GridItem className="relative row-span-8 justify-end">
				<WelcomeBottomInfoRow />
			</GridItem>
		</Grid>
	);
}
