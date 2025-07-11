import Grid, { GridItem } from '@/components/layout/grid';
import BottomGlassFigure from '@/app/(public)/components/welcome-section/BottomGlassFigure';

export default function WelcomeBottomInfoRow() {
	return (
		<Grid>
			<GridItem>
				<span className="text-left text-3xl leading-[1.08] font-medium text-white">
					for tailored
					<br />
					solutions
				</span>
			</GridItem>
			<GridItem className="pointer-events-none absolute inset-0 size-full">
				<BottomGlassFigure />
			</GridItem>
		</Grid>
	);
}
