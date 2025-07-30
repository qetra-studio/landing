import Image from 'next/image';
import Grid from '@/components/layout/grid';
import { ArrowUp, CircleArrowDown } from 'lucide-react';
import { CircleArrow } from '@/components/ui/CircleArrow';

export default function BelieveSection() {
	return (
		<Grid className="relative">
			<Image src="/svg/believe-vector.svg" alt="Believe vector" priority fill className="min-w-[400px]" />
			<span className="z-10 text-center text-4xl leading-[108%] font-medium text-white">
				We believe
				<br />
				your project
				<br />
				deserves high
				<br />
				level of care
			</span>
		</Grid>
	);
}
