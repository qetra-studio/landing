import Grid, { GridItem } from '@/components/layout/grid';
import Image from 'next/image';
import InfoSection from './info-section';

export default function ResponsibilitiesSection() {
	return (
		<Grid className="gap-5">
			<GridItem className="relative">
				<Image
					src="/svg/responsibilities-vector.svg"
					alt="Responsibilities vector"
					priority
					fill
					className="absolute h-full w-full"
				/>
				<span className="z-10 justify-center p-4 text-center text-4xl font-medium text-white">
					How we <br />
					deliver that <br />
					level of care
				</span>
			</GridItem>
			<GridItem>
				<InfoSection />
			</GridItem>
		</Grid>
	);
}
