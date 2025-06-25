import Grid, { GridItem } from '@/components/layout/grid';
import LinkHover from '@/components/ui/LinkHover';
import Image from 'next/image';
import Link from 'next/link';

export default function ScheduleMeetingCell() {
	return (
		<GridItem
			href="/kalexi"
			component={Link}
			className="size-full col-span-2 rounded-4xl card md:p-4 group  hover:bg-[radial-gradient(100%_100%_at_100%_-10.95%,_#C086DE_0%,_#2D296E_71.15%,_#262626_100%)]"
		>
			<Grid className="absolute inset-0 rounded-4xl grid-flow-row grid-cols-6 items-center size-full p-4">
				<GridItem
					className="col-span-1 text-right"
					component={Image}
					src="svg/schedule-arrow.svg"
					alt="Schedule arrow"
					width={20}
					height={20}
				/>
				<GridItem className="col-span-5 uppercase text-white font-normal text-xl text-left">Schedule meeting</GridItem>
			</Grid>
		</GridItem>
	);
}
