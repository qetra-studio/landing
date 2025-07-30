import Grid, { GridItem } from '@/components/layout/grid';
import Image from 'next/image';

export default function BottomWelcomeRow() {
	return (
		<Grid className="min-h-[300px] grid-flow-col grid-rows-6">
			<Image
				src="/jpg/glass-bg.jpg"
				alt="Bottom welcome figure"
				fill
				priority
				objectFit="cover"
				className="absolute"
				style={{
					WebkitMaskImage: "url('/svg/bottom-figure-mask.svg')",
					maskImage: "url('/svg/bottom-figure-mask.svg')",
					maskSize: 'contain',
					WebkitMaskSize: 'contain',
					maskMode: 'alpha',
					maskRepeat: 'no-repeat',
				}}
			/>
		</Grid>
	);
}

{
	/*<GridItem className="row-span-3">*/
}
{
	/*	<Grid className="grid-flow-col grid-cols-6">*/
}
{
	/*		<GridItem className="col-start-4 col-end-7">*/
}
{
	/*			<span className="text-4xl leading-[1.08] text-white">*/
}
{
	/*				for tailored*/
}
{
	/*				<br />*/
}
{
	/*				solutions*/
}
{
	/*			</span>*/
}
{
	/*		</GridItem>*/
}
{
	/*		<GridItem className="col-start-4 col-end-7">*/
}
{
	/*			<div className="badge badge-outline badge-lg">*/
}
{
	/*				<span className="text-xl text-white">Let&#39;s talk!</span>*/
}
{
	/*			</div>*/
}
{
	/*		</GridItem>*/
}
{
	/*	</Grid>*/
}
{
	/*</GridItem>*/
}
