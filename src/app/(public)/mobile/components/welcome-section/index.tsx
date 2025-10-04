import Grid, { GridItem } from '@/components/layout/grid';
import TopWelcomeRow from './top-welcome-row';
import BottomWelcomeRow from './bottom-welcome-row';

export default function WelcomeColumn() {
	return (
		<Grid className="gap-4">
			<GridItem className="relative aspect-auto">
				<TopWelcomeRow />
			</GridItem>
			<GridItem className="relative">
				<BottomWelcomeRow />
			</GridItem>
		</Grid>
	);
}
