import Grid, { GridItem } from '@/components/layout/grid';
import Image from 'next/image';
import BackgroundSvg from '@/app/(public)/components/welcome-section/BackgroundSvg';

export default function WelcomeColumn() {
	return (
		<GridItem>
			<Grid className="grid-flow-row grid-rows-15">
				<GridItem className="relative row-span-10 flex">
					<Image src="/svg/logo.svg" alt="logo" width={64} height={64} className="z-10" />
					<div className="absolute top-0 left-0 z-0 h-full w-full">
						<BackgroundSvg />
					</div>
					<div className="z-10 content-end">
						<span className="text-sm leading-[1.08] text-white">Morning, we are Qetra - </span>
						<br />
						<span className="text-4xl leading-[1.08] font-medium text-white">
							premium
							<br />
							software
						</span>
					</div>
				</GridItem>
				<GridItem className="row-span-1">
					<span className="text-4xl leading-[1.08] font-medium text-white">development</span>
				</GridItem>
				<GridItem className="flex-end row-span-8">
					<span className="text-left text-3xl leading-[1.08] font-medium text-white">
						for tailored
						<br />
						solutions
					</span>
				</GridItem>
			</Grid>
		</GridItem>
	);
}
