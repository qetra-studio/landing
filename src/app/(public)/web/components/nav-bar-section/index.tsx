import { GridItem } from '@/components/layout/grid';
import Stack from '@/components/layout/stack';
import Image from 'next/image';
import Link from 'next/link';
import { InstagramIcon, LinkedinIcon } from 'lucide-react';

export default function NavBarSection() {
	return (
		<Stack className="justify-between">
			<Image
				alt="Web logo"
				src="/svg/web-logo.svg"
				width={69}
				height={69}
				priority
				className="card bg-card-dark rounded-[21px]"
			/>
			<Stack className="z-10 gap-4 px-10">
				<GridItem
					component={Link}
					href=""
					className="card size-[69px] items-center justify-center rounded-[61px] bg-[#161616]"
				>
					<InstagramIcon size={30} />
				</GridItem>
				<GridItem
					component={Link}
					href=""
					className="card size-[69px] items-center justify-center rounded-[61px] bg-[#161616]"
				>
					<LinkedinIcon size={30} />
				</GridItem>
			</Stack>
		</Stack>
	);
}
