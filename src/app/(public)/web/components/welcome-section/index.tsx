import Grid, { GridItem } from '@/components/layout/grid';
import Stack from '@/components/layout/stack';
import Image from 'next/image';
import HowWeWorkSection from '@/app/(public)/web/components/welcome-section/how-we-work-section';

export default function WelcomeSection() {
	return (
		<Grid className="z-10 grid-flow-col grid-cols-5 grid-rows-4">
			<GridItem className="relative col-span-2 row-span-3">
				<Image
					fill
					priority
					src="/svg/web-welcome-figure.svg"
					alt="Welcome figure"
					className="z-20"
					objectFit="cover"
				/>
				<span className="z-30 text-lg leading-[1.12] font-medium text-white">Morning, we are Qetra -</span>
				<span className="z-30 text-4xl leading-[1.08] font-bold text-white">
					we deliver premium software <br />
					development for tailored <br /> solutions
				</span>
			</GridItem>
			<GridItem className="col-span-1 row-span-1"></GridItem>
			<GridItem className="z-30 col-start-5 col-end-6 row-span-4 px-2">
				<HowWeWorkSection />
			</GridItem>
		</Grid>
	);
}
