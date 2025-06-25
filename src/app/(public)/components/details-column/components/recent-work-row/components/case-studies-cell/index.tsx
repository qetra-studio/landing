import { GridItem } from '@/components/layout/grid';
import LinkHover from '@/components/ui/LinkHover';
import Link from 'next/link';

export default function CaseStudiesCell() {
	return (
		<GridItem
			className="relative col-span-1 rounded-4xl size-full hover:bg-[radial-gradient(100%_100%_at_100%_-10.95%,_#C086DE_0%,_#2D296E_71.15%,_#262626_100%)] bg-dark-base-100 group"
			component={Link}
			href="/mrlldd"
		>
			<LinkHover />
			<div className="w-full flex items-end justify-start">
				<span className="p-6 text-white font-medium md:text-2xl lg:text-3xl md:break-normal break-all">
					All case <br />
					studies
				</span>
			</div>
		</GridItem>
	);
}
