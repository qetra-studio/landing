import Image from 'next/image';
import TopGlassFigure from '@/app/(public)/components/welcome-section/TopGlassFigure';
import Grid, { GridItem } from '@/components/layout/grid';

export default function WelcomeTopInfoRow() {
	return (
		<Grid className="aspect-[1/1.2]">
			<GridItem>
				<Image src="/svg/logo.svg" alt="logo" width={64} height={64} priority />
			</GridItem>
			<GridItem className="pointer-events-none absolute inset-0 size-full">
				<TopGlassFigure />
			</GridItem>
			<GridItem className="content-end">
				<span className="text-sm leading-[1.08] text-white">Morning, we are Qetra - </span>
				<br />
				<span className="text-4xl leading-[1.08] font-medium text-white">
					premium
					<br />
					software
				</span>
			</GridItem>
		</Grid>
	);
}
