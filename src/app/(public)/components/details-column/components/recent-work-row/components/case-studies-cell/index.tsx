import Grid, { GridItem } from '@/components/layout/grid';
import Link from 'next/link';

export default function CaseStudiesCell() {
	return (
		<GridItem
			className="col-span-1 rounded-4xl size-full lg:justify-end items-center lg:items-start hover:bg-transparent bg-dark-base-100 group"
			component={Link}
			href="/mrlldd"
		>
			<Grid className="grid grid-flow-row grid-rows-3 size-full">
				<div className="row-span-1 size-full grid grid-flow-col grid-cols-3 relative">
					<div className="grid grid-flow-row grid-rows-2 group-hover:bg-darkbg absolute inset-0 z-10">
						<div className="row-span-1 group-hover:size-full group-hover:rounded-tr-4xl grid grid-cols-3">
							<div className="col-span-2 group-hover:rounded-tr-4xl group-hover:bg-dark-base-100 size-full group-hover:rounded-tl-4xl" />
						</div>
						<div className="row-span-1 group-hover:bg-dark-base-100 group-hover:size-full group-hover:rounded-tr-4xl" />
					</div>
					<div className="col-span-2" />
					<div className="col-span-1 bg-darkbg rounded-bl-4xl z-20 invisible group-hover:visible size-full pl-2 pb-2">
						<span className="p-4 bg-purple-300 size-full rounded-4xl flex items-center justify-center">шо</span>
					</div>
				</div>
				<div className="row-span-2 rounded-bl-4xl rounded-br-4xl rounded-tr-4xl relative group-hover:bg-dark-base-100">
					<div className="break-all size-full col-span-3 md:break-normal text-3xl md:text-2xl lg:text-3xl text-white font-medium flex items-end justify-start">
						<span className="p-6">
							All case <br />
							studies
						</span>
					</div>
				</div>
			</Grid>
		</GridItem>
	);
}
