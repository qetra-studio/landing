import { GridItem } from '@/components/layout/grid';
import Stack from '@/components/layout/stack';
import LinkHover from '@/components/ui/LinkHover';
import Link from 'next/link';

export default function LastProjectCell() {
	return (
		<GridItem
			className="relative group col-span-2 size-full rounded-4xl  hover:bg-[radial-gradient(100%_100%_at_100%_-10.95%,_#C086DE_0%,_#2D296E_71.15%,_#262626_100%)] bg-dark-base-100"
			component={Link}
			href="/mamay"
		>
			<LinkHover />
			<Stack className="rounded-4xl flex-col items-start justify-between p-10">
				<span className="text-white text-3xl font-medium">
					EHR system
					<span className="badge text-purple-400 border-purple-400 ml-2">latest</span>
				</span>
				<span className="text-gray-400 text-sm">HEALTHCARE</span>
			</Stack>
		</GridItem>
	);
}
