import Image from 'next/image';
import Grid, { GridItem } from '@/components/layout/grid';

export default function TopWelcomeRow() {
	return (
		<Grid className="min-h-[550px]">
			<GridItem>
				<Image src="/svg/logo.svg" alt="logo" width={64} height={64} priority />
			</GridItem>
			<GridItem className="absolute bottom-0 left-0 h-[28%] w-[58%] overflow-hidden">
				<span className="text-sm leading-[1.08] text-white">Morning, we are Qetra - </span>
				<br />
				<span className="text-4xl leading-[1.08] font-medium text-white">
					premium
					<br />
					software
					<br />
					development
					<br />
					for tailored
					<br />
					solutions
				</span>
			</GridItem>
			<Image
				src="/jpg/glass-bg.jpg"
				alt="Top welcome figure"
				fill
				priority
				objectFit="cover"
				className="absolute"
				style={{
					WebkitMaskImage: "url('/svg/top-figure-mask.svg')",
					maskImage: "url('/svg/top-figure-mask.svg')",
					maskSize: 'contain',
					WebkitMaskSize: 'contain',
					maskMode: 'alpha',
					maskRepeat: 'no-repeat',
				}}
			/>
		</Grid>
	);
}
